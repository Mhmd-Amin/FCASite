function showTopics(element) {
    // let topicAddressBar = document.getElementById("topic-address-bar-id");
    let topicsSection = document.getElementById("topics-section-id");
    let closeTopicBtn = document.getElementById("close-topics-menu-btn-id");
    let topicsListSectionId = document.getElementById("topics-list-section-id");

    element.setAttribute("aria-expanded", "true");
    closeTopicBtn.setAttribute("aria-expanded", "true");
    topicsListSectionId.classList.remove("topics-section-hide");
    topicsSection.classList.remove( "d-none", "remove-backdrop-blur");
    topicsSection.classList.add("add-backdrop-blur");
    topicsListSectionId.classList.add("topics-section-show");
}

function closeTopics(element) {
    // let topicAddressBar = document.getElementById("topic-address-bar-id");
    let topicsSection = document.getElementById("topics-section-id");
    let openTopicBtn = document.getElementById("open-topics-menu-btn-id");
    let topicsListSectionId = document.getElementById("topics-list-section-id");

    element.setAttribute("aria-expanded", "false");
    openTopicBtn.setAttribute("aria-expanded", "false");
    topicsSection.classList.remove("add-backdrop-blur");
    topicsListSectionId.classList.remove("topics-section-show");
    topicsListSectionId.classList.add("topics-section-hide");
    topicsSection.classList.add("remove-backdrop-blur");
    setTimeout(function () {
        topicsSection.classList.add("d-none");
    }, 200);
}

// TODO: menus must close when click on others part