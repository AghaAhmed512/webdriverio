
describe('Demo test', () => {

    it('My first test', async () => {
        browser.url('https://www.google.com/');

        await $('[name="q"]').setValue('WebdriverIO');

        
        //await $('[value="Google Search"]').click();
        await $$('.gNO89b')[1].click();
        
        //browser.keys('Enter')

        browser.pause(60000);

    });
});