import { test } from "@playwright/test";
import { LandingPage } from "../../../pages/general/landing-page";
import { ProductDetailPage } from "../../../pages/general/product-detail-page";
import { SearchResultPage } from "../../../pages/general/search-result-page";
import { TravellerDetailPage } from "../../../pages/general/traveller-detail-page";
import { PaymentPage } from "../../../pages/general/payment-page";
import { DateCalc } from "../../../helper/utilities";
import { TestDataInStaging, TestDataInProduction } from "../../../test-data/qrh/testData";
import ENV from "../../../helper/env-config";
import { describe } from "node:test";

describe("QRH - Booking for Flight and Hotel Multicity", async () => {
    test('QRH - Verify booking for Flight and Hotel Multicity @booking @CI @QRH', async ({ browser, browserName }) => {
        const dateCalc = new DateCalc();
        const context = await browser.newContext();
        const page = await context.newPage();
        const landingPage = new LandingPage(page);
        const searchResultPage = new SearchResultPage(page);
        const dateDeparting = await dateCalc.getDepartingFutureDate_Months(2);
        const dateReturning = await dateCalc.getReturnFutureDate_Months(2);
        let testData: any;
        if(process.env.test_env === 'staging') {
        testData = TestDataInStaging;
        } else {
             testData = TestDataInProduction;
        }
        let base_url: string = `${ENV.QRH_URL}`;
        
        await test.step(`should verify UIs for Landing Page on ${browserName}`, async () => {
            await landingPage.goto(base_url);
            await landingPage.waitForCookiesPopupDisplay();
            await landingPage.acceptCookies();
            await page.waitForTimeout(10000);
            await landingPage.waitForSearchButtonVisible();
            if(process.env.test_env == 'staging'){
                await landingPage.changeLanguageTo('Englisch');
            };
        });
        await test.step(`select information and clicking Search button of Flight and Hotel on ${browserName}`, async () => {
            await landingPage.navigateToFlighAndHotelTab();
            await landingPage.selectJourneyType(testData.journeyType.multiCity);
            await landingPage.selectOriginDropdown(testData.originAirport.KUL);
            await landingPage.selectDestinationDropdown(testData.destinationAirport.LHR);
            await landingPage.selectDateDeparting(dateDeparting);
            await landingPage.selectOriginMutilCityDropdown(testData.originAirport.CDG);
            await landingPage.selectDestinationMultiCityDropdown(testData.destinationAirport.KUL);
            await landingPage.selectDateDepartingMultiCity(dateReturning);
            await landingPage.adjustRoomTravellers("1 Room 1 Adults");
            await landingPage.selectHotelDestinationMultiCity(testData.hotelDestination.LHR);
            await landingPage.clickSearchButton('F+H');
        });
        await test.step(`select flight and hotel in SRP on ${browserName}`, async () => {
            await page.waitForTimeout(10000);
            await searchResultPage.checkWarningDisplayed();
            await page.waitForSelector('div#tabs-flight', { state: 'attached' });
            await searchResultPage.clickSelectedHotelBtn();
            await page.waitForSelector('.flightLoadCompleted', { state: 'visible' });
            await searchResultPage.clickSelectedFlightBtn();

            const [newPage] = await Promise.all([
                context.waitForEvent('page'),
                await page.waitForSelector('.flightLoadCompleted', { state: 'visible' }),
                await searchResultPage.clickSelectedFlightBtn()
            ]);

            await page.waitForTimeout(10000);
            const productDetailPage = new ProductDetailPage(newPage);
            const travellerDetailPage = new TravellerDetailPage(newPage);
            const paymentPage = new PaymentPage(newPage);
            await test.step(`click room which is selected in product details page on ${browserName}`, async () => {
                await productDetailPage.clickFirstRoomSelected();
                await newPage.waitForTimeout(10000);
                await productDetailPage.skipIfRoomSoldOut();
            });
            await test.step(`fill information in traveller details page on ${browserName}`, async () => {
                await travellerDetailPage.checkChangePrice();
                await travellerDetailPage.selectTitleWhoBooked("Mr");
                await travellerDetailPage.inputMobileNumber(testData.mobileNumber);
                await travellerDetailPage.inputEmailAddress(testData.travellerDetails.emailAddress);
                await travellerDetailPage.inputFirstAndMiddleName(testData.travellerDetails.firstName);
                await travellerDetailPage.inputLastName(testData.travellerDetails.lastName);
                await travellerDetailPage.selectSubscribeEmailCheckbox();
                await travellerDetailPage.selectOver18Checkbox();
                await travellerDetailPage.clickTravellerDetailsBtn();
                await newPage.waitForTimeout(5000);
                await travellerDetailPage.clickCloneContactDetailsBtn();
                await travellerDetailPage.selectDayOfBirthDropdown('29');
                await travellerDetailPage.selectMonthOfBirthDropdown('12');
                await travellerDetailPage.selectYearOfBirthDropdown('1996');
                await travellerDetailPage.selectNationalityDropdown('Vietnam');
                await travellerDetailPage.inputPassportInformation(testData.travellerDetails.passportNo, '29', '12', '2035', 'Vietnam');
                await newPage.waitForTimeout(5000);
                if (await newPage.getByRole('button', { name: 'Continue Booking' }).count() > 0) {
                    await travellerDetailPage.clickContinueBookingBtn();
                } else {
                    await travellerDetailPage.clickContinuePaymentBtn();
                }
            });
            await test.step(`choose or skip tours in Extras page on ${browserName}`, async () => {
                await newPage.waitForTimeout(5000);
                await travellerDetailPage.clickSkipExtrasBtn();
            });
            await test.step(`fill information before booking on ${browserName}`, async () => {
                await newPage.waitForTimeout(5000);
                await paymentPage.clickTermAndConditionCheckbox();
                await paymentPage.clickCancellationPolicyCheckbox();
            });
        });
        await page.close();
    });
})
