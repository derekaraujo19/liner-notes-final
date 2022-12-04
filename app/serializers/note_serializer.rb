class NoteSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :song_id
end
