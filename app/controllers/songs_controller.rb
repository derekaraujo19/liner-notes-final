class SongsController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    songs = user.songs
    render json: songs
  end
end
