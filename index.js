const runNetflix = () => {
    try {
        document.querySelector(".hybrid-login-form-help").style.display =
            "none";
        document.querySelector(".hybrid-login-form-other").style.display =
            "none";
        document.querySelector(".svg-icon-netflix-logo").style.display = "none";
        document.querySelector(".site-footer-wrapper").style.display = "none";
        document.querySelector(".hybrid-login-form-signup").style.minHeight =
            "200px";

        // const logo = document.querySelector(".signupBasicHeader");
        // const img = document.createElement("img");
        // img.src = "https://picsum.photos/200/301";
        // logo.appendChild(img);
    } catch (error) {}
};

window.addEventListener("load", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: runNetflix,
    });
});
