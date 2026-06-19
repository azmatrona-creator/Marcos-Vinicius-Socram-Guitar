function renderFillings() {
  const containerPai = document.querySelector(".Instrumentos");
  
  if (!containerPai) {
    console.error("Elemento .Instrumentos não foi encontrado no seu HTML.");
    return;
  }

  containerPai.innerHTML = "";


  for (let filling of fillings) {
    let divFill = document.createElement("div");
    divFill.classList.add("instrumento-item"); 

    const precoFormatado = filling.price ? filling.price.toFixed(2).replace('.', ',') : "0,00";


    divFill.innerHTML = `
        <label>
            <input type="checkbox" name="item-adicional" value="${filling.name}" />
            <span>${filling.name} - <strong>R$ ${precoFormatado}</strong></span>
        </label>
    `;

   
    containerPai.appendChild(divFill);
  }
}