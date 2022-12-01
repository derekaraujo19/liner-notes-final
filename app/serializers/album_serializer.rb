class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :artwork_url, :release_date, :genre, :spotify_link
end
