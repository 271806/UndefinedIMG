document.getElementById('downloadBtn').addEventListener('click', downloadImages);


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', saveOptions);
});

loadOptions();

function downloadImages() {
    chrome.runtime.sendMessage({action: 'downloadImages'});
  }
  

function saveOptions() {
  
}

function loadOptions() {
}
