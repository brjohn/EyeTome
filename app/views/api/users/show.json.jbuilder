json.partial! "api/users/user", user: @user

json.friendships do 
    @user.user_friendships.each do |user_friendship|
        json.set! user_friendship.id do 
            user = user_friendship.friend 
            json.extract! user, :id, :first_name, :last_name
            json.profilePicUrl url_for(user.profile_pic) if user.profile_pic.attached?
        end
    end
end 

