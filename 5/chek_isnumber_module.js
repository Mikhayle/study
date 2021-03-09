(function() {
  isNumber = function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    return isNumber;
})();
