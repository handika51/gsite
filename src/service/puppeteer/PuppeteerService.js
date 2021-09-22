const puppeteer = require('puppeteer-core');
const {nanoid} = require('nanoid');


async function boldFont(page) {
    await page.keyboard.down('Control');
    await page.keyboard.press('B');
    await page.keyboard.up('Control');
}

async function underlineFont(page) {
    await page.keyboard.down('Control');
    await page.keyboard.press('U');
    await page.keyboard.up('Control');
}

async function italicFont(page) {
    await page.keyboard.down('Control');
    await page.keyboard.press('I');
    await page.keyboard.up('Control');
}

async function alignCenter(page) {
    await page.keyboard.down('Control');
    await page.keyboard.down('Shift');
    await page.keyboard.press('E');
    await page.keyboard.up('Shift');
    await page.keyboard.up('Control');
}

async function header(page, text) {
  //membuat judul
  await page.waitForSelector('#yDmH0d > div.MUd2qe.gJ9tsd > div.y3IDJd.CatYBe.Fx3kmc.fmzcZd > span > div > div > div.bWTzgc > div > div > span > div > div.rZHESd > div > div > article > section > div.LS81yb.TZTnI.IKVHqc.aVXSwc.yaqOZd.LB7kq.gk8rDe > div.zXDYWd.guoAab.mYVXT > group > div.JNdkSc-SmKAyb > div > row > div > div.oKdM2c.guoAab.row_Default > tile > div.jXK9ad-SmKAyb.v7v1sb > div > div.BdNftd', { visible: true });
  await page.click('#yDmH0d > div.MUd2qe.gJ9tsd > div.y3IDJd.CatYBe.Fx3kmc.fmzcZd > span > div > div > div.bWTzgc > div > div > span > div > div.rZHESd > div > div > article > section > div.LS81yb.TZTnI.IKVHqc.aVXSwc.yaqOZd.LB7kq.gk8rDe > div.zXDYWd.guoAab.mYVXT > group > div.JNdkSc-SmKAyb > div > row > div > div.oKdM2c.guoAab.row_Default > tile > div.jXK9ad-SmKAyb.v7v1sb > div > div.BdNftd');
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  await page.keyboard.press('Backspace');
  await page.type('div.BdNftd', text )
}

async function inputSection2(page, title, author) {
  //section2
  await page.click('#wWGgfe > div > div.GxjTuf > div:nth-child(1) > div > span > span > span')
  await page.waitForTimeout(500)
  await boldFont(page)
  await page.keyboard.type('Read ')
  await boldFont(page)
  await page.keyboard.type('and ')
  await italicFont(page)
  await page.keyboard.type('download ')
  await italicFont(page)
  await boldFont(page)
  await page.keyboard.type(title) 
  await boldFont(page)
  await page.keyboard.type(' in PDF, EPub, Mobi, Kindle online. Free book ')
  await italicFont(page)
  await page.keyboard.type('Behind Your Smiles: Eternity Publishing by '+ author)

  await italicFont(page)
  await alignCenter(page)
  await page.keyboard.press('Enter')
  await boldFont(page)
  await page.keyboard.type(title +' PDF')
  await boldFont(page)
  await page.keyboard.press('Enter')
  await page.keyboard.type('By - '+ author)
}

async function insertImg(page, link) {
  // image
  await page.waitForSelector('.d6wWde', {visible: true})
  await page.waitForTimeout(500)
  await page.click('.d6wWde')
  await page.waitForTimeout(500)
  await page.waitForSelector('span.Ix4kpb:nth-child(2) > div:nth-child(2) > div:nth-child(1)', {visible: true})
  await page.click('span.Ix4kpb:nth-child(2) > div:nth-child(2) > div:nth-child(1)')
    
  await page.waitForSelector('.OGNeob > iframe', {visible: true})
  const elementHandle = await page.$('.OGNeob > iframe');
  const frame = await elementHandle.contentFrame()
  await frame.waitForSelector('div.ThdJC:nth-child(2) > span:nth-child(2)', {visible: true})
  await frame.click('div.ThdJC:nth-child(2) > span:nth-child(2)')
  await frame.waitForSelector('.whsOnd', {visible: true})
  await frame.type('.whsOnd', link)
  await frame.waitForSelector('#yDmH0d > div.Q6HCU.IzuY1c.tJJJGe > div.H0U9m > div.WY4Fyb > div > div > div > div > div.hSF15e > div:nth-child(2)', {visible: true})
  await frame.click('div.U26fgb:nth-child(2) > span:nth-child(3) > span:nth-child(1)')
  // await page.waitForTimeout(1000)
  await page.waitForSelector('.cQgVbe > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)',{visible: true})
  await page.click('.cQgVbe > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)')
  await page.waitForTimeout(500)
  
  for (let j = 0; j<4; j++ ){
    await page.waitForTimeout(100)
    await page.keyboard.press('ArrowRight')    
  }
  await page.waitForTimeout(500)
}

