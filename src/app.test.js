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
  });

  afterAll(async () => {
    await browser.close();
  });

  it('Can use +', async () => {
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

    await page.click('#digit_1');
    await page.click('#digit_2');
    await page.click('#op_plus');
    await page.click('#digit_1');
    await page.click('#equal');
    const result = await page.$('.result');
    const resultsValue = await (await result.getProperty('innerText')).jsonValue();
    expect(resultsValue).toBe("13");
  });
});
