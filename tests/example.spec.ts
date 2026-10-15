import { test } from '@playwright/test';
import { PracticePage } from '../Pages/PracticePage';
import { DataProvider } from '../Data/DataProvider';

for (const data of DataProvider.getData()) {
    test("GoToWebsite", async ({ page }) => {
        test.setTimeout(60000);
        const practicePage = new PracticePage(page);

        await practicePage.runAllTests(data.webTable, data.form);
    });
}