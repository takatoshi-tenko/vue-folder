
<template>
<div>
  <div class="slider-outer">
    <div
      class="right-btn"
      @click="nextPage"
    >＞</div>
    <div
      class="left-btn"
      @click="prevPage"
    >＜</div>
    <transition-group
      class="slide__wrapper"
      :name="trans_name"
      tag="div"
    >
      <div
        v-show="index === page"
        v-for="(image,index) in images"
        :key="index"
        class="slider-inner"
      >
        <img
          :src="image.src"
          class="image"
        />
        <p>{{ image.title }}</p>
      </div>
    </transition-group>
  </div>
    <p>こんにちは</p>
    <button @click="countUp">
      {{ hoge }}
    </button>
    <p>{{ count }}</p>
    <div id="list-demo">
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" :key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        trans_name: 'next',
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10,
        hoge: 'ボタン',
        count: 10,
        page:0,
        images:[
          {
            src:require('@/assets/images/img1.jpg'),
            title: '1枚目'
          },
          {
            src:require('@/assets/images/img2.jpg'),
            title: '2枚目'
          },
          {
            src:require('@/assets/images/img3.jpg'),
            title: '3枚目'
          },
        ]
      };
    },
    methods: {
      nextPage(){
        this.trans_name = 'next';
        if(this.page + 1 >= this.images.length){
          this.page = 0
          return;
        }
        this.page ++;
      },
      prevPage(){
        this.trans_name = 'prev';
        console.log(this.page, '呼ばれた！')
        if(this.page <= 0){
          this.page = this.images.length -1
          return;
        }
        this.page --;
      },
      countUp () {
        console.log(this.count, '呼ばれた！')
        this.count++
      },
      randomIndex () {
        return Math.floor(Math.random() * this.items.length)
      },
      add () {
        console.log('呼ばれた！add')
        this.items.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove () {
        console.log('呼ばれた！remove')
        this.items.splice(this.randomIndex(), 1)
      }
    }
  }
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.list-enter-from {
  transform: translateY(-300px);
}

  .slide__wrapper{
    position:relative;
    width: 450px;
    height: 300px;
    overflow: hidden;
    margin:0 auto 20px;
  }
  .slider-inner {
    position: absolute;
    width: 450px;
    height: 300px;
  }
  .image{
    /* position: absolute; */
    /* top: 100%; */
    justify-content: space-between;
    transform: translate3d(50px, 0px, 0px);
    width: 80%;
    height: 80%;
    object-fit: cover;
  }
  .right-btn{
    position:absolute;
    right:450px;
    top:15%;
    font-size: 50px;
    font-weight: bold;
    color:black;
  }
  .left-btn{
    position:absolute;
    left:450px;
    top:15%;
    font-size: 25px;
    font-size: 50px;
    font-weight: bold;
    color:#000;
  }

.next-enter-active, .next-leave-active,
.prev-enter-active, .prev-leave-active  {
  transition: all .8s ease-out;
}
.next-enter {
  transform: translateX(450px);
}
.next-enter-to {
  transform: translateX(0);
}
.next-leave {
  transform: translateX(0);
}
.next-leave-to {
  transform: translateX(-450px);
}
.prev-enter {
  transform: translateX(-450px);
}
.prev-enter-to {
  transform: translateX(0);
}
.prev-leave {
  transform: translateX(0);
}
.prev-leave-to {
  transform: translateX(450px);
}
</style>
