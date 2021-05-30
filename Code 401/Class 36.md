## Class 36  *May 31 2021:*  

> ## Topics

   1. Amplify and Cognito [view] (https://docs.amplify.aws/lib/auth/getting-started/q/platform/android)   

---

**What is Cognito?** it's built in interface provided by AWS for user authentication behind the sence

**In order to use coginto the amplify must be implemented** [here is how](https://docs.amplify.aws/lib/project-setup/create-application/q/platform/android)

**Steps for implementing authentication**

- From you terminal type

1. amplify add auth
2. fill the prompet

         ? Do you want to use the default authentication and security configuration?
            `Default configuration`
        ? How do you want users to be able to sign in?
            `Username`
        ? Do you want to configure advanced settings?
            `No, I am done.`

3. amplify push
4. add cognito dependencie 

        dependencies {
        implementation 'com.amplifyframework:aws-auth-cognito:1.17.4'
        }
        
5. add the configurer
      
        Amplify.addPlugin(new AWSCognitoAuthPlugin());
        Amplify.configure(getApplicationContext());
        
6. check the session 


        Amplify.Auth.fetchAuthSession(
        result -> Log.i("AmplifyQuickstart", result.toString()),
        error -> Log.e("AmplifyQuickstart", error.toString())
        );

---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2036)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
