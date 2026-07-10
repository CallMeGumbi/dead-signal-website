// Dead Signal site configuration — update values here in one place
const SERVER_IP = "47.25.226.71:28015";
const DISCORD_SERVER_ID = "1505011120585314528";
const DISCORD_INVITE = "https://discord.gg/YJxtY9PEs5";

function copyIP() {
    navigator.clipboard.writeText(SERVER_IP).then(() => {
        alert("Server IP copied to clipboard!");
    });
}

function renderServerIP() {
    document.querySelectorAll('.server-ip-value').forEach(el => {
        el.textContent = SERVER_IP;
    });
}

// Render IPs as soon as the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderServerIP);
} else {
    renderServerIP();
}
