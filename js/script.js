var app = new Vue({

  el: '#root',

  data:{

    imgSlider: [

      "img/photo1.jpg",

      "img/photo2.jpg",

      "img/photo3.jpg"

    ],

    indexImg:0,



  },

  methods: {

    rightBtn: function(){

      this.indexImg++;

      if(this.indexImg == this.imgSlider.length){

        this.indexImg = 0;

      }
    },

    leftBtn: function(){

      this.indexImg--;

      if(this.indexImg == -1){

        this.indexImg = this.imgSlider.length-1;

      }
    },

    






  }

});
