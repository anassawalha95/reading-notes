
## Class 33  *May 25 2021:* 

> ## Topics

   1. GraphQL @connection section [view](https://docs.amplify.aws/cli/graphql-transformer/connection)   

---

**what is GraphQL?** its a tool that used to transform the database modules to fully descriptive AWS CloudFormation templates buy using Schema Definition Language (SDL)

**for example**

      type Blog @model {
        id: ID!
        name: String!
        posts: [Post] @connection(name: "BlogPosts")
      }
      type Post @model {
        id: ID!
        title: String!
        blog: Blog @connection(name: "BlogPosts")
        comments: [Comment] @connection(name: "PostComments")
      }
      type Comment @model {
        id: ID!
        content: String
        post: Post @connection(name: "PostComments")
      }



---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2033)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
