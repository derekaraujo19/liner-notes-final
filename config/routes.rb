Rails.application.routes.draw do

  namespace :api do
    resources :notes, only: [:index, :create]
    resources :albums, only: [:index, :create, :destroy]
    resources :songs, only: [:index, :create, :update, :destroy]

    # User
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end




  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
