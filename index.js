let valVid = document.querySelector(".vidgets-text");
let valMonth = document.querySelector(".month-text");
let valCaseLink = document.querySelector(".case-link");
let valThanksLink = document.querySelector(".thanks-link");

let windowInnerWidth = window.innerWidth;
const changeValue = () => {
  if (windowInnerWidth <= 390) {
    valVid.innerHTML = "30 виджетов";
    valMonth.innerHTML = "Месяц аmoCRM";
    valCaseLink.innerHTML = "Благодарность клиентов";
    valThanksLink.innerHTML = "Кейсы";
  } else {
    valVid.innerHTML = "виджеты";
    valMonth.innerHTML = "35 дней";
    valCaseLink.innerHTML = "Кейсы";
    valThanksLink.innerHTML = "Благодарственные письма";
  }
};

window.onresize = () => {
  let newWidth = window.innerWidth;

  changeValue();
  windowInnerWidth = newWidth;
};

// case-link
// thanks-link
