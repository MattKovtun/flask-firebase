const signOut = () => {
    firebase.auth().signOut().then(function () {
        location.reload();
    }, function (error) {
        console.error('Sign Out Error', error);
    });
};
