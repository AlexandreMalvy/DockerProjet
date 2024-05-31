export default async (url, requestType, data = null)=>{
    const header = {
        method:requestType,
        headers:{
            'Content-type':'application/json'
        }
    }

    if (requestType == 'POST' || requestType == 'PUT') {
        header.body = JSON.stringify(data)
    }
    const response = await fetch(url, header)

    return Promise.resolve(await response.json())
}