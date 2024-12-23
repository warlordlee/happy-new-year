<template>
  <commonContainer>
    <!--焰火效果图片-->
    <template v-for="(f, index) in fire" :key="'l-fire' + index">
      <img class="fire"
           :style="{ width: f.size, height: f.size, left: f.left, top: f.top, right: f.right }"
           :src="FireImg">
    </template>
    <!--信纸容器-->
    <div class="text-container">
      <div class="text-title">
        再见,{{ year }}
      </div>
      <div class="text-content">
        <div v-for="(t, index) in text" :key="'text' + index" :class="0 === index ? 'text-left' : ''">
          {{ t }}
        </div>
      </div>
    </div>
    <!--信封图片-->
    <img src="../assets/home/text-bot.png" class="text-bot">
    <!--女孩图片-->
    <img src="../assets/lastYear/girl.png" class="girl">
    <!--气球-->
    <template v-for="(b, index) in ball" :key="'ball' + index">
      <img class="ball"
           :style="{ width: b.width, left: b.left, bottom: b.bottom, right: b.right }"
           :src="b.src">
    </template>
  </commonContainer>
</template>

<script setup>
import {ref} from 'vue';
import commonContainer from "../components/commonContainer.vue";
import FireImg from '../assets/home/fire.png'
import yellow from '../assets/lastYear/yellow.png'
import red from "../assets/lastYear/red.png"

const name = ()=>{
  const params = window.location.href.split('=')
  console.log(params)
  if(params[1] && params[1] ==='yu'){
    return '小鱼'
  }
  if(params[1] && params[1] === 'xiaowen'){
    return '潇文'
  }
  return '陌生人'
}
const year = new Date().getFullYear()
const text = ref([
  `hi ${name()}~:`,
  `${year}年马上就要过去了`,
  "在这里提前祝你双旦节快乐",
  "愿你抛弃过去一年中一切烦恼",
  "让快乐女神与你拥抱",
  "新的一年天天开心"
]);

// 焰火图片
const fire = ref([
  {
    size: '90px',
    left: 0,
    top: '-10px'
  },
  {
    size: '100px',
    left: '-40px',
    top: '300px'
  },
  {
    size: '90px',
    left: 'auto',
    right: 0,
    top: '20px'
  }
]);

// 气球
const ball = ref([
  {
    width: '50px',
    left: '17%',
    bottom: '23%',
    src: yellow
  },
  {
    width: '50px',
    left: '60%',
    bottom: '35%',
    src: red
  },
  {
    width: '50px',
    right: '15%',
    bottom: '25%',
    src: yellow
  }
]);
</script>

<style scoped lang="less">
.girl {
  position: absolute;
  bottom: 90px;
  width: 170px;
  height: 315px;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: girlMove 3.5s;
  -webkit-animation: girlMove 3.5s;
}

@media screen and (min-height: 800px) {
  .girl {
    bottom: 150px;
  }
}

@media screen and (max-height: 680px) {
  .girl {
    bottom: 40px;
  }
}

.ball {
  position: absolute;
  animation: ballMove 2.5s;
  -webkit-animation: ballMove 2.5s;
}

@keyframes girlMove {
  0% {
    transform: translate(0, 1000px);
  }
  90% {
    transform: translate(0, -25px);
  }
  100% {
    transform: translate(0, 0px);
  }
}

@keyframes ballMove {
  0% {
    transform: translate(0, 1000px);
  }
  90% {
    transform: translate(0, -15px);
  }
  100% {
    transform: translate(0, 0px);
  }
}
</style>
