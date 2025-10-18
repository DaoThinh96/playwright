import { getLocale } from "../../../helper/get-locale";

const english = {
    practice: 'Practice',
    testLoginPage: 'Test Login Page',
    testExceptions: 'Test Exceptions',
    submit: 'Submit',
}

const vietnamese = {

}

export const loginLocale = () => {
    return getLocale(process.env.language, english, vietnamese);
}
