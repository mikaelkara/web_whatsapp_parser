//Script yükleme fonksiyonu
function load_script(source) {
    var new_script = document.createElement("script");
    new_script.type = "text/javascript";
    new_script.src = source;
    new_script.className = "MyInjectedScript";
    document.getElementsByTagName("head")[0].appendChild(new_script);
  }
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  //Sayfada varsayılan olarak yoksa jQuery'yi yükle
  if (typeof jQuery != "function")
    load_script(
      "https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"
    );
  
  // Her bir elemanın indeksini sakla
  var divs = document.querySelectorAll('div[role="row"]');
  for (var i = 0; i < divs.length; i++) {
    divs[i].className = 'kara_' + (divs.length - i);
  }
  
  // Değişiklikler için DOM'u kontrol et
  document.addEventListener('DOMSubtreeModified', function() {
    // Run code again
    var divs = document.querySelectorAll('div[role="row"]');
    for (var i = 0; i < divs.length; i++) {
      divs[i].className = 'kara_' + (divs.length - i);
    }
  });