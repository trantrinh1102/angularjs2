class CreateHeroes < ActiveRecord::Migration[5.0]
  def change
    create_table :heroes do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false


      t.timestamps
    end
    add_index :heroes, :first_name, unique: true
    add_index :heroes, :last_name, unique: true
  end
end
