/*--------------------------------------------------------------
## Get Color Datasets
--------------------------------------------------------------*/
const scriptTag = document.currentScript;

export const dialogBG =
    scriptTag.dataset.colorPrimarybg && scriptTag.dataset.colorPrimarybg;

export const dialogFG =
    scriptTag.dataset.colorPrimaryfg && scriptTag.dataset.colorPrimaryfg;

export const infoBG =
    scriptTag.dataset.colorSecondarybg && scriptTag.dataset.colorSecondarybg;

export const infoFG =
    scriptTag.dataset.colorSecondaryfg && scriptTag.dataset.colorSecondaryfg;

export const link = scriptTag.dataset.colorLink && scriptTag.dataset.colorLink;

export const buttonBG =
    scriptTag.dataset.colorButtonbg && scriptTag.dataset.colorButtonbg;
export const buttonFG =
    scriptTag.dataset.colorButtonfg && scriptTag.dataset.colorButtonfg;
