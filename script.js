const puppeteer = require('puppeteer');
const {  QueryHandler } = require('query-selector-shadow-dom/plugins/puppeteer');
let informationsTermooo

(async () => {
  await puppeteer.registerCustomQueryHandler('shadow', QueryHandler);
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  const navigationPromise = page.waitForNavigation({waitUntil: "domcontentloaded"});
  await page.goto('https://term.ooo/')
  await navigationPromise;

  
  await page.waitForSelector('.example');
  await page.click('.example');
  await navigationPromise;
  await page.waitForSelector('shadow/#kbd_c');
  await page.click('shadow/#kbd_c');
  await page.click('shadow/#kbd_a');
  await page.click('shadow/#kbd_r');
  await page.click('shadow/#kbd_r');
  await page.click('shadow/#kbd_o');
  await page.click('shadow/#kbd_enter');

  //
  // code for login
  //

  await page.waitFor( 5000 );
  const localStorageData = await page.evaluate(() => {
    let json = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      json[key] = localStorage.getItem(key);
    }
    return json;
  });

  const termo = JSON.parse(localStorageData["termo"])["state"][0]["solution"]
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  await page.click('shadow/#kbd_'+termo[0]);
  await page.click('shadow/#kbd_'+termo[1]);
  await page.click('shadow/#kbd_'+termo[2]);
  await page.click('shadow/#kbd_'+termo[3]);
  await page.click('shadow/#kbd_'+termo[4]);
  await page.click('shadow/#kbd_enter');

  await page.waitFor( 5000 );
  await page.waitForSelector('shadow/#all');
  await page.click('shadow/#all');
  await page.click('shadow/#duo');
  await page.waitFor( 5000 );
  await page.click('shadow/#all');
  await page.click('shadow/#kbd_c');
  await page.click('shadow/#kbd_a');
  await page.click('shadow/#kbd_r');
  await page.click('shadow/#kbd_r');
  await page.click('shadow/#kbd_o');
  await page.click('shadow/#kbd_enter');

  await page.waitFor( 5000 );
  const localStorageDataDuo = await page.evaluate(() => {
    let json = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      json[key] = localStorage.getItem(key);
    }
    return json;
  });

  const duo = [JSON.parse(localStorageDataDuo["duo"])["state"][0]["solution"]
      .normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    JSON.parse(localStorageDataDuo["duo"])["state"][1]["solution"]
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")]

  await page.waitFor( 5000 );
  await page.click('shadow/#kbd_'+duo[0][0]);
  await page.click('shadow/#kbd_'+duo[0][1]);
  await page.click('shadow/#kbd_'+duo[0][2]);
  await page.click('shadow/#kbd_'+duo[0][3]);
  await page.click('shadow/#kbd_'+duo[0][4]);
  await page.click('shadow/#kbd_enter');
  await page.waitFor( 5000 );
  await page.click('shadow/#kbd_'+duo[1][0]);
  await page.click('shadow/#kbd_'+duo[1][1]);
  await page.click('shadow/#kbd_'+duo[1][2]);
  await page.click('shadow/#kbd_'+duo[1][3]);
  await page.click('shadow/#kbd_'+duo[1][4]);
  await page.click('shadow/#kbd_enter');

  await page.waitFor( 5000 );
  await page.click('shadow/#quatro');
  await page.waitFor( 5000 );
  await page.click('shadow/#all');
  await page.click('shadow/#kbd_c');
  await page.click('shadow/#kbd_a');
  await page.click('shadow/#kbd_r');
  await page.click('shadow/#kbd_r');
  await page.click('shadow/#kbd_o');
  await page.click('shadow/#kbd_enter');

  await page.waitFor( 5000 );
  const localStorageDataQuarteto = await page.evaluate(() => {
    let json = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      json[key] = localStorage.getItem(key);
    }
    return json;
  });

  const  quatro = [JSON.parse(localStorageDataQuarteto["quatro"])["state"][0]["solution"]
      .normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    JSON.parse(localStorageDataQuarteto["quatro"])["state"][1]["solution"]
      .normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    JSON.parse(localStorageDataQuarteto["quatro"])["state"][2]["solution"]
      .normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    JSON.parse(localStorageDataQuarteto["quatro"])["state"][3]["solution"]
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")]

  informationsTermooo = {termo, duo, quatro}

  console.log(informationsTermooo)

  await browser.close()
})()
