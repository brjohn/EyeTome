json.extract! @request, :id, :requestor_id, :friend_requested_id

# json.requestor do 
#     user = @request.requestor 
#     json.extract! user, :id, :first_name, :last_name
# end

# json.friend_requested do 
#     user = @request.friend_requested
#     json.extract! user, :id, :first_name, :last_name
# end