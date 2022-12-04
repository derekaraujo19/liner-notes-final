class Song < ApplicationRecord
  # add validations
  belongs_to :user
  belongs_to :album
  has_many :notes
end
