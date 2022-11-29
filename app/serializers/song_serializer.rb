class SongSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album_id, :name, :artist, :spotify_link, :is_writer, :is_performer, :is_producer, :is_engineer
end
