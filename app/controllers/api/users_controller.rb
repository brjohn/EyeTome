class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)
        if @user.save 
            login(@user)
            render "api/users/show"
        else 
            render json: @user.errors.full_messages, status: 422
        end

        def update
            @user = User.find(params[:id])
            if @user.update(user_params)
                render "api/users/show"
            else
                render json: @user.errors.full_messages, status: 422
            end
        end

        def show 
            @user = User.find(params[:id])
            render "api/users/show"
        end

        def index 
            @users = User.all 
            render "api/users/index"
        end

    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :birthday, :gender, :email, :password)
    end

end
