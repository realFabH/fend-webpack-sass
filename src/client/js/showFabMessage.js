function handleTheSubmit(event) {
    event.preventDefault()
    
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/fabricio')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleTheSubmit }