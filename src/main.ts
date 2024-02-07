import './assets/styles/main.scss';
import App from './App.svelte';

const app = new App({
  target: <HTMLElement>document.getElementById('app')
});

export default app;
