# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'database_cleaner'
require 'faker'
DatabaseCleaner.clean_with(:truncation)



u1 = User.create(email: "test@test.com", password: 123456)

20.times do
  name = Faker::Name.name
  age = Faker::Number.between(from: 1, to: 90)
  gender = Faker::Gender.binary_type
  Friend.create(name: name, age: age, gender: gender)
end
 puts "success"