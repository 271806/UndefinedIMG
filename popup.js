document.getElementById('loginBtn').addEventListener('click', login);
document.getElementById('registerBtn').addEventListener('click', register);
document.getElementById('downloadBtn').addEventListener('click', downloadImages);
document.getElementById('optionsBtn').addEventListener('click', openOptions);

function login() {
  // 这里填写你的登录功能代码
}

function register() {
  // 这里填写你的注册功能代码
}

function downloadImages() {
  chrome.runtime.sendMessage({action: 'downloadImages'});
}

function openOptions() {
  chrome.runtime.openOptionsPage();
}