async function headingLink(page, text) {
  await page.waitForTimeout(500)
  await page.waitForSelector('.zgFouf > svg:nth-child(1) > path:nth-child(1)', {visible: true})
  await page.click('.zgFouf > svg:nth-child(1) > path:nth-child(1)')
  await page.waitForTimeout(500);
  await page.keyboard.type(text)
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  await page.waitForTimeout(300);
  await page.waitForSelector('.vuEmub', {visible: true})
  await page.click('.vuEmub')
  await page.waitForTimeout(500);
  await page.waitForSelector('.nK92pf > div:nth-child(2) > div:nth-child(3)', {visible: true})
  await page.click('.nK92pf > div:nth-child(2) > div:nth-child(3)')
  await page.waitForSelector('div.W9wDc:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', {visible: true})
  await page.click('div.W9wDc:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)')
  await page.waitForTimeout(500)
  await page.type('div.W9wDc:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)','18', { delay: 10})
  await page.waitForTimeout(500)
}

async function downloadButton(page, text, link) {
  await page.waitForTimeout(500)
  await page.click('.zgFouf > svg:nth-child(1) > path:nth-child(1)')
  await page.waitForTimeout(500)
  await underlineFont(page)
  await page.waitForTimeout(200)
  await boldFont(page)
  await page.waitForTimeout(200)
  await page.keyboard.sendCharacter('⇒')
  await page.waitForTimeout(200) 
  await page.keyboard.type(' '+text+' ')
  await page.waitForTimeout(200)
  await page.keyboard.sendCharacter('⇐')
  await page.waitForTimeout(200) 
  await underlineFont(page)
  await page.waitForTimeout(200) 
  await boldFont(page)
  await page.waitForTimeout(200)
  await alignCenter(page)
  await page.waitForTimeout(200) 
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  await page.waitForTimeout(300);
  // await page.waitForSelector('.GJYBjd', {visible: true})
  // await page.click('.GJYBjd')
  // await page.waitForTimeout(300)
  
  // await page.waitForSelector('span.z80M1:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)', {visible: true})
  // await page.click('span.z80M1:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')
  // await page.waitForTimeout(500)
  await page.waitForSelector('div.W9wDc:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', {visible: true})
  await page.click('div.W9wDc:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)')
  await page.waitForTimeout(500)
  await page.type('div.W9wDc:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', '18', { delay: 200})
  await page.waitForTimeout(200)
  await page.waitForSelector('.bFhy9b > div:nth-child(12) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1) > span:nth-child(1)', { visible:true })
  await page.click('.bFhy9b > div:nth-child(12) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1) > span:nth-child(1)')
  await page.waitForTimeout(200)
  await page.keyboard.type(link)
  await page.waitForTimeout(200)
  await page.click('.Sd2wDb > div:nth-child(1) > span:nth-child(3)')
  await page.waitForTimeout(200)
}

