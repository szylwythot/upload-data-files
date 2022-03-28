const formComponent = `
    <form id="form">
        <input type="text" name="title">
        <input type="file" name="picture">
        <button>Send</button>
    </form>
`;

function loadEvent(){
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML(`beforebegin`, formComponent);

    const formElement = document.getElementById("form");
    formElement.addEventListener(`submit`, (event) => {
        event.preventDefault();
        console.dir(event);
    })
    // console.log("hello");
}

window.addEventListener(`load`, loadEvent);