## Class 43  *June 8 2021:*

> ## Topics

   1. Amplify and Kinesis [view](https://docs.amplify.aws/lib/analytics/getting-started/q/platform/android)  
   
---

**What is analytics in AWS?** analytics in AWS allows data collection for an android app (only availabe for javascript now)

**how to implement analytics?** 

1. in your cmd type `amplify add analytics` and follow the prompt

2. `amplify push` to push the implementation to AWS servers

3. add the dependancies 

        implementation 'com.amplifyframework:aws-analytics-pinpoint:1.17.4'
        implementation 'com.amplifyframework:aws-auth-cognito:1.17.4'
        
4. add the plugin `Amplify.addPlugin(new AWSPinpointAnalyticsPlugin(this));`

5. record any desiered event 

          AnalyticsEvent event = AnalyticsEvent.builder()
        .name("PasswordReset")
        .addProperty("Channel", "SMS")
        .addProperty("Successful", true)
        .addProperty("ProcessDuration", 792)
        .addProperty("UserAge", 120.3)
        .build();

        Amplify.Analytics.recordEvent(event);

---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2043)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
