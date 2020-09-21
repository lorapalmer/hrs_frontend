// CREATE URL FOR QUERIES USAGE
const objectToQueryString = (o) =>
  Object.keys(o)
    .map((k) => k + '=' + o[k])
    .join('&');

// BASE HTTP REQUEST WRAPPER
const request = async (url, params, method = 'GET') => {
  const baseURL = 'http://localhost:5000/api/';
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (params) {
    if (method === 'GET') {
      url += '?' + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params);
    }
  }

  try {
    const response = await fetch(baseURL + url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// INTERFACE WITH MAIN CRUD OPERATION METHODS
const api = {
  get: (url, params) => request(url, params),
  add: (url, params) => request(url, params, 'POST'),
  update: (url, params) => request(url, params, 'PUT'),
  remove: (url, params) => request(url, params, 'DELETE'),
};

export default api;
