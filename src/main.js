import riot from 'riot';
import route from 'riot-route';

var $app = document.querySelector('#app-root');

route('/', (name) => {
  require.ensure([], () => {
    require('./app/app.tag.html');;
    $app.innerHTML = "<app></app>";
    riot.mount('app', {});
  });
});

route('/another', () => {
  require.ensure([], () => {
    require('./another/another.tag.html');
    $app.innerHTML = "<another></another>";
    riot.mount('another',{
      title: "This is text injected on mount only with route"
    });
  });
});

route.start(true);