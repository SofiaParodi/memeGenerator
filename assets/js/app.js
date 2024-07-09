/* dark mode */
const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.getElementById("body");
const darkModeIcon = document.getElementById("darkModeIcon");

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains('dark-mode')) {
        darkModeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        darkModeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});


/* image and text btn */
const imageBtn = document.getElementById("imageBtn");
const panel = document.getElementById("panel");
const panelImage = document.getElementById("imagePanel");
const textBtn = document.getElementById("textBtn");
const panelText = document.getElementById("textPanel")


imageBtn.addEventListener('click', () => {
    panel.classList.remove("hidden");
    panelImage.classList.remove("hidden");
    panelText.classList.add("hidden");
    
});

textBtn.addEventListener('click', () => {
    panel.classList.remove("hidden");
    panelText.classList.remove("hidden")
    panelImage.classList.add("hidden");
    ;
})


/* panel */ 
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener('click', ()  => {
    panel.classList.add("hidden");
    panelImage.classList.add("hidden");
    panelText.classList.add("hidden");
})

/* meme */
const imageMeme = document.getElementById("imageMeme");
const imageInput = document.getElementById("imageInput");

imageInput.addEventListener('input', (e) => {
    let imageUrl = e.target.value;
    imageMeme.style.backgroundImage = "url('" + imageUrl + "')";
    imageMeme.style.backgroundRepeat = "no-repeat";
    
});

/* filters */
const brightness = document.getElementById("brightness");
const opacity = document.getElementById("opacity");
const contrast = document.getElementById("contrast");
const blurInput = document.getElementById("blur");
const grayscale = document.getElementById("grayscale");
const sepia = document.getElementById("sepia");
const hue = document.getElementById("hue");
const saturation = document.getElementById("saturation");
const negative = document.getElementById("negative");

function updateFilters() {
    let filters = `
        brightness(${brightness.value})
        opacity(${opacity.value})
        contrast(${contrast.value}%)
        blur(${blurInput.value}px)
        grayscale(${grayscale.value}%)
        sepia(${sepia.value}%)
        hue-rotate(${hue.value}deg)
        saturate(${saturation.value}%)
        invert(${negative.value})
    `;

    imageMeme.style.filter = filters;
}

brightness.addEventListener('input', updateFilters);
opacity.addEventListener('input', updateFilters);
contrast.addEventListener('input', updateFilters);
blurInput.addEventListener('input', updateFilters);
grayscale.addEventListener('input', updateFilters);
sepia.addEventListener('input', updateFilters);
hue.addEventListener('input', updateFilters);
saturation.addEventListener('input', updateFilters);
negative.addEventListener('input', updateFilters);
