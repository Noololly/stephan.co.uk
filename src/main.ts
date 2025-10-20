function main():void {
    const app = document.querySelector<HTMLElement>('#app');

    // @ts-ignore
    app.innerHTML = `
    <h1>Hello! Welcome to Stephan.co.uk!</h1>
    <p>Welcome to www.Stephan.co.uk! Here you will find things that I have done and other useless bits of information. </p>
`
}

document.addEventListener('DOMContentLoaded', () => {
    main();
})