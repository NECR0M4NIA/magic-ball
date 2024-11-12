function generateResponse() {
    const responses = ["jamais", "oui", "non", "peut-être"];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];

    document.getElementById("response").innerText = response;
}
