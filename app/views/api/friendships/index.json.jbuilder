@friendships.each do |friendship|
    json.set! friendship.id do 
        json.extract! friendship, :user_id, :friend_id
    end
end