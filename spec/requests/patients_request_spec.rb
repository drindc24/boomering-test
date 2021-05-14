require 'rails_helper'

RSpec.describe Api::V1::PatientsController, type: :request do
  describe '#index' do
    let(:json_response){ JSON.parse(response.body) }

    before do
      5.times { create(:patient) }
      get '/api/v1/patients'
    end

    it { expect(response).to have_http_status(:ok) }
    it { expect(json_response.count).to eq 5 }
  end
end