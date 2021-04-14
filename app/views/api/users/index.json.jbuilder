@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :first_name, :last_name
        json.profilePicUrl url_for(user.profile_pic) if user.profile_pic.attached?      
    end
    json.friends do 
        user.user_friendships do |user_friendship|
            json.set! user_friendship.friend_id
                friend = user_friendship.friend 
                json.extract! friend, :id, :first_name, :last_name
                json.profilePicUrl url_for(friend.profile_pic) if friend.profile_pic.attached?
                json.authored_posts do 
                    friend.authored_posts.each do |authored_post|
                        json.set! authored_post.id do 
                            json.partial! "api/posts/post", post: authored_post
                        end
                    end
                end
        
        end
    end

end



