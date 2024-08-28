class UserGoalsController < ApplicationController
    # before_action :set_user

    # GET /users/:user_id/goals
    def index
        user = User.find(params[:user_id])
        user_goals = user.user_goals

        render json: user_goals
    end

    # POST /users/:user_id/goals
    def create
        user = User.find(params[:user_id])
        goal = user.user_goals.create(goal_params)

        if goal.save
            render json: goal, status: :created
        else
            render json: goal.errors, status: :unprocessable_entity
        end
    end

    # DELETE /users/:user_id/goals/:id
    def destroy
        user_goal = UserGoal.find(params[:id])
        user_goal.destroy
        head :no_content
    end

    def goal_params
        params.require(:goal).permit(:name, :state, :target_date, :status)
    end
end
