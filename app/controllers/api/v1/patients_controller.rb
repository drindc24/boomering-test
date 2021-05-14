module Api
  module V1
    class PatientsController < ActionController::API
      def index
        render json: Patient.all
      end
    end
  end
end
