
export const fetchUser = id => {
    return (
        $.ajax({
            url: `api/users/${id}`,
            method: "GET",
            
        })
    )
} 

export const updateUser = user => {
    return (
        $.ajax({
            url: `api/users/${user.id}`,
            method: "PATCH",
            data: {user: user},
            // for AWS photos???:
            // data: formData,
            // contentType: false,
            // processData: false
        })
    )
}