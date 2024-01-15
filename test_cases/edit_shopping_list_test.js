const {Builder, By, key, until} = require ('selenium-webdriver');
const fs = require('fs');
let date = new Date();


async function ShoppingListTest(){

let driver = await new Builder().forBrowser('chrome').build();

try{

    await driver.get('https://www.aldi.hu/hu/homepage.html');
    driver.manage().window().maximize()

    await new Promise(resolve => setTimeout(resolve, 2000));

    const adjustButton = await driver.findElement(By.xpath('//*[@id="onetrust-reject-all-handler"]')).click();

    const bejelentkezesButton = await driver.findElement(By.xpath('//*[@id="left_top_menu"]/ul[2]/li[2]/a[1]')).click();

    const emailPlaceholder = await driver.findElement(By.id("member_login_email"));
    await emailPlaceholder.sendKeys('antaltesztelo@gmail.com');

    const jelszoPlaceholder = await driver.findElement(By.id('member_login_password'));
    await jelszoPlaceholder.sendKeys('Tesztelo01.');
    await new Promise(resolve => setTimeout(resolve, 1000));

    const loginSubmitButton = await driver.findElement(By.id('login_submit')).click()

    await new Promise(resolve => setTimeout(resolve, 2000));

    const listamButton = await driver.findElement(By.xpath('/html/body/header/div[6]/div[1]/div[1]/div/div[2]/div[1]/a')).click()

    await new Promise(resolve => setTimeout(resolve, 2000));

    const itemToAddPlaceholder = await driver.findElement(By.id('item_to_add'));
    await itemToAddPlaceholder.sendKeys('Kenyér');
    await itemToAddPlaceholder.submit();
    await new Promise(resolve => setTimeout(resolve, 500));

    await itemToAddPlaceholder.sendKeys('Spagetti');
    await itemToAddPlaceholder.submit();
    await new Promise(resolve => setTimeout(resolve, 500));

    await itemToAddPlaceholder.sendKeys('Kifli');
    await itemToAddPlaceholder.submit();
    await new Promise(resolve => setTimeout(resolve, 500));

    await itemToAddPlaceholder.sendKeys('Pizza');
    await itemToAddPlaceholder.submit();
    await new Promise(resolve => setTimeout(resolve, 500));

    await itemToAddPlaceholder.sendKeys('Ropi');
    await itemToAddPlaceholder.submit();
    await new Promise(resolve => setTimeout(resolve, 500));

    await itemToAddPlaceholder.sendKeys('Narancs');
    await itemToAddPlaceholder.submit();
    await new Promise(resolve => setTimeout(resolve, 500));

    await itemToAddPlaceholder.sendKeys('Alma');
    await itemToAddPlaceholder.submit();
    await new Promise(resolve => setTimeout(resolve, 500));

    await itemToAddPlaceholder.sendKeys('Sajt');
    await itemToAddPlaceholder.submit();
    await new Promise(resolve => setTimeout(resolve, 500));

    await itemToAddPlaceholder.sendKeys('Banán');
    await itemToAddPlaceholder.submit();
    

    await new Promise(resolve => setTimeout(resolve, 4000));

    const deleteAllItem = await driver.findElement(By.xpath('//*[@id="add-item-wishlist"]/div/div[3]/div')).click();
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const deleteAllItem2 = await driver.findElement(By.xpath('//*[@id="mylist-delete-all"]')).click();
    await new Promise(resolve => setTimeout(resolve, 3000));

    const kijelentkezesButton = await driver.findElement(By.id('logout')).click();
    await new Promise(resolve => setTimeout(resolve, 2000));

    
    
    fs.appendFileSync('results/edit_shopping_list_test.txt', `passed ${date}\n`);
} catch(error) {
    fs.appendFileSync('results/edit_shopping_list_test.txt', `failed ${date}\n`); 


    
    

} finally {
    await driver.quit()

}
}



ShoppingListTest()