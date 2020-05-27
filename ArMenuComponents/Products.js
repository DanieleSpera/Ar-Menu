AFRAME.registerComponent('food1', {
    schema: {
      prize:    {type: 'number', default: 1},
      calories: {type: 'number', default: 200}
    },
  });

  AFRAME.registerComponent('food2', {
    schema: {
      prize:    {type: 'number', default: 2},
      calories: {type: 'number', default: 400}
    },
  });

  AFRAME.registerComponent('prize', {
    schema: {
      text :    {type: 'string', default:"Price $"},
      prize:    {type: 'number', default: 0},
      calories: {type: 'number', default: 200},

      prizeFood1 :{type: 'number', default: 0}, 
      prizeFood2 :{type: 'number', default: 0} 
    },
    init: function() {
      var el = this.el;
      var prize = 0;
    },
    tick: function() {
      var el = this.el;
      // var currentprice = document.querySelector('a-scene').systems['gamemanager']
      var currentprice = this.data.prizeFood1 + this.data.prizeFood2;
      el.setAttribute('value', this.data.text + " " + currentprice);

      //food1
      if(document.querySelector("#markfood1").object3D.visible == true) {
        this.data.prizeFood1 = 2;
      }else{
        this.data.prizeFood1 = 0;
      }

      //food1
      if(document.querySelector("#markfood2").object3D.visible == true) {
        this.data.prizeFood2 = 6;
      }else{
        this.data.prizeFood2 = 0;
      }

    }
    
  });

  AFRAME.registerComponent('calories', {
    schema: {
      text :    {type: 'string', default:"Calories"},
      prize:    {type: 'number', default: 0},
      calories: {type: 'number', default: 200},

      caloriesFood1 :{type: 'number', default: 0}, 
      caloriesFood2 :{type: 'number', default: 0} 
    },
    init: function() {
      var el = this.el;
      var prize = 0;
    },
    tick: function() {
      var el = this.el;
      // var currentprice = document.querySelector('a-scene').systems['gamemanager']
      var currentprice = this.data.caloriesFood1 + this.data.caloriesFood2;
      el.setAttribute('value', this.data.text + " " + currentprice +" Cal");

      //food1
      if(document.querySelector("#markfood1").object3D.visible == true) {
        this.data.caloriesFood1 = 200;
      }else{
        this.data.caloriesFood1 = 0;
      }

      //food1
      if(document.querySelector("#markfood2").object3D.visible == true) {
        this.data.caloriesFood2 = 400;
      }else{
        this.data.caloriesFood2 = 0;
      }

    }
    
  });