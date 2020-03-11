var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app4',
  data: {
    persons: [
      {name: "Matt"},
      {name: "Mark"},
      {name: "Luke"},
      {name: "John"}
    ]
  }
});

var app5 = new Vue({
  el: "#app5",
  data: {
    message: "Weimao Ke"
  },
  methods: {
    reverseName: function(){
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var app6 = new Vue({
  el: "#app6",
  data: {
    message: "Initial Message"
  }
});

// Define a new component called todo-item
Vue.component('todo-item', {
  props: ["todo"],
  template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: "#app7",
    data: {
      shopping: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
});
