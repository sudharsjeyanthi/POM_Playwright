import { Page, expect } from '@playwright/test';
import { Locators } from '../Locators/Locators';
import { WebTableData, UserFormData } from '../Data/DataProvider';

export class PracticePage {
    readonly page: Page;
    readonly locators: Locators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new Locators(page);
    }

    async runAllTests(webTable: WebTableData, form: UserFormData) {
        await this.page.goto('/');
        await expect(this.page).toHaveURL('/');

        await this.locators.cards.iframe.click();
        await this.locators.iframe.btn1.click();
        await expect(this.locators.iframe.msg1).toBeVisible();
        await this.locators.iframe.btn2.click();
        await expect(this.locators.iframe.msg2).toBeVisible();


        await this.page.goto('/');
        await this.locators.cards.radioButton.click();
        await this.locators.radio.femaleFirst.check();
        await this.locators.radio.showGenderBtn.click();
        await this.locators.radio.femaleLast.check();
        await this.locators.radio.age.check();
        await this.locators.radio.showValuesBtn.click();
        await expect(this.locators.radio.femaleLast).toBeChecked();
        await expect(this.locators.radio.age).toBeChecked();

        await this.locators.table.link.click();
        await this.locators.table.nameInput.fill(webTable.name);
        await this.locators.table.countryInput.fill(webTable.country);
        await this.locators.table.addBtn.click();
        await expect(this.locators.table.textCell(webTable.name)).toBeVisible();
        await expect(this.locators.table.textCell(webTable.country)).toBeVisible();

        await this.page.goto('/');
        await this.locators.cards.checkbox.click();
        await this.locators.checkbox.single.check();
        await expect(this.locators.checkbox.single).toBeChecked();
        await this.locators.checkbox.single.uncheck();
        await expect(this.locators.checkbox.single).not.toBeChecked();
        await this.locators.checkbox.enable1.check();
        await this.locators.checkbox.enable2.check();
        await this.locators.checkbox.checkAllBtn.click();

        await this.page.goto('/');
        await this.locators.cards.form.click();
        await this.locators.form.firstName.fill(form.firstName);
        await this.locators.form.middleName.fill(form.middleName);
        await this.locators.form.lastName.fill(form.lastName);
        await this.locators.form.email.fill(form.email);
        await this.locators.form.password.fill(form.password);
        await this.locators.form.address.fill(form.address);
        await this.locators.form.city.fill(form.city);
        await this.locators.form.state.fill(form.state);
        await this.locators.form.pinCode.fill(form.pinCode);
        await this.locators.form.submitBtn.scrollIntoViewIfNeeded();
        await this.locators.form.submitBtn.click();

        await this.page.goto('/');
        await expect(this.page).toHaveURL('/');
    }
}