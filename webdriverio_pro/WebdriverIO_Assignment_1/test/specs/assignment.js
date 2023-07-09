describe('Assignment',()=>{
    it('should have right title',()=>{
        browser.url('https://webdriver.io');
        expect(browser).toHaveTitle('Next-gen browser and mobile automation test framework for Node.js');

    });
});