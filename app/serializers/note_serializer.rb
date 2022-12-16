class NoteSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :song_id, :created_at
  belongs_to :song
end
