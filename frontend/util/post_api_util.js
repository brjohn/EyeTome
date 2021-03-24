export const fetchPost = id => {
    return (
        $.ajax({
            url: `api/posts/${id}`,
            method: "GET"
        })
    )
}

export const fetchPosts = () => {
    return (
        $.ajax({
            url: "api/posts",
            method: "GET"
        })
    )
}

export const createPost = formData => {
    return ( 
        $.ajax({
            url: "api/posts",
            method: "POST",
            data: formData
        })
    )
}

export const updatePost = formData => {
    return ( 
        $.ajax({
            url: `api/posts/${formData.get("post[id]")}`,
            method: "PATCH",
            data: formData,
            contentType: false,
            processData: false
        })
    )
}

export const deletePost = id => {
    return (
        S.ajax({
            url: `api/posts/${id}`,
            method: "DELETE"
        })
    )
}