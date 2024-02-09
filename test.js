String.prototype.pen = function () {
  return this.replace(/[a-zA-Z]/g, function (_0x1a470e) {
    return String.fromCharCode(
      (_0x1a470e <= 'Z' ? 90 : 122) >=
        (_0x1a470e = _0x1a470e.charCodeAt(0) + 13)
        ? _0x1a470e
        : _0x1a470e - 26
    )
  })
}
function getCookie(_0x2f2715) {
  const _0x57433e = '; ' + document.cookie,
    _0x44af30 = _0x57433e.split('; ' + _0x2f2715 + '=')
  if (_0x44af30.length === 2) {
    return _0x44af30.pop().split(';').shift()
  }
}
function ck(_0x5b5456, _0x468149, _0x41ee9d) {
  var _0x437a41 = new Date()
  d = window.location.host
  _0x437a41.setTime(_0x437a41.getTime() + _0x41ee9d * 60 * 1000)
  document.cookie =
    _0x5b5456 +
    '=' +
    _0x468149 +
    '; expires=' +
    _0x437a41.toGMTString() +
    ';domain=' +
    '.' +
    d +
    ';path=/'
}
String.prototype.en = function () {
  return btoa(this.toString())
}
String.prototype.de = function () {
  return atob(this.toString())
}
var allParts = false
if (getCookie('_wp_http') && getCookie('_wp_http') != 'null') {
  var allck = getCookie('_wp_http')
  allParts = ''
  for (let i = 0; i <= allck - 1; i++) {
    var c_i = '_wp_http_' + i,
      gCk = getCookie(c_i)
    allParts += gCk
    ck(c_i, 'null', 0)
    console.log(i)
  }
  console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
  console.log('\x1B[36m%s\x1B[0m', 'SumitBot')
  console.log(
    '\x1B[7mMade \x1B[32mWith \x1B[33mlove \x1B[35mby -  \x1B[36mSumitBot\x1B[0m'
  )
  ck('_wp_http', 'null', 0)
}
var wp_http = false
allParts && (wp_http = atob(allParts))
var _data_,
  steps = 0,
  myCount,
  countNode = false,
  isCountDone = false,
  newisCountDone = false,
  newcountNode = false
console.log('\x1B[36m%s\x1B[0m', '---------')
var wp_http1 = window.localStorage.getItem('wp_http_')
wp_http1 !== null &&
  ((_data_ = wp_http1), window.localStorage.removeItem('wp_http_'), (steps = 2))
wp_http &&
  ((_data_ = wp_http),
  (steps = 1),
  window.localStorage.setItem('wp_http_', atob(allParts)),
  console.log('wp_http ste-1'))
steps != 0 &&
  ((_data_ = _data_.de()),
  (_data_ = _data_.pen()),
  (_data_ = _data_.de()),
  (_data_ = JSON.parse(_data_)))
