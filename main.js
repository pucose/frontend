import App from './src/App.svelte';
const pucose = Array.from(document.getElementsByTagName('pucose'));
pucose.forEach(el => {
    let config = el.getAttribute('data-config');
    console.log(config);
    config = (config == '{}') ? {} : JSON.parse(config);
    const app = new App({
        target: el,
        props: {
            config: config
        }
    });
});
export default App