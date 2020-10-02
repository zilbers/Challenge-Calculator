/**
 * @jest-environment node
 */
const puppeteer = require('puppeteer');

let page;
let browser;

const tests = ['plus', 'minus', 'multi', 'divide', 'modulo'];
const results = ['17', '13', '30', '7.5', '1'];

jest.setTimeout(30000);
const projectName = 'Calculator Challenge';
describe(`${projectName} - test suite`, () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({});
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });


  tests.forEach((test, index) => {
    it(`Can use ${test}`, async () => {
      await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

      await page.click('#digit_1');
      await page.click('#digit_5');
      await page.click(`#op_${test}`);
      await page.click('#digit_2');
      await page.click('#equal');
      const result = await page.$('.result');
      const resultsValue = await (
        await result.getProperty('innerText')
      ).jsonValue();
      expect(resultsValue).toBe(results[index]);
    });
  });

  //   it(`Can use modulo`, async () => {
  //     await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

  //     await page.click('#digit_1');
  //     await page.click('#digit_3');
  //     await page.click('#digit_%');
  //     await page.click('#digit_2');
  //     await page.click('#equal');
  //     const result = await page.$('.result');
  //     const resultsValue = await (
  //       await result.getProperty('innerText')
  //     ).jsonValue();
  //     expect(resultsValue).toBe(1);
  //   });
});
