json.extract! post, :id, :body, :poster_id, :wall_owner_id
json.postPicUrl url_for(post.post_pic) if post.post_pic.attached?