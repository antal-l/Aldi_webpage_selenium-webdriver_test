const {Builder, By, key, until} = require ('selenium-webdriver');
const fs = require('fs');
let date = new Date();


async function loginTest(){

let driver = await new Builder().forBrowser('chrome').build();

try{

    await driver.get('https://www.aldi.hu/hu/homepage.html');
    driver.manage().window().maximize()

    await new Promise(resolve => setTimeout(resolve, 2000));

    const adjustButton = await driver.findElement(By.xpath('//*[@id="onetrust-reject-all-handler"]')).click();

    const loginButton = await driver.findElement(By.xpath('//*[@id="left_top_menu"]/ul[2]/li[2]/a[1]')).click();

    const email = await driver.findElement(By.id("member_login_email"));
    await email.sendKeys('antaltesztelo@gmail.com');

    const password = await driver.findElement(By.id('member_login_password'));
    await password.sendKeys('Tesztelo01.');

    const loginSubmitButton = await driver.findElement(By.id('login_submit')).click()

    await new Promise(resolve => setTimeout(resolve, 5000));

    const logoutButton = await driver.findElement(By.id("logout")).click();

    await new Promise(resolve => setTimeout(resolve, 3000));


    fs.appendFileSync('results/login_logout_test.txt', `passed ${date}\n`);
} catch(error) {
    fs.appendFileSync('results/login_logout_test.txt', `failed ${date}\n`); 

} finally {
    await driver.quit()

}
}



loginTest()