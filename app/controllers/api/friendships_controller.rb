class Api::FriendshipsController < ApplicationController

    def create 
        @friendship = Friendship.new(friendship_params)
        request = Request.find_by(requestor_id: params[:friendship][:friend_id], friend_requested_id: params[:friendship][:user_id])
        reverse_friendship = Friendship.new(user_id: params[:friendship][:friend_id], friend_id: params[:friendship][:user_id])
        if @friendship.save
            reverse_friendship.save 
            request.destroy 
            render "api/friendships/show"
        else
            render json: @friendship.errors.full_messages, status: 422
        end

    end

    def index 
        @friendships = Friendship.all 
        render :index 
    end

    def show 
       @friendship = Friendship.find_by(id: params[:id])
        if @friendship 
            render "api/friendships/show"
        else
            render json: ["Friendship not found"], status: 404
        end
    end


    def destroy 
        @friendship = Friendship.find_by(id: params[:id])
        reverse_friendship = Friendship.find_by(user_id: @friendship.friend_id, friend_id: @friendship.user_id)
        if @friendship 
            @friendship.destroy 
            reverse_friendship.destroy 
            render "api/friendships/show"
        else
            render json: ["Friendship not found"], status: 404
        end
            
    end

    private 
    def friendship_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end
end
