class Song < ApplicationRecord

  validates :name, :artist, presence: true


  belongs_to :user
  belongs_to :album, optional: true
  has_many :notes

end
