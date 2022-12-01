class AlbumsController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    albums = user.albums
    render json: albums
  end

end
