
  const dev = {
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-m7211f3jivwv"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://fi17h8ego4.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_YEsQg3n7J",
      APP_CLIENT_ID: "4e3os9dk8pnl7jqsmpgm388l5e",
      IDENTITY_POOL_ID: "us-east-2:3c8e9e4b-4524-4d8b-86cc-ea65a7e48b28"
    }
  };
  
  const prod = {
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-9hl4h383rg9l"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://rvasjtv038.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_IWJFYZzOn",
      APP_CLIENT_ID: "1l4e6qugqpnafoc6hnoqebc159",
      IDENTITY_POOL_ID: "us-east-2:2a4f0027-b38f-4dc6-9c1b-d0d1bbc6c708"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };