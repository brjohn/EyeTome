class Api::RequestsController < ApplicationController

    def create 
        @request = Request.new(request_params)
        if @request.save 
            render "api/requests/show"
        else
            render json: @request.errors.full_messages, status: 422
        end
    end

    def destroy 
        @request = Request.find_by(id: params[:id])
        if @request 
            @request.destroy 
            render "api/requests/show"
        else
            render json: ["Request not found"], status: 404
        end
    end

    private 
    def request_params
        params.require(:request).permit(:requestor_id, :friend_requested_id)
    end
end
