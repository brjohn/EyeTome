# == Schema Information
#
# Table name: likes
#
#  id           :bigint           not null, primary key
#  liker_id     :integer          not null
#  likable_id   :integer          not null
#  likable_type :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Like < ApplicationRecord
    validates :liker_id, :likable_id, :likable_type, presence: true
    validates :liker_id, uniqueness: {scope: [:likable_id, :likable_type]}

    belongs_to :likable, polymorphic: true

    belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User 
end
