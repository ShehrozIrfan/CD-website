// make local storage in browser for storing expiration date
function setWithExpiry(key, value, ttl) {

    const now = new Date()
      const item = {
          value: value,
          expiry: now.getTime() + ttl
      }
      localStorage.setItem(key, JSON.stringify(item))
}

// get the local storage value of splash screen
function getWithExpiry(key) {
    
    const itemStr = localStorage.getItem(key)

    if (!itemStr) {
        return null
    }

    const item = JSON.parse(itemStr)
    const now = new Date()

    if (now.getTime() > item.expiry) {        
        localStorage.removeItem(key)
        return null
    }

    return item.value
}

// make cookie in local storage
function makeCookie() {
    setWithExpiry('splash', 'true', 86400000)  
}

// check for cookie
function checkCookie() {

    var cookie = getWithExpiry('splash')

    if(cookie === undefined || cookie === null) {
        

    }
    else {
        // remove splash
        var cookie = getWithExpiry('splash')
        console.log('cookie Found')

        var para = document.getElementById('para');
        para.style.display = 'none'        

        var exploreBtn = document.getElementsByClassName('landing-link-block')[0]
        exploreBtn.click()

    }
    
}




