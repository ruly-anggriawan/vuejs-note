
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//export for bus components communication 
export default new Vue();

const app = new Vue({
    el: '#app',
    http : {
      root : window.location.origin
    },
    mounted(){


    }
});
