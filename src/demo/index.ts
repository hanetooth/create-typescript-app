import demoPng from '@assets/demo.png';
import styles from './styles.scss';

export default function(container: HTMLDivElement) {
  console.debug('Module loaded!');
  const imgEl = document.createElement('img');
    imgEl.onload = () => {
      container?.replaceChildren(imgEl);
    };
    imgEl.classList.add(styles.demoImg);
    imgEl.src = demoPng;
}