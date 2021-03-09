# Friendbook    ![Friendbook Icon](https://github.com/brjohn/Friendbook/blob/main/app/assets/images/favicon-32x32.png)
#### Connecting people around the world
___

Friendbook is a social media app that helps you connect with others by building 
personal profiles, finding friends, and sharing posts and comments with each other. 

See Friendbook in action! [Check out Friendbook here.](https://friendbook-2021.herokuapp.com/#/ "Friendbook")

___

## Friendbook Features

### Profiles
* Profiles display a Friendbook user's desired personal information and features, including a profile picture, a cover photo, and a short bio. A user may see the profiles of other users, but may only edit his/her own. 
* Profiles will contain a "Wall," an element which displays the user's posts, and friend-contributed posts.

About the Process:

Building a profile presented a few challenges, namely in the presentation of pictures. Largely this involved gaining a better understanding of AWS as it traces through the backend to the frontend of my project. Facebook has elegant ways of handling many photos, and hopefully I will be able to match that quality and UI as I progress though this project. 


### NewsFeed
* The NewsFeed is the user home page of Friendbook, which will contain a scrolling list of posts and comments contributed by the user and his/her friends. 
* The NewsFeed links to the user's Profile

About the Process:

Friendbook depends on a lot of relational data. While one of the features of the NewsFeed is a navigation bar which enables users to traverse the many features of Friendbook, the heart of the app: it's display of posts, comments, and likes, is yet to come. The challenge of this process is in the thoughtful construction of the many associations required. 

### Looking forward ...
As I continue working on this project, it will grow to include the following features:
* Friendships and Friend Requests: to build a community, users must be able to request and accept other users as friends. These friendships then curate the user's Friendbook experience by populating his/her wall and NewsFeed with friend contributions.
* Posts: texts contributed on a users' own wall or that of a friend, which are visible to all friends
* Comments: texts attached to posts or comments by friends
* Likes: emoji like responses to posts or comments by friends

