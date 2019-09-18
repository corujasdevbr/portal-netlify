export default {
    cognito: {
        REGION: 'ap-south-1',
        USER_POOL_NAME: 'portal-user-pool',
        USER_POOL_ID: 'ap-south-1_rSkof1o6t',
        USER_POOL_ARN:
            'arn:aws:cognito-idp:ap-south-1:200466710290:userpool/ap-south-1_rSkof1o6t',
        APP_NAME: 'portal-app-client',
        APP_CLIENT_ID: '6igru3nnjp37utheuisf56sg3q',
        DOMAIN: 'https://pepper-portal.auth.ap-south-1.amazoncognito.com',
        IDENTITY_POOL_NAME: 'portalIdentityPool',
        IDENTITY_POOL_ID: 'ap-south-1:b5ced252-0f47-4950-bd79-e30cd2d5cbe2'
    },
    s3: {
        BUCKET: 'pepper-portal-s3-bucket',
        REGION: 'ap-south-1'
    },
    apiGateway: {
        REGION: 'ap-south-1',
        URL: 'https://dyymvffsc5.execute-api.ap-south-1.amazonaws.com/prod'
    }
};
