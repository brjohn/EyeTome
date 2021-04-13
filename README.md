# ![Friendbook Icon](https://github.com/brjohn/Friendbook/blob/main/app/assets/images/favicon-32x32.png) Friendbook    
#### Connecting people around the world
___

Friendbook is a social media app that helps you connect with others by building 
personal profiles, finding friends, and sharing posts and comments with each other. 

See Friendbook in action! [Check out Friendbook here.](https://friendbook-2021.herokuapp.com/#/ "Friendbook")

___

## Technology
Backend:
* Ruby on Rails
* React
* Redux
* AWS
* PostgreSQL
Frontend:
* Javascript
* HTML
* CSS

## Friendbook Features

### Profiles
* Profiles display a Friendbook user's desired personal information and features, including a profile picture, a cover photo, and a short bio. A user may see the profiles of other users, but may only edit his/her own. 
* Each profile contains a wall of posts and comments written, a collection of friends, and and a user intro of personalized information. 

About the Process:

Building a profile presented a few challenges, the first being the presentation of pictures. This gave me the opportunity to learn how to use AWS as my file storage system, and how to incorporate it through the backend to the frontend of my project. After the initial setup, I was able to seemlessly apply the same process for profile pics and cover photos to photos attached to posts. The second learning curve for profiles was making operations exclusive: enabling actions and displaying components depending on if the profile belongs to the current user, a friend of the current user, or a non-friend of the current user. Initially, I wrote many of these conditional functions in the frontend components, before cleaning up my code and transferring the responsibility to the backend controllers where possible. 


### NewsFeed
* The NewsFeed is the user home page of Friendbook, which contains a scrolling list of posts and comments contributed by the user and his/her friends. 
* From the NewsFeed, you can write a post or comment or like content, search Friendbook for other users, and navigate to other user profiles. 

About the Process:

As a home for other components, the primary challenge with the NewsFeed, as with the Profile feature, was ensuring that changes to one component triggered a rerender when necessary, so that changes in friends, replies, etc are always displayed immediately. This was accomplished by a careful sharing of props and the ComponentDidUpdate lifecycle method.  

### Friends 
I accomplished the essential friending feature of Friendbook by creating models for requests and friendships. I set up the controller actions so that a request could be created, and if it is rejected, then this instance is destroyed, or if it is accepted, two new friendships are created, reciprocal friendships for both users, and the request is subsequently destroyed. When a friend is deleted, both reciprocal friendships are destroyed.  

