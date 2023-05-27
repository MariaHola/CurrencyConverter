{
  const welcome = () => {
    console.log("Alloha y'all!")
  }

  const amountCalculation = (event) => {
    event.preventDefault();
    const resultElement = document.querySelector(".js-result");
    const amountPln = document.querySelector(".js-pln");
    const pln = amountPln.value;
    const result = pln / 4.49;

    resultElement.innerText = result.toFixed(2);

    console.log(result);
  }

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", amountCalculation);
    welcome();
  };

  init(); 

}