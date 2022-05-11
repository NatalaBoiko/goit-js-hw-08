import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");
console.log(feedbackForm);
// const emailEl = document.querySelector("form input");
// console.log(emailEl);
// const messageEl = document.querySelector("form textarea");
// console.log(messageEl);

const LOCALSTORAGE_KEY = "feedback-form-state";

const feedbackFormState = {};

const onInput = (e) => {
  const name = e.target.name;
  const message = e.target.value;

  if (feedbackFormState) {
    feedbackFormState[name] = message;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormState));
  }
  // console.log(feedbackFormState);
};

const onFormSubmit = (e) => {
  e.preventDefault();
  localStorage.getItem(LOCALSTORAGE_KEY);
  // console.log(":)");
  feedbackForm.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);

  console.log(feedbackFormState);
};

feedbackForm.addEventListener("input", throttle(onInput, 1000));
feedbackForm.addEventListener("submit", onFormSubmit);
