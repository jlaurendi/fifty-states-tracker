class CreateUserGoals < ActiveRecord::Migration[7.2]
  def change
    create_table :user_goals do |t|
      t.references :user, null: false, foreign_key: true
      t.references :marathon, null: false, foreign_key: true
      t.string :name
      t.date :target_date
      t.string :status, null: false # ENUM enforced in the model

      t.timestamps
    end
  end
end
