/**
 * @jest-environment node
 */
const puppeteer = require('puppeteer');
// const nock = require('nock');
// const useNock = require('nock-puppeteer');

let page;
let browser;

jest.setTimeout(30000);
const projectName = 'Calculator Challenge';
describe(`${projectName} - test suite`, () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      slowMo: 50,
      headless: false,
    });
    page = await browser.newPage();

    afterAll(async () => {
      await browser.close();
    });

    test('Can use +', async () => {
      await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

      const digits = await page.$$('.digits');
      const operations = await page.$$('.operations');

      await page.click('#1');
      await page.click('#2');
      await page.click('#+');
      await page.click('#1');
      const result = await page.$$('.result');
      expect(result.value).toBe(13);
    });
  });
});
