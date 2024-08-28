class CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render json: @comments
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
          render json: @comment, status: :created
        else
          render json: @comment.errors, status: :unprocessable_entity
        end
    end

    def comment_params
        params.require(:comment).permit(:user_name, :text, :parent_comment_id, :post_id)
    end
end
