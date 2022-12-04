class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.text :text
      t.integer :user_id
      t.integer :song_id

      t.timestamps
    end
  end
end
