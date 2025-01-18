const form = document.querySelector(".login-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
    };
    const result = {
        email: email,
        password: password,
    };
    console.log(result);
     form.reset(); 
});
