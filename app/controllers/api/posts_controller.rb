class Api::PostsController < ApplicationController
    before_action :require_logged_in

    #remember to make a way to capture the wall_owner_id!!!

    def create
        @post = current_user.posts.new(post_params)
        if @post.save
            render :show
        else
            render json: @post, status: :unprocessable_entity
        end
    end

    

    private

    def post_params
        params.require(:post).permit(:body)
    end

    
end
