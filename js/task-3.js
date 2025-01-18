const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", (event) => {
    const trimmedInput = event.currentTarget.value.trim()
    if (trimmedInput !== '' ) { 
    output.textContent = trimmedInput;
    } else {
        output.textContent = 'Anonymous';
}
});
