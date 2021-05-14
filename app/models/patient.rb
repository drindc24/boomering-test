require 'csv'

class Patient < ApplicationRecord
  def self.search(string)
    where('NAME ILIKE ?', "%#{string}%")
  end

  def self.import(file)
    CSV.foreach(file.path, headers: true) do |row|
      Patient.create! row.to_hash
    end
  end
end
