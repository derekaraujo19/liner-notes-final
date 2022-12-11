class Album < ApplicationRecord
  validates :title, :artist, :artwork_url, presence: true

  # Add validation for year type - integer, max 4 digits

  has_many :songs
  has_many :users
end
