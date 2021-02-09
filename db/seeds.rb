# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create([
    {first_name: "Ginger", last_name: "Spice", birthday: 01-04-1980, gender: "Female", email: "spiceworld@gmail.com"},
    {first_name: "Bill", last_name: "Nye", birthday: 04-12-1955, gender: "Male", email: "scienceguy@gmail.com"},
    {first_name: "Miss", last_name: "Frizzle", birthday: 12-10-1960, gender: "Female", email: "magicschoolbus@gmail.com"},
    {first_name: "Elle", last_name: "Woods", birthday: 05-07-1985, gender: "Female", email: "deltanu@gmail.com"},
])