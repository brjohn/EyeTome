class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :poster_id, null: false
      t.string :wall_owner_id, null: false

      t.timestamps
    end

    add_index :posts, :poster_id
    add_index :posts, :wall_owner_id
  end
end
