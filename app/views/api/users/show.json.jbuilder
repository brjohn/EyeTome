json.partial! "api/users/user", user: @user

json.friends do 
    @user.user_friendships.each do |user_friendship|
        json.set! user_friendship.friend_id do 
            user = user_friendship.friend 
            json.extract! user, :id, :first_name, :last_name
            json.profilePicUrl url_for(user.profile_pic) if user.profile_pic.attached?
            json.authored_posts do 
                user.authored_posts.each do |authored_post|
                    json.set! authored_post.id do 
                        json.partial! "api/posts/post", post: authored_post
                    end
                end
            end
        end
    end
end

json.friendships do 
    @user.user_friendships.each do |user_friendship|
        json.set! user_friendship.id do 
            user = user_friendship.friend 
            json.extract! user, :id, :first_name, :last_name
            json.profilePicUrl url_for(user.profile_pic) if user.profile_pic.attached?
            json.authored_posts do 
                user.authored_posts.each do |authored_post|
                    json.set! authored_post.id do 
                        json.partial! "api/posts/post", post: authored_post
                    end
                end
            end


        end
    end
end 

json.requests_sent do 
    @user.requests_sent.each do |request_sent|
        json.set! request_sent.id do 
            user = request_sent.friend_requested 
            json.extract! user, :id, :first_name, :last_name
            json.profilePicUrl url_for(user.profile_pic) if user.profile_pic.attached?
        end
    end
end 

json.requests_received do 
    @user.requests_received.each do |request_received|
        json.set! request_received.id do 
            user = request_received.requestor 
            json.extract! user, :id, :first_name, :last_name
            json.profilePicUrl url_for(user.profile_pic) if user.profile_pic.attached?
        end
    end
end 


