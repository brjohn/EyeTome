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
require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
