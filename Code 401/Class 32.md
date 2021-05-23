## Class 32  *May 24 2021:*  

> ## Topics

   1. Intro to Serverless [view] (https://hackernoon.com/what-is-serverless-architecture-what-are-its-pros-and-cons-cc4b804022e9)
   2. AWS Amplify Kool-Aid [view](https://aws.amazon.com/ar/amplify/)
   3. GraphQL Intro [view] (https://docs.amplify.aws/cli/graphql-transformer/overview)   
   
---

> ## 1. Intro to Serverless

**what is serverless?** in the old fashion way of running and computing applictations we usually use servers to do so but big company's intoduced a new methodolgy for running apps with out the setup of a phisycal server where it implemeted cloud computing to use there servers as a service insted. The new way introduced is used to talk to the app server directly throw the internet instead of having a server

**Who wins bassed on pros and cons for servers and serverless ?**

1. Pricing: serverless is much cheaper than buying and setup a server. serverless is the winner 
2. Networking: due to using serverless the client must setup gateway to use the application the triditional servers is the winner 
3. 3rd Party Dependencies: the triditional servers is the winner 
4. Environments: setting up serverless environments can be done by a click. serverless is the winner 
5. Timeout:due to network latency the triditional servers is the winner 
6. Scale: Scaling process for Serverless is automatic and seamless, but there is a lack of control or entire absence of control. both are winners and losers at the same time

**what is Functions as a Service (FaaS)?** FaaS in simple word is functions that runs once its implemented on the server in less than 100ms

**what are the properties of FaaS?**

1. Independent, server-side, logical functions
2. Stateless
3. Ephemeral
4. Event-triggered
5. Scalable by default
6. Fully managed by a Cloud vendor

**what does the Serverless App consists of?**

1. web server
2. Lambda functions
3. security token service (STS)
4. user authentication 
5. database.

![serverless app](https://hackernoon.com/hn-images/1*TIrjN7EjLUVJmJ6YvHR7Dg.png)


**some serverless service providers:**

1. AWS Lambda
2. Google Cloud Functions
3. Azure Functions
4. IBM OpenWhisk
5. Alibaba Function Compute
6. Iron Functions
7. Auth0 Webtask
8. Oracle Fn Project
9. Kubeless


---

> ## 2. AWS Amplify Kool-Aid

**what is AWS Amplify?** AWS Amplify is a set of tools and services the facilitate building front-end, back-end, mobile applications , and  full stack applications, without the need of downloading all different dependancies

---

> ## 3. GraphQL Intro 

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

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2031)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
