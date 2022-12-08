# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Destroy all models:
User.destroy_all

# # Users
# puts "Seeding Users..."
# user1 = User.create(username: "derek", password: "123", password_confirmation: "123")
  user1 = User.find(1)

# Songs
puts "Seeding Songs..."
user1.songs.create!(name: "Sunday Bloody Sunday", artist: "U2")
user1.songs.create!(name: "Where the Streets Have No Name", artist: "U2")
user1.songs.create!(name: "One", artist: "U2")

