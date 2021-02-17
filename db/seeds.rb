require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

users = User.create([
    {first_name: "Bill", last_name: "Nye", birthday: "04-12-1955", gender: "Male", email: "scienceguy@gmail.com", password: "123456"},
    {first_name: "Miss", last_name: "Frizzle", birthday: "12-10-1960", gender: "Female", email: "magicschoolbus@gmail.com", password: "123456"},
    {first_name: "Elle", last_name: "Woods", birthday: "05-07-1985", gender: "Female", email: "deltanu@gmail.com", password: "123456"},
])

ginger = User.create({first_name: "Ginger", last_name: "Spice", birthday: "01-04-1980", gender: "Female", email: "spiceworld@gmail.com", password: "123456"})

short = User.create({first_name: "Al", last_name: "J", birthday: "01-04-1980", gender: "Female", email: "gmail", password: "123456"})

long = User.create({
    first_name: "Daisy", 
    last_name: "Dandilion", 
    birthday: "01-04-1980", 
    gender: "Female", email: "daisy@gmail.com", 
    password: "123456",
    bio: "I love gardening and landscaping!",
    current_city: "Daffodil City",
})

a1 = User.create({first_name: "Amy", last_name: "Andrews", birthday: "01-04-1980", gender: "Female", email: "a@yahoo.com", password: "123456"})
b1 = User.create({first_name: "Berttie", last_name: "Botts", birthday: "01-04-1980", gender: "Male", email: "b@yahoo.com", password: "123456"})
c1 = User.create({first_name: "Courtney", last_name: "Clarahan", birthday: "01-04-1980", gender: "Female", email: "c@yahoo.com", password: "123456"})
d1 = User.create({first_name: "Daphny", last_name: "Davidson", birthday: "03-05-1990", gender: "Female", email: "d@yahoo.com", password: "123456"})
e1 = User.create({first_name: "Erik", last_name: "Eriksson", birthday: "03-05-1990", gender: "Male", email: "e@yahoo.com", password: "123456"})
f1 = User.create({first_name: "Flo", last_name: "Ferdinand", birthday: "03-05-1990", gender: "Female", email: "f@yahoo.com", password: "123456"})
g1 = User.create({first_name: "Georgie", last_name: "Giordano", birthday: "03-07-1990", gender: "Male", email: "g@yahoo.com", password: "123456"})
h1 = User.create({first_name: "Helmut", last_name: "Hendriksson", birthday: "03-04-1990", gender: "Male", email: "h@yahoo.com", password: "123456"})
j1 = User.create({first_name: "Jenny", last_name: "Jones", birthday: "03-06-1995", gender: "Female", email: "j@yahoo.com", password: "123456"})

guest = User.create({
    first_name: "Demo", 
    last_name: "User", 
    birthday: "03-06-1995", 
    gender: "Female", 
    email: "demo@yahoo.com", 
    password: "123456",
    bio: "I am the Demo User and this is my bio!",
    current_city: "New York"

})
