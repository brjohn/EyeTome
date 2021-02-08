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
class User < ApplicationRecord
    validates :first_name, :last_name, :birthday, :gender, :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :gender, inclusion: %w(Female Male Custom)
    validates :password, length: { minimum: 6}, allow_nil: true

    attr_reader :password 

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user 
        else 
            nil 
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password 
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save! 
        self.session_token 
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
