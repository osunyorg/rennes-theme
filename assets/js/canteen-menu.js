window.rennes = window.rennes || {};

window.rennes.MenuCanteen = function () {
    this.menus = document.querySelectorAll('.block-class-canteen-menu');

    if (this.menus.length > 0) {
        const labels = ["[BIO]", "[FR]", "[LOC]", "[VEGE]", "[DUR]", "[UEL]", "[UEF]"];
        const labelAlts = {
            "[BIO]": "Agriculture biologique",
            "[FR]": "Viande d'origine française",
            "[LOC]": "Marque Terres de Sources (locale et durable)",
            "[DUR]": "Produits durable",
            "[VEGE]": "Végétarien (sans viande ni poisson)",
            "[UEL]": "Produit laitier bénéficiant d'un financement de l'Union Européenne à destination des écoles",
            "[UEF]": "Fruit ou légume bénéficiant d'un financement de l'Union Européenne à destination des écoles"
        };

        this.menus.forEach((menu) => {
            const items = menu.querySelectorAll('td');

            items.forEach((item) => {
                let itemContent = item.textContent;
                const icons = [];

                labels.forEach((label) => {
                    if (itemContent.includes(label)) {
                        itemContent = itemContent.replace(label, '').trim();
                        const cleanLabel = label.replace(/\[|\]/g, '');
                        const img = document.createElement('img');
                        img.src = `/assets/images/icons/${cleanLabel}.png`;
                        img.alt = labelAlts[label];

                        icons.push(img);
                    }
                });

                item.innerHTML = '';
                const span = document.createElement('span');
                span.textContent = itemContent;
                item.appendChild(span);

                if (icons.length === 1) {
                    item.appendChild(icons[0]);

                } else if (icons.length > 1) {
                    const iconContainer = document.createElement('ul');
                    icons.forEach((icon) => {
                        const li = document.createElement('li');
                        li.appendChild(icon);
                        iconContainer.appendChild(li);
                    });
                    item.appendChild(iconContainer);
                }
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    new window.rennes.MenuCanteen();
});
