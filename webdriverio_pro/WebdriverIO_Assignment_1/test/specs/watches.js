// import { expect as chaiExpect } from "chai";

describe('watches',()=>{
    it('should show banner',()=>{
        browser.url('https://www.ebay.com/sch/260324/i.html?_nkw=watch+men&_sacat=260324&_sop=12');
        const banner = $('.srp-1p');
        expect(banner).toBeDisplayed(); 

    });
    it('should show banner title',()=>{
        const titleText = $('.srp-1p__title');
        expect(titleText).toHaveTextContaining('Authenticity Guarantee on luxury watches');

    });
    it('Should contain link on learn more and verify its clickable',() => {
       const learnMore = $('.srp-1p__cta');
       expect(learnMore).toBeClickable();
       expect(learnMore).toHaveLinkContaining('/fashion/');

    });
    it('should click on learn more and verify new url',()=>{
        const learnMore = $('.srp-1p__cta');
        learnMore.click();

        // const url = browser.getUrl();
        // chaiExpect(url).to.include('/fashion/');
       
        expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/watches-authenticity-guarantee')
        


    });

});