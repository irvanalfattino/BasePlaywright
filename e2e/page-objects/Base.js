import { expect } from '@playwright/test';

class BasePage {
    constructor(page) {
        this.page = page;
    }

    /**
     * Navigasi ke URL tertentu
     * @param {string} url - URL tujuan
     */
    async open(url) {
        await this.page.goto(url);
    }
  
    /**
     * Tunggu hingga elemen tersedia di halaman
     * @param {Locator} locator - Elemen Playwright Locator
     */
    async waitForElement(locator) {
        await locator.waitFor();
    }

    /**
     * Mengambil teks dari elemen
     * @param {Locator} locator - Elemen Playwright Locator
     * @returns {Promise<string>}
     */
    async getText(locator) {
        return await locator.textContent();
    }

    /**
     * Mengisi input field
     * @param {Locator} locator - Elemen input field
     * @param {string} text - Teks yang akan diisi
     */
    async enterText(locator, text) {
        await locator.fill(text);
    }

    /**
     * Klik elemen tertentu
     * @param {Locator} locator - Elemen yang akan diklik
     */
    async click(locator) {
        await locator.click();
    }

    /**
     * Validasi apakah elemen terlihat di halaman
     * @param {Locator} locator - Elemen Playwright Locator
     */
    async expectVisible(locator) {
        await expect(locator).toBeVisible();
    }

    /**
     * Validasi apakah elemen mengandung teks tertentu
     * @param {Locator} locator - Elemen Playwright Locator
     * @param {string} expectedText - Teks yang diharapkan
     */
    async expectText(locator, expectedText) {
        await expect(locator).toHaveText(expectedText);
    }

    /**
     * Tunggu hingga halaman memiliki URL tertentu
     * @param {string} expectedURL - URL yang diharapkan
     */
    async expectURL(expectedURL) {
        await expect(this.page).toHaveURL(expectedURL);
    }

    /**
     * Tunggu hingga elemen menghilang dari halaman
     * @param {Locator} locator - Elemen yang ditunggu hingga menghilang
     */
    async waitForElementToDisappear(locator) {
        await locator.waitFor({ state: 'hidden' });
    }

    /**
     * Ambil nilai dari atribut elemen
     * @param {Locator} locator - Elemen Playwright Locator
     * @param {string} attribute - Nama atribut
     * @returns {Promise<string | null>}
     */
    async getAttribute(locator, attribute) {
        return await locator.getAttribute(attribute);
    }

    /**
     * Ambil jumlah elemen yang cocok dengan locator
     * @param {Locator} locator - Elemen Playwright Locator
     * @returns {Promise<number>}
     */
    async getCount(locator) {
        return await locator.count();
    }

    /**
     * Pilih opsi dari dropdown
     * @param {Locator} locator - Elemen dropdown
     * @param {string} value - Nilai opsi yang dipilih
     */
    async selectOption(locator, value) {
        await locator.selectOption(value);
    }

    /**
     * Scroll ke elemen tertentu
     * @param {Locator} locator - Elemen tujuan scroll
     */
    async scrollToElement(locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    /**
     * Simpan screenshot dari halaman
     * @param {string} filePath - Path untuk menyimpan screenshot
     */
    async takeScreenshot(filePath) {
        await this.page.screenshot({ path: filePath });
    }

    /**
     * Simpan screenshot dari elemen tertentu
     * @param {Locator} locator - Elemen Playwright Locator
     * @param {string} filePath - Path untuk menyimpan screenshot
     */
    async takeElementScreenshot(locator, filePath) {
        await locator.screenshot({ path: filePath });
    }

    /**
     * Tunggu hingga loader (spinner) menghilang
     * @param {Locator} loaderLocator - Elemen loader
     */
    async waitForLoaderToDisappear(loaderLocator) {
        await loaderLocator.waitFor({ state: 'hidden' });
    }
}

export { BasePage };
