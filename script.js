function toogleMode() {

  // Alterar a classe light no HTML
  const html = document.documentElement; // root
  html.classList.toggle('light');

  // Alterar a imagem do usuário pelo CSS
  const img = document.querySelector('#profile img') // #profile img
  
  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/avatar-gusta-light.jpg")
  } else {
    img.setAttribute("src", "./assets/avatar-gusta.jpg")
  }
}