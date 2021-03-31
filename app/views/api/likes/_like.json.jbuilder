json.extract! like, :id, :liker_id, :likable_id, :likable_type
json.liker do 
    user = like.liker 
    json.extract! user, :id, :first_name, :last_name 
    json.profilePicUrl url_for(user.profile_pic) if user.profile_pic.attached?
end