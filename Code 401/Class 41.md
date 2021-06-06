
## Class 41  *June 6 2021:*  [view](https://anassawalha95.github.io/reading-notes/Code%20301/Class%2041)

> ## Topics

   1. Intent Filters [view](https://developer.android.com/training/basics/intents/filters)  
   
---

**what are the intent filters?** an intent filter is a way for interacting with apps activities such as sending a photo to another app

**what are the three main proparties that intent filters take?**

1. Action: such as ACTION_VIEW, ACTION_EDIT, ACTION_MAIN
2. Data: such as type of data 
3. Category: category type such as DEFAULT

**how to implement an intent filter?** to implement an intent filter follow the steps:

1. add your intent filter to your manifiset file for the desiered app:

            <activity android:name="ShareActivity">
              <intent-filter>
                  <action android:name="android.intent.action.SEND"/>
                  <category android:name="android.intent.category.DEFAULT"/>
                  <data android:mimeType="text/plain"/>
                  <data android:mimeType="image/*"/>
              </intent-filter>
           </activity>

2. handle the intent in your code 

          @Override
          protected void onCreate(Bundle savedInstanceState) {
              super.onCreate(savedInstanceState);

              setContentView(R.layout.main);

              // Get the intent that started this activity
              Intent intent = getIntent();
              Uri data = intent.getData();

              // Figure out what to do based on the intent type
              if (intent.getType().indexOf("image/") != -1) {
                  // Handle intents with image data ...
              } else if (intent.getType().equals("text/plain")) {
                  // Handle intents with text ...
              }
        }
        
 3. Return a Result

        Intent result = new Intent("com.example.RESULT_ACTION", Uri.parse("content://result_uri"));
        setResult(Activity.RESULT_OK, result);
        finish();
        
        
 [Intent Filter tutorial](https://www.youtube.com/watch?v=zTi-ZrbGKhE)
 
---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2041)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
