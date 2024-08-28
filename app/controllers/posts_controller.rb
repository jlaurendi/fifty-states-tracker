class PostsController < ApplicationController
    def index
        @posts = Post.all
        render json: @posts
    end

    def show
        @post = Post.find(params[:id])
        @comments = @post.comments
        render json: @comments
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render json: @post, status: :created
        else
            render json: @post.errors, status: :unprocessable_entity
        end
    end

    def post_params
        params.require(:post).permit(:user_name, :title, :url)
    end
end
