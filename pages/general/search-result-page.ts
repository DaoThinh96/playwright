import { Page, expect } from '@playwright/test';
import { BasePage } from '../base-page';

export class SearchResultPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /* ============ Elements =============== */
  readonly hotelGridElements = {
    selectedHotelBtn: "a[class*='buttonSelected']",
    selectedFlightBtn: "a[class*='bt-outline-selected']",
    selectBtnWithHotelNameSpecific: (hotelName: string) => `//p[text()="${hotelName}"]//ancestor::div[@class="hotelAvailability"]//a[(contains(@class, "buttonSelect"))] | //span[text()="${hotelName}"]//ancestor::div[@class="fh-tabs__overview"]//a[(contains(@class, "btn-hard__select"))]`,
    selectBtnWithTourNameSpecific: (tourName: string) => `//h2[text()="${tourName}"]//ancestor::div[@class="fh-tabs__overview"]//a[(contains(@class, "btn-hard__select"))]`,
    searchBoxTourName: `input[placeholder="Search for Tour Name"]`,
    selectBtnWithTransferNameSpecific: (transferName: string) => `//h2[text()="${transferName}"]//ancestor::div[@class="fh-tabs__overview"]//a[(contains(@class, "btn-hard__select"))]`,
    inputFlightNumberWithTransferNameSpecific: (transferName: string) => `//h2[text()="${transferName}"]//ancestor::div[@class="fh-tabs__overview"]//strong[(contains(text(), 'Flight Number'))]/parent::div//input[contains(@placeholder, 'e.g')]`,
    selectBtnWithStopoverSpecific: (stopover: string) => `//h2[(contains(text(),"${stopover}"))]//ancestor::div[@class="fh-tabs__overview"]//span[(contains(text(), "Select"))]`,
    changeFlightTab: "button[href='#tabs-flight']",
    countryDropdown: 'div[class="currency-dropdown d-none d-lg-flex"] a[data-target="#modalCountry"]',
    countryOption: (country: string) => `//div[@class="listCurrency__list listCountries__list"]//span[text()="${country}"]`,
    currencyDropdown: 'div[class="currency-dropdown d-none d-lg-flex"] a[data-target="#modalCurrency"]',
    currencyOption: (currency: string) => `//div[@class="listCurrency__list currency-list"]//b[text()="${currency}"]`,
  }

  /*================== Methods ==============*/
  async clickSelectedHotelBtn() {
    if (await this.page.getByRole('button', { name: 'Selected' }).count() > 0) {
      await this.page.getByRole('button', { name: 'Selected' }).click();
    } else {
      await this.page.getByRole('link', { name: 'Selected' }).click();
    }
  }

  async clickSelectedFlightBtn() {
    await this.page.getByRole('button', { name: 'Selected' }).click();
  }

  async clickBookBtn() {
    await this.page.getByRole('button', { name: 'Book' }).click();
  }

  async clickBookFlightBtn() {
    await this.page.getByRole('button', { name: 'Book' }).click();
  }

  async clickAddThisActivityBtn() {
    await this.page.getByRole('button', { name: 'Add This Activity' }).click();
  }

  async clickAddQuantityBtnAsSpecificName(tourName: string) {
    await this.page.locator(`//h2[text()='${tourName}']//ancestor::div[@class='fh-tabs__overview']//span[contains(@id, 'bt-add')]`).first().click();
  }

  async clickAddThisTransferBtn() {
    await this.page.getByRole('button', { name: 'Add This Transfer' }).click();
  }

  async selectHotelSpecific(hotelName: string) {
    await this.waitAndClick(this.hotelGridElements.selectBtnWithHotelNameSpecific(hotelName));
  }

  async selectTourSpecific(tourName: string) {
    if (await this.page.locator(this.hotelGridElements.selectBtnWithTourNameSpecific(tourName)).count() > 0) {
      await this.page.locator(this.hotelGridElements.selectBtnWithTourNameSpecific(tourName)).click();
    } else {
      await this.page.getByRole('link', { name: 'Load more' }).click();
      await this.page.locator(this.hotelGridElements.selectBtnWithTourNameSpecific(tourName)).click();
    }

    await this.page.waitForTimeout(5000);
  }


  async searchForTourName(tourName: string) {
    await this.page.locator(this.hotelGridElements.searchBoxTourName).fill(tourName);
    await this.page.waitForTimeout(2000);
  }

  async selectTransferSpecific(transferName: string) {
    await this.waitAndClick(this.hotelGridElements.selectBtnWithTransferNameSpecific(transferName));
  }

  async inputFlightNumber(transferName: string, flightNumber: string) {
    await this.page.locator(this.hotelGridElements.inputFlightNumberWithTransferNameSpecific(transferName)).nth(0).fill(flightNumber);
  }

  async selectHotelStopoverSpecific(stopover: string) {
    await this.page.locator(this.hotelGridElements.selectBtnWithStopoverSpecific(stopover)).click();
  }

  async navigateToChangeFlightTab() {
    await this.waitAndClick(this.hotelGridElements.changeFlightTab);
  }

  async changeCountry(country: string) {
    await this.page.locator(this.hotelGridElements.countryDropdown).click();
    await this.page.locator(this.hotelGridElements.countryOption(country)).click();
    await this.page.waitForTimeout(5000);
  }

  async changeCurrency(currency: string) {
    await this.page.locator(this.hotelGridElements.currencyDropdown).click();
    await this.page.locator(this.hotelGridElements.currencyOption(currency)).click();
    await this.page.waitForTimeout(5000);
  }

  async checkWarningDisplayed() {
    if (await this.page.locator('div.swal-modal.warning').count() > 0) {
      await this.page.getByRole('button', { name: 'Ok' }).click();
      await this.page.waitForTimeout(2000);
    }
  }
  /*================== Verification ===========*/

}
