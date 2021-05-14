Rails.application.routes.draw do
  resources :patients, only: [:index] do
    collection do
      post :import
    end
  end
end
