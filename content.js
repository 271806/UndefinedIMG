chrome.runtime.sendMessage({action: 'checkIfLoggedIn'}, response => {
    if (!response.isLoggedIn) {
      alert('Please log in to the Image Downloader extension before using it.');
      return;
    }
  
    chrome.storage.sync.get(null, options => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }
  
      const validFormats = ['png', 'jpg', 'gif'].filter(format => options[format]);
  
      if (validFormats.length === 0) {
        alert('Please select at least one image format in the extension options.');
        return;
      }
  
      const images = document.images;
      const regex = new RegExp(`\\.(${validFormats.join('|')})$`, 'i');
  
      for (const image of images) {
        const imageUrl = image.src;
  
        if (regex.test(imageUrl)) {
          chrome.runtime.sendMessage({action: 'downloadImage', imageUrl, fileFormat: validFormats});
        }
      }
    });
  });
  