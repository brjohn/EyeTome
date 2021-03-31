Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users 
    resources :posts
    resources :comments
    resources :likes 
    resources :friendships, only: [:create, :destroy]
    resources :requests, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end
  
  root to: "static_pages#root"

end
