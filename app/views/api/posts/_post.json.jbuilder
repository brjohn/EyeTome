json.extract! post, :id, :body, :poster_id, :wall_owner_id, :created_at
json.postPicUrl url_for(post.post_pic) if post.post_pic.attached?
json.poster do 
    user = post.poster 
    json.extract! user, :id, :first_name, :last_name
    json.profilePicUrl url_for(user.profile_pic) if user.profile_pic.attached?
end