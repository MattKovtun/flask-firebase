// Initialize Firebase


const form = document.getElementById("form");
const result = document.getElementById("result");


const loginFirebase = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function onSuccess(...args) {
            window.location.href = "/logged"
        })
        .catch(function (error) {
            result.innerHTML = error.message + error.code;
        })
};

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const {email, password} = form.elements;
    loginFirebase(email.value, password.value);
    form.reset();
})


