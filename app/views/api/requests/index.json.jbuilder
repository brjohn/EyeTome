@requests.each do |request|
    json.set! request.id do 
        json.extract! request, :requestor_id, :friend_requested_id
    end
end