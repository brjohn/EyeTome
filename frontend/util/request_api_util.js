export const fetchRequest = id => {
    return (
        $.ajax({
            url: `api/requests/${id}`,
            method: "GET"
        })
    )
};

export const createRequest = (request) => {
    return (
        $.ajax({
            url: "api/requests",
            method: "POST",
            data: {request}
        })
    )
};

export const deleteRequest = (id) => {
    return (
        $.ajax({
            url: `api/requests/${id}`,
            method: "DELETE"
        })
    )
};