const responseHandler = (response) => {
  if (response.ok) {
    return response.json();
  }

  throw new Error("Filed to load data");
};

export const fetchUserData = (userName) =>
  fetch(`https://api.github.com/users/${userName}`).then((response) =>
    responseHandler(response)
  );

export const fetchRepositories = (url) =>
  fetch(url).then((response) => responseHandler(response));
