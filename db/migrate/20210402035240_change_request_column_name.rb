class ChangeRequestColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :requests, :requester_id, :requestor_id
  end
end
