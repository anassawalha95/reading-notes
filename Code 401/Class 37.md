## Class 37  *June 1 2021:*  

> ## Topics

   1. Introduction to Amazon S3 [view](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
   2. S3 with Amplify [view](https://aws-amplify.github.io/docs/android/storage)   
   
---

**What is Amazon S3?** its a an online storage for users to upload and store what ever needed 

**What are the advantages of using Amazon S3?**

1. Creating buckets: used for creating amazon storages
2. Storing data: store as mush data as wanted represented as objects
3. Downloading data
4. Permissions: give permissions for users to upload and download data 
5. Standard interfaces: uses REST or SOAP as prefered 

**What are the Amazon S3 main concepts?**

1. Buckets
2. Objects
3. Keys
4. Regions
5. Amazon S3 data consistency model


[Amazon S3 Explained](https://www.youtube.com/watch?v=_I14_sXHO8U)

---

**How to use amazon storage?**

1. enter the command `amplify add storage` in the cli 
2. fill the prompt 
3. enter the command `amplify push` to push changes
4. add the following dependancies to buid.gradle file
        
          dependencies {
            implementation 'com.amplifyframework:aws-storage-s3:1.17.4'
            implementation 'com.amplifyframework:aws-auth-cognito:1.17.4'
          }

5. add the plugins to your code 
        
        Amplify.addPlugin(new AWSCognitoAuthPlugin());
        Amplify.addPlugin(new AWSS3StoragePlugin());

6. write to amazon storage:
        
Example:  

               File exampleFile = new File(getApplicationContext().getFilesDir(), "ExampleKey");

                try {
                    BufferedWriter writer = new BufferedWriter(new FileWriter(exampleFile));
                    writer.append("Example file contents");
                    writer.close();
                } catch (Exception exception) {
                    Log.e("MyAmplifyApp", "Upload failed", exception);
                }

                Amplify.Storage.uploadFile(
                        "ExampleKey",
                        exampleFile,
                        result -> Log.i("MyAmplifyApp", "Successfully uploaded: " + result.getKey()),
                        storageFailure -> Log.e("MyAmplifyApp", "Upload failed", storageFailure)
                );
                

---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2037)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
