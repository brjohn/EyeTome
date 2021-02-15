class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.string :user_id, null: false
      t.string :friend_id, null: false

      t.timestamps
    end
    add_index :friendships, :user_id
    add_index :friendships, [:friend_id, :user_id], unique: true
  end
end
