import './app.css';
import App from './App.svelte';

const target = <HTMLInputElement>document.getElementById('app');

const app = new App({
  target
});

export default app;
