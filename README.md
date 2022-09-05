# \<web-lit-component>
Basic infrastructure for Lit web components. Use this repo to start a new webcomponent.

Steps to create your own web component based on Lit :
* Choose a name for your component : I will choose VanillaLit (vanilla-lit)
* Clone the repo : ```git clone git@github.com:flatmax/web-lit-component.git```
* Rename the repo : ```mv web-lit-component vanilla-lit```
* Rename some files in the repo :
  * mv web-lit-component.js vanilla-lit.js
  * mv src/WebLitComponent.js src/VanillaLit.js
* Find and replace the component name :
  * Replace "WebLitComponent" for "VanillaLit"
  * Replace "web-lit-component" for "vanilla-lit"

## Usage
```html
<script type="module">
  import 'web-lit-component/web-lit-component.js';
</script>

<web-lit-component></web-lit-component>
```

## Local Demo with `web-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
