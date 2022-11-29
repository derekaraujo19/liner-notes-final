class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.integer :user_id
      t.integer :album_id
      t.string :name
      t.string :artist
      t.string :spotify_link
      t.boolean :is_writer, :default => false
      t.boolean :is_performer, :default => false
      t.boolean :is_producer, :default => false
      t.boolean :is_engineer, :default => false

      t.timestamps
    end
  end
end
