json.extract! user, :id, :first_name, :last_name, :birthday, :gender, :email, :bio, :work, :education, :current_city, :hometown, :relationship, :name_pronunciation
json.profilePicUrl url_for(user.profile_pic) if user.profile_pic.attached?
json.coverPhotoUrl url_for(user.cover_photo) if user.cover_photo.attached?



