class UserGoal < ApplicationRecord
  belongs_to :user
  belongs_to :marathon

  enum status: {
    tentative: "tentative",
    planned: "planned",
    completed: "completed",
    aborted: "aborted"
  }

  validates :status, inclusion: { in: statuses.keys }
end
