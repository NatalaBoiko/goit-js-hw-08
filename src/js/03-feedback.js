import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";

let feedbackFormState = {};
populateForm();

const onInput = (e) => {
  const name = e.target.name;
  const message = e.target.value;
  if (feedbackFormState) {
    feedbackFormState[name] = message;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormState));
  }
};

const onFormSubmit = (e) => {
  e.preventDefault();

  if (!feedbackForm.email.value) {
    alert`'Fill in Email'`;
  } else if (!feedbackForm.message.value) {
    alert`'Fill in Message'`;
  } else {
    console.log(feedbackFormState);
    feedbackForm.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    feedbackFormState = {};
  }
};

function populateForm() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    feedbackFormState = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  }
  if (feedbackFormState.email) {
    feedbackForm.email.value = feedbackFormState.email;
  }
  if (feedbackFormState.message) {
    feedbackForm.message.value = feedbackFormState.message;
  }
}

feedbackForm.addEventListener("input", throttle(onInput, 1000));
feedbackForm.addEventListener("submit", onFormSubmit);