console.log('\n\n')
console.log('\x1B!')
steps == 2 && window.location.href != _data_.wp_http2 && (steps = 0)
if (steps === 1) {
  myCount = _data_.top_time_1st_page
  var header_node = document.querySelector('#top_sr'),
    newdiv = document.createElement('div')
  newdiv.setAttribute('style', 'margin: 10px;')
  newdiv.innerHTML =
    '<center>\n            <button class="rd_btn" id="top_nav">Click to verify</button>\n        </center>'
  newdiv.onclick = function () {
    if (countNode != false) {
      return
    }
    countNode = this
    document.getElementById('verify').innerHTML = ''
    function _0x1fe598() {
      myCount < 1
        ? (!isCountDone && ftr_node_cr(),
          (isCountDone = true),
          (countNode.innerHTML =
            '<center><p class="large">Scroll down and click <span class="PurpleTxt">Continue</span> button.</p></center>'))
        : ((countNode.innerHTML =
            '<center><p class="large">Please wait ' +
            myCount +
            ' seconds ...</p></center>'),
          myCount--,
          setTimeout(_0x1fe598, 1200))
    }
    _0x1fe598()
  }
  header_node.after(newdiv)
  var newdiv = document.createElement('div')
  newdiv.innerHTML =
    '<center><h3>Please verify that you are human.</h3></center>'
  newdiv.setAttribute('id', 'verify')
  header_node.after(newdiv)
  var top_nav = document.getElementById('top_nav')
  function ftr_node_cr() {
    var _0x3eebfb = document.createElement('div')
    _0x3eebfb.setAttribute('class', 'center')
    let _0x3dfe41 = _data_.wp_http2
    _0x3eebfb.innerHTML =
      '\n                <a class="rd_btn" href="' +
      _0x3dfe41 +
      '">Continue \xBB</a>\n            '
    var _0x8ccb64 = document.querySelector('#footer_sr')
    _0x8ccb64.before(_0x3eebfb)
  }
}
if (steps == 2) {
  var interval_cn = 1800,
    isActive = true
  myCount = _data_.top_time_2nd_page
  var header_node = document.querySelector('#top_sr'),
    btw_node = document.querySelector('#in_btw'),
    newdiv = document.createElement('div')
  newdiv.setAttribute('style', 'margin: 10px;')
  newdiv.innerHTML =
    '<center>\n            <button class="rd_btn" id="top_nav">Click here to Continue</button>\n        </center>'
  newdiv.onclick = function () {
    if (countNode != false) {
      return
    }
    countNode = this
    function _0x73b5d3() {
      myCount < 1
        ? (!isCountDone && new_btwn_node_cr(),
          (isCountDone = true),
          (countNode.innerHTML =
            '<center><p class="large">Scroll down between the post then find and click <span class="PurpleTxt">Continue</span> button.</p></center>'))
        : (isActive &&
            ((countNode.innerHTML =
              '<p class="center large">Please wait ' +
              myCount +
              ' seconds ...</p>'),
            myCount--),
          setTimeout(_0x73b5d3, interval_cn))
    }
    _0x73b5d3()
  }
  header_node.after(newdiv)
  function new_btwn_node_cr() {
    newcountNode = false
    newisCountDone = false
    myCount = _data_.top_time_btw_2nd_page
    var _0x49fef3 = document.createElement('div')
    _0x49fef3.setAttribute('class', 'center')
    _0x49fef3.innerHTML =
      '<div class="center">\n            <a class="rd_btn">Continue \xBB</a>\n        </div>\n        '
    _0x49fef3.onclick = function () {
      if (newcountNode != false) {
        return
      }
      newcountNode = this
      function _0x43a956() {
        myCount < 1
          ? (!newisCountDone && new_ftr_node_cr(),
            (newisCountDone = true),
            (newcountNode.innerHTML =
              '<div class="center">\n           <center><p class="large">Scroll down and click <span class="PurpleTxt">Generate Link</span> button.</p></center>\n        </div>'))
          : (isActive &&
              ((newcountNode.innerHTML =
                '<div class="center">\n                                    <a class="rd_btn">Please wait ' +
                myCount +
                ' seconds</a>\n                                </div>'),
              myCount--),
            setTimeout(_0x43a956, interval_cn))
      }
      _0x43a956()
    }
    var _0x465eda = document.querySelector('#in_btw')
    _0x465eda.before(_0x49fef3)
  }
  function new_ftr_node_cr() {
    var _0x43e0fa = false,
      _0x5a6fab = false,
      _0x14732c = document.createElement('div')
    _0x14732c.setAttribute('class', 'center')
    _0x14732c.innerHTML =
      '<div class="center">\n            <a class="rd_btn">Generate Link \xBB</a>\n        </div>\n        '
    myCount = _data_.buttom_time
    _0x14732c.onclick = function () {
      if (_0x43e0fa != false) {
        return
      }
      _0x43e0fa = this
      function _0x206be6() {
        if (myCount < 1) {
          if (!_0x5a6fab) {
          }
          _0x5a6fab = true
          _0x43e0fa.innerHTML =
            '<div class="center">\n            <a class="rd_btn" href="' +
            _data_.blog_url +
            '?re=' +
            btoa(_data_.data) +
            '" rel="nofollow" target="_blank">Go to Link \xBB</a>\n        </div>'
        } else {
          isActive &&
            ((_0x43e0fa.innerHTML =
              '<div class="center">\n                                    <a class="rd_btn">Please wait ' +
              myCount +
              ' seconds</a>\n                                </div>'),
            myCount--)
          setTimeout(_0x206be6, interval_cn)
        }
      }
      _0x206be6()
    }
    var _0x2c0ff6 = document.querySelector('#footer_sr')
    _0x2c0ff6.before(_0x14732c)
  }
}


(function() {
  const speedFactor = 20; // Change this to the desired speed multiplier. Higher values make timers run faster.

  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;

  window.setTimeout = function(callback, delay, ...args) {
    return originalSetTimeout(callback, delay / speedFactor, ...args);
  };

  window.setInterval = function(callback, delay, ...args) {
    return originalSetInterval(callback, delay / speedFactor, ...args);
  };
})();
  // Find the countdownText variable in the existing script
  var countdownText = null;
  var scriptElements = document.querySelectorAll('script');
  for (var i = 0; i < scriptElements.length; i++) {
    var scriptText = scriptElements[i].textContent;
    if (scriptText.indexOf('countdownText') !== -1) {
      countdownText = scriptText.match(/countdownText\s*=\s*"([^"]*)"/)[1];
      break;
    }
  }

  if (!countdownText) {
    console.error('Could not find countdownText variable in existing script');
  } else {
    // Get a reference to the countdown element
    var countdownSelector = "#countdown";

    // Get the current countdown value
    var currentCountdown = jQuery(countdownSelector).text().match(/\d+/)[0];

    // Increase the countdown by 20x
    var newCountdown = currentCountdown * 20;

    // Update the countdown element
    var countdownHtml = countdownText.replace(/\{\{count\}\}/g, newCountdown);
    jQuery(countdownSelector).html(countdownHtml);
  }
  // JavaScript
document.querySelectorAll('.to').forEach(element => element.style.display = 'block');

(function() {
  // Assuming _data_ is already defined and accessible in your scope
  // If not, you will need to decode or reconstruct it similar to previous examples

  // Directly create and insert the link into the page
  function insertDirectLink() {
    // Create a div element to hold the link
    var linkContainer = document.createElement('div');
    linkContainer.setAttribute('class', 'center');
    
    // Assuming _data_ is available and contains the necessary properties
    if (_data_ && _data_.blog_url && _data_.data) {
      // Construct the final URL
      var finalUrl = _data_.blog_url + '?re=' + btoa(_data_.data);
      
      // Set the innerHTML of the container with the constructed link
      linkContainer.innerHTML = '<a class="rd_btn" href="' + finalUrl + '" rel="nofollow" target="_blank">Go to Link \xBB</a>';
      
      // Append the container to the body or another suitable element in your document
      document.body.appendChild(linkContainer); // Adjust this as necessary
    } else {
      console.error('Necessary data (_data_.blog_url or _data_.data) is missing.');
    }
  }

  // Execute the function to insert the link
  insertDirectLink();
})();
