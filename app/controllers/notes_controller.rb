class NotesController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    notes = user.notes.order(id: :desc)
    render json: notes
  end

  def create
    user = User.find_by(id: session[:user_id])
    note = user.notes.create!(note_params)
    render json: note, status: :created
  end

  private

  def note_params
    params.permit(:text, :song_id)
  end

end
