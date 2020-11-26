const puppeteer = require("puppeteer");
const fs = require("fs");

var masjidnoorData,
  jamimosqueData,
  masjidhidayaData,
  didsburymosqueData,
  portsmouthcentralmosqueData,
  filePath = "public/data/mosqueData.json";

var scrapeit = async function scrapeSite() {
  console.log("Scraping websites...");
  mosqueList = [
    "http://portsmouthjamimosque.co.uk/",
    "https://didsburymosque.com/",
    "https://masjidenoor.com/",
    "https://masjidehidayah.org.uk/",
    "http://www.portsmouthcentralmasjid.com/",
  ];
  for (let i = 0; i < mosqueList.length; i++) {
    url = mosqueList[i];
    let browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    switch (url) {
      case "http://portsmouthjamimosque.co.uk/":
        console.log(url);
        jamimosque(page);
        break;
      case "https://didsburymosque.com/":
        console.log(url);
        didsburymosque(page);
        break;
      case "https://masjidenoor.com/":
        console.log(url);
        masjidnoor(page);
        break;
      case "https://masjidehidayah.org.uk/":
        console.log(url);
        masjidhidaya(page);
        break;
      case "http://www.portsmouthcentralmasjid.com/":
        console.log(url);
        portsmouthcentralmosque(page);
        break;
    }
  }
  console.log("Scraping finished. Writing to file...");
};

async function jamimosque(page) {
  let data = await page.evaluate(() => {
    let fajr = document.querySelector("body > main > section.section.background-dark > div > div > div.s-12.m-12.l-4.margin-m-bottom.prayer-times > div:nth-child(5) > div:nth-child(3)").innerText;
    let zuhr = document.querySelector( "body > main > section.section.background-dark > div > div > div.s-12.m-12.l-4.margin-m-bottom.prayer-times > div:nth-child(6) > div:nth-child(3)").innerText;
    let asr = document.querySelector("body > main > section.section.background-dark > div > div > div.s-12.m-12.l-4.margin-m-bottom.prayer-times > div:nth-child(7) > div:nth-child(3)").innerText;
    let maghrib = document.querySelector("body > main > section.section.background-dark > div > div > div.s-12.m-12.l-4.margin-m-bottom.prayer-times > div:nth-child(8) > div:nth-child(2)").innerText;
    let esha = document.querySelector("body > main > section.section.background-dark > div > div > div.s-12.m-12.l-4.margin-m-bottom.prayer-times > div:nth-child(9) > div:nth-child(3)").innerText;
    return {
      city: "Portsmouth",
      name: "jamimosque",
      longitude: -1.0817852,
      latitude: 50.7941668,
      fajr,
      zuhr,
      asr,
      maghrib,
      esha,
    };
  });
  jamimosqueData = data;
}

async function didsburymosque(page) {
  let data = await page.evaluate(() => {
    let fajr = document.querySelector("body > section.main-section > div.container > div > div > div.col-md-4.col-xs-12.col-sm-12.nopadding.pTimes > div > div > table > tbody > tr:nth-child(3) > td.jamah").innerHTML;
    let zuhr = document.querySelector("body > section.main-section > div.container > div > div > div.col-md-4.col-xs-12.col-sm-12.nopadding.pTimes > div > div > table > tbody > tr:nth-child(5) > td.jamah").innerHTML;
    let asr = document.querySelector("body > section.main-section > div.container > div > div > div.col-md-4.col-xs-12.col-sm-12.nopadding.pTimes > div > div > table > tbody > tr:nth-child(6) > td.jamah").innerHTML;
    let maghrib = document.querySelector("body > section.main-section > div.container > div > div > div.col-md-4.col-xs-12.col-sm-12.nopadding.pTimes > div > div > table > tbody > tr:nth-child(7) > td.jamah").innerHTML;
    let esha = document.querySelector("body > section.main-section > div.container > div > div > div.col-md-4.col-xs-12.col-sm-12.nopadding.pTimes > div > div > table > tbody > tr:nth-child(8) > td.jamah").innerHTML;
    return {
      city: "Manchester",
      name: "didsburymosque",
      longitude: -2.2490131,
      latitude: 53.4227222,
      fajr,
      zuhr,
      asr,
      maghrib,
      esha,
    };
  });
  didsburymosqueData = data;
}

async function masjidnoor(page) {
  let data = await page.evaluate(() => {
    let fajr = document.querySelector("#cycle-slideshow > div > table > tbody > tr:nth-child(7) > td:nth-child(3)").innerText;
    let zuhr = document.querySelector("#cycle-slideshow > div > table > tbody > tr:nth-child(9) > td:nth-child(3)").innerText;
    let asr = document.querySelector("#cycle-slideshow > div > table > tbody > tr:nth-child(11) > td:nth-child(3)").innerText;
    let maghrib = document.querySelector("#cycle-slideshow > div > table > tbody > tr:nth-child(13) > td:nth-child(3)").innerText;
    let esha = document.querySelector("#cycle-slideshow > div > table > tbody > tr:nth-child(15) > td:nth-child(3)").innerText;
    return {
      city: "Manchester",
      name: "masjidhidaya",
      longitude: -2.3350271,
      latitude: 52.6461168,
      fajr,
      zuhr,
      asr,
      maghrib,
      esha,
    };
  });
  masjidnoorData = data;
}

async function masjidhidaya(page) {
  let data = await page.evaluate(() => {
    let fajr = document.querySelector("#schedule-today > table > tbody > tr:nth-child(2) > td:nth-child(3)").innerText;
    let zuhr = document.querySelector("#schedule-today > table > tbody > tr:nth-child(4) > td:nth-child(3)").innerText;
    let asr = document.querySelector("#schedule-today > table > tbody > tr:nth-child(5) > td:nth-child(3)").innerText;
    let maghrib = document.querySelector("#schedule-today > table > tbody > tr:nth-child(6) > td:nth-child(3)").innerText;
    let esha = document.querySelector("#schedule-today > table > tbody > tr:nth-child(7) > td:nth-child(3)").innerText;
    return {
      city: "Manchester",
      name: "masjidnoor",
      longitude: -2.2655507,
      latitude: 53.460853,
      fajr,
      zuhr,
      asr,
      maghrib,
      esha,
    };
  });
  masjidhidayaData = data;
}

async function portsmouthcentralmosque(page) {
  let data = await page.evaluate(() => {
    let fajr = document.querySelector("#table > tbody > tr:nth-child(2) > td:nth-child(3) > span").innerText;
    let zuhr = document.querySelector("#table > tbody > tr:nth-child(3) > td:nth-child(3) > span").innerText;
    let asr = document.querySelector("#table > tbody > tr:nth-child(4) > td:nth-child(3) > span").innerText;
    let maghrib = document.querySelector("#table > tbody > tr:nth-child(5) > td:nth-child(3) > span").innerText;
    let esha = document.querySelector("#table > tbody > tr:nth-child(6) > td:nth-child(3) > span").innerText;
    return {
      city: "Portsmouth",
      name: "portsmouthcentralmosque",
      longitude: -1.0795891,
      latitude: 50.7980541,
      fajr,
      zuhr,
      asr,
      maghrib,
      esha,
    };
  });
  portsmouthcentralmosqueData = data;
  parse();
}

function parse() {
  mosques = {
    jamimosqueData,
    portsmouthcentralmosqueData,
    didsburymosqueData,
    masjidhidayaData,
    masjidnoorData,
  };
  jsonData = JSON.stringify(mosques);
  fs.writeFile(filePath, jsonData, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Written to file!");
    }
  });
}
module.exports = scrapeit;
