import { Page, Locator } from '@playwright/test';

class CardLocators {
  constructor(private page: Page) { }
  get iframe() {
    return this.page.getByTestId('tool-card-iframe');
  }
  get radioButton() {
    return this.page.getByTestId('tool-card-radio-button');
  }
  get checkbox() {
    return this.page.getByTestId('tool-card-checkbox');
  }
  get form() {
    return this.page.getByTestId('tool-card-form');
  }
}

class IframeLocators {
  constructor(private page: Page) { }
  get btn1() { return this.page.frameLocator("iframe[name='iframe1']").getByRole('button', { name: 'Click Me' }); }
  get btn2() { return this.page.frameLocator("iframe[name='iframe2']").getByRole('button', { name: 'Click Me' }); }
  get msg1() { return this.page.getByText('You have clicked on iframe 1 button'); }
  get msg2() { return this.page.getByText('You have clicked on iframe 2 button'); }
}

class RadioLocators {
  constructor(private page: Page) { }
  get femaleFirst() { return this.page.getByRole('radio', { name: 'Female' }).first(); }
  get femaleLast() { return this.page.getByRole('radio', { name: 'Female' }).last(); }
  get age() { return this.page.getByRole('radio', { name: '18-35' }); }
  get showGenderBtn() { return this.page.getByRole('button', { name: 'Show Selected Gender' }); }
  get showValuesBtn() { return this.page.getByRole('button', { name: 'Show Selected Values' }); }
}

class TableLocators {
  constructor(private page: Page) { }
  get link() { return this.page.getByRole('link', { name: 'Web Table' }); }
  get nameInput() { return this.page.getByPlaceholder('Name'); }
  get countryInput() { return this.page.getByPlaceholder('Country'); }
  get addBtn() { return this.page.getByRole('button', { name: 'Add Record' }); }
  textCell(text: string): Locator { return this.page.getByText(text, { exact: true }).first(); }
}

class CheckboxLocators {
  constructor(private page: Page) { }
  get single() { return this.page.getByRole('checkbox', { name: 'Check me!' }); }
  get enable1() { return this.page.getByRole('checkbox', { name: 'Enable Checkbox 1' }); }
  get enable2() { return this.page.getByRole('checkbox', { name: 'Enable Checkbox 2' }); }
  get checkAllBtn() { return this.page.getByRole('button', { name: /check all/i }); }
}

class FormLocators {
  constructor(private page: Page) { }
  get firstName() { return this.page.getByPlaceholder('Enter your first name'); }
  get middleName() { return this.page.getByPlaceholder('Enter your middle name'); }
  get lastName() { return this.page.getByPlaceholder('Enter your last name'); }
  get email() { return this.page.getByPlaceholder('Enter your email address'); }
  get password() { return this.page.getByPlaceholder('Enter your password'); }
  get address() { return this.page.getByPlaceholder('Enter your address'); }
  get city() { return this.page.getByPlaceholder('Enter your city'); }
  get state() { return this.page.getByPlaceholder('Enter your state'); }
  get pinCode() { return this.page.getByPlaceholder('Enter your pin code'); }
  get submitBtn() { return this.page.getByRole('button', { name: 'Submit' }); }
}

export class Locators {
  readonly cards: CardLocators;
  readonly iframe: IframeLocators;
  readonly radio: RadioLocators;
  readonly table: TableLocators;
  readonly checkbox: CheckboxLocators;
  readonly form: FormLocators;

  constructor(private readonly page: Page) {
    this.cards = new CardLocators(page);
    this.iframe = new IframeLocators(page);
    this.radio = new RadioLocators(page);
    this.table = new TableLocators(page);
    this.checkbox = new CheckboxLocators(page);
    this.form = new FormLocators(page);
  }
}