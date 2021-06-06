
## Class 42  *June 8 2021:*  

> ## Topics

   1. Location [view](https://developer.android.com/training/location/retrieve-current)  
   
---

**The good thing about google location servcies is that you can request anytime you want to recive exact user location**

**How locations is provided?**

1. in order to access user location you have to set up google play services component via SDK manager
2. Set up permissions for accessing location by requesting that from the user by adding permissions to your manifiest file 
    
        <manifest ... >
          <!-- To request foreground location access, declare one of these permissions. -->
          <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
          <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        </manifest>
        
        
3. add a foreground service type of location which is recommanded for android 9 and required for android 10
      
        <!-- Recommended for Android 9 (API level 28) and lower. -->
        <!-- Required for Android 10 (API level 29) and higher. -->
        <service
            android:name="MyNavigationService"
            android:foregroundServiceType="location" ... >
            <!-- Any inner elements would go here. -->
        </service>

4.  for background service add 

          <manifest ... >
           <!-- Required only when requesting background location access on
           Android 10 (API level 29) and higher. -->
           <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
          </manifest>
          
5. Create location services client:
      
          private FusedLocationProviderClient fusedLocationClient;
          @Override
          protected void onCreate(Bundle savedInstanceState) {
      
              fusedLocationClient = LocationServices.getFusedLocationProviderClient(this);
          }

6. add a listener for the location selected by the user 

          fusedLocationClient.getLastLocation()
            .addOnSuccessListener(this, new OnSuccessListener<Location>() {
                @Override
                public void onSuccess(Location location) {
                    // Got last known location. In some rare situations this can be null.
                    if (location != null) {
                        // Logic to handle location object
                    }
                }
            });


[locations tutorial](https://www.youtube.com/watch?v=6adqiOxwIjY)

---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2042)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
