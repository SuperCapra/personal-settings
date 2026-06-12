# VARIOUS SCRIPTS

## Read Youtube Transcripts

`let previous = "";
let saved = [];

setInterval(() => {
    const el = document.querySelector('.ytp-caption-window-container');
    if (!el) return;
    const current = el.innerText.trim();
    if (!current) return;
    if(current !== previous) {
        if (previous && !current.includes(previous)) {
            saved.push(previous);
            console.log("LINE:", previous);
        }
        previous = current;
    }
}, 300);`