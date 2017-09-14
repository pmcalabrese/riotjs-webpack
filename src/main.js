import riot from 'riot';
import route from 'riot-route';

var $app = document.querySelector('#app-root');
var $nav = document.querySelector('#nav-root');

require.ensure([], () => {
  const navigationTag = require('./navigation/navigation.tag.html');;
  $nav.innerHTML = "<navigation></navigation>";
  riot.mount('navigation', {});
}, 'navigationtag');

route('/', (name) => {
  require.ensure([], function() {
    const appTag = require('./app/app.tag.html');
    $app.innerHTML = "<app></app>";
    riot.mount('app', {});
  },'apptag')
});

route('/another', () => {
  require.ensure([], function() {
    const anotherTag = require('./another/another.tag.html');
    $app.innerHTML = "<another></another>";
    riot.mount('another', {
      title: "This is text injected on mount only with route"
    });
  },'anothertag')
});

route('/page', () => {
  require.ensure([], function() {
    const pageTag = require('./page/page.tag.html');
    $app.innerHTML = "<page></page>";
    riot.mount('page', {
      title: "This is text injected on mount only with route"
    });
  },'pagetag')
});

route.start(true);