const checkLogin = () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("welcome")
        } else {
            window.location.href = "/"
        }
    });

};
checkLogin();



