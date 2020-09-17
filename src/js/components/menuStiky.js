export const menuStiky = (menu,header)=>{
  const d = document,
    w = window,
    firstContent = document.querySelector(header),
    menuStiky = d.querySelector(menu),
    heightHeader = w.getComputedStyle(firstContent,null).getPropertyValue(`height`).split(`px`)[0],
    heightMenuStiky = w.getComputedStyle(menuStiky,null).getPropertyValue(`height`).split(`px`)[0]

    const scrollLimit = heightHeader - heightMenuStiky
    const moveScroll = () => {
      let scrollTop = w.pageXOffset || document.documentElement.scrollTop

      if(scrollTop > scrollLimit){
        menuStiky.classList.add(`activeBcgColor`)
      }else{
        menuStiky.classList.remove(`activeBcgColor`)

      }
    }
    w.addEventListener(`scroll`,moveScroll)
}