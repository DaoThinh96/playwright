import { test } from "../fixture";
import { describe } from "node:test";

describe("Demo feature", async ({}) => {
    test('demo', async ({helloWord}) => {
        console.log('Where is my candy?')
        console.log(helloWord)
    });
})
