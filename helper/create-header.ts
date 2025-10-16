/**
 * 
 * @param token a valid token to be used in the request if one is not provided cookies will be created from default username and password
 * @returns a header object with the token set as a cookie
 * 
 * @example 
 * import { createHeaders } from "../lib/helpers/createHeaders";
 * 
 * const headers = await createHeaders(token);
 *     const response = await request.delete(`booking/${bookingId}`, {
      headers: headers,
    });
 * 
 */
export async function createHeaders(accessSite: string, accessToken: string): Promise<RequestHeaders> {
  let requestHeaders: RequestHeaders;

  requestHeaders = {
    'x-access-site': accessSite,
    'x-access-token': accessToken,
    'content-type': "application/json", 
  };
  return requestHeaders;
}

/**
 * 
 * @returns a header object with an invalid cookie used to test negative scenarios
 * 
 * @example 
 * import { createInvalidHeaders } from "../lib/helpers/createHeaders";
 * 
 * const invalidHeader = await createInvalidHeaders();
 *     const response = await request.delete(`booking/${bookingId}`, {
      headers: invalidHeader,
    });
 * 
 */
export async function createInvalidHeaders() {
  const requestHeaders = {
    'x-access-site': 'invalid',
    'x-access-token': 'invalid',
  };

  return requestHeaders;
}

interface RequestHeaders {
  'x-access-site': string,
  'x-access-token': string,
  'content-type': string,
}