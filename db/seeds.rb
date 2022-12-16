# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Destroy all models:
User.destroy_all
Song.destroy_all
Note.destroy_all
Album.destroy_all


# Users
puts "Seeding Users..."
user1 = User.create!(username: "Bono", password: "123", password_confirmation: "123")

# Albums
puts "Seeding Albums..."
war = user1.albums.create!(title: "War", artist: "U2", artwork_url: "https://upload.wikimedia.org/wikipedia/en/2/2e/U2_War_album_cover.jpg", release_date: "1983", genre: "Rock")
baby = user1.albums.create!(title: "Achtung Baby", artist: "U2", artwork_url: "https://upload.wikimedia.org/wikipedia/en/7/72/Achtung_Baby.png", release_date: "1991", genre: "Alternative")
pop = user1.albums.create!(title: "Pop", artist: "U2", artwork_url: "https://upload.wikimedia.org/wikipedia/en/9/96/U2-Pop-cover.png", release_date: "1997", genre: "Alternative Rock/Dance")


# Songs
puts "Seeding Songs..."
sunday = user1.songs.create!(name: "Sunday Bloody Sunday", artist: "U2", album_id: war.id, is_writer: true, is_performer: true, is_producer: false, is_engineer: false)
year = user1.songs.create!(name: "New Year's Day", artist: "U2", album_id: war.id, is_writer: false, is_performer: true, is_producer: true, is_engineer: false)
one = user1.songs.create!(name: "One", artist: "U2", album_id: baby.id, is_writer: true, is_performer: true, is_producer: true, is_engineer: false)
disco = user1.songs.create!(name: "Discotheque", artist: "U2", album_id: pop.id, is_writer: false, is_performer: true, is_producer: false, is_engineer: true)

# Notes
puts "Seeding Notes..."
user1.notes.create!(song_id: disco.id, text: "We worked really hard on this one. It was a ridiculous process, trying to blend techno and rock.. Would like to revisit the mix someday!")
user1.notes.create!(song_id: year.id, text: "I need to remix this. The drums guitars are too loud and too much reverb on drums and vocals.")


