window.rennes = window.rennes || {};
window.rennes.IconNav = function () {
  this.menus = document.querySelectorAll('#dropdown-vos-services + .dropdown-menu, .footer-menu-thematic, .footer-menu-news');

  console.log(this.menus)
  if (this.menus.length > 0) {
    this.menus.forEach((menu) => {
      const items = menu.querySelectorAll('li');

      items.forEach((item) => {
        let itemContent = item.textContent;

        // To kebab-case : Remove space around text + accent + not world character + transform space to hyphens
        itemClass = itemContent.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/g, '') .replace(/\s+/g, '-');
        item.classList.add(itemClass);
      })

    })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  new window.rennes.IconNav();
});
