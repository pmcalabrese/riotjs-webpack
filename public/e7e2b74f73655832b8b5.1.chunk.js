webpackJsonp([1,3],{11:function(i,t,e){"use strict";function a(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=e(0),l=(function(i){i&&i.__esModule}(n),function i(t,e){a(this,i),this.opts=e,console.log("Another controller opts:",e)});t.default=l},13:function(i,t,e){"use strict";function a(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=e(0),l=(function(i){i&&i.__esModule}(n),function i(t,e){a(this,i),console.log("App controller opts:",e)});t.default=l},7:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(11),n=e.n(a);e(0).tag2("another",'<div class="columns"> <div class="column"> <h1 class="title">This is <b>another</b> riot tag</h1> <h2>You can find this component in the file called another.tag.html. As you can see a tag can be used as nested component or in standalone page with a route</h2> <h3> {ctrl.opts.title} </h3> <a href="#/">index page</a> </div> </div>','another ul,[data-is="another"] ul{ margin: 0px; padding: 0px; display: flex; flex-wrap: wrap; } another li,[data-is="another"] li{ padding: 10px; display: flex; }',"",function(i){this.ctrl=new n.a(this,this.opts)})},9:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(e(7),e(13)),n=e.n(a);e(0).tag2("app",'<div class="columns"> <div class="column"> <h1 class="title">This is a riot tag</h1> <h2>You can find this in the file called app.tag.html.</h2> <h3>Features:</h3> <ol> <li>ES6</li> <li>Bulma CSS</li> <li>Webpack 3</li> <li>Tree shaking</li> <li>Code splitting</li> <li>Minimal footprint (the entire boilerplate index is 50K including CSS)</li> <li>Routing with riot-route</li> </ol> <a href="#/another">another page</a> </div> </div> <div class="columns"> <div class="column"> <another></another> </div> </div>','app ul,[data-is="app"] ul{ margin: 0px; padding: 0px; display: flex; flex-wrap: wrap; } app li,[data-is="app"] li{ padding: 10px; display: flex; }',"",function(i){this.ctrl=new n.a(this,this.opts)})}});