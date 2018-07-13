import _ from 'lodash';
import module from './another-module'
//import print from './print'

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hellojjjj', 'webpack222'], ' ');

  element.onclick = function () {
    import('./math').then(math => {
      alert(math.square(2))
    })
  }

  return element;
}

document.body.appendChild(component());