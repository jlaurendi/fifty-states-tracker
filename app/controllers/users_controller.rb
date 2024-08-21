class UsersController < ApplicationController
    def index
        @users = User.all
    end

    def show
        @user = User.find(params[:id])
        @user_goals = @user.user_goals
    end

    # /users/:id/goals
    def goals
        user = User.find(params[:id])
        user_goals = user.user_goals

        render json: user_goals
    end
end
