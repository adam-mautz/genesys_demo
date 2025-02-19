## Deploying a Bloom Application

---

### Step 1 - Clone and Deploy the CDK

1. Copy the repository onto your local machine. (Either git clone or simply download the zipped folder)

2. In the terminal, create a new directory for your IaC and download the necessary libraries inside:
```
mkdir your-app-cdk
``` 
```
cd your-app-cdk
```
3. Install and initialize cdk inside the directory
```
npm install -g aws-cdk
```
```
cdk init --language typescript
```
4. Install the necessary cdk modules by pasting the following command in the terminal:
```
npm install @aws-cdk/aws-codecommit @aws-cdk/aws-amplify
``` 

5. Copy the file from `cdk -> lib -> amplify-infra-stack.ts` and paste it into the new created file in `your-app-cdk -> lib -> your-app-cdk-stack.ts`
5. Make sure you change the class name from `AmplifyInfraStack` to `YourAppCdkStack`. This class must match the name of your file and will be used elsewhere so it needs to match what you named the directory.

6. In the newly created file, rename `amplifyReactSampleRepo`, `cdkSampleApp`, and `cdk-sample-app` to your own project specific values.

7. In **your-app-cdk -> bin -> your-app-cdk-cdk.ts**, replace the import line `import * as cdk from 'aws-cdk-lib';` with:
```
import * as cdk from '@aws-cdk/core';
```
8. Delete the cdk folder as you will no longer be needing it.

7. Add your Cognito information to the amplify configuration file found in `react -> src -> config -> amplify-config.js`

8. In the `your-app-cdk directory`, run the following commands in the terminal to build and deploy the resources:
```
npm run build
```
```
cdk deploy
```

---

### Step 2 - Connect to the Repository

*After cdk has deplpoyed the Amplify app and the CodeCommit repo, you must establish a connection to the repo and push your initial commit.*


1. Go to CodeCommit in the AWS Console and find the newly created repository. **Find and copy the HTTPS (GRC) connection value**. 

2. In the terminal, run the following commands:
```
cd ../     (note: need to be in parent directory)
git init --initial-branch=main
git remote add origin <HTTPS (GRC) link> 
git add .
git commit -m 'initial commit'
git push --set-upstream origin main 
```
This commit should trigger the Amplify App to build. You can track the progress by going to the Amplify console and finding the newly created app.

---

### Step 2 - Integrate Authentication

1. Once the app has successfully deployed for the first time, navigate to react -> src -> config -> amplify-config.js

2. Edit the Cognito section with the appropriate values

3. Copy the value you gave `name` within the `oauth` class

4. Navigate to `src -> pages ->  App.jsx`.  Find the `components` object towards the bottom of the page and paste the name within the Auth.federatedSignIn object 

   ```
   Auth.federatedSignIn({customProvider:'NEW_NAME'})
   ```

---


**To Run and Develop Locally**

1. After cloning the repo, change directories into react. Download the node modules and start the dev server on your local host:
```
cd react
```
``` 
npm i
```
```
npm run dev
```