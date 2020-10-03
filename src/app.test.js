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
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it(`Can change the input value by clicking some number`, async () => {
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    await page.click('#digit_7');
    const result = await page.$('.result');
    const resultsValue = await (
      await result.getProperty('innerText')
    ).jsonValue();
    expect(resultsValue).toBe('7');
  });

  it(`Can reset the input value by clicking on the AC button`, async () => {
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    await page.click('#digit_5');
    await page.click('#op_AC');
    const result = await page.$('.result');
    const resultsValue = await (
      await result.getProperty('innerText')
    ).jsonValue();
    expect(resultsValue).toBe('');
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

  it('Can delete', async () => {
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    await page.click('#op_AC');
    await page.click('#digit_1');
    await page.click(`#op_plus`);
    await page.click('#digit_9');
    await page.click('#op_AC');
    await page.click('#digit_1');
    await page.click(`#op_plus`);
    await page.click('#digit_9');
    await page.click('#equal');
    const result = await page.$('.result');
    const resultsValue = await (
      await result.getProperty('innerText')
    ).jsonValue();
    expect(resultsValue).toBe('10');
  });

  it('Has working parentheses', async () => {
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    await page.click('#op_leftParentheses');
    await page.click('#digit_1');
    await page.click(`#op_plus`);
    await page.click('#digit_9');
    await page.click('#op_rightParentheses');
    await page.click(`#op_multi`);
    await page.click('#digit_2');
    await page.click('#equal');
    const result = await page.$('.result');
    const resultsValue = await (
      await result.getProperty('innerText')
    ).jsonValue();
    expect(resultsValue).toBe('20');
  });

  it('Order of operations', async () => {
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    await page.click('#digit_1');
    await page.click(`#op_plus`);
    await page.click('#digit_9');
    await page.click(`#op_multi`);
    await page.click('#digit_2');
    await page.click('#equal');
    const result = await page.$('.result');
    const resultsValue = await (
      await result.getProperty('innerText')
    ).jsonValue();
    expect(resultsValue).toBe('19');
  });

  it(`Changes the input to an 'error' string if user tries to devide by 0`, async () => {
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    await page.click('#digit_5');
    await page.click('#op_divide');
    await page.click('#digit_0');
    await page.click('#equal');
    const result = await page.$('.result');
    const resultsValue = await (
      await result.getProperty('innerText')
    ).jsonValue();
    expect(resultsValue).toBe('error');
  });
});
