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
require 'test_helper'

class RequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
