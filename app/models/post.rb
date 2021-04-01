# == Schema Information
#
# Table name: posts
#
#  id            :bigint           not null, primary key
#  poster_id     :integer          not null
#  wall_owner_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  body          :string           not null
#
class Post < ApplicationRecord
    validates :poster_id, :wall_owner_id, presence: true

    has_one_attached :post_pic

    has_many :comments, as: :commentable, dependent: :destroy

    has_many :likes, as: :likable, dependent: :destroy 

    belongs_to :poster,
    foreign_key: :poster_id,
    class_name: :User

    belongs_to :wall_owner,
    foreign_key: :wall_owner_id,
    class_name: :User
    
end
