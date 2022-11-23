class SessionsController < ApplicationController

  #Log In
  def create
    user = User.find_by(username: params[:username])
    # if user and authenticated password exists
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: {error: "Invalid username or password"}, status: :unauthorized
    end
  end

  #Log Out
  def destroy
    session.delete :user_id
    head :no_content
  end

end