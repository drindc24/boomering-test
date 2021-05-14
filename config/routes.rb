Rails.application.routes.draw do
  resources :patients, only: [:index] do
    collection do
      post :import
    end
  end

  namespace :api do
    namespace :v1 do
      resources :patients, only: [:index]
    end
  end
end
