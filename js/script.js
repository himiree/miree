
const darkModeToggle = document.getElementById('dark-mode-toggle');
const iconSun = document.querySelector('.icon-sun');
const iconMoon = document.querySelector('.icon-moon');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');

    // Toggle icons based on dark mode state
    if (body.classList.contains('dark-mode')) {
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
        localStorage.setItem('darkMode', 'enabled');

        body.style.setProperty('--Background-color', '#1b1b1b');
        body.style.setProperty('--Background-text1', '#f5f5f5');
        body.style.setProperty('--Background-text2', '#a5a5a5');
        body.style.setProperty('--Background-text3', '#646464');
        body.style.setProperty('--Point-color', '#AAFFBB');
    } else {
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
        localStorage.setItem('darkMode', 'disabled');
        
        body.style.setProperty('--Background-color', '#eaeaea');
        body.style.setProperty('--Background-text1', '#1b1b1b');
        body.style.setProperty('--Background-text2', '#4b4b4b');
        body.style.setProperty('--Background-text3', '#a5a5a5');
        body.style.setProperty('--Point-color', '#1b1b1b');
    }
});


// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}

// Function to get a cookie
function getCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}

// Check user preference from localStorage and apply dark mode if enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    iconSun.style.display = 'block';
    iconMoon.style.display = 'none';

    darkModeToggle.checked = true;
} else {
    iconSun.style.display = 'none';
    iconMoon.style.display = 'block';

    darkModeToggle.checked = false;
}

//menu icon
const menuicon = document.querySelector('.menu-icon');
const menutab = document.querySelector('.menu-tab');
const sidecontact = document.querySelector('.side-contact');

menuicon.addEventListener('click', () => {
  menutab.classList.toggle('active');
  document.body.classList.toggle('menu-open');
  sidecontact.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// GNB reverse-scroll
let prevScrollPos = window.pageYOffset;
const scrollThreshold = 100; // Adjust the threshold as needed

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  
  if (currentScrollPos === 0 || prevScrollPos > currentScrollPos) {
    document.querySelector('.gnb_move').style.top = '0';
  } else {
    document.querySelector('.gnb_move').style.top = '-100px';
  }
  
  prevScrollPos = currentScrollPos;
});

//timezone
function date_time(id) {
    const date = new Date();
    const options = {
        weekday: 'short',  // Short day name
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/Berlin'
        // timeZone: 'Asia/Seoul'  // Set to Korean Standard Time (KST)
    };

    const koreanTime = date.toLocaleTimeString('en-US', options);
    document.getElementById(id).innerHTML = koreanTime;

    setTimeout(() => date_time(id), 1000);
    return true;
}
