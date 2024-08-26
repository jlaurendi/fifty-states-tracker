class UsersController < ApplicationController
    def index
        @users = User.all
    end

    def show
        @user = User.find(params[:id])
        @user_goals = @user.user_goals
    end

    # GET /users/:id/goals
    def goals
        user = User.find(params[:id])
        user_goals = user.user_goals

        render json: user_goals
    end

    # POST /users/:id/goals
    def create_goal
        user = User.find(params[:id])
        goal = user.user_goals.create(goal_params)

        if goal.save
            render json: goal, status: :created
        else
            render json: goal.errors, status: :unprocessable_entity
        end
    end

    def goal_params
        params.require(:goal).permit(:name, :state, :target_date, :status)
    end
end
