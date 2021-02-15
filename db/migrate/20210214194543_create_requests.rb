class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.string :requester_id, null: false
      t.string :friend_requested_id, null: false

      t.timestamps
    end
    add_index :requests, :requester_id
    add_index :requests, [:friend_requested_id, :requester_id], unique: true
  end
end
