window.rennes = window.rennes || {};

window.rennes.MenuCanteen = function () {
  this.menus = document.querySelectorAll('.block-class-canteen-menu');

  const labels = ["[BIO]", "[FR]", "[LOC]", "[VEGE]", "[DUR]", "[UEL]", "[UEF]"];

  this.menus.forEach((menu) => {
    const items = menu.querySelectorAll('td, legend');

    items.forEach((item) => {
      let itemContent = item.textContent;

      labels.forEach((label) => {
        if (itemContent.includes(label)) {
          itemContent = itemContent.replace(label, '').trim();
          item.innerHTML = '';
          const span = document.createElement('span');
          span.textContent = itemContent;
          item.appendChild(span);

          const cleanLabel = label.replace(/\[|\]/g, '');
          const img = document.createElement('img');
          img.src = `/assets/images/icons/${cleanLabel}.png`;
          img.alt = cleanLabel;

          item.appendChild(img);
        }
      });
    });
  });
};

document.addEventListener('DOMContentLoaded', function () {
  new window.rennes.MenuCanteen();
});
