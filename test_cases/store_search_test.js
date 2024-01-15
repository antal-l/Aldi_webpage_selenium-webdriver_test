const {Builder, By, key, until} = require ('selenium-webdriver');
const fs = require('fs');
let date = new Date();


async function StoreSearchTest(){

let driver = await new Builder().forBrowser('chrome').build();

try{

    await driver.get('https://www.aldi.hu/hu/homepage.html');
    driver.manage().window().maximize();

    await new Promise(resolve => setTimeout(resolve, 2000));

    const adjustButton = await driver.findElement(By.xpath('//*[@id="onetrust-reject-all-handler"]')).click();

    const storeFinder = await driver.findElement(By.xpath('//*[@id="left_top_menu"]/div/nav/ul/li[1]/a')).click();

    await driver.executeScript("window.scrollBy(0,500)")
    

    const inputStoreSearch = await driver.findElement(By.id('input__store_search'));
    await inputStoreSearch.sendKeys('1021');
    await new Promise(resolve => setTimeout(resolve, 500));

    
    const cookieEnabledButton = await driver.findElement(By.xpath('/html/body/div[10]/div/button'));
    await new Promise(resolve => setTimeout(resolve, 500));
    await cookieEnabledButton.click();

    await new Promise(resolve => setTimeout(resolve, 1500));

    const searchSubmit = await driver.findElement(By.xpath('//*[@id="storeSearchForm"]/div/div[1]/button')).click();
    await new Promise(resolve => setTimeout(resolve, 3000));

    await inputStoreSearch.clear();
    
    await inputStoreSearch.sendKeys('1133');
    await new Promise(resolve => setTimeout(resolve, 1000));
    const searchSubmit1 = await driver.findElement(By.xpath('//*[@id="storeSearchForm"]/div/div[1]/button')).click();
    
    
    await new Promise(resolve => setTimeout(resolve, 6000));  



    fs.appendFileSync('results/store_search_test.txt', `passed ${date}\n`);
} catch(error) {
    fs.appendFileSync('results/store_search_test.txt', `failed ${date}\n`); 

} finally {
    await driver.quit()

}
}



StoreSearchTest()

    
    

    

    
    
    


    

    

