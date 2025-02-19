/** **********************************************************************
                            DISCLAIMER

SAMPLE CODE - NOT FOR PRODUCTION


*********************************************************************** */


// -- AWS AMPLIFY CONFIGURATION PARAMETERS --

const AmplifyConfig = {
//Test API made for the FIT form - will not always be active but this is the format you would use to link additional APIs
  API: {
    endpoints: [
      {
        name: "fitAPI",
        endpoint: " https://b44amu10a7.execute-api.us-east-1.amazonaws.com/rest/",
        //  endpoint: "https://k7m1bmbmqj.execute-api.us-east-1.amazonaws.com/prod",
        "region": "us-east-1"

      }
    ]
  },
  // Add Cognito Information Here:
  Auth: {

    identityPoolId: 'us-west-2:e4060c43-1e29-48cb-ada9-758c3ece67d2', // Replace with the id of the identity pool you created

    clientSecret: '18uarvek279vb6cg6pm1t5ug2ca470b77f6dd0sgmpr5ph4d6bcb',
    
    region: 'us-west-2', // Replace with the region you deployed CDK with

    identityPoolRegion: 'us-west-2', // Replace with the region you deployed CDK with

    userPoolId: 'us-west-2_8Wk2fbKU2', // Replace with your User Pool ID

    userPoolWebClientId: '1bbdh2t1vtsogp2squ7g2v0qf7', // Replace with your User Pool Web Client ID - found in app integration

    mandatorySignIn: true, // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not

  },
  oauth: {
    name: 'Cognito-Integration', // This is the name of the Federated Identity Provider created in Cognito -> User Pool -> Sign-in Experience under Identity Provider
    domain: 'app2.auth.us-west-2.amazoncognito.com', // This is found in Cognito User Pool under the App Integration tab
    scope: [
      'email',
      'openid'
    ],
    redirectSignIn: 'https://app2.amautz.people.aws.dev',   // Switch to hosted url when deploying
    redirectSignOut: 'https://app2.amautz.people.aws.dev',
    // redirectSignIn: 'http://localhost:8080/',
    // redirectSignOut: 'http://localhost:8080/',           // Switch to local host when developing
    clientId: '4olu5nrkse0bdjl3vg2d2fqob6',        // This is the id of your app client, found in Cognito under app integration tab
    responseType: 'code'

    // The auth login window has been deactivated to allow instant AD login. To reactive, go to styles -> auth.css
  }
};

export { AmplifyConfig };
