const defaultHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

const fetchApi = async (url, method, reqHeaders = null, reqBody = null) => {
    try {
        const URL = `https://newsapi.org/v2/${url}`;
        let headers = {...defaultHeaders};
        if (reqHeaders) {
            headers = {
                ...headers,
                ...reqHeaders
            }
        }

        const fetchParams = {method, headers};

        if (reqBody) {
            fetchParams.body = JSON.stringify(reqBody);
        }

        const fetchPromise = fetch(URL, fetchParams);
        const timerPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Request timeout");
            }, 10000);
        });
        const response = await Promise.race([fetchPromise, timerPromise]);
        return response.json();
    } catch (err) {
        throw new Error(err);
    }
};

export default fetchApi;
