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

file1 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/charles-deluvio-lJJlaUWYrPE-unsplash.jpg')
guest.profile_pic.attach(file1)
file2 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/ignacio-correia-1_yycyoMT6g-unsplash.jpg')
guest.cover_photo.attach(file2)

afile1 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/filip-havlik-N3GHOlnT_2c-unsplash.jpg')
afile2 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/frank-mckenna-PdITidCbTM8-unsplash.jpg')
a1.profile_pic.attach(afile1)
a1.cover_photo.attach(afile2)

bfile1 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/david-straight-7QBElZQC-jE-unsplash.jpg')
bfile2 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/garrett-sears-rXVFCA3fQ4I-unsplash.jpg')
b1.profile_pic.attach(bfile1)
b1.cover_photo.attach(bfile2)

cfile1 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/liana-mikah-6KRmH6k3Rdk-unsplash.jpg')
cfile2 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/liam-pozz-HZvGtncWvyQ-unsplash.jpg')
c1.profile_pic.attach(cfile1)
c1.cover_photo.attach(cfile2)

dfile1 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/bruno-horwath-rSUeHOMrhZs-unsplash.jpg')
dfile2 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/marlen-alimanov-kuwCCjTZEUk-unsplash.jpg')
d1.profile_pic.attach(dfile1)
d1.cover_photo.attach(dfile2)

gfile1 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/jared-rice-NTyBbu66_SI-unsplash.jpg')
gfile2 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/jo-arounding-c5SwN-KkE4g-unsplash.jpg')
g1.profile_pic.attach(gfile1)
g1.cover_photo.attach(gfile2)

efile1 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg')
efile2 = open('https://friendbook-seeds.s3.us-east-2.amazonaws.com/chen-mizrach-jL6PTWI7h18-unsplash.jpg')
e1.profile_pic.attach(efile1)
e1.cover_photo.attach(efile2)
