class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :title
      t.string :artist
      t.string :artwork_url
      t.string :release_date
      t.string :genre
      t.string :spotify_link

      t.timestamps
    end
  end
end
