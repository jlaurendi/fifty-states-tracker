class CreateComments < ActiveRecord::Migration[7.2]
  def change
    create_table :comments do |t|
      t.references :post, null: false, foreign_key: true
      t.string :user_name
      t.integer :parent_comment_id, null: true
      t.text :text
      t.timestamps
    end
  end
end
