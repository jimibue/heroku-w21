Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get '/memes', to: 'memes#index'
    post '/memes', to: 'memes#create'
    post '/memes_url', to: 'memes#create_url'
  end
  # this needs to go at bottom
  get '*other', to: 'static#index'
end
