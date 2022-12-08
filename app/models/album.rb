class Album < ApplicationRecord
  validates :title, :artist, :artwork_url, presence: true

  has_many :songs
  has_many :users, through: :songs
end
