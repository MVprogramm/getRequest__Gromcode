import { fetchUserData, fetchRepositories } from "./gateways.js";
import { renderUserData, renderRepos } from "./render.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  showSpinner();

  const userName = userNameInputElem.value;

  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);

      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => {
      renderRepos(reposList);
      hideSpinner();
    })
    .catch((err) => {
      hideSpinner();
      alert(err.message);
    })
    .finally(() => {
      userNameInputElem.value = "";
    });
};

showUserBtnElem.addEventListener("click", onSearchUser);
