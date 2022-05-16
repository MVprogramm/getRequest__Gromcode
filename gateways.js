const responseHandler = async (response) => {
  if (response.ok) {
    return await response.json();
  }

  throw new Error("Filed to load data");
};

export const fetchUserData = async (userName) =>
  responseHandler(await fetch(`https://api.github.com/users/${userName}`));

export const fetchRepositories = async (url) =>
  responseHandler(await fetch(url));
