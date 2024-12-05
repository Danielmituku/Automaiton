import {test, expect} from '@playwright/test'

test('Navigate to the link', async ({page})=>{
    await page.goto('https://auditorium.ai/')
    await expect(page).toHaveTitle(/Auditorium/)
}) 