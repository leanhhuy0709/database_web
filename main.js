const myTimeout = setTimeout(myGreeting, 5000);

function myStopFunction() {
  clearTimeout(myTimeout);
}