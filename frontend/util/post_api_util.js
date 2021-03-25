export const fetchPost = id => {
    return (
        $.ajax({
            url: `api/posts/${id}`,
            method: "GET"
        })
    )
}

export const fetchPosts = (wallId) => {
    return (
        $.ajax({
            url: "api/posts",
            method: "GET",
            data: {wallId}
        })
    )
}

export const createPost = post => {
    
    return ( 
        $.ajax({
            url: "api/posts",
            method: "POST",
            data: {post},
            // contentType: false,
            // processData: false
        })
    )
}

export const updatePost = post => {
    return ( 
        $.ajax({
            // url: `api/posts/${post.get("post[id]")}`,
            url: `api/posts/${post.id}`,
            method: "PATCH",
            data: {post},
            // contentType: false,
            // processData: false
        })
    )
}

export const deletePost = id => {
    return (
        $.ajax({
            url: `api/posts/${id}`,
            method: "DELETE"
        })
    )
}