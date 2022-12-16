class Api::AlbumsController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    albums = user.albums.order(id: :desc)
    render json: albums
  end

  def create
    user = User.find_by(id: session[:user_id])
    album = user.albums.create!(album_params)
    render json: album, status: :created
  end

  def destroy
    album = Album.find(params[:id])
    album.destroy
    head :no_content
  end

  private

  def album_params
    params.permit(:title, :artist, :artwork_url, :spotify_link, :release_date, :genre)
  end

end
