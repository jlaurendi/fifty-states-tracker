class UserGoal < ApplicationRecord
  belongs_to :user
  belongs_to :marathon, optional: true

  enum status: {
    tentative: "tentative",
    planned: "planned",
    completed: "completed",
    aborted: "aborted"
  }

  validates :status, inclusion: { in: statuses.keys }
  validates :name, :state, :target_date, presence: true
end
