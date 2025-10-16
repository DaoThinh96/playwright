import { createJsonSchema } from "../helper/schema-helper-functions";
import { expect } from "@playwright/test";
import Ajv from "ajv";

/**
 * Validates an object against a JSON schema.
 *
 * @param {string} fileName - The first part of the name of the JSON schema file. The full name will be `${fileName}_schema.json`.
 * @param {string} filePath - The path to the directory containing the JSON schema file.
 * @param {object} body - The object to validate against the JSON schema.
 * @param {boolean} [createSchema=false] - Whether to create the JSON schema if it doesn't exist.
 */
export async function validateJsonSchema(fileName: string, filePath: string, body: object, createSchema = false) {
  const jsonName = fileName;
  const path = filePath;

  if (createSchema) {
    await createJsonSchema(jsonName, path, body);
  }

  const existingSchema = require(`../.api/${path}/${jsonName}.json`);

  const ajv = new Ajv({ allErrors: false });
  const validate = ajv.compile(existingSchema);
  const validRes = validate(body);

  if (!validRes) {
    console.log("SCHEMA ERRORS:", JSON.stringify(validate.errors), "\nRESPONSE BODY:", JSON.stringify(body));
  } else {
    expect(validRes).toBe(true);
    console.log("SCHEMA IS CORRECT")
  }
}