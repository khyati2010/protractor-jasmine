import * as azdev from "azure-devops-node-api";

// your collection url
let orgUrl = "https://dev.azure.com/yourorgname";

let token: string = process.env.AZURE_PERSONAL_ACCESS_TOKEN; // e.g "cbdeb34vzyuk5l4gxc4qfczn3lko3avfkfqyb47etahq6axpcqha";

let authHandler = azdev.getPersonalAccessTokenHandler(token);
let connection = new azdev.WebApi(orgUrl, authHandler);
