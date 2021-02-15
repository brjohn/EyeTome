# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :string           not null
#  friend_id  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friendship < ApplicationRecord
    validates :user_id, uniqueness: {scope: :friend_id}

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :friend,
    foreign_key: :friend_id,
    class_name: :User


end
