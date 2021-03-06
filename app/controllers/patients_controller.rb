class PatientsController < ApplicationController
  def index
    @patients = Patient.all
  end

  def import
    Patient.import(params[:file])
    redirect_to patients_path, notice: 'Patients added successfully'
  end
end