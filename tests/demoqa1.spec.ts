import { test, expect, type Page } from '@playwright/test';

test.beforeEach('Navigate to the Practice form page',async ({page}) =>{
    await page.goto("https://demoqa.com/automation-practice-form")
})