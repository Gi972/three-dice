import './style.css';
import typescriptLogo from './typescript.svg';
import { setupCounter, gameloop } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <svg class="plane" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_2)">
<path d="M16.9315 19.8276L17.3082 4.27581" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3082 4.27581L25.018 21.7918C25.0523 21.8913 25.0573 21.9987 25.0323 22.101C25.0074 22.2033 24.9536 22.2963 24.8774 22.369C24.8011 22.4416 24.7056 22.4908 24.6022 22.5108C24.4988 22.5307 24.3918 22.5206 24.294 22.4815L16.9315 19.8276L9.44914 22.122C9.34956 22.1562 9.24223 22.1612 9.13991 22.1363C9.03759 22.1113 8.94458 22.0575 8.87193 21.9813C8.79929 21.905 8.75006 21.8095 8.73011 21.7061C8.71015 21.6027 8.72031 21.4957 8.75936 21.3979L17.3082 4.27581Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_2">
<rect width="24" height="24" fill="white" transform="translate(0.0344124 16.5891) rotate(-43.6125)"/>
</clipPath>
</defs>
</svg>

    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
gameloop();
