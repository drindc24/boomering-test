module Api
  module V1
    class PatientsController < ActionController::API
      def index
        if params[:order_by] && params[:order]
          @patients = Patient.order("patients.#{params[:order_by]} #{params[:order]}")
        elsif params[:search]
          @patients = Patient.search(params[:search])
        else
          @patients = Patient.all
        end
        render json: @patients
      end
    end
  end
end
