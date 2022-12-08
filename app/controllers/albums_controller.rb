class AlbumsController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    albums = user.albums
    # byebug
    render json: albums
  end

  def create
    user = User.find_by(id: session[:user_id])
    album = user.albums.create!(album_params)
    render json: album, status: :created
  end

  private

  def album_params
    params.permit(:title, :artist, :artwork_url, :spotify_link, :release_date, :genre)
  end

end
