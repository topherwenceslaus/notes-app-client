export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-uploads-topher"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://4iia6dxg95.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_gSUBlKWh8",
      APP_CLIENT_ID: "5rt06sk4s4vrrnol2qahcufvfr",
      IDENTITY_POOL_ID: "us-east-2:f2a441eb-4c46-47ae-ae5a-5a320efc9fd9"
    }
  };