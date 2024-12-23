<template>
  <commonContainer>
    <div class="bg-content">
    </div>
    <!--焰火效果图片-->
    <template v-for="(f, index) in fire" :key="'fire' + index">
      <img class="fire" :style="{ width: f.size, height: f.size, left: f.left, top: f.top }"
           src="../assets/home/fire.png">
    </template>
    <!--灯笼-->
    <template v-for="(l, index) in lights" :key="'light' + index">
      <img class="light" :src="l.src" :class="load ? l.className : ''">
    </template>
    <!--文字-->
    <div class="text">
      <div class="title">
        双旦快乐
      </div>
      <div class="dsp">
        再见,{{ year }}
      </div>
      <div class="dsp">
        你好,{{ nextYear }}
      </div>
    </div>
    <!------------------底部图片--------------------->
    <!--年份下方托底图片-->
    <img src="../assets/newYear/bottom.png" class="bottom">
    <!--2022年份图片-->
    <img src="../assets/newYear/year.png" class="year">
    <!--举仙女棒女孩-->
    <img src="../assets/newYear/girl1.png" class="girl1">
    <!--吉他男孩-->
    <img src="../assets/newYear/guitar.png" class="guitar">
    <!--拿礼物男孩-->
    <img src="../assets/newYear/giftboy.png" class="giftboy">
    <!--礼物盒子-->
    <img src="../assets/newYear/boxes.png" class="boxes">
    <!--右下角两个女孩-->
    <img src="../assets/newYear/girl2.png" class="girl2">
  </commonContainer>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import commonContainer from "../components/commonContainer.vue";
import lightLeft from '../assets/newYear/light-left.png'
import light from '../assets/newYear/light.png'

const load = ref(false);
const year = new Date().getFullYear();
const nextYear = new Date().getFullYear() + 1
onMounted(() => {
  load.value = true;
});

const fire = [
  {
    size: '160px',
    left: '40%',
    top: '-70px'
  },
  {
    size: '120px',
    left: '-60px',
    top: '100px'
  },
  {
    size: '110px',
    left: '62%',
    top: '200px'
  }
];

const lights = [
  {
    className: 'left-light',
    src: lightLeft
  },
  {
    className: 'center-light',
    src: light
  },
  {
    className: 'right-light',
    src: light
  }
];
</script>

<style scoped lang="less">
.bg-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 66%;
  min-height: 450px;
  background: url("../assets/home/bg.png") center bottom no-repeat;
  background-size: 100% 100%;
}

.light {
  position: absolute;
}

.left-light {
  width: 100px;
  height: 320px;
  left: -35px;
  animation: leftLight 1s;
  -webkit-animation: leftLight 1s;
}

.center-light {
  width: 80px;
  height: 185px;
  left: 30%;
  top: -70px;
  animation: centerLight 1s;
  -webkit-animation: centerLight 1s;
}

.right-light {
  width: 95px;
  height: 235px;
  top: -5px;
  right: -25px;
  animation: rightLight 1s;
  -webkit-animation: rightLight 1s;
}

@keyframes leftLight {
  0% {
    transform: translate(0, -320px);
  }
  90% {
    transform: translate(0, 20px);
  }
  100% {
    transform: translate(0, 0px);
  }
}

@keyframes centerLight {
  0% {
    transform: translate(0, -185px);
  }
  90% {
    transform: translate(0, 30px);
  }
  100% {
    transform: translate(0, 0px);
  }
}

@keyframes rightLight {
  0% {
    transform: translate(0, -185px);
  }
  90% {
    transform: translate(0, 30px);
  }
  100% {
    transform: translate(0, 0px);
  }
}

.text {
  color: #FFE9DB;
  position: absolute;
  top: 16%;
  left: 0;
  right: 0;
  font-family: ming, sans-serif;
  font-weight: bolder;
}

.title {
  font-size: 52px;
  letter-spacing: 5px;
  text-shadow: 0 5px 3px #800100;
  animation: bigFont 1.5s;
  -webkit-animation: bigFont 1.5s;
}

.dsp {
  color: #FECDA8;
  letter-spacing: 3px;
  font-size: 18px;
  margin-top: 5px;
  animation: bigFont 1.5s;
  -webkit-animation: bigFont 1.5s;
}

@keyframes bigFont {
  0% {
    transform: scale(0, 0);
  }
  80% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
}

.bottom {
  position: absolute;
  width: 90%;
  z-index: 200;
  bottom: 17px;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: bottomMove 1.5s;
  -webkit-animation: bottomMove 1.5s;
}

.year {
  position: absolute;
  width: 90%;
  height: 230px;
  z-index: 100;
  bottom: 67px;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: yearMove 1.5s;
  -webkit-animation: yearMove 1.5s;
}

@keyframes yearMove {
  0% {
    transform: translate(0px, 345px);
  }
  90% {
    transform: translate(0px, -20px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes bottomMove {
  0% {
    transform: translate(0px, 150px);
  }
  90% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.girl1 {
  position: absolute;
  bottom: 294px;
  left: 27%;
  height: 160px;
  animation: girl1Move 2s;
  -webkit-animation: girl1Move 2s;
}

@keyframes girl1Move {
  0% {
    transform: translate(0px, 500px);
  }
  90% {
    transform: translate(0px, -40px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.guitar {
  position: absolute;
  bottom: 257px;
  height: 106px;
  left: 6%;
  z-index: 300;
  animation: guitarMove 1.5s;
  -webkit-animation: guitarMove 1.5s;
}

@keyframes guitarMove {
  0% {
    transform: translate(-500px, 0px);
  }
  90% {
    transform: translate(10px, 0px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.giftboy {
  position: absolute;
  bottom: 292px;
  height: 106px;
  right: 13%;
  z-index: 300;
  animation: giftboyMove 1.5s;
  -webkit-animation: giftboyMove 1.5s;
}

@keyframes giftboyMove {
  0% {
    transform: translate(-800px, 0px);
  }
  90% {
    transform: translate(20px, 0px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.boxes {
  position: absolute;
  bottom: 70px;
  left: 8%;
  z-index: 100;
  width: 160px;
  height: 75px;
  animation: boxesMove 1.5s;
  -webkit-animation: boxesMove 1.5s;
}

@keyframes boxesMove {
  0% {
    transform: translate(-600px, 0px);
  }
  90% {
    transform: translate(35px, 0px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.girl2 {
  position: absolute;
  bottom: 70px;
  right: 6%;
  z-index: 100;
  width: 145px;
  height: 125px;
  animation: girl2Move 1.5s;
  -webkit-animation: girl2Move 1.5s;
}

@keyframes girl2Move {
  0% {
    transform: translate(500px, 0px);
  }
  90% {
    transform: translate(-25px, 0px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
