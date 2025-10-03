const className = 'three-bounce';

let shouldShowSpinner = false;
let shouldHideSpinner = false;

export const Spinner = {
  show: showSpinner,
  hide: hideSpinner,
};

function getPreloader() {
  return document.getElementById('preloader')!;
}

function showSpinner() {
  if (!shouldShowSpinner) {
    shouldShowSpinner = true;
    setTimeout(showSpinner, 100);
    return;
  }

  shouldHideSpinner = false;

  // getSpinner().className = className;
}

function hideSpinner() {
  if (!shouldHideSpinner) {
    shouldHideSpinner = true;
    setTimeout(hideSpinner, 250);
    return;
  }

  shouldShowSpinner = false;

  // const spinner = getSpinner();
  // spinner.className = `${className} hiding`;

  const preloader = getPreloader();
  preloader.className = `preloader hiding`;

  setTimeout(() => {
    // spinner.className = `${className} hidden`;
    preloader.className = `preloader hidden`;
  }, 1000);
}
