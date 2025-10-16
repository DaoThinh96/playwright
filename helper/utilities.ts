import dayjs from "dayjs";
import ENV from "../helper/env-config";
import { chromium, request, expect } from "@playwright/test";
export class DateCalc {
  async getDepartingFutureDate_Months(monthValue: number, dateFormat: string = 'DD MMM YYYY') {
    let departingDate = dayjs().add(2, 'days').add(monthValue, 'months');
    return departingDate.format(dateFormat);
  }

  async getReturnFutureDate_Months(monthValue: number, dateFormat: string = 'DD MMM YYYY') {
    let returningDate = dayjs().add(6, 'days').add(monthValue, 'months');
    return returningDate.format(dateFormat);
  }

  async getDepartingPastDate_Months(monthValue: number, dateFormat: string = 'DD MMM YYYY') {
    let departingPastDate = dayjs().subtract(6, 'days').subtract(monthValue, 'months');
    return departingPastDate.format(dateFormat);
  }

  async getReturnPastDate_Months(monthValue: number, dateFormat: string = 'DD MMM YYYY') {
    let returningPastDate = dayjs().subtract(2, 'days').subtract(monthValue, 'months');
    return returningPastDate.format(dateFormat);
  }
}

export async function getAuthToken(username?: string, password?: string, url?: string) {
  const contextRequest = await request.newContext();
  const response = await contextRequest.post(url + "/login", {
    data: {
      email: username,
      password: password,
    },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  return body.data.auth_token;
}
