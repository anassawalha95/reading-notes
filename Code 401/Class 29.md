
## Class 29  *May 19 2021:* 

> ## Topics

   1. Overview: Saving data with Room [view](https://developer.android.com/training/data-storage/room)
   2. Defining entities in Room [view](https://developer.android.com/training/data-storage/room/defining-data)
   3. Related entities in Room [view](https://developer.android.com/training/data-storage/room/relationships)
   4. Accessing data with Room [view](https://developer.android.com/training/data-storage/room/accessing-data#java)
  
---


**What is Room Library used for?** the room library is a library built on sqllite database that facilitate the usage for the database.

**Room dependency** In order to use Room library you should include the dependencies for this library in build.gradle file.

      dependencies {
          def room_version = "2.3.0"

          implementation "androidx.room:room-runtime:$room_version"
          annotationProcessor "androidx.room:room-compiler:$room_version"

          // optional - RxJava2 support for Room
          implementation "androidx.room:room-rxjava2:$room_version"

          // optional - RxJava3 support for Room
          implementation "androidx.room:room-rxjava3:$room_version"

          // optional - Guava support for Room, including Optional and ListenableFuture
          implementation "androidx.room:room-guava:$room_version"

          // optional - Test helpers
          testImplementation "androidx.room:room-testing:$room_version"
      }

**what are the major components for Room library?** 
there are three main components:

1. Database class : responsible for database presistance and connection
2. Data entities: the tables 
3. Data access objects (DAOs): responsible about the CRUD

**How to define  a database in room?** to define a data base use the database annotation and you will have to create define the DAO access object

example:

        @Database(version = 1, entities = {Song.class, Album.class})
        abstract class MusicDatabase extends RoomDatabase {
          // SongDao is a class annotated with @Dao.
          abstract public SongDao getSongDao();
          // AlbumDao is a class annotated with @Dao.
          abstract public ArtistDao getArtistDao();
          // SongAlbumDao is a class annotated with @Dao.
          abstract public SongAlbumDao getSongAlbumDao();
        }
  
**How to define  a DAO in room?**  to define a DAO you must use the @DAO annotation in order to define it for an entity 

example:
      @Dao
      public interface UserDao {
          @Query("SELECT * FROM user")
          List<User> getAll();

          @Query("SELECT * FROM user WHERE uid IN (:userIds)")
          List<User> loadAllByIds(int[] userIds);

          @Query("SELECT * FROM user WHERE first_name LIKE :first AND " +
                 "last_name LIKE :last LIMIT 1")
          User findByName(String first, String last);

          @Insert
          void insertAll(User... users);

          @Delete
          void delete(User user);
      }
   
   
[Tutorial](https://developer.android.com/codelabs/android-room-with-a-view#0)
   
   
---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2029)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
