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
    const errorDetails = JSON.stringify(validate.errors, null, 2);
    const responseBody = JSON.stringify(body, null, 2);

    console.error("SCHEMA VALIDATION FAILED");
    console.error("Errors:", errorDetails);
    console.error("Response Body:", responseBody);

    throw new Error(`Schema validation failed:\n${errorDetails}`);
  }

  console.log("SCHEMA IS CORRECT");
  return true;
}