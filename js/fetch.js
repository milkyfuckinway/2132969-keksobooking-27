const Urls = {
  GET: 'https://25.javascript.pages.academy/keksobooking/data',
  POST: 'https://25.javascript.pages.academy/keksobooking',
};

const sendRequest = (onSuccess, onError, method, data) => {
  fetch(
    Urls[method],
    {
      method: method,
      body: data,
    },
  )
    .then((response) => response.json())
    .then((body) => {
      onSuccess(body);
    }).catch((error) => {
      onError(error);
      console.log(error);
    });
};

export { sendRequest };
