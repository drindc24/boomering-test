module Api
  module V1
    class PatientsController < ActionController::API
      def index
        if params[:order_by] && params[:order]
          @patients = Patient.order("patients.#{params[:order_by]} #{params[:order]}")
        else
          @patients = Patient.all
        end
        render json: @patients
      end
    end
  end
end
