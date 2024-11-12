function generateResponse() {
    const responses = ["Jamais", "Oui", "Non", "Peut-être"];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];

    document.getElementById("response").innerText = response;
}
