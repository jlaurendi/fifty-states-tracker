Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json }
  resources :marathons

  resources :users do
    get :goals, on: :member
    post :goals, to: "users#create_goal",  on: :member
  end

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
end
