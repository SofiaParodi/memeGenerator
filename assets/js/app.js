/* dark mode */
const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.getElementById("body");
const darkModeIcon = document.getElementById("darkModeIcon");

darkModeBtn.addEventListener('click', function() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains('dark-mode')) {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    } else {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    }
});


/* image btn */
const imageBtn = document.getElementById("imageBtn");
const panel = document.getElementById("panel");
const panelImage = document.getElementById("imagePanel");


imageBtn.addEventListener('click', function () {
    panel.classList.remove("hidden");
    panelImage.classList.remove("hidden");
});

/* text btn */
const textBtn = document.getElementById("textBtn");
const panelText = document.getElementById("textPanel")

textBtn.addEventListener('click', function () {
    panel.classList.remove("hidden");
    panelText.classList.remove("hidden");
})


/* panel */ 
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener('click', function () {
    panel.classList.add("hidden");
    panelImage.classList.add("hidden");
    panelText.classList.add("hidden");
})