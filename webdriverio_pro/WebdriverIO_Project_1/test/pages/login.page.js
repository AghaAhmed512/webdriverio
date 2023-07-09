class LoginPage{

    get loctorForUsernmae(){
        return $('#username');
    }
    get loctorForPassword(){
        return $('#password');
    }
    get loctorForLoginButton(){
        return $('button[type="submit"]');
    }
    get loctorForLoginConfirmation(){
        return $('#flash');
    }

    async login(username, password){
        await this.loctorForUsernmae.setValue(username);
        await this.loctorForPassword.setValue(password);
        await this.loctorForLoginButton.click()
    }

    async checkLoginConfirmation(message){
        await expect(this.loctorForLoginConfirmation).toHaveTextContaining(message);
    }

}

module.exports = new LoginPage();