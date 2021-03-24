class ChangeForeignKeysToIntegers < ActiveRecord::Migration[5.2]
  def change
    change_column :friendships, :user_id, 'integer USING CAST(user_id AS integer)'
    change_column :friendships, :friend_id, 'integer USING CAST(friend_id AS integer)'
    change_column :posts, :poster_id, 'integer USING CAST(poster_id AS integer)'
    change_column :posts, :wall_owner_id, 'integer USING CAST(wall_owner_id AS integer)'
    change_column :requests, :requester_id, 'integer USING CAST(requester_id AS integer)'
    change_column :requests, :friend_requested_id, 'integer USING CAST(friend_requested_id AS integer)'
    
  end
  
end
