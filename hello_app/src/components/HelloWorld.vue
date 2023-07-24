<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <hr/>
    <button v-on:click="doAction">
    Show/Hide
    </button>
    <br><br>
    <transition name="transit">
      <p v-if="flg" class="trans">Transition!</p>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    title:String,
  },
  data: function() {
    return {
      message:'Transition Sample!',
      flg:true,
      btn:'Hide',
    };
  },
  methods:{
    doAction: function(){
      this.flg = !this.flg;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 0;
  padding: 0;
  text-align: left;
}
h1 {
  font-size: 72px;
  font-weight: bold;
  text-align: right;
  letter-spacing: -8px;
  color: #f0f0f0;
  margin: 0;
}
p {
  margin: 0;
  color: #666;
  font-size: 16px;
}
pre {
  font-size: 14pt;
  line-height: 1.25;
}
div.out {
  padding: 5px 0px;
  background-color: #eee;
  width: 300px;
  height: 200px;
}
div.mid {
  padding: 5px 0px;
  background-color: #ddd;
  width: 200px;
  height: 175px;
}
div.in {
  padding: 5px 0px;
  background-color: #ccc;
  width: 100px;
  height: 150px;
}
.area {
  width:300px;
  height:100px;
  background-color: #ddd;
  padding:10px;
  font-size:20pt;
}
.trans {
  width: 150px;
  background-color: #ddf;
  padding:10px;
  font-size:20pt;
}

.transit-leave-active {
  animation: anim 5.0s;
}
.transit-enter-active {
  animation: anim 2.5s reverse;
}


@keyframes anim {
  0% {
    transform: translateX(0px) translateY(0px) rotateZ(0deg);
    opacity:1.0;
    background-color: #ddf;
  }
  25% {
    transform: translateX(250px) translateY(0px) rotateZ(0deg);
    opacity:1.0;
    background-color: #fdd;
  }
  50% {
    transform: translateX(0px) translateY(-100px) rotateZ(540deg);
    opacity:1.0;
    background-color: #dfd;
    }
  75% {
    transform: translateX(250px) translateY(-100px) rotateZ(540deg);
    opacity:1.0;
    background-color: #fdf;
  }
  100% {
    transform: translateX(0px) translateY(-200px) rotateZ(1080deg);
    opacity:0;
    background-color: #ffd;
  }
}


</style>
