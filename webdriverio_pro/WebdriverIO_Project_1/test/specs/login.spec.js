const LoginPage = require('../pages/login.page')

describe('Login Test',()=>{
    it('User should be login', async ()=>{
        
        browser.url('https://the-internet.herokuapp.com/login');

        await LoginPage.login('tomsmith','SuperSecretPassword!');

        await LoginPage.checkLoginConfirmation('You logged into a secure area!');
        
        // await $('#username').setValue('tomsmith');

        // await $('#password').setValue('SuperSecretPassword!');

        // await $('button[type="submit"]').click();

        // await $('#flash').getText();

        // await expect($('#flash')).toHaveTextContaining('You logged into a secure area!');

    });

})