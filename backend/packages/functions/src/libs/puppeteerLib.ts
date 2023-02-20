import chrome from '@sparticuz/chrome-aws-lambda';

export const GenerateBuffer = async (content) => {
  try {
    const puppeteer = chrome.puppeteer;
    const browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
    });
    console.log('We have a browser', browser);
    const page = await browser.newPage();
    await page.setContent(content);
    console.log('We have a page', page);

    const buffer = page.screenshot({ path: 'default_image.png' });
    console.log('We have a buffer', buffer);

    await browser.close();
    return buffer;
  } catch (e) {
    throw new Error(e);
  }
};
