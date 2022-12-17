class Album < ApplicationRecord
  validates :title, :artist, :artwork_url, presence: true
  validates :release_date, numericality: { only_integer: true }

  has_many :songs
  has_many :users
end
