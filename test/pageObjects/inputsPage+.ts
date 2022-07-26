
import RootObject from './rootObject';



export default class Inputs extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/inputs');
    }

    async inputIsFocused() {
        const inputBox = await $('input[type=number]')
        console.log('isFocused State: ', await inputBox.isFocused())
        await inputBox.click()
        await expect(inputBox).toBeFocused()
        console.log('isFocused State: ', await inputBox.isFocused())
        await inputBox.setValue('11111');
    }



}