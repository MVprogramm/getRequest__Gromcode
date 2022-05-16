import { fetchUserData, fetchRepositories } from "./gateways.js";
import { renderUserData, renderRepos } from "./render.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = async () => {
  showSpinner();

  const userName = userNameInputElem.value;

  try {
    const userData = await fetchUserData(userName);

    renderUserData(userData);
    renderRepos(await fetchRepositories(userData.repos_url));
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();

    userNameInputElem.value = "";
  }
};

showUserBtnElem.addEventListener("click", onSearchUser);
