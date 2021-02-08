# == Schema Information
#
# Table name: users
#
#  id                 :bigint           not null, primary key
#  first_name         :string           not null
#  last_name          :string           not null
#  birthday           :date             not null
#  gender             :string           not null
#  email              :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  bio                :text
#  work               :string
#  education          :string
#  current_city       :string
#  hometown           :string
#  relationship       :string
#  name_pronunciation :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
