/*--------------------------------------------------------------
## Get Color Datasets
--------------------------------------------------------------*/
const scriptTag = document.currentScript;

export const dialogBG = scriptTag.dataset.colorPrimarybg
    ? scriptTag.dataset.colorPrimarybg
    : null;
export const dialogFG = scriptTag.dataset.colorPrimaryfg
    ? scriptTag.dataset.colorPrimaryfg
    : null;
export const infoBG = scriptTag.dataset.colorSecondarybg
    ? scriptTag.dataset.colorSecondarybg
    : null;
export const infoFG = scriptTag.dataset.colorSecondaryfg
    ? scriptTag.dataset.colorSecondaryfg
    : null;
export const link = scriptTag.dataset.colorLink
    ? scriptTag.dataset.colorLink
    : null;
export const buttonBG = scriptTag.dataset.colorButtonbg
    ? scriptTag.dataset.colorButtonbg
    : null;
export const buttonFG = scriptTag.dataset.colorButtonfg
    ? scriptTag.dataset.colorButtonfg
    : null;
