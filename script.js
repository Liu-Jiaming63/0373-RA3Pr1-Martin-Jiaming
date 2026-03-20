const selects = document.querySelectorAll(".digit-select");
//amb aquesta comanda busquem els 4 espais de digits
selects.forEach(select => {
  for (let i = 0; i <= 9; i++) {
//aixo crea els numeros que utilitzarem en el desplegable
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }
});