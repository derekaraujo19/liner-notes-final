class Song < ApplicationRecord
  # add validations
  # validates :name, presence: true


  belongs_to :user
  belongs_to :album, optional: true
  has_many :notes
end
