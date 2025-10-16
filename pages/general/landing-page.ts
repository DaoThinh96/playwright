import { Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class LandingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }


  /* ============ Elements =============== */

  readonly cookiesPopup = {
    panel: '#initalContent',
    acceptBtn: '.cmButtons #cmCloseBanner',
  }

  readonly searchGridElements = {
    searchBtn: '//*[@id="mholidays-flight-button"] | //*[@id="btnSubmitSearchFormFlightHotel"] | //*[@id="btnSubmitSearchFormFlight"]',
    rightArrow: "button.btn-right",
    leftArrow: "button.btn-left",
    languageDropdown: 'div[class="currency-dropdown d-none d-lg-flex"] a[href="#modalCultureCode"]',
    fromSelect: {
      locator: '[placeholder="Departure *"]',
      index: 0
    },
    flightAndHotelTab: "text='Flight + Hotel'",
    hotelTab: "text='Hotel'",
    searchFormHotelBtn: "//*[@id='btnSubmitSearchFormHotel'] | //*[@id='mholidays-hotel-button']",
    flightAndStopOverTab: "text='Flight + Stopover'",
    searchStopOverBtn: '#btnSubmitStopoverSeparate',
    toursTab: {
      locator: "text='Tours'",
      index: 1
    },
    toursAndActivitiesTab: {
      locator: "//*[text()='Tours & Activities'] | //*[text()='Trips & Tours']",
      index: 1
    },
    searchFromToursBtn: "//*[@id='btnSubmitSearchFormTour'] | //*[@id='mholidays-tour-button']",
    tripsAndToursTab: "text='Trips & Tours'",
    transfersTab: '//*[starts-with(text(), "Transfer")]',
    searchFromTransferBtn: "//*[@id='btnSubmitSearchFormTransfer'] | //*[@id='mholidays-transfer-button']",
    kidFlyFreeTab: "text='Kids Fly-Stay FREE'",
    dealBtn: '#mholidays-deals-button',
    specialsTab: {
      locator: "text='Specials'",
      index: 1
    },
    tourPackageTab: {
      locator: "text='Tour Package'",
      index: 1
    },
    searchTourPackageBtn: "#btnSubmitSearchFormTourPackage",
    flightAndHotelElementTab: {
      originDropdown: "//div[(contains(@class,'search-content tab-pane active'))]//strong[(contains(text(), 'Origin'))]/parent::div//input[@placeholder='City or Airport'] | //input[@aria-label='From / Origin']",
      originReturnFlightDropdown: "//span[text()='Return Flight']/following::div[(contains(@id, 'From'))]//input[@placeholder='City or Airport']",
      pickUpPointDropdown: "//div[(contains(@class,'search-content tab-pane active'))]//strong[text()='Pick-up Point']/parent::div//input[@placeholder='City or Airport']",
      destinationDropdown: "//div[(contains(@class,'search-content tab-pane active'))]//strong[(contains(text(), 'destination'))]/parent::div//input[@placeholder='City or Airport']  | //input[@aria-label='To / Destination']",
      destinationReturnFlightDropdown: "//span[text()='Return Flight']/following::div[(contains(@id, 'To'))]//input[@placeholder='City or Airport']",
      departingDate: "//div[(contains(@class,'search-content tab-pane active'))]//span[(contains(@class,'dateRangeLabelFrom dateRange'))] | //div[text()='Departure Date']",
      departingDateTourInMHHProd: "//div[text()='From']",
      departingDateHotelInMHHProd: "//div[(contains(@class,'MHHHotelSearch'))]//div[(contains(@class,'wrapper-from'))]",
      returningDateHotelInMHHProd: "//div[(contains(@class,'MHHHotelSearch'))]//div[(contains(@class,'wrapper-to'))]",
      returningDate: "//div[(contains(@class,'search-content tab-pane active'))]//span[(contains(@class,'dateRangeLabelTo dateRange'))] | //div[text()='To']",
      nextBtnInDatePicker: '//th[@class="next available"] | //button[contains(@class, "arrow-right")]',
      previousBtnInDatePicker: 'th[class="prev available"]',
      dateInDatePicker: (date: string) => `//div[(contains(@class, 'daterangepicker'))]//div[(contains(@class, 'drp-calendar left'))]//tr//td[contains(@class, 'available')]//self::td[text()=${date}] | //span[text()= '${date}']`,
      dateInCheckInOut: (date: string) => `//div[(contains(@class, 'daterangepicker'))]//div[(contains(@class, 'drp-calendar right'))]//tr//td[contains(@class, 'available')]//self::td[text()=${date}]`,
      travellersDropdown: "//div[(contains(@class,'search-content tab-pane active'))]//div[@class='travelers']//following-sibling::div[contains(@class, 'search-input dropdown-toggle')]",
      addRoomBtn: "//div[(contains(@class,'search-content tab-pane active'))]//span[text()='Add room']",
      addAdultBtn: "//div[(contains(@class,'search-content tab-pane active'))]//small[text()='Adults (18+)']//parent::div//span[@class='icon-add1 bt-add']",
      addChildrenBtn: "//div[(contains(@class,'search-content tab-pane active'))]//small[text()='Children (2-17)']//parent::div//span[@class='icon-add1 bt-add']",
      minusAdultBtn: "//div[(contains(@class,'search-content tab-pane active'))]//small[text()='Adults (18+)']//parent::div//span[(contains(@class, 'icon-minus'))]",
      minusChildrenBtn: "//div[(contains(@class,'search-content tab-pane active'))]//small[text()='Children (2-17)']//parent::div//span[(contains(@class, 'icon-minus'))]",
      cabinClassDropdown: "//div[(contains(@class,'search-content tab-pane active'))]//strong[text()='Cabin Class']/parent::div//div[contains(@class, 'search-input dropdown-toggle')] | //div[(contains(@class,'search-content tab-pane active'))]//strong[text()='Travel Class']/parent::div//div[contains(@class, 'search-input dropdown-toggle')]",
      childAgeDropdown: "select.select-adjust",
      optionChildAgeClass: (age: string) => `//select[@class="select-adjust"]/option[@value="${age}"]`,
      optionCabinClass: (option: string) => `//div[(contains(@class,'search-content tab-pane active'))]//strong[text()='Cabin Class']/parent::div//child::label[text()='${option}'] | //div[(contains(@class,'search-content tab-pane active'))]//strong[text()='Travel Class']/parent::div//child::label[text()='${option}']`,
      searchButton: "//div[(contains(@class,'search-content tab-pane active'))]//button[@id='btnSubmitSearchFormFlightHotel'] | //div[(contains(@class,'MHHFlightHotelSearch'))]//button[text()='Search']",
      addNightBtn: "//i[@class='ico icon-add-symbol']",
      minusNightBtn: "i[class*='icon-minus']",
      inputTourInMHH: "//input[@placeholder='Choose a city...'] | //input[@aria-label='Choose a city']",
      inputHotelInMultiCity: "//div[@class='open-jaw-search']//input[@placeholder='Choose a city...']",
      checkInDateMultiCity: "//strong[text()='Check-in']/parent::div//span[@class='dateRangeLabelFrom dateRange']",
      checkOutDateMultiCity: "//strong[text()='Check-out']/parent::div//span[@class='dateRangeLabelTo dateRange']",
      listTourOptionInMHH: (cityCode: string) => `//div[(contains(@class,'search-content tab-pane active'))]//p[@class='result-name']//span[(contains(text(), '${cityCode}'))] | //div[(contains(@class,'MHHTripsAndTours'))]//div[(contains(text(), '${cityCode}'))]`,
      currentMonthYearDeparting: "//div[(contains(@class, 'daterangepicker'))]//div[(contains(@class, 'drp-calendar left'))]//th[@class='month'] | //button[contains(@class, 'arrow-left')]//following-sibling::div[contains(@class, 'mx-auto')]",
      currentMonthYearReturning: "//div[(contains(@class, 'daterangepicker'))]//div[@class='drp-calendar left']//th[@class='month'] | //button[contains(@class, 'arrow-left')]//following-sibling::div[contains(@class, 'mx-auto')]",
    }
  }

  readonly headerElements = {
    loginLnk: "#qloyalty-signin >> text=Login"
  }
  /*================== Methods ==============*/
  async acceptCookies() {
    if (await this.page.locator(this.cookiesPopup.acceptBtn).count() > 0) {
      await this.page.locator(this.cookiesPopup.acceptBtn).click();
    }
  }

  async waitForCookiesPopupDisplay() {
    await this.waitForElementVisible(this.cookiesPopup.acceptBtn);
  }

  async waitForSearchButtonVisible() {
    await this.waitForElementVisible(this.searchGridElements.searchBtn);
  }

  async waitForSearchStopOverButtonVisible() {
    await this.waitForElementVisible(this.searchGridElements.searchStopOverBtn);
  }

  async waitForSearchFromToursButtonVisible() {
    await this.waitForElementVisible(this.searchGridElements.searchFromToursBtn);
  }

  async waitForSearchFromTransfersButtonVisible() {
    await this.waitForElementVisible(this.searchGridElements.searchFromTransferBtn);
  }

  async waitForKidFlyButtonVisible() {
    await this.waitForElementVisible(this.searchGridElements.dealBtn);
  }

  async waitForTourPackageButtonVisible() {
    await this.waitForElementVisible(this.searchGridElements.searchTourPackageBtn);
  }

  async waitForSearchHotelsButtonVisible() {
    await this.waitForElementVisible(this.searchGridElements.searchFormHotelBtn);
  }

  async navigateToFlighAndHotelTab() {
    await this.waitAndClick(this.searchGridElements.flightAndHotelTab);
    await this.page.waitForTimeout(5000);
  }

  async navigateToHotelTab(environment: string = '') {
    let index = 0;
    if (environment === 'staging' || environment === 'uat') {
      index = 1;
    }
    await this.waitAndClick(this.searchGridElements.hotelTab, index);
  }

  async navigateToFlightAndStopOverTab(environment: string = '') {
    let index = 0;
    if (environment === 'staging') {
      index = 1;
    }
    if (await this.page.locator(this.searchGridElements.rightArrow).count() > 0) {
      await this.page.locator(this.searchGridElements.rightArrow).click();
    }
    await this.waitAndClick(this.searchGridElements.flightAndStopOverTab, index);
    await this.page.waitForTimeout(3000);
  }

  async navigateToTourTab(browserName: string = '') {
    let index = 0;
    if (browserName === 'webkit') {
      index = 1;
    }
    await this.waitAndClick(this.searchGridElements.toursTab.locator, index);
  }

  async navigateToTourAndActivitiesTab(environment: string = '') {
    let index = 0;
    if (environment === 'staging' || environment === 'uat') {
      index = 1;
    }
    await this.waitAndClick(this.searchGridElements.toursAndActivitiesTab.locator, index);
    await this.page.waitForTimeout(10000);
  }

  async navigateToTripsAndToursTab() {
    await this.waitAndClick(this.searchGridElements.tripsAndToursTab);
  }

  async navigateToTransfersTab(environment: string = '') {
    let index = 0;
    if (environment === 'staging' || environment === 'uat') {
      index = 1;
    }
    await this.waitAndClick(this.searchGridElements.transfersTab, index);
    await this.page.waitForTimeout(10000);
  }

  async navigateToKidFlyFreeTab() {
    await this.waitAndClick(this.searchGridElements.kidFlyFreeTab);
  }

  async navigateToSpecialTab() {
    await this.waitAndClick(this.searchGridElements.specialsTab.locator, this.searchGridElements.specialsTab.index);
  }

  async navigateToTourPackageTab() {
    await this.waitAndClick(this.searchGridElements.tourPackageTab.locator, this.searchGridElements.tourPackageTab.index);
  }

  async selectOriginDropdown(originText: string, airline: string = '') {
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.originDropdown).first().fill(originText);
    await this.page.waitForTimeout(2000);
    switch (airline) {
      case 'MHH':
        await this.page.locator(`//li[@id='multiselect-option-${originText}']`).first().click();
        break;
      default:
        await this.page.locator(`//div[(contains(@class,'search-content tab-pane active'))]//p[(contains(@class,'result-name'))]//span[text()='${originText}']`).click();
        break;
    }
    await this.page.waitForTimeout(2000);
  }

  async selectOriginMutilCityDropdown(originText: string, airline: string = '') {
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.originReturnFlightDropdown).fill(originText);
    await this.page.waitForTimeout(2000);
    switch (airline) {
      case 'MHH':
        await this.page.locator(`//li[@id='multiselect-option-${originText}']`).first().click();
        break;
      default:
        await this.page.locator(`//div[(contains(@class,'search-content tab-pane active'))]//p[(contains(@class,'result-name'))]//span[text()='${originText}']`).click();
        break;
    }
    await this.page.waitForTimeout(2000);
  }

  async selectPickupPointDropdown(pickUpPointTxt: string) {
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.pickUpPointDropdown).fill(pickUpPointTxt);
    await this.page.waitForTimeout(10000);
    await this.page.locator(`//div[(contains(@class,'search-content tab-pane active'))]//p[(contains(@class,'result-name'))]//span[text()='${pickUpPointTxt}']`).click();
  }

  async selectDestinationDropdown(destinationText: string, browserName: string = '', airline: string = '') {
    let index = 0;
    if (browserName === 'webkit') {
      index = 1;
    }

    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.destinationDropdown).first().fill(destinationText);
    await this.page.waitForTimeout(2000);
    switch (airline) {
      case 'MHH':
        await this.page.locator(`//li[@id='multiselect-option-${destinationText}']`).nth(1).click();
        break;
      default:
        await this.page.locator(`//div[(contains(@class,'search-content tab-pane active'))]//p[(contains(@class,'result-name'))]//span[text()='${destinationText}']`).nth(index).click();
        break;
    }
    await this.page.waitForTimeout(2000);
  }

  async selectDestinationMultiCityDropdown(destinationText: string, browserName: string = '', airline: string = '') {
    let index = 0;
    if (browserName === 'webkit') {
      index = 1;
    }

    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.destinationReturnFlightDropdown).first().fill(destinationText);
    await this.page.waitForTimeout(2000);
    switch (airline) {
      case 'MHH':
        await this.page.locator(`//li[@id='multiselect-option-${destinationText}']`).nth(1).click();
        break;
      default:
        await this.page.locator(`//div[(contains(@class,'search-content tab-pane active'))]//p[(contains(@class,'result-name'))]//span[text()='${destinationText}']`).nth(index).click();
        break;
    }
    await this.page.waitForTimeout(2000);
  }

  async selectDateDeparting(departingDate: string) {
    const date = departingDate.split(' ')[0];
    const month = departingDate.split(' ')[1];
    const year = departingDate.split(' ')[2];

    await this.page.waitForTimeout(5000);
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.departingDate).first().click();

    while (true) {
      const currentMonthYear = await this.page.locator(this.searchGridElements.flightAndHotelElementTab.currentMonthYearDeparting).textContent();

      if (currentMonthYear?.includes(year) && currentMonthYear?.includes(month)) {
        break;
      }
      await this.page.click(this.searchGridElements.flightAndHotelElementTab.nextBtnInDatePicker);
    }
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.dateInDatePicker(date)).first().click();
  }

  async selectDateDepartingMultiCity(departingDate: string) {
    const date = departingDate.split(' ')[0];
    const month = departingDate.split(' ')[1];
    const year = departingDate.split(' ')[2];

    await this.page.waitForTimeout(5000);
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.departingDate).nth(1).click();

    while (true) {
      const currentYear = await this.page.locator(this.searchGridElements.flightAndHotelElementTab.currentMonthYearDeparting).first().textContent();
      const currentMonth = await this.page.locator(this.searchGridElements.flightAndHotelElementTab.currentMonthYearDeparting).first().textContent();

      if (currentYear?.includes(year) && currentMonth?.includes(month)) {
        break;
      } else {
        await this.page.click(this.searchGridElements.flightAndHotelElementTab.nextBtnInDatePicker);
      }
    }
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.dateInDatePicker(date)).last().click();
  }

  async selectDateCheckInOutMultiCity(departingDate: string, option: string) {
    const date = departingDate.split(' ')[0];
    const month = departingDate.split(' ')[1];
    const year = departingDate.split(' ')[2];

    await this.page.waitForTimeout(5000);
    if (option === 'Check-in') {
      await this.page.locator(this.searchGridElements.flightAndHotelElementTab.checkInDateMultiCity).first().click();
    } else {
      await this.page.locator(this.searchGridElements.flightAndHotelElementTab.checkOutDateMultiCity).first().click();
    }

    while (true) {
      const currentYear = await this.page.locator(this.searchGridElements.flightAndHotelElementTab.currentMonthYearDeparting).first().textContent();
      const currentMonth = await this.page.locator(this.searchGridElements.flightAndHotelElementTab.currentMonthYearDeparting).first().textContent();

      if (currentYear?.includes(year) && currentMonth?.includes(month)) {
        break;
      } else {
        await this.page.click(this.searchGridElements.flightAndHotelElementTab.nextBtnInDatePicker);
      }
    }
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.dateInCheckInOut(date)).last().click();
  }

  async selectDateReturning(returningDate: string) {
    const date = returningDate.split(' ')[0];
    const month = returningDate.split(' ')[1];
    const year = returningDate.split(' ')[2];

    await this.page.waitForTimeout(5000);
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.returningDate).click();

    while (true) {
      const currentYear = await this.page.locator(this.searchGridElements.flightAndHotelElementTab.currentMonthYearReturning).textContent();
      const currentMonth = await this.page.locator(this.searchGridElements.flightAndHotelElementTab.currentMonthYearReturning).textContent();

      if (currentYear?.includes(year) && currentMonth?.includes(month)) {
        break;
      }
      await this.page.click(this.searchGridElements.flightAndHotelElementTab.nextBtnInDatePicker);
    }
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.dateInDatePicker(date)).last().click();
  }

  async adjustRoomTravellers(roomOption: any) {
    const numberRoomInt = parseInt(roomOption.split(' ')[0]);
    const numberAdultInt = parseInt(roomOption.split(' ')[2]);
    const numberPaxCurrent = await this.page.locator("//div[(contains(@class,'search-content tab-pane active'))]//div[@class='travelers']//following-sibling::div[contains(@class, 'search-input dropdown-toggle')]//span[2]").textContent();
    const numberPaxCurrentInt = parseInt(String(numberPaxCurrent).split(' ')[0]);

    await this.page.click(this.searchGridElements.flightAndHotelElementTab.travellersDropdown);

    if (numberRoomInt > 1) {
      for (let i = 1; i < numberRoomInt; i++) {
        await this.page.click(this.searchGridElements.flightAndHotelElementTab.addRoomBtn);
      }
    }

    if (numberAdultInt < 2) {
      for (let i = 0; i < (numberPaxCurrentInt - numberAdultInt); i++) {
        await this.page.click(this.searchGridElements.flightAndHotelElementTab.minusAdultBtn);
      }
    } else if (numberAdultInt > 2) {
      for (let i = 0; i < (numberAdultInt - numberPaxCurrentInt); i++) {
        await this.page.click(this.searchGridElements.flightAndHotelElementTab.addAdultBtn);
      }
    }

    await this.page.click(this.searchGridElements.flightAndHotelElementTab.travellersDropdown);
  }

  async selectChildrenQuatity(childrenNumber: string, childrenAge: string[]) {
    const numberChildrenInt = parseInt(childrenNumber.split(' ')[0]);
    const numberChildrenCurrent = await this.page.locator("//div[(contains(@class,'search-content tab-pane active'))]//small[text()='Children (2-17)']//parent::div//strong[@class='adjust-count']").textContent();
    const numberChildrenCurrentInt = parseInt(String(numberChildrenCurrent).split(' ')[0]);

    await this.page.click(this.searchGridElements.flightAndHotelElementTab.travellersDropdown);
    if (numberChildrenInt < numberChildrenCurrentInt) {
      for (let i = 0; i < (numberChildrenCurrentInt - numberChildrenInt); i++) {
        await this.page.click(this.searchGridElements.flightAndHotelElementTab.minusChildrenBtn);
      }
    } else if (numberChildrenInt > numberChildrenCurrentInt) {
      for (let i = 0; i < (numberChildrenInt); i++) {
        await this.page.click(this.searchGridElements.flightAndHotelElementTab.addChildrenBtn);
      }
    };

    await this.selectChildrenAge(childrenAge);
    await this.page.click(this.searchGridElements.flightAndHotelElementTab.travellersDropdown);
  }

  async selectChildrenAge(childrenAge: string[]) {
    for (let i = 0; i < childrenAge.length; i++) {
      const age = childrenAge[i].split(' ')[0];
      await this.page.locator(this.searchGridElements.flightAndHotelElementTab.childAgeDropdown).nth(i).click();
      await this.page.locator(this.searchGridElements.flightAndHotelElementTab.childAgeDropdown).nth(i).selectOption(age);
      this.page.waitForTimeout(1000);
    };
  }

  async adjustNightStayInSO(nightNumber: number) {
    const numberNightCurrent = await this.page.locator("//span[@class='number-box--txt']").textContent();
    const numberNightCurrentInt = parseInt(String(numberNightCurrent));

    if (nightNumber > numberNightCurrentInt) {
      for (let i = 0; i < (nightNumber - numberNightCurrentInt); i++) {
        await this.page.click(this.searchGridElements.flightAndHotelElementTab.addNightBtn);
      }
    } else if (nightNumber < numberNightCurrentInt) {
      for (let i = 0; i < (numberNightCurrentInt - nightNumber); i++) {
        await this.page.click(this.searchGridElements.flightAndHotelElementTab.minusNightBtn);
      }
    }
  }

  async adjustTravellerInToursAndTransfer(paxNumber: number) {
    const numberPaxCurrent = await this.page.locator("//div[(contains(@class,'search-content tab-pane active'))]//div[@class='travelers']//following-sibling::div[contains(@class, 'search-input dropdown-toggle')]//span").nth(1).textContent();
    const numberPaxCurrentInt = parseInt(String(numberPaxCurrent).split(' ')[0]);

    await this.page.click(this.searchGridElements.flightAndHotelElementTab.travellersDropdown);

    if (paxNumber > numberPaxCurrentInt) {
      for (let i = 0; i < (paxNumber - numberPaxCurrentInt); i++) {
        await this.page.click(this.searchGridElements.flightAndHotelElementTab.addAdultBtn);
      }
    } else if (paxNumber < numberPaxCurrentInt) {
      for (let i = 0; i < (numberPaxCurrentInt - paxNumber); i++) {
        await this.page.click(this.searchGridElements.flightAndHotelElementTab.minusAdultBtn);
      }
    }
  }

  async selectCabinClass(optionClass: string) {
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.cabinClassDropdown).click();
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.optionCabinClass(optionClass)).click();
  }

  async clickSearchButton(component: string) {
    switch (component) {
      case 'F+SO':
        await this.waitAndClick(this.searchGridElements.searchStopOverBtn);
        break;
      case 'HO':
        await this.waitAndClick(this.searchGridElements.searchFormHotelBtn);
        break;
      case 'Tours':
        await this.waitAndClick(this.searchGridElements.searchFromToursBtn);
        break;
      case 'Transfer':
        await this.waitAndClick(this.searchGridElements.searchFromTransferBtn);
        break;
      default:
        await this.waitAndClick(this.searchGridElements.flightAndHotelElementTab.searchButton);
    }
    await this.page.waitForTimeout(10000);
  }

  async changeLanguageTo(language: string) {
    await this.page.locator(this.searchGridElements.languageDropdown).waitFor({state: 'visible'});
    await this.page.locator(this.searchGridElements.languageDropdown).click();
    await this.page.locator(`//span[text()="${language}"]`).click();
    await this.page.waitForTimeout(5000);
  }

  async selectHotelDestination(cityCode: string, browserName: string = '', airline: string = '') {
    let index = 0;
    if (browserName === 'webkit') {
      index = 1;
    }
    switch (airline) {
      case 'MHH':
        await this.waitAndFill(`div[class*='MHHHotelSearch'] input.multiselect-search`, cityCode, index);
        await this.page.waitForTimeout(5000);
        await this.page.locator(`//div[(contains(@class,'MHHHotelSearch'))]//mark[(contains(text(),'${cityCode}'))]`).click();
        break;
      default:
        await this.waitAndFill(`//input[@placeholder="Destination, hotel, landmark or airports"]`, cityCode, index);
        await this.page.waitForTimeout(5000);
        await this.page.locator(`//div[(contains(@class,'search-content tab-pane active'))]//p[@class="result-name"]//span[(contains(text(), "${cityCode}"))]`).click();
    }
  }

  async selectHotelDestinationMultiCity(cityCode: string, env: string = '') {
    let index = 0;
    if (env === 'staging') {
      index = 1;
    }
    await this.waitAndFill(this.searchGridElements.flightAndHotelElementTab.inputHotelInMultiCity, cityCode, index)
    await this.page.waitForTimeout(10000);
    await this.page.locator(`//div[(contains(@class,'search-content tab-pane active'))]//p[@class="result-name"]//span[(contains(text(), "${cityCode}"))]`).click();
  }

  async selectJourneyType(type: string) {
    await this.waitAndClick(`//label[@for="${type}"]`);
    await this.page.waitForTimeout(10000);
  }

  async selectTourDestination(cityCode: string, browserName: string = '') {
    let index = 0;
    if (browserName === 'webkit') {
      index = 1;
    }
    await this.waitAndFill(this.searchGridElements.flightAndHotelElementTab.inputTourInMHH, cityCode, index)
    await this.page.waitForTimeout(20000);
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.listTourOptionInMHH(cityCode)).click();
  }

  async selectDropoffPoint(cityCode: string, browserName: string = '', journeyType: string) {
    await this.page.waitForTimeout(5000);
    let index = 0;
    if (browserName === 'webkit') {
      index = 1;
    }
    if (journeyType === 'ToAirport') {
      let locator = '//div[@class="transfer-search-box"]//input[@placeholder="City or Airport"]';
      await this.page.locator(locator).first().click();
    } else {
      let locator = '//input[@placeholder="Hotel name/location..."]';
      await this.waitAndFill(locator, cityCode, index)
    }
    await this.page.waitForTimeout(10000);
    await this.waitAndClick(`//div[(contains(@class,'search-content tab-pane active'))]//p[@class="result-name"]//span[(contains(text(), "${cityCode}"))]`);
  }

  async selectDateDepartingInMHH(departingDate: string, env: string = '', product: string = '') {
    const date = departingDate.split(' ')[0];
    const month = departingDate.split(' ')[1];
    const year = departingDate.split(' ')[2];

    await this.page.waitForTimeout(5000);
    if (env !== 'production' && product !== 'F+H') {
      await this.page.locator(this.searchGridElements.flightAndHotelElementTab.departingDate).click();
    } else if (env === 'production' && product === 'Tours') {
      await this.page.locator(this.searchGridElements.flightAndHotelElementTab.departingDateTourInMHHProd).click();
    } else if (env === 'production' && product === 'Hotel') {
      await this.page.locator(this.searchGridElements.flightAndHotelElementTab.departingDateHotelInMHHProd).click();
    }

    while (true) {
      const currentMonthYear = await this.page.locator(this.searchGridElements.flightAndHotelElementTab.currentMonthYearDeparting).textContent();

      if (currentMonthYear?.includes(year) && currentMonthYear?.includes(month)) {
        break;
      }
      await this.page.click(this.searchGridElements.flightAndHotelElementTab.nextBtnInDatePicker);
    }
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.dateInDatePicker(date)).first().click();
  }

  async selectDateReturningInMHH(returningDate: string, env: string = '', product: string = '') {
    const date = returningDate.split(' ')[0];
    const month = returningDate.split(' ')[1];
    const year = returningDate.split(' ')[2];

    await this.page.waitForTimeout(5000);
    if (env !== 'production' && product !== 'F+H') {
      await this.page.locator(this.searchGridElements.flightAndHotelElementTab.returningDate).click();
    }

    while (true) {
      const currentYear = await this.page.locator(this.searchGridElements.flightAndHotelElementTab.currentMonthYearReturning).textContent();
      const currentMonth = await this.page.locator(this.searchGridElements.flightAndHotelElementTab.currentMonthYearReturning).textContent();

      if (currentYear?.includes(year) && currentMonth?.includes(month)) {
        break;
      }
      await this.page.click(this.searchGridElements.flightAndHotelElementTab.nextBtnInDatePicker);
    }
    await this.page.locator(this.searchGridElements.flightAndHotelElementTab.dateInDatePicker(date)).first().click();
  }

  /**
   * This method is used to fill information of the flight for MHH on Production only
   * @param flightOrigin: origin of flight (i.e: KUL)
   * @param flightDestination: destination of flight (i.e: PEN)
   * @param dateDeparting: the date of departing (i.e: 01 Oct 2024)
   * @param dateReturning: the date of returning (i.e: 05 Oct 2024)
   */
  async fillInformationOfFlightMHHProduction(flightOrigin: string, flightDestination: string, dateDeparting: string, dateReturning: string) {
    await this.navigateToFlighAndHotelTab();
    await this.selectOriginDropdown(flightOrigin, 'MHH');
    await this.selectDestinationDropdown(flightDestination, '', 'MHH');
    await this.selectDateDepartingInMHH(dateDeparting, 'production', 'F+H');
    await this.selectDateReturningInMHH(dateReturning, 'production', 'F+H');
    await this.page.getByRole('button', { name: 'Done' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  /**
   * This method is used to fill information of the hotel for MHH on Production only
   * @param cityCode: city code of hotel (i.e: KUL)
   * @param dateDeparting: the date of departing (i.e: 01 Oct 2024)
   * @param dateReturning: the date of returning (i.e: 05 Oct 2024)
   */
  async fillInformationOfHotelMHHProduction(cityCode: string, dateDeparting: string, dateReturning: string) {
    await this.selectHotelDestination(cityCode, '', 'MHH');
    await this.selectDateDepartingInMHH(dateDeparting, 'production', 'Hotel');
    await this.selectDateReturningInMHH(dateReturning, 'production', 'Hotel');
    await this.page.getByRole('button', { name: 'Search' }).first().click();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }
}