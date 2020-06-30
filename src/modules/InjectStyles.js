import { compiled } from '../styles/compiledCSS';

export default function InjectStyles() {
    const styleTemplate = document.createElement('style');
    styleTemplate.innerHTML = compiled;
    document.head.appendChild(styleTemplate);
}
