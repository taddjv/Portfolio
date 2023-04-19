export const inputFocusIn = (n) => {
  const div = document.querySelectorAll(`.cf-data`)[n - 1];
  if (n === 4) {
    div.childNodes[0].style.bottom = "216px";
    div.childNodes[1].style.border = "solid rgba(255, 255, 255, 1) 4px";
    div.childNodes[1].style.background = "rgba(255, 255, 255, 0.2)";
  } else {
    div.childNodes[0].style.bottom = "56px";
    div.childNodes[1].style.border = "solid rgba(255, 255, 255, 1) 4px";
    div.childNodes[1].style.background = "rgba(255, 255, 255, 0.2)";
  }
};
export const inputFocusOut = (n, e) => {
  const div = document.querySelectorAll(`.cf-data`)[n - 1];

  if (!e.target.value) {
    div.childNodes[0].style.bottom = "24px";
    div.childNodes[1].style.border = "solid rgba(255, 255, 255, 0) 4px";
    div.childNodes[1].style.borderBottom = "solid white 4px";
    div.childNodes[1].style.background = "rgba(255, 255, 255, 0)";
  }
};
