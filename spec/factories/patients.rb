FactoryBot.define do
  factory :patient do
    name { Faker::Name.name }
    date  { Faker::Date.in_date_period }
    number  { rand(1000) }
    description { Faker::Lorem.paragraph }
  end
end