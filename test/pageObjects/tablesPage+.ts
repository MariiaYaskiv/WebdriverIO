import RootObject from './rootObject';



export default class TablesPage extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/tables');
    }

    async clickTableOneForthChild() {
        const rows = await $('#table1 thead tr th:nth-of-type(4)');
        await rows.click()
    }

    async clickTableOneThirthChild() {
        const rows = await $('#table1 thead tr th:nth-of-type(3)');
        await rows.click()
    }

    async clickTableOneSecondhChild() {
        const rows = await $('#table1 thead tr th:nth-of-type(2)');
        await rows.click()
    }

    async clickTableOneFirsthChild() {
        const rows = await $('#table1 thead tr th:nth-of-type(1)');
        await rows.click()
    }

    async clickTableTwoFirstChild() {
        const rows = await $('#table2 thead tr th:nth-of-type(1)');
        await rows.click()
    }

    async clickTableTwoSecondhChild() {
        const rows = await $('#table2 thead tr th:nth-of-type(2)');
        await rows.click()
    }

    async clickTableTwoThirtChild() {
        const rows = await $('#table2 thead tr th:nth-of-type(3)');
        await rows.click()
    }

    //async clickTableTwoForthChild() {
    // const rows = await $('#table2 thead tr th:nth-of-type(4)');
    // await rows.click()
    //}

}
