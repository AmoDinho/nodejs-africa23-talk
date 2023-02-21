import chromium from '@sparticuz/chrome-aws-lambda';

export const GenerateBuffer = async (content) => {
  try {
    const puppeteer = chromium.puppeteer;
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
    });
    console.log('We have a browser', browser);
    const page = await browser.newPage();
    await page.setContent(content);
    console.log('We have a page', page);

    const buffer = await page.screenshot({ path: 'default_image.png' });
    console.log('We have a buffer', buffer);
    return buffer;
    await browser.close();
  } catch (e) {
    throw new Error(e);
  }
};
