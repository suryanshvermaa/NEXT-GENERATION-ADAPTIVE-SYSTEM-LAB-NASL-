// config.js - expose runtime API base for pages
(function(){
  // Edit these two values if you need different hosts
  var LOCAL = 'http://localhost:3000';
  var PRODUCTION = 'https://next-generation-adaptive-system-lab-nasl.onrender.com';

  var host = window.location.hostname;
  var API_BASE = (host === 'localhost' || host === '127.0.0.1') ? LOCAL : PRODUCTION;

  // Allow override via window.NASL before this file loads
  window.NASL = window.NASL || {};
  window.NASL.LOCAL = LOCAL;
  window.NASL.PRODUCTION = PRODUCTION;
  window.NASL.API_BASE = window.NASL.API_BASE || API_BASE;
})();
