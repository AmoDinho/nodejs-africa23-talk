import chrome from 'chrome-aws-lambda';

export const GenerateBuffer = async (content) => {
  try {
    const puppeteer = chrome.puppeteer;
    const browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
    });

    const page = await browser.newPage();
    await page.setContent(content);

    const buffer = page.screenshot();
    await browser.close();
    return buffer;
  } catch (e) {
    throw new Error(e);
  }
};
