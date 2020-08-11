export const acquireChatList = (sender) => {
  // Create our request constructor with all the parameters we need
  const request = new Request("/chatHistory", {
      method: "get",
      headers: {
        sender
      }
  });
  // Send the request with fetch()
  return fetch(request)
  .then(res => {
      if (res.status === 200) {
          return res.json();
      }
  }).catch(error => {
      console.log(error);
  });
};