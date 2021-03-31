# == Schema Information
#
# Table name: comments
#
#  id               :bigint           not null, primary key
#  commenter_id     :integer          not null
#  commentable_id   :integer          not null
#  commentable_type :string           not null
#  body             :text             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Comment < ApplicationRecord
    validates :commenter_id, :commentable_id, :commentable_type, :body, presence: true

    belongs_to :commentable, polymorphic: true

    belongs_to :commenter,
    foreign_key: :commenter_id,
    class_name: :User 

    has_many :comments, as: :commentable, dependent: :destroy 

    has_many :likes, as: :likable, dependent: :destroy
end
