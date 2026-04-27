import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<h1 class="text-3xl font-bold underline">Olá, Mundo!</h1>
`

setupCounter(document.querySelector('#counter'))
