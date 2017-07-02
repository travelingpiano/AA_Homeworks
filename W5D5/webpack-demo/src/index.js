function component() {
  var element = document.createElement('div');

  //lodash, currently included via a script, is requird for this line to work
  element.innerHTML = _.join(['Hello','webpack'],' ');

  return element;
}
