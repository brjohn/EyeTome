
export const fetchUser = id => {
    return (
        $.ajax({
            url: `api/users/${id}`,
            method: "GET",
            
        })
    )
} 

export const fetchUsers = () => {
    return (
        $.ajax({
            url: 'api/users',
            method: "GET"
        })
    )
}

export const updateUser = formData => {
    
    return (
        $.ajax({
            url: `api/users/${formData.get("user[id]")}`,
            method: "PATCH",
            data: formData,
            contentType: false,
            processData: false
        })
    )
}