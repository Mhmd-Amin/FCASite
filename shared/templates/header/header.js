if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    changeTheme(document.getElementById("system-theme-btn-lg"));
}

window.matchMedia('(prefers-color-scheme: light)')
    .addEventListener('change', ({matches}) => {
        let themeBtn = document.getElementById("system-theme-btn-lg");
        if (themeBtn.classList.contains("theme-option-btn-active")) {
            if (matches) {
                changeTheme(themeBtn);
            } else {
                changeTheme(themeBtn);
            }
        }
})


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
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                // console.log("e close version");
                toggleVersions(element);
                e.target.blur();
            }
        });
    }
}

function showSearch(element) {
    if (element.getAttribute("aria-expanded") === "false") {
        let searchSection = document.getElementById("search-section-id");
        let closeBtn = document.getElementById("search-close-btn")
        let searchBox = document.getElementById("search-box-id");
        let versionBtn = document.getElementById("version-btn-id");
        let searchInput = document.getElementById("search-input-id");

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
        searchInput.focus();

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                // console.log("e close search");
                closeSearch(document.getElementById("search-close-btn"));
                e.target.blur();
            }
        });
    }
}

function closeSearch(element) {
    if (element.getAttribute("aria-expanded") === "true") {
        let searchSection = document.getElementById("search-section-id");
        let searchBox = document.getElementById("search-box-id");
        let searchBtn = document.getElementById("topics-search-btn-id");
        if (searchBtn.getAttribute("aria-expanded") === "false") {
            searchBtn = document.getElementById("search-open-btn");
        }

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

    document.body.classList.add("overflow-y-hidden");
    menuSection.classList.remove("d-none", "remove-backdrop-blur");
    headerMenuBox.classList.remove("hide-animation");
    menuSection.classList.add("add-backdrop-blur");
    headerMenuBox.classList.add("show-animation");

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            // console.log("e close menu");
            closeMenu(element);
            e.target.blur();
        }
    });
    menuSection.addEventListener("click", (e) => {
        // console.log("c close menu");
        e.stopPropagation();
        closeMenu(element);
    });
    headerMenuBox.addEventListener("click", (e) => {
        // console.log("c stop");
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
    document.body.classList.remove("overflow-y-hidden");

    setTimeout(function () {
        menuSection.classList.add("d-none");
    }, 200);
}

function changeTheme(element) {
    // TODO: change theme automatically by css because by using js when system color change the website theme isn't change
    let themeSection = document.getElementById("theme-section-id");
    let themeState = document.getElementById("theme-state");
    let themeIcon = document.getElementById("theme-icon-btn");
    let changeBtnLg = document.getElementById("theme-icon-btn-lg");
    let themeBtnLg = document.getElementsByClassName("theme-option-btn-active")[0];
    let darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    let body = document.body;

    if (element.innerText === "System") {
        themeState.innerText = element.innerText;
        if (themeBtnLg.innerText !== "System") {
            themeBtnLg.classList.remove("theme-option-btn-active");
            document.getElementById("system-theme-btn-lg").classList.add("theme-option-btn-active");
        }
        // change to dark if system theme was dark and site was light
        if (darkTheme.matches && themeIcon.classList.contains("bi-brightness-high")) {
            themeSection.classList.remove("theme-section-light");
            themeSection.classList.add("theme-section-dark");
            themeIcon.classList.remove("bi-brightness-high");
            themeIcon.classList.add("bi-moon-stars");
            changeBtnLg.classList.remove("bi-brightness-high");
            changeBtnLg.classList.add("bi-moon-stars");
            body.classList.remove("light");
            body.classList.add("dark");
        // change to light if system theme was light and site was dark
        } else if (!darkTheme.matches && themeIcon.classList.contains("bi-moon-stars")) {
            themeSection.classList.remove("theme-section-dark");
            themeSection.classList.add("theme-section-light");
            themeIcon.classList.remove("bi-moon-stars");
            themeIcon.classList.add("bi-brightness-high");
            changeBtnLg.classList.remove("bi-moon-stars");
            changeBtnLg.classList.add("bi-brightness-high");
            body.classList.remove("dark");
            body.classList.add("light");
        }
    } else if (themeState.innerText !== element.innerText) {
        themeState.innerText = element.innerText;
        // change to dark
        if (element.innerText === "Dark") {
            if (themeBtnLg.innerText !== "Dark") {
                themeBtnLg.classList.remove("theme-option-btn-active");
                document.getElementById("dark-theme-btn-lg").classList.add("theme-option-btn-active");
            }
            themeSection.classList.remove("theme-section-light");
            themeSection.classList.add("theme-section-dark");
            themeIcon.classList.remove("bi-brightness-high");
            themeIcon.classList.add("bi-moon-stars");
            changeBtnLg.classList.remove("bi-brightness-high");
            changeBtnLg.classList.add("bi-moon-stars");
            body.classList.remove("light");
            body.classList.add("dark");
        } else {
            // change to light
            if (themeBtnLg.innerText !== "Light") {
                themeBtnLg.classList.remove("theme-option-btn-active");
                document.getElementById("light-theme-btn-lg").classList.add("theme-option-btn-active");
            }
            themeSection.classList.remove("theme-section-dark");
            themeSection.classList.add("theme-section-light");
            themeIcon.classList.add("bi-brightness-high");
            themeIcon.classList.remove("bi-moon-stars");
            changeBtnLg.classList.add("bi-brightness-high");
            changeBtnLg.classList.remove("bi-moon-stars");
            body.classList.remove("dark");
            body.classList.add("light");
        }
    }

    if (changeBtnLg.parentElement.getAttribute("aria-expanded") === "true") {
        toggleTheme(changeBtnLg.parentElement);
    } else {
        toggleTheme(document.getElementById("theme-btn-id"));
    }
}

function toggleTheme(element) {
    let themesList = document.getElementById(element.getAttribute("aria-controls"));
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
