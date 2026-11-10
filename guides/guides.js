const menus = [...document.querySelectorAll('.shop-menu, .mobile-navigation')]
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return
  const openMenu = menus.filter((menu) => menu.open).at(-1)
  if (!openMenu) return
  openMenu.open = false
  openMenu.querySelector('summary')?.focus()
})
document.addEventListener('click', (event) => {
  for (const menu of menus) if (!menu.contains(event.target)) menu.open = false
})

const contents = document.querySelector(".toc details")
if (contents) {
  const wideScreen = window.matchMedia('(min-width: 901px)')
  const updateContents = () => { contents.open = wideScreen.matches }
  updateContents()
  wideScreen.addEventListener('change', updateContents)
}
