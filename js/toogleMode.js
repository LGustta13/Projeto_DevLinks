if(localStorage.getItem("light-theme") == "true"){
  document.documentElement.classList.toggle("light")
}

function toogleMode() {

  // Alterar a classe light no HTML
  const html = document.documentElement; // root
  let value = html.classList.toggle('light');

  if(value){
    localStorage.setItem("light-theme", true)
  } else {
    localStorage.setItem("light-theme", false)
  }
  
  
  // Alterar a imagem do usuário pelo CSS
  const img = document.querySelector('#profile img') // #profile img
  
  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/avatar-gusta-light.jpg")
  } else {
    img.setAttribute("src", "./assets/avatar-gusta.jpg")
  }

  return value;
}