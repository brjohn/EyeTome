export const fetchFriendship = id => {
    return (
        $.ajax({
            url: `api/friendships/${id}`,
            method: "GET"
        })
    )
};

export const createFriendship = (friendship) => {
    return (
        $.ajax({
            url: "api/friendships",
            method: "POST",
            data: {friendship}
        })
    )
};

export const deleteFriendship = (id) => {
    return (
        $.ajax({
            url: `api/friendships/${id}`,
            method: "DELETE"
        })
    )
};