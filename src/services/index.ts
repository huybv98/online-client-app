const DATA_SOURCE_URL = 'http://13.250.5.145/api'
const ContentType = {
    urlencoded: 'application/x-www-form-urlencoded;charset=UTF-8',
    json: 'application/json',
    formData: 'multipart/form-data'
}

const executeApp = async (
    url: string,
    params?: any,
    method: string = 'get',
) => {
    const res =  await fetch(`${DATA_SOURCE_URL}/${url}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
            // 'API-Key': API_KEY
        },
        body: JSON.stringify(params)
    })
    return await res.json()
}

export { executeApp }