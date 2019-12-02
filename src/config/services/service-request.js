import axios from 'axios';

export const http_verbs = {
    GET: 'GET',
    POST:'POST',
    PUT:'PUT',
    DELETE:'DELETE'
}

export const axios_fetch = (method, urlWithParams, body) => {
    switch (method) {
        case http_verbs.PUT: {
            return (
                axios.put(
                    urlWithParams,
                    JSON.stringify(body)
                )
            )
        }
        case http_verbs.POST: {
            return (
                axios.post(urlWithParams,
                    JSON.stringify(body)
                )
            )
        }
        case http_verbs.DELETE:
            return (
                axios.delete(urlWithParams)
            )
        default:
            return (axios.get(urlWithParams))

    }
}
