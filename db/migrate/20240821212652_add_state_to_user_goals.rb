class AddStateToUserGoals < ActiveRecord::Migration[7.2]
  def change
    add_column :user_goals, :state, :string
  end
end
