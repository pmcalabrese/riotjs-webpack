import riot from 'riot';
import route from 'riot-route';

export default class Navigation {

    current_route = '';

    constructor(scope, opts) {
        console.log("Navigation controller opts:", opts);
        var subRoute = route.create() // create another routing context

        // on route start
        this.current_route = window.location.hash.split("/")[1] || 'index';
        scope.update();
        // on all route changes
        subRoute('*', (name) => {
            this.current_route = name;
            scope.update();
        });
        // on index change
        subRoute('/', (name) => {
            this.current_route = 'index';
            scope.update();
        });
    }

}