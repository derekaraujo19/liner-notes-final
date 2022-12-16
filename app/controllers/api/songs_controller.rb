class Api::SongsController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    songs = user.songs.order(id: :desc)
    render json: songs
  end

  def create
    user = User.find_by(id: session[:user_id])
    song = user.songs.create!(song_params)
    render json: song, status: :created
  end

  def update
    song = Song.find(params[:id])
    song.update!(song_params)
    render json: song, status: :created
  end

  def destroy
    song = Song.find(params[:id])
    song.destroy
    head :no_content
  end

  private

  def song_params
    params.permit(:album_id, :name, :artist, :spotify_link, :is_writer, :is_producer, :is_performer, :is_engineer)
  end


end


