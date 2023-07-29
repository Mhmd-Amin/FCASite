function showTopics(element) {
    // TODO: topicAddressBar must implement
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

function copyCode(element) {
    let children = element.childNodes;
    let codeBlock = document.getElementById(element.getAttribute("aria-controls")).childNodes[0];
    let codeText = "";

    toggleCopyIcon(children);

    codeBlock.childNodes.forEach(line => {
        let textLine = ""
        if (line.tagName !== "BR") {
            line.childNodes.forEach(word => {
                textLine += word.innerText;
            });
            textLine += "\n";
        }
        else {
            textLine += "\n";
        }
        codeText += textLine;
    });

    fallbackCopyTextToClipboard(codeText);

    setTimeout(function () {
        toggleCopyIcon(children);
    }, 1500);
}

function toggleCopyIcon(icons) {
    if (!icons[0].classList.contains("d-none")) {
        icons[0].classList.add("d-none");
        icons[1].classList.remove("d-none");
    }
    else {
        icons[1].classList.add("d-none");
        icons[0].classList.remove("d-none");
    }
}

function fallbackCopyTextToClipboard(text) {
    let textArea = document.createElement("textarea");
    textArea.value = text;

    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    document.execCommand('copy');
    document.body.removeChild(textArea);
}