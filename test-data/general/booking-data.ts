import { expect, request } from "@playwright/test";
import { TestDataInStaging } from "../../test-data/qrh/testData";
import { DateCalc } from "../../helper/utilities";

const dateCalc = new DateCalc();

export async function createRandomBookingFlightBody(departureCode: string, arrivalCode: string) {
    const departureDate = await dateCalc.getDepartingFutureDate_Months(4, 'YYYY-MM-DD');
    const returnDate = await dateCalc.getReturnFutureDate_Months(4, 'YYYY-MM-DD');
    const searchFlightNonSOBody = {
        departure_airport_code: departureCode,
        arrival_airport_code: arrivalCode,
        currency: "GBP",
        is_round_trip: true,
        departure_date: departureDate,
        return_date: returnDate,
        adults: 1,
        cabin_class: "Economy",
        wait_time: 5000,
        ip: "54.179.58.106",
    };
    return searchFlightNonSOBody;
}

export async function createFailBookingFlightBody(departureCode: string, arrivalCode: string, departureDate: any, returnDate: any) {
    const searchFlightBadRequestBody = {
        departure_airport_code: departureCode,
        arrival_airport_code: arrivalCode,
        currency: "GBP",
        is_round_trip: true,
        departure_date: departureDate,
        return_date: returnDate,
        adults: 1,
        cabin_class: "Economy",
        wait_time: 5000,
        ip: "54.179.58.106",
    };
    return searchFlightBadRequestBody;
}

export async function createConfirmtaxRequestBody(supplierCode: string, searchId: string, flightId: string, fareBasicCode: string, bookingClassOutBound: string[], bookingClassInBound: string[]) {
    const confirmtaxBody = {
        "supplier_code": supplierCode,
        "search_id": searchId,
        "flights": [
            {
                "flight_id": flightId,
                "fare_basis_code": fareBasicCode,
                "booking_class": `${await formatBookingClass(bookingClassOutBound)}`
            },
            {
                "flight_id": flightId,
                "fare_basis_code": fareBasicCode,
                "booking_class": `${await formatBookingClass(bookingClassInBound)}`
            }
        ]
    };
    return confirmtaxBody;
}

export async function formatBookingClass(bookingClass: string[]) {
    let formatBookingClassWith1: string, formatBookingClassWith2: string, formatBookingClassWith3: string;
    // if (bookingClass.length === 2) {
    //     return formatBookingClassWith2 = `${bookingClass[0]}|${bookingClass[0]}`
    // } else if (bookingClass.length === 3) {
    //     return formatBookingClassWith3 = `${bookingClass[0]}|${bookingClass[0]}|${bookingClass[0]}`
    // } else {
    //     return formatBookingClassWith1 = `${bookingClass[0]}`
    // }
    return formatBookingClassWith1 = `${bookingClass[0]}`
}
