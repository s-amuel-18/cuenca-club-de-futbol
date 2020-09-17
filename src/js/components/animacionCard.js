export const animationCard = (card,animacion) => {
  const d = document,
      w = window,
      cardObjetivo = d.querySelectorAll(card)
cardObjetivo.forEach((objetivo,i) => {
  const scrollAnimation = () => {
    // const scrollTop = d.documentElement.scrollTop,
         const topObjetivo = objetivo.getBoundingClientRect().top
    if((topObjetivo - 600) <= 0){
      objetivo.classList.add(`animationtranslatexOpaciti`)
    }
    // console.log(topObjetivo)
  }
  w.addEventListener(`scroll`,scrollAnimation)


  // console.log(objetivo.getBoundingClientRect().bottom)

})
}