async function main(content) {
  
  const browser = await puppeteer.launch({ 
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    userDataDir: 'C:/Users/User/AppData/Local/Google/Chrome/User Data',
    headless: false,
    defaultViewport: null,
  })
  const linkdata = [];
  let header1
  let header2 
  let title 
  let author 
  let pages 
  let publisher 
  let language 
  let isbn_10 
  let isbn_13 
  let linkimg 
  let linkDownBt 
  let textDownBt 
  let imgDownBt 
  let description 
  let tags
  const page = await browser.newPage();
  await page.goto('https://sites.google.com');
  // Open new Site
  await page.waitForSelector('div.docs-homescreen-templates-templateview-preview.docs-homescreen-templates-templateview-preview-showcase > img');
  await page.click('div.docs-homescreen-templates-templateview-preview.docs-homescreen-templates-templateview-preview-showcase > img');
  
  //header setting
  await page.waitForTimeout(500)
  await page.waitForSelector('#yDmH0d > div.MUd2qe.gJ9tsd > div.y3IDJd.CatYBe.Fx3kmc.fmzcZd > span > div > div > div.bWTzgc > div > div > span > div > div.rZHESd > div > div > article > section > div.LS81yb.TZTnI.IKVHqc.aVXSwc.yaqOZd.LB7kq.O13XJf.nyKByd > div.zXDYWd.guoAab.mYVXT > group > div.JNdkSc-SmKAyb > div > row > div > div.oKdM2c.guoAab.row_Default > tile > div.jXK9ad-SmKAyb.v7v1sb > div');
  await page.click('#yDmH0d > div.MUd2qe.gJ9tsd > div.y3IDJd.CatYBe.Fx3kmc.fmzcZd > span > div > div > div.bWTzgc > div > div > span > div > div.rZHESd > div > div > article > section > div.LS81yb.TZTnI.IKVHqc.aVXSwc.yaqOZd.LB7kq.O13XJf.nyKByd > div.zXDYWd.guoAab.mYVXT > group > div.JNdkSc-SmKAyb > div > row > div > div.oKdM2c.guoAab.row_Default > tile > div.jXK9ad-SmKAyb.v7v1sb > div');
  await page.waitForSelector('#yDmH0d > div.MUd2qe.gJ9tsd > div.y3IDJd.CatYBe.Fx3kmc.fmzcZd > span > div > div > div.bWTzgc > div > div > span > div > div.rZHESd > div > div > article > section > div.LS81yb.TZTnI.IKVHqc.aVXSwc.yaqOZd.LB7kq.O13XJf.nyKByd > div:nth-child(3) > div.Av8pHf.siiXfe > div.U26fgb.O0WRkf.oG5Srb.C0oVfc.YYHIke.i65P1d.Keh7oc.null.M9Bg4d > span > span > span.LrArxf', { visible: true });
  await page.click('#yDmH0d > div.MUd2qe.gJ9tsd > div.y3IDJd.CatYBe.Fx3kmc.fmzcZd > span > div > div > div.bWTzgc > div > div > span > div > div.rZHESd > div > div > article > section > div.LS81yb.TZTnI.IKVHqc.aVXSwc.yaqOZd.LB7kq.O13XJf.nyKByd > div:nth-child(3) > div.Av8pHf.siiXfe > div.U26fgb.O0WRkf.oG5Srb.C0oVfc.YYHIke.i65P1d.Keh7oc.null.M9Bg4d > span > span > span.LrArxf');
  await page.waitForSelector('#yDmH0d > div.MUd2qe.gJ9tsd > div.y3IDJd.CatYBe.Fx3kmc.fmzcZd > span > div > div > div.bWTzgc > div > div > span > div > div.rZHESd > div > div > article > section > div.LS81yb.TZTnI.IKVHqc.aVXSwc.yaqOZd.LB7kq.O13XJf.nyKByd > div:nth-child(3) > div:nth-child(3) > div:nth-child(5) > span > span > span.DPvwYc.rvGaTc', { visible: true });
  await page.click('#yDmH0d > div.MUd2qe.gJ9tsd > div.y3IDJd.CatYBe.Fx3kmc.fmzcZd > span > div > div > div.bWTzgc > div > div > span > div > div.rZHESd > div > div > article > section > div.LS81yb.TZTnI.IKVHqc.aVXSwc.yaqOZd.LB7kq.O13XJf.nyKByd > div:nth-child(3) > div:nth-child(3) > div:nth-child(5) > span > span > span.DPvwYc.rvGaTc');

  //atur format
  await page.waitForTimeout(500);
  await page.waitForSelector('div.ThdJC:nth-child(3)', {visible: true})
  await page.click('div.ThdJC:nth-child(3)')
  await page.waitForTimeout(500);
  await page.mouse.wheel({deltaY: 1000})
  await page.waitForSelector('div.m6xOQ:nth-child(6)', {visible: true})
  await page.click('div.m6xOQ:nth-child(6)')

  //click publish for websitename
  await page.waitForTimeout(200)
  await page.waitForSelector('.UQuaGc', {visible: true})
  await page.click('.UQuaGc')
  const weblink = `${nanoid(16)}`.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase()
  console.log(weblink)
  await page.waitForTimeout(200)
  await page.waitForSelector('.rXTzdc > div:nth-child(1) > input:nth-child(1)', {visible: true})
  await page.click('.rXTzdc > div:nth-child(1) > input:nth-child(1)')
  await page.type('.rXTzdc > div:nth-child(1) > input:nth-child(1)', weblink)
  await page.waitForSelector('.yfzDSb > svg:nth-child(1)', {visible: true})
  await page.waitForSelector('.OE6hId > div:nth-child(2)', {visible: true})
  await page.click('.OE6hId > div:nth-child(2)') 

    
  await page.waitForTimeout(2000)
  await page.waitForSelector('div.ThdJC:nth-child(1) > span:nth-child(2) > div:nth-child(1)', {visible: true})
  await page.click('div.ThdJC:nth-child(1) > span:nth-child(2) > div:nth-child(1)')
  await page.waitForTimeout(200)
  console.log(content)
  for (let i = 0; i<content.length; i++) {
    header1 = content[i].header
    header2 = header1.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s\s+/g, ' ');
    console.log(header2)
    title =  content[i].title
    author = content[i].author
    pages = content[i].pages
    publisher = content[i].publisher
    language = content[i].language
    isbn_10 = content[i]['ISBN-10']
    isbn_13 = content[i]['ISBN-13'].replace(/[^a-zA-Z0-9 ]/g, "")
    linkimg = content[i]['Front Cover']
    linkDownBt = content[i]['read online link']
    textDownBt = content[i]['read online text']
    imgDownBt = content[i]['read online img'];
    description = content[i].description
    tags = content[i].tags
    
    if (i<1) {
      await page.waitForTimeout(200)
      await page.waitForSelector('div.ThdJC:nth-child(2) > span:nth-child(2) > div:nth-child(1)', {visible: true})
      await page.click('div.ThdJC:nth-child(2) > span:nth-child(2) > div:nth-child(1)')
      await page.waitForTimeout(200)
      await page.waitForSelector('.xmAgjb > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', {visible: true})
      await page.hover('.xmAgjb > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)')
      await page.waitForTimeout(200)
      await page.waitForSelector('div.JRtysb:nth-child(3) > span:nth-child(2) > span:nth-child(1) > svg:nth-child(1)', {visible: true})
      await page.click('div.JRtysb:nth-child(3) > span:nth-child(2) > span:nth-child(1) > svg:nth-child(1)')
      await page.waitForTimeout(500)
      await page.waitForSelector('span.tHuOYd:nth-child(2) > div:nth-child(2) > div:nth-child(1)', {visible: true})
      await page.click('span.tHuOYd:nth-child(2) > div:nth-child(2) > div:nth-child(1)')
      
      await page.waitForTimeout(200)
      await page.waitForSelector('.WnONLb > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', {visible: true})
      await page.click('.WnONLb > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)')
      await page.waitForTimeout(200)
      await page.waitForSelector('.WnONLb > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', {visible: true})
      await page.keyboard.down('Control');
      await page.keyboard.press('A');
      await page.keyboard.up('Control');
      await page.keyboard.press('Backspace');

      await page.type('.WnONLb > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', header1)
      await page.waitForTimeout(200)
      await page.waitForSelector('div.HQ8yf:nth-child(1)', {visible: true})
      await page.click('div.HQ8yf:nth-child(1)')
      await page.waitForTimeout(200)
      await page.$eval('.RRvhed > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', (el) => {
        el.setAttribute('maxlength', '1000')
      })
      await page.waitForSelector('.RRvhed > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', {visible:true})
      await page.type('.RRvhed > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', header2)
      await page.waitForTimeout(200)
      await page.waitForSelector('div.HQ8yf:nth-child(2)', {visible: true})
      await page.click('div.HQ8yf:nth-child(2)')
      await page.waitForTimeout(200)
      await page.waitForSelector('div.ThdJC:nth-child(1) > span:nth-child(2) > div:nth-child(1)', {visible: true})
      await page.click('div.ThdJC:nth-child(1) > span:nth-child(2) > div:nth-child(1)')
      await page.waitForTimeout(200)
    } else {
      //jika bukan homepage
    await page.waitForTimeout(200)
    await page.waitForSelector('div.ThdJC:nth-child(2) > span:nth-child(2) > div:nth-child(1)', {visible: true})
    await page.click('div.ThdJC:nth-child(2) > span:nth-child(2) > div:nth-child(1)')
    await page.waitForTimeout(200)
    await page.waitForSelector('span.Ip8zfc > span:nth-child(1)', {visible: true})
    await page.hover('span.Ip8zfc > span:nth-child(1)')
    await page.waitForTimeout(200)
    await page.waitForSelector('.es0ex', {visible: true})
    await page.click('.es0ex')
    
    await page.waitForTimeout(200)
    
    await page.waitForSelector('.WnONLb > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', {visible: true})
    await page.click('.WnONLb > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)')
    await page.waitForTimeout(200)
    await page.waitForSelector('.WnONLb > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', {visible: true})
    await page.type('.WnONLb > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', header1)
    await page.waitForTimeout(200)
    await page.waitForSelector('div.HQ8yf:nth-child(1)', {visible: true})
    await page.click('div.HQ8yf:nth-child(1)')
    await page.waitForTimeout(200)
    await page.$eval('.RRvhed > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', (el) => {
      el.setAttribute('maxlength', '1000')
    })
    await page.waitForSelector('.RRvhed > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', {visible:true})
    await page.type('.RRvhed > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', header2)
    await page.waitForTimeout(200)
    
    await page.waitForSelector('div.HQ8yf:nth-child(2)', {visible: true})
    await page.click('div.HQ8yf:nth-child(2)')
    await page.waitForTimeout(800)
    }
    //back to insert submenu
    await page.waitForSelector('#yDmH0d > div.MUd2qe.gJ9tsd > div.vW7mGd.XM6wle.mkDbPd.M3Aaxc.NVNv2d.Y3eu4c > span > div > div.BFsh9 > div.mrslJ.ZjAUM.q21cab.H3UEIb > div:nth-child(1) > span > div', {visible: true})
    await page.click('#yDmH0d > div.MUd2qe.gJ9tsd > div.vW7mGd.XM6wle.mkDbPd.M3Aaxc.NVNv2d.Y3eu4c > span > div > div.BFsh9 > div.mrslJ.ZjAUM.q21cab.H3UEIb > div:nth-child(1) > span > div')
    await page.waitForTimeout(200)
    
    await header(page, header1);
    await inputSection2(page, title, author);
    await insertImg(page, linkimg);
    
    

    //section3
    await page.mouse.wheel({deltaY: 300})
    await page.waitForTimeout(500)
    await page.mouse.wheel({deltaY: 200})
    await page.click('.zgFouf > svg:nth-child(1) > path:nth-child(1)')
    await page.waitForTimeout(500)
    await page.keyboard.type('√')
    await page.waitForTimeout(200)
    await page.keyboard.type('PDF | ')
    await page.waitForTimeout(200)
    await page.keyboard.sendCharacter('√')
    await page.waitForTimeout(200)
    await page.keyboard.type('KINDLE | ')
    await page.waitForTimeout(200)
    await page.keyboard.sendCharacter('√')
    await page.waitForTimeout(200)
    await page.keyboard.type('EPUB')
    await alignCenter(page)
    
    await page.click('.zgFouf > svg:nth-child(1) > path:nth-child(1)')
    await page.waitForTimeout(500)
    await boldFont(page)
    await page.waitForTimeout(100)
    await page.keyboard.type('⇓⇓⇓')
    await page.waitForTimeout(100)
    await boldFont(page)
    await page.waitForTimeout(100)
    await alignCenter(page)


    //download button upper
    await downloadButton(page, textDownBt, linkDownBt)
    
    await headingLink(page, 'BOOK DETAILS:')
    //Book details
    await page.mouse.wheel({deltaY: 250})
    await page.waitForSelector('.cQgVbe > div:nth-child(2) > div:nth-child(1) > div:nth-child(4)', {visible: true})
    await page.waitForTimeout(500)
    await page.waitForSelector('.zgFouf > svg:nth-child(1) > path:nth-child(1)', {visible: true})
    await page.click('.zgFouf > svg:nth-child(1) > path:nth-child(1)')
    await page.waitForTimeout(500);
    await page.keyboard.type('Title : ')
    await boldFont(page)
    await page.keyboard.type(title)
    await boldFont(page)
    await page.keyboard.press('Enter')
    
    await page.keyboard.type('Author : ')
    await page.keyboard.type(author)
    await page.keyboard.press('Enter')
    
    await page.keyboard.type('Pages : ')
    await page.keyboard.type(pages)
    await page.keyboard.type(' pages')
    await page.keyboard.press('Enter')
    
    await page.keyboard.type('Publisher : ')
    await page.keyboard.type(publisher)
    await page.keyboard.press('Enter')
    await page.mouse.wheel({deltaY: 200})
    await page.keyboard.type('Language : ')
    await page.keyboard.type(language)
    await page.keyboard.press('Enter')
    
    await page.keyboard.type('ISBN-10 : ')
    await page.keyboard.type(isbn_10)
    await page.keyboard.press('Enter')
    await page.mouse.wheel({deltaY: 300})
    await page.keyboard.type('ISBN-13 : ')
    await page.keyboard.type(isbn_13)
    await page.keyboard.press('Enter')
    await page.mouse.wheel({deltaY: 300})
    await page.waitForTimeout(200)
    
    await page.mouse.wheel({deltaY: 300})
    await page.click('.zgFouf > svg:nth-child(1) > path:nth-child(1)')
    await page.waitForTimeout(200)
    await boldFont(page)
    await page.waitForTimeout(100)
    await page.keyboard.type('⇓⇓⇓')
    await page.waitForTimeout(100)
    await boldFont(page)
    await page.waitForTimeout(100)
    await alignCenter(page)

    await insertImg(page, imgDownBt);
    await page.waitForTimeout(200)
    await page.waitForSelector('.bFhy9b > div:nth-child(3) > div:nth-child(1)', { visible: true })
    await page.click('.bFhy9b > div:nth-child(3) > div:nth-child(1)')
    await page.waitForTimeout(500)
    await page.waitForSelector('.YTWiWc > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', {visible: true})
    await page.click('.YTWiWc > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)')
    await page.waitForTimeout(200)
    await page.keyboard.type(linkDownBt)
    await page.waitForTimeout(200)
    await page.click('.Sd2wDb > div:nth-child(1)')
    await page.waitForTimeout(200)

    //heading link2
    await headingLink(page, title +' BY '+ author)
    
    //keterangan2
    await page.waitForTimeout(200)
    await page.waitForSelector('.zgFouf > svg:nth-child(1) > path:nth-child(1)', {visible: true})
    await page.click('.zgFouf > svg:nth-child(1) > path:nth-child(1)')
    await page.waitForTimeout(200);
    await page.keyboard.type(description)
    await page.waitForTimeout(200);

    //subheading
    await page.waitForTimeout(200)
    await page.waitForSelector('.zgFouf > svg:nth-child(1) > path:nth-child(1)', {visible: true})
    await page.click('.zgFouf > svg:nth-child(1) > path:nth-child(1)')
    await page.waitForTimeout(200);
    await page.keyboard.type(title +' by '+ author)
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.waitForTimeout(300);
    await page.waitForSelector('.vuEmub', {visible: true})
    await page.click('.vuEmub')
    await page.waitForTimeout(200);
    await page.waitForSelector('.nK92pf > div:nth-child(2) > div:nth-child(4)', {visible: true})
    await page.click('.nK92pf > div:nth-child(2) > div:nth-child(4)')
    await page.waitForTimeout(500)

    //Tags
    await page.waitForTimeout(200)
    await page.waitForSelector('.zgFouf > svg:nth-child(1) > path:nth-child(1)', {visible: true})
    await page.click('.zgFouf > svg:nth-child(1) > path:nth-child(1)')
    await page.waitForTimeout(200);
    await page.keyboard.type('Tags: '+ tags)

    //click publish
    await page.waitForTimeout(200)
    await page.waitForSelector('.UQuaGc', {visible: true})
    await page.click('.UQuaGc')
    await page.waitForSelector('.jNgCIc > iframe:nth-child(2)', {visible: true})
    await page.click('.jzUkrb > div:nth-child(2)')


    //copy link
    await page.waitForTimeout(200)
    await page.waitForSelector('.odraff > svg:nth-child(1)',{visible: true})
    await page.click('.odraff > svg:nth-child(1)')
    await page.waitForSelector('.ocNfZ > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', {visible:true})
    let weblink1 = await page.$eval('.ocNfZ > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)', el => {return el.getAttribute('value')})
    let weblink2 = {link: weblink1}
    console.log(weblink2)
    linkdata.push(weblink2)
    console.log(linkdata)
    await page.waitForTimeout(200)
    await page.waitForSelector('.VY7JQd > div:nth-child(1) > span:nth-child(2) > span:nth-child(1) > svg:nth-child(1)', {visible: true})
    await page.click('.VY7JQd > div:nth-child(1) > span:nth-child(2) > span:nth-child(1) > svg:nth-child(1)')
  }
  return linkdata;
};

module.exports = {
  main
}

