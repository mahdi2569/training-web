function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function showLogin() {
    var loginModal = document.getElementById('login-modal');
    loginModal.style.display = 'block';
}

function showSignup() {
    var signupModal = document.getElementById('signup-modal');
    signupModal.style.display = 'block';
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Handling form submissions for login and signup
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    alert('ورود موفقیت‌آمیز برای کاربر: ' + username);
    closeModal('login-modal');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var newUsername = document.getElementById('new-username').value;
    alert('ثبت‌نام موفقیت‌آمیز برای کاربر: ' + newUsername);
    closeModal('signup-modal');
});
