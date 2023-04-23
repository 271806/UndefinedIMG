chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'downloadImages') {
    }
  });
  
  chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'downloadImages') {
    const validFormats = ['png', 'jpg', 'gif']

    const currTab = await getCurrentTab()
    
    chrome.scripting.executeScript({
      target : {tabId : currTab.id, allFrames : true},
      func : () =>{
          let res = []
          for (const img of document.images) {
            res.push(img.src)
          }
          console.log(res)
          return res
        },
    }).then((res) =>{
        let number = 0
        const images = res[0].result
        console.log(images)
        images.forEach((image) =>{
            console.log(image)
            const imageUrl = image;

            chrome.downloads.download({
                url: imageUrl,
                filename: `images/${number}`,
                saveAs: false,
                conflictAction: 'uniquify'
            });
            number += 1
        })
    })
 
    
      
    }
  });
  
  // 在Manifest V3中，后台服务工作程序需要被注册为事件监听器。
  self.addEventListener('install', function (event) {
    self.skipWaiting();
  });
  
  self.addEventListener('activate', function (event) {
    clients.claim();
  });
  

const getCurrentTab = async () =>{
    let queryOptions = { active: true};
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}