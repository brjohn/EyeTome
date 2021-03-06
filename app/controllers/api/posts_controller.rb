class Api::PostsController < ApplicationController
    # before_action :require_login

    def index
        if params[:wallId] == 'all'
            #@posts = []
            #current_user.friends.each do |friend|
                #friend.posts.each do |post|
                    #@posts.push(post)
                #end
            #end
            
            @posts = Post.all.includes(:comments, :likes)
            
        else
            @posts = Post.includes(:comments, :likes).all.where(wall_owner_id: params[:wallId])
        end
        render :index
    end

    def show 
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def create
        
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id]) 
        if @post.update(post_params)
            render :show 
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy 
        @post = Post.find_by(id: params[:id])
        if @post 
            @post.destroy 
            render :show 
        else
            render json: ['Cannot find or delete post'], status: 422
        end
    end

    

    private

    def post_params
        params.require(:post).permit(:body, :poster_id, :wall_owner_id, :post_pic)
    end

    
end
