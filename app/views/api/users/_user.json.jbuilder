json.extract! user, :id, :first_name, :last_name, :birthday, :gender, :email, :bio, :work, :education, :current_city, :hometown, :relationship, :name_pronunciation
json.profilePicUrl user.profile_pic || url_for(user.profile_pic)
json.coverPhotoUrl user.cover_photo || url_for(user.cover_photo)