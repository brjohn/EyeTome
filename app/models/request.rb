# == Schema Information
#
# Table name: requests
#
#  id                  :bigint           not null, primary key
#  requester_id        :string           not null
#  friend_requested_id :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Request < ApplicationRecord
    validates :requester_id, uniqueness: {scope: :friend_requested_id}

    belongs_to :requester,
    foreign_key: :requester_id,
    class_name: :User

    belongs_to :friend_requested,  
    foreign_key: :friend_requested_id,
    class_name: :User
end
