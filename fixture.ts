import { test as base } from '@playwright/test'

type MyFixture = {
    helloWord: any
}

export const test = base.extend<MyFixture>({
    helloWord: async ({}, use) => {
       const value = 'Good bye'
       await use(value)
    }
})