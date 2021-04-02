json.extract! user, :id, :first_name, :last_name, :birthday, :gender, :email, :bio, :work, :education, :current_city, :hometown, :relationship, :name_pronunciation
json.profilePicUrl url_for(user.profile_pic) if user.profile_pic.attached?
json.coverPhotoUrl url_for(user.cover_photo) if user.cover_photo.attached?

json.requests_received do 
    user.requests_received do |rrequest|
        json.set! request.id do 
            json.extract! rrequest, :requestor_id, :friend_requested_id 
        end
    end
end

json.requests_sent do 
    user.requests_sent.each do |request|
        json.set! request.id do 
            json.extract! request, :requestor_id, :friend_requested_id 
        end
    end
end
