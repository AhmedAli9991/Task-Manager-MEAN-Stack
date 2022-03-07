# Task-manager using MEAN stack

### what I learned 

- Authentication
- Routing in Angular
- Protected Routes in Angular
- Auth guard 
- Using Auth guard with cookies
- Nested Routing in Angular
- Cors in detail
- Cookies
- JWTs
- AccessTokens and RefreshTokens
- giving credentials for cookies
- Working with HTTPOnly Cookies
- Linking multiple MongoDB Collections 

### About Project

this is a task manager app made using the MEAN stack it manages tasks of multiple users and authenticates them using JWTs Multiple Users can use this Application to manage their own Tasks User can Signup Login and create new Task which he wants to do once complete they can delete the task if User wants they can Update the Task and change it. This is a fullStack app made using the MEAN stack 

### Modules 

- #### Login/Signup 
The User can create an account and login and access the application the user can the tasks made by the user will be stored for that user and user can see his tasks and update them
When user loggs in an AccessToken and RefreshToken pair is generated which is stored in HTTPOnly Cookies 

- #### Add Tasks
The User can create a Task which they want to do after they are loggedin it checks for a valid token when create tasks otherwise it redirects to Login page

- #### Update and Delete Tasks 
The User can update and delete any Task which they want after they are loggedin it checks for a valid token when updating or deleting  otherwise it redirects to Login page

![1](https://user-images.githubusercontent.com/93770002/155843583-56284687-7f17-424e-9edc-840d996d04f8.png)

![2](https://user-images.githubusercontent.com/93770002/155843588-55a7b960-481d-4a44-b0d2-d63d6f6d2ecb.png)

![3](https://user-images.githubusercontent.com/93770002/155843600-6839dbb7-f57b-4ce7-bb1c-8fcc363cb932.png)

![4](https://user-images.githubusercontent.com/93770002/155843605-fe7f4bec-5f75-49ca-815c-6d0251715315.png)

![5](https://user-images.githubusercontent.com/93770002/155843615-180f60ff-569e-43dc-971e-9c1ba7651852.png)

##### Tokens being passed in HTTPOnly Cookies

![ccccc](https://user-images.githubusercontent.com/93770002/156813864-52fc48f0-fda8-49e6-98a1-fd1d22ef4a0b.PNG)




### End
