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
require 'test_helper'

class RequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
