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

/* restore btn */
const restoreBtn = document.getElementById("restoreBtn");

restoreBtn.addEventListener('click', () => {
    brightness.value = 1;
    opacity.value = 1;
    contrast.value = 100;
    blurInput.value = 0;
    grayscale.value = 0;
    sepia.value = 0;
    hue.value = 0;
    saturation.value = 100;
    negative.value = 0;

    updateFilters();
})

/* color background */
const backgroundColor = document.getElementById("backgroundColor");
const hexaColor = document.getElementById("hexaColor");

backgroundColor.addEventListener('input', (e) => {
    imageMeme.style.backgroundColor = e.target.value;
    hexaColor.innerText = e.target.value;
})


/* superior text */
const superiorText = document.getElementById("superiorText");
const superiorTextInput = document.getElementById("superiorTextInput");
const superiorTextCheckbox = document.getElementById("superiorTextCheckbox");

superiorTextInput.addEventListener('input', (e) => {
    superiorText.innerText = e.target.value;
})

superiorTextCheckbox.addEventListener('input', () => {
    if (superiorTextCheckbox.checked) {
    superiorText.classList.add('hidden');
    } else {
        superiorText.classList.remove('hidden');
    }
})


/* inferior text */
const inferiorText = document.getElementById("inferiorText");
const inferiorTextInput = document.getElementById("inferiorTextInput");
const inferiorTextCheckbox = document.getElementById("inferiorTextCheckbox")

inferiorTextInput.addEventListener('input', (e) => {
    inferiorText.innerText = e.target.value;
});

inferiorTextCheckbox.addEventListener('input', () => {
    if (inferiorTextCheckbox.checked) {
    inferiorText.classList.add('hidden');
    } else {
        inferiorText.classList.remove('hidden');
    }
});

/* font family */
const fontSelect = document.getElementById("fontSelect");

fontSelect.addEventListener('input', (e) => {
    superiorText.style.fontFamily = fontSelect.value;
    inferiorText.style.fontFamily = fontSelect.value;
})

/* font size */
const fontSizeInput = document.getElementById("fontSizeInput");

fontSizeInput.addEventListener('input', (e) => {
    superiorText.style.fontSize = `${e.target.value}px`;
    inferiorText.style.fontSize = `${e.target.value}px`;
})

/* alignment */
const alignLeft = document.getElementById("alignLeft");
const alignCenter = document.getElementById("alignCenter");
const alignRight = document.getElementById("alignRight");

alignLeft.addEventListener('click', () => {
    superiorText.style.textAlign = 'left'
    inferiorText.style.textAlign = 'left'
})

alignCenter.addEventListener('click', () => {
    superiorText.style.textAlign = 'center'
    inferiorText.style.textAlign = 'center'
})

alignRight.addEventListener('click', () => {
    superiorText.style.textAlign = 'right'
    inferiorText.style.textAlign = 'right'
})

/* text color */
const textColor = document.getElementById("textColor");
const textColorHexa = document.getElementById("textColorHexa");

textColor.addEventListener('input', (e) => {
    superiorText.style.color = e.target.value;
    inferiorText.style.color = e.target.value;
    textColorHexa.innerText = e.target.value;
})

/* text background color */
const textBackgroundColor = document.getElementById("textBackgroundColor");
const textBackgroundColorHexa = document.getElementById("textBackgroundColorHexa");

textBackgroundColor.addEventListener('input', (e) => {
    superiorText.style.backgroundColor = e.target.value;
    inferiorText.style.backgroundColor = e.target.value;
    textBackgroundColorHexa.innerText = e.target.value;
})

/* transparent background */
const transparentBackgroundCheckbox = document.getElementById("transparentBackgroundCheckbox");
const mainMeme = document.getElementById("mainMeme");

transparentBackgroundCheckbox.addEventListener('input', () => {
    if (transparentBackgroundCheckbox.checked) {
    mainMeme.style.backgroundColor = 'transparent';
    superiorText.style.backgroundColor = 'transparent';
    inferiorText.style.backgroundColor = 'transparent';
    } else {
        mainMeme.style.backgroundColor = textBackgroundColor.value;
        superiorText.style.backgroundColor = textBackgroundColor.value;
        inferiorText.style.backgroundColor = textBackgroundColor.value;
    }
});