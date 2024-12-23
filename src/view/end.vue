<template>
  <commonContainer>
    <div class="bg-content"></div>
    <!--焰火效果图片-->
    <template v-for="(f, index) in fire" :key="'fire' + index">
      <img class="fire" :style="{ width: f.size, height: f.size, left: f.left, top: f.top }"
           :src="FireImg">
    </template>
    <!--灯笼-->
    <template v-for="(l, index) in lights" :key="'light' + index">
      <img class="light" :src="l.src" :class="load ? l.className : ''">
    </template>
    <!--文字-->
    <div class="text">
      <template v-for="(t, index) in text" :key="'text' + index">
        <div>{{ t }}</div>
      </template>
    </div>
    <!------------------底部图片--------------------->
    <!--2022年份图片-->
    <img src="../assets/newYear/year.png" class="year">
  </commonContainer>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import commonContainer from "../components/commonContainer.vue";
import FireImg from '../assets/home/fire.png'
import LightLeft from '../assets/newYear/light-left.png'
import Light from '../assets/newYear/light.png'
import LightRight from '../assets/newYear/light.png'

const load = ref(false);
const year = new Date().getFullYear();
const nextYear = new Date().getFullYear() + 1;
const text = ref([
  `无论${year}`,
  "过的成功还是失败",
  `${nextYear}年`,
  '祝愿我们',
  "都有美好的未来！"
]);
// 焰火图片
const fire = ref([
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
]);
// 灯笼
const lights = ref([
  {
    className: 'left-light',
    src: LightLeft
  },
  {
    className: 'center-light',
    src: Light
  },
  {
    className: 'right-light',
    src: LightRight
  }
]);

onMounted(() => {
  load.value = true;
});
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
  color: #FFEADC;
  position: absolute;
  top: 22%;
  left: 0;
  right: 0;
  font-family: ming, sans-serif;
  font-weight: bolder;
  animation: textMove 1.5s;
  -webkit-animation: textMove 1.5s;

  div {
    line-height: 45px;
    font-size: 20px;
  }
}

@keyframes textMove {
  0% {
    transform: scale(0, 0);
  }
  90% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}

.year {
  position: absolute;
  width: 90%;
  height: 230px;
  z-index: 100;
  bottom: 32px;
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
</style>
