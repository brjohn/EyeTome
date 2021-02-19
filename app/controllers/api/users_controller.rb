class Api::UsersController < ApplicationController
    def create 
        
        @user = User.new(user_params)
        if @user.save 
            login(@user)
            render "api/users/show"
        else 
            
            render json: @user.errors.full_messages, status: 422
        end
    end

        def update
            @user = User.find(params[:id])
            if @user.update(user_update_params)
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

    

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :birthday, :gender, :email, :password)
    end

    def user_update_params
        params.require(:user).permit(:bio, :work, :education, :current_city, :hometown, :relationship, :name_pronunciation, :profile_pic, :cover_photo)
    end

end
