class NotesController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    notes = user.notes
    render json: notes
  end


end
