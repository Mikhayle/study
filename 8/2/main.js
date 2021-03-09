const getFilterRule = function(iterArg) {
  if (membrane === undefined && iterArg === undefined) {
    return true;
  };
  if (membrane === undefined && iterArg !== undefined) {
    return false;
  }
  if (typeof(membrane) === "number" && typeof(iterArg) === "number"
      && isNaN(membrane) && !isNaN(iterArg)) {
    return false;
  };
  if (typeof(membrane) === "number" && typeof(iterArg) === "number"
      && isNaN(membrane) && isNaN(iterArg) ) {
    return true;
  };
    if (typeof(membrane) === "number" && isNaN(iterArg) && typeof(iterArg) === "number") {
    return false;
  };
  if (membrane === null && iterArg === null) {
    return true;
  };
  if (membrane === null && iterArg !== null) {
    return false;
  };
  if (typeof(membrane) == "object" && iterArg === null) {
    return false;
  };
  if (iterArg !== undefined && iterArg !== null && typeof(membrane) === "object"
      && membrane.__proto__ !== iterArg.__proto__) {
    return false;
  };
  if ( typeof(membrane) === typeof(iterArg) ) {
    return true;
  };
};
let membrane;
function filterByType() {
  const entranceArgs = Array.prototype.slice.call(arguments);
  const args = entranceArgs.slice(1);
  membrane = arguments[0];
  const array = args.filter(getFilterRule);
  return console.log(array);
};
function as() {

};
filterByType(undefined, 2, true, {}, null, false, [1, 2], "string", undefined, as, undefined);
