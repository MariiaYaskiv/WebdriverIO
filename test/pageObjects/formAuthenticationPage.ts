import RootObject from './rootObject';
import { expect } from 'chai';


export default class FormAuthentication extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/login');
    }

    private get inputUsername() { return $('#username'); }
    private get inputPassword() { return $('#password'); }
    private get btnSubmit() { return $('button[type="submit"]'); }
    public get message() { return $('.flash'); }

    public async putUsernameAndPassword(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);

    }
    public async buttonClick() {
        await this.btnSubmit.click();
    }

    async errorMessage() {
        const errorMessage = await $('#flash error')
        await expect(errorMessage).toHaveTextContaining('Your username is invalid!')
    }


}
