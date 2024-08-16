class CreateMarathons < ActiveRecord::Migration[7.2]
  def change
    create_table :marathons do |t|
      t.string :name
      t.string :city
      t.string :state
      t.decimal :latitude
      t.decimal :longitude
      t.string :image_url

      t.timestamps
    end
  end
end
