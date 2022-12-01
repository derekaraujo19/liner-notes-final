class Song < ApplicationRecord
  # add validations
  belongs_to :user
  belongs_to :album
end
