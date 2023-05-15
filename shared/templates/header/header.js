function toggleVersions(element) {
    let versionsList = document.getElementById("version-list");
    if (element.getAttribute("aria-expanded") === 'true') {
        element.setAttribute("aria-expanded", "false");
        versionsList.classList.remove("show-animation");
        versionsList.classList.add("hide-animation");
        setTimeout(function () {
            versionsList.classList.add("d-none");
        }, 200);
    } else {
        element.setAttribute("aria-expanded", "true");
        versionsList.classList.remove("d-none", "hide-animation");
        versionsList.classList.add("show-animation");
    }
}

function showSearch(element) {
    if (element.getAttribute("aria-expanded") === "false") {
        let searchSection = document.getElementById("search-section-id");
        let closeBtn = document.getElementById("search-close-btn")
        let searchBox = document.getElementById("search-box-id");
        let versionBtn = document.getElementById("version-btn-id");

        if (versionBtn.getAttribute("aria-expanded") === "true") {
            toggleVersions(versionBtn);
        }

        element.setAttribute("aria-expanded", "true");
        closeBtn.setAttribute("aria-expanded", "true")
        searchSection.classList.remove("d-none", "remove-backdrop-blur");
        searchBox.classList.remove("hide-animation");
        searchSection.classList.add("add-backdrop-blur");
        searchBox.classList.add("show-animation");
        document.body.classList.add("overflow-hidden");

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeSearch(document.getElementById("search-close-btn"));
                e.target.blur();
            }
        });
    }
}

function closeSearch(element) {
    if (element.getAttribute("aria-expanded") === "true") {
        let searchSection = document.getElementById("search-section-id");
        let searchBtn = document.getElementById("search-open-btn");
        let searchBox = document.getElementById("search-box-id");

        element.setAttribute("aria-expanded", "false");
        searchBtn.setAttribute("aria-expanded", "false");
        searchSection.classList.remove("add-backdrop-blur");
        searchBox.classList.remove("show-animation");
        searchBox.classList.add("hide-animation");
        searchSection.classList.add("remove-backdrop-blur");

        setTimeout(function () {
            searchSection.classList.add("d-none");
        }, 200);

        document.body.classList.remove("overflow-hidden");
    }
}

function showMenu(element) {
    element.setAttribute("aria-expanded", "true");
    let menuSection = document.getElementById("menu-section");
    let headerMenuBox = document.getElementById("header-menu-box-id");
    let versionBtn = document.getElementById("version-btn-id");

    if (versionBtn.getAttribute("aria-expanded") === "true") {
        toggleVersions(versionBtn);
    }

    menuSection.classList.remove("d-none", "remove-backdrop-blur");
    headerMenuBox.classList.remove("hide-animation");
    menuSection.classList.add("add-backdrop-blur");
    headerMenuBox.classList.add("show-animation");

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu(element);
            e.target.blur();
        }
    });
    menuSection.addEventListener("click", (e) => {
        e.stopPropagation();
        closeMenu(element);
    });
    headerMenuBox.addEventListener("click", (e) => {
        e.stopPropagation();
    });
}

function closeMenu(element) {
    element.setAttribute("aria-expanded", "false");
    let menuSection = document.getElementById("menu-section");
    let headerMenuBox = document.getElementById("header-menu-box-id");
    let themesList = document.getElementById("themes-list");
    let themeBtn = document.getElementById("theme-btn-id");

    themesList.classList.add("d-none");
    themeBtn.setAttribute("aria-expanded", "false");

    menuSection.classList.remove("add-backdrop-blur");
    headerMenuBox.classList.remove("show-animation");
    headerMenuBox.classList.add("hide-animation");
    menuSection.classList.add("remove-backdrop-blur");

    setTimeout(function () {
        menuSection.classList.add("d-none");
    }, 200);
}

function changeTheme(element) {
    // TODO: can change theme automatically by css because by using js when system color change the website theme isn't change
    let themeState = document.getElementById("theme-state");
    let darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    let themeIcon = document.getElementById("theme-icon-btn");

    if (element.innerText === "System") {
        themeState.innerText = element.innerText;
        if (darkTheme.matches && themeIcon.classList.contains("bi-brightness-high")) {
            themeIcon.classList.remove("bi-brightness-high");
            themeIcon.classList.add("bi-moon-stars");
        } else if (!darkTheme.matches && themeIcon.classList.contains("bi-moon-stars")) {
            themeIcon.classList.add("bi-brightness-high");
            themeIcon.classList.remove("bi-moon-stars");
        }
    } else if (themeState.innerText !== element.innerText) {
        themeState.innerText = element.innerText;
        if (element.innerText === "Dark") {
            themeIcon.classList.remove("bi-brightness-high");
            themeIcon.classList.add("bi-moon-stars");
        } else {
            themeIcon.classList.add("bi-brightness-high");
            themeIcon.classList.remove("bi-moon-stars");
        }
    }
    toggleTheme(document.getElementById("theme-btn-id"));
}

function toggleTheme(element) {
    let themesList = document.getElementById("themes-list");
    if (element.getAttribute("aria-expanded") === "false") {
        element.setAttribute("aria-expanded", "true");
        themesList.classList.remove("d-none", "hide-animation");
        themesList.classList.add("show-animation");
    } else {
        element.setAttribute("aria-expanded", "false");
        themesList.classList.remove("show-animation");
        themesList.classList.add("hide-animation");
        setTimeout(function () {
            themesList.classList.add("d-none");
        }, 200);
    }
}