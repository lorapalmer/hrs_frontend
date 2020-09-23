// CREATE URL FOR QUERIES USAGE
const objectToQueryString = (o: any): string =>
  Object.keys(o)
    .map((k: string) => k + '=' + o[k])
    .join('&');

// BASE HTTP REQUEST WRAPPER
const request = async (url: string, params: Object, method: string = 'GET') => {
  const baseURL: string = 'http://localhost:5000/api/';
  const options: any = {
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
  get: (url: string, params: Object) => request(url, params),
  add: (url: string, params: Object) => request(url, params, 'POST'),
  update: (url: string, params: Object) => request(url, params, 'PUT'),
  remove: (url: string, params: Object) => request(url, params, 'DELETE'),
};

export default api;
