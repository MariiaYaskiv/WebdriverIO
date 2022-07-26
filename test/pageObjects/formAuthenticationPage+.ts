import RootObject from './rootObject';



export default class FormAuthentication extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/login');
    }

    get inputUsername() { return $('#username'); }
    get inputPassword() { return $('#password'); }
    get btnSubmit() { return $('button[type="submit"]'); }
    get message() { return $('.flash error'); }

    async pageName() {
        let pageElement = await $('h2');
            await expect(pageElement).toExist()
            await expect(pageElement).toBeDisplayed()
            await expect(pageElement).toHaveTextContaining('Login Page')
      }

    async putUsernameAndPassword(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);

    }
    async buttonClick() {
        await this.btnSubmit.click();
    }

    async errorMessage(text) {
        const errorMessage = await $('div [class="flash error"]');
        await expect(errorMessage).toHaveTextContaining(text)
    }


}
