import riot from 'riot';
import route from 'riot-route';

var $app = document.querySelector('#app-root');
var $nav = document.querySelector('#nav-root');

require.ensure([], () => {
  require('./navigation/navigation.tag.html');;
  $nav.innerHTML = "<navigation></navigation>";
  riot.mount('navigation', {});
});

route('/', (name) => {
  import('./app/app.tag.html').then(() => {
    $app.innerHTML = "<app></app>";
    riot.mount('app', {});
  });
});

route('/another', () => {
  import('./another/another.tag.html').then(() => {
    $app.innerHTML = "<another></another>";
    riot.mount('another', {
      title: "This is text injected on mount only with route"
    });
  });
});

route('/page', () => {
  import('./page/page.tag.html').then(() => {
    $app.innerHTML = "<page></page>";
    riot.mount('page', {
      title: "This is text injected on mount only with route"
    });
  });
});

route.start(true);