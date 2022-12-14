class Api::NotesController < ApplicationController


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

  def destroy
    note = Note.find(params[:id])
    note.destroy
    head :no_content
  end

  private

  def note_params
    params.permit(:text, :song_id)
  end

end
