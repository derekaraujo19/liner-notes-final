class Note < ApplicationRecord
  # add validations

  belongs_to :user
  belongs_to :song
end
