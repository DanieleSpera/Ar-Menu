AFRAME.registerSystem('gamemanager', {
  schema: {
      prize:    {type: 'number', default: 0},
      calories: {type: 'number', default: 0}
  },  // System schema. Parses into `this.data`.

  init: function () {
    this.priceFood1 = 0
    this.priceFood2 = 0
    this.caloriesFood1 = 0
    this.caloriesFood2 = 0
  },

  tick: function () {
    //food1
    if(document.querySelector("#markfood1").object3D.visible == true) {
      this.priceFood1 = 1;
      this.caloriesFood1 = 200;
      console.log('Food1', this.schema.prize)
    }else{
      this.priceFood1 = 0;
      this.caloriesFood1 = 0;
    }
    //food2
    if(document.querySelector("#markfood2").object3D.visible == true) {
      this.priceFood2 = 3;
      this.caloriesFood2 = 400;
      console.log('Food2', this.totalPrize())
    }
    else{
      this.priceFood2 = 0;
      this.caloriesFood2 = 0;
    }
    this.schema.prize= 10
    this.schema.calories= 100
  },
  totalPrize : function(){
    return this.priceFood1 + this.priceFood2
  },
  totalCalories : function(){
    return this.caloriesFood1 + this.caloriesFood2
  }
});