const formComponent = `
    <form id="form">
        <input type="text" name="title">
        <input type="file" name="picture">
        <button>Send</button>
    </form>
`;

async function  loadEvent() {
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML(`beforebegin`, formComponent);

    const formElement = document.getElementById("form");
    formElement.addEventListener(`submit`, (event) => {
        event.preventDefault();
        console.dir(event);

        // create formdata
        const formData = new FormData();
        formData.append(`title`, event.target.querySelector(`input[name="title"]`.value));
        formData.append(`picture`, event.target.querySelector(`input[name="picture"]`).files[0]); // ez bájtokat fog megadni

        const fetchSettings = {
            method : `POST`,
            body : formData
        };

        fetch(`/`, fetchSettings)
            .then( (data) => {
                if (data.status == 200) {
                    event.target.outerHTML = "Done";
                    console.dir(data);
                }
            })
            .catch(error => {
                event.target.outerHTML = `Error`;
                console.dir(error);
            });

        // fetch data
        // try{
        //     // fetch data with post request
        //     const fethcedData = fetch(`/`, fetchSettings);
        //     let responsedData = fethcedData((data) => {
        //         if (data.status == 200) {
        //             event.target.outerHTML = "Done";
        //             console.dir(data);
        //         }
        //     });
        //     console.dir("responseData: " + responsedData);
        // } catch(error){
        //         event.target.outerHTML = `Error`;
        //         console.dir(error);
        // };
    });
}

window.addEventListener(`load`, loadEvent);