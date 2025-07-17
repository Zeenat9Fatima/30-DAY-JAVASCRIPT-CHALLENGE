const apiURL = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("userInput");
const input = document.getElementById("inputBox");

// Show loading message
function showLoading() {
    main.innerHTML = "<h2>Loading...</h2>";
}

// Show user profile card
function showUserCard(user) {
    const userName = user.name || user.login;
    const bio = user.bio ? `<p>${user.bio}</p>` : "";

    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${userName}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${userName}</h2>
                ${bio}
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `;
    main.innerHTML = cardHTML;
}

// Show error message
function showError(message) {
    main.innerHTML = `
        <div class="card">
            <h2>${message}</h2>
        </div>
    `;
}

// Display top 5 repos
function showRepos(repos) {
    const reposDiv = document.getElementById("repos");
    reposDiv.innerHTML = ""; // Clear previous

    repos.slice(0, 5).forEach(repo => {
        const repoLink = document.createElement("a");
        repoLink.classList.add("repo");
        repoLink.href = repo.html_url;
        repoLink.target = "_blank";
        repoLink.innerText = repo.name;
        reposDiv.appendChild(repoLink);
    });
}

// Fetch GitHub user data
function fetchUser(username) {
    showLoading();

    axios.get(apiURL + username)
        .then(res => {
            showUserCard(res.data);
            fetchRepos(username);
        })
        .catch(err => {
            if (err.response && err.response.status === 404) {
                showError("User not found.");
            } else {
                showError("Something went wrong.");
            }
        });
}

// Fetch repos
function fetchRepos(username) {
    axios.get(`${apiURL}${username}/repos?sort=created`)
        .then(res => showRepos(res.data))
        .catch(() => showError("Error loading repositories."));
}

// Handle form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = input.value.trim();

    if (username) {
        fetchUser(username);
        input.value = "";
    }
});
