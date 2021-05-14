require 'rails_helper'

RSpec.describe Patient, type: :model do
  describe '#search' do
    let!(:patient_1){ create(:patient, name: 'Asheanna') }
    let!(:patient_2){ create(:patient, name: 'Athena') }
    let!(:patient_3){ create(:patient, name: 'Kassandra') }

    it 'returns the patient with names that match the search query' do
      expect(Patient.search('as')).to contain_exactly(patient_1, patient_3)
    end
  end
end
