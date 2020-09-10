const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=94107";
const apiKey = "d8582cc7bc65df71cb22ff2463f41122";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     console.log(res)
    //     document.getElementById('results').innerHTML = res.message
    // })
    const fetchUrl = `${baseUrl},us&appid=${apiKey}&units=imperial`;
    fetch(fetchUrl)
    .then(data => data.json())
    .then(data => {
        console.log(data)
        document.getElementById('results').innerHTML = data.main.temp
    })
}

export { handleSubmit }
