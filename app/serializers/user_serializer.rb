class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :songs
  has_many :albums
end
