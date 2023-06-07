Rails.application.routes.draw do
  namespace :api do  
  resources :greetings
  end  
  
  root 'root#index'
end
