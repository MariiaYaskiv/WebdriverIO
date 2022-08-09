import RootObject from './rootObject';
import { step } from "../../helpers/helper"
import { stepOptions } from '../../data/types';
import AllureReporter from '@wdio/allure-reporter';


export default class TablesPage extends RootObject {
    constructor() {
        super();
    }

    public open() {
        AllureReporter.addStep('Verify if the user can click and chose needed cell and the table will be sorted')
        return super.open('/tables');
    }

    async clickTableOneForthChild(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can click and chose needed cell and the table will be sorted',
            'Check if the user can click and chose needed cell and the table will be sorted',
            'The cell should be clicked and the table should be sorted',
            async () => {
                const rows = await $('#table1 thead tr th:nth-of-type(4)');
                await rows.click()
            }
        )
    }

    async clickTableOneThirthChild(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can click and chose needed cell and the table will be sorted',
            'Check if the user can click and chose needed cell and the table will be sorted',
            'The cell should be clicked and the table should be sorted',
            async () => {
                const rows = await $('#table1 thead tr th:nth-of-type(3)');
                await rows.click()
            }
        )
    }

    async clickTableOneSecondhChild(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can click and chose needed cell and the table will be sorted',
            'Check if the user can click and chose needed cell and the table will be sorted',
            'The cell should be clicked and the table should be sorted',
            async () => {
                const rows = await $('#table1 thead tr th:nth-of-type(2)');
                await rows.click()
            }
        )
    }

    async clickTableOneFirsthChild(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can click and chose needed cell and the table will be sorted',
            'Check if the user can click and chose needed cell and the table will be sorted',
            'The cell is clicked and the table is sorted',
            async () => {
                const rows = await $('#table1 thead tr th:nth-of-type(1)');
                await rows.click()
            }
        )
    }

    async clickTableTwoFirstChild(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can click and chose needed cell and the table will be sorted',
            'Check if the user can click and chose needed cell and the table will be sorted',
            'The cell is clicked and the table is sorted',
            async () => {
                const rows = await $('#table2 thead tr th:nth-of-type(1)');
                await rows.click()
            }
        )
    }

    async clickTableTwoSecondhChild(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can click and chose needed cell and the table will be sorted',
            'Check if the user can click and chose needed cell and the table will be sorted',
            'The cell is clicked and the table is sorted',
            async () => {
                const rows = await $('#table2 thead tr th:nth-of-type(2)');
                await rows.click()
            }
        )
    }

    async clickTableTwoThirtChild(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can click and chose needed cell and the table will be sorted',
            'Check if the user can click and chose needed cell and the table will be sorted',
            'The cell is clicked and the table is sorted',
            async () => {
                const rows = await $('#table2 thead tr th:nth-of-type(3)');
                await rows.click()
            }
        )
    }
}
