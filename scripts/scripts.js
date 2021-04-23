(() => {
    const storageKeys = {
        selectedPage: "selected-page"
    };
    const id = "root";
    const selector = `#${id}`;
    const body = document.querySelector(selector);
    let selectedPage = localStorage.getItem(storageKeys.selectedPage);
    const areasSelector = '[group="page-area"]';
    const areas = Array.from(document.querySelectorAll(areasSelector));
    const switchersSelector = '[group="page-switcher"]';
    const switchers = Array.from(document.querySelectorAll(switchersSelector));
    const testPageNumber = 10;

    if (!selectedPage) {
        localStorage.setItem(storageKeys.selectedPage, "1");
        selectedPage = "1";
    } else {
        if (parseInt(selectedPage) === testPageNumber) {
            localStorage.setItem(storageKeys.selectedPage, "1");
            selectedPage = "1";
        }
    }

    if (!body) return;

    if (switchers.length > 0) {
        switchers.forEach(switcher => {
            switcher.addEventListener("click", (event) => {
                const selectedArea = areas.find((area) => area.getAttribute("marker") === event.target.getAttribute("marker"));
                if (!selectedArea) return;

                areas.forEach((area) => {
                    if (area !== selectedArea) {
                        area.setAttribute("hidden", "true");

                    } else {
                        area.removeAttribute("hidden");
                        localStorage.setItem(storageKeys.selectedPage, area.getAttribute("marker"));
                    }
                });
            });
        });
    }

    if (areas.length > 0) {
        areas.forEach(area => {
            const marker = area.getAttribute("marker");
            if (parseInt(marker) !== parseInt(selectedPage)) {
                area.setAttribute("hidden", "");
            } else {
                area.removeAttribute("hidden");
            }
        });
    }
})();