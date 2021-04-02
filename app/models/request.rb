# == Schema Information
#
# Table name: requests
#
#  id                  :bigint           not null, primary key
#  requestor_id        :integer          not null
#  friend_requested_id :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Request < ApplicationRecord
    validates :requestor_id, uniqueness: {scope: :friend_requested_id}

    belongs_to :requestor,
    foreign_key: :requestor_id,
    class_name: :User

    belongs_to :friend_requested,  
    foreign_key: :friend_requested_id,
    class_name: :User
end
