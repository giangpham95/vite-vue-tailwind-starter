import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('App', () => {
  test('should have base url', async ({ page }) => {
    expect(page.url()).toBe('http://localhost:8888/')
  })
})
