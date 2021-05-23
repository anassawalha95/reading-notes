## Class 31  *May 23 2021:* 

> ## Topics

   1. [Espresso Testing ](https://developer.android.com/training/testing/espresso)
   2. [Espresso Test Recorder](https://developer.android.com/studio/test/espresso-test-recorder)
      
---

> ## 1. Espresso Testing 

**What is Espresso?** Espresso is android UI testing 

Code Example: 
    
    @Test
    fun changeText_sameActivity() {

        // Type text and then press the button.
        onView(withId(R.id.editTextUserInput))
                .perform(typeText(STRING_TO_BE_TYPED), closeSoftKeyboard())
        onView(withId(R.id.changeTextBt)).perform(click())

        // Check that the text was changed.
        onView(withId(R.id.textToBeChanged)).check(matches(withText(STRING_TO_BE_TYPED)))
    }
    
**What are espresso packages?**

1. espresso-core
2. espresso-web
3. espresso-idling-resource
4. espresso-contrib
5. espresso-intents 
6. espresso-remote 



[Espresso tutorial](https://www.youtube.com/watch?v=dyyTr-zl5v0)

---

> ## 2. Espresso Test Recorder


**What are Espresso Test Recorder?** Espresso Test Recorder is a tool create a test for you android UI automatically 

**Note:** before using  Espresso Test Recorder its a must to turn off animations on test device


[ Espresso Test Recorder](https://www.youtube.com/watch?v=JRkDVvB106k)



---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2031)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
