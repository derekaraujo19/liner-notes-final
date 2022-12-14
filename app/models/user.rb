class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true

  has_many :songs
  has_many :albums
  has_many :notes
end
