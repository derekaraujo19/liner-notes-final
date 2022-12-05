class Song < ApplicationRecord
  # add validations
  belongs_to :user
  belongs_to :album, optional: true
  has_many :notes
end
