const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");
const reposListElem = document.querySelector(".repo-list");

userAvatarElem.src = "https://avatars3.githubusercontent.com/u10001";

export const renderUserData = (userData) => {
  reposListElem.innerHTML = "";
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : "";
};

export const renderRepos = (reposList) => {
  const repoListItems = reposList.map((repo) => {
    const repoListItem = document.createElement("li");
    repoListItem.classList.add("repo-list__item");
    repoListItem.textContent = repo.name;

    return repoListItem;
  });

  reposListElem.append(...repoListItems);
};
