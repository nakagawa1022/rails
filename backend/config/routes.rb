Rails.application.routes.draw do
  resources :groups
  get "up" => "rails/health#show", as: :rails_health_check

end
