
import { getUserFromStorage, destroyUser } from './features/user/userSlice';
export async function client(endpoint, { body, ...customConfig } = {}) {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const user = getUserFromStorage();
    let data;
    if(user && user.data)
      headers.token = 'Bearer '+user.data.authToken;
    const config = {
      method: body ? 'POST' : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
      },
    }
    if (body) {
      config.body = JSON.stringify(body);
    }
    const response = await window.fetch(endpoint, config)
    data = await response.json()
    if (data.status) {
      // Return a result object similar to Axios
      return {
        data
      }
    }
    if(response.status === 401) {
        destroyUser();
        window.location = "/login"
    }
    throw new Error(data.message)
  } catch (err) {
    console.log(err.message)
    return Promise.reject(err.message ? err.message: err)
  }
}

client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'GET' })
}

client.post = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, body })
}