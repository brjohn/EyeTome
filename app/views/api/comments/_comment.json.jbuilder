json.extract! comment, :id, :body, :commenter_id, :commentable_id, :commentable_type
json.commenter do 
    user = comment.commenter 
    json.extract! user, :id, :first_name, :last_name 
    json.profilePicUrl url_for(user.profile_pic) if user.profile_pic.attached?
end
json.comments do 
    comment.comments.each do |subcomment|
        json.set! subcomment.id do
            json.partial! "api/comments/comment", comment: subcomment
        end
    end
end
    