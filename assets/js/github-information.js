function fetchGithubInformation (event) {
    var username = $("gh-user-data").val();
    if (!username) {
        $("gh-user-data").html(`<h2>Please enter a github username</h2>`);
        return;
    }

}