const path = require("path");
const OpenAPI = require("openapi-typescript-codegen");

const OpenAPIDocURL = {
  LOCAL: "http://localhost:3000/api-json",
};

const OPENAPI_DOC_URL = OpenAPIDocURL.LOCAL;

async function generateApiClient(doc, outputPath) {
  await OpenAPI.generate({
    input: doc,
    useUnionTypes: true,
    httpClient: OpenAPI.HttpClient.FETCH,
    output: outputPath,
  });

  console.info(`Api Client was generated into ${outputPath}`);
}

const GENERATED_CLIENT_FOLDER_PATH = path.resolve(
  __dirname,
  "..",
  "src/api-client/generated/generated-client",
);

generateApiClient(OPENAPI_DOC_URL, GENERATED_CLIENT_FOLDER_PATH);
