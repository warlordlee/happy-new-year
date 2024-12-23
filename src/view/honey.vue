<template>
  <commonContainer>
    <!--焰火效果图片-->
    <template v-for="(f, index) in fire" :key="'l-fire' + index">
      <img class="fire"
           :style="{ width: f.size, height: f.size, left: f.left, top: f.top, right: f.right }"
           src="../assets/home/fire.png">
    </template>
    <!--信纸容器-->
    <div class="text-container">
      <div class="text-title">
        你好,2022
      </div>
      <div class="text-content">
        <div v-for="(t, index) in text" :key="'text' + index" :class="0 === index ? 'text-left' : ''">
          {{ t }}
        </div>
      </div>
    </div>
    <!--信封图片-->
    <img src="../assets/home/text-bot.png" class="text-bot">
    <!--男孩图片-->
    <img src="../assets/honey/boy.png" class="boy">
    <img src="../assets/honey/fire.png" class="boyFire">
  </commonContainer>
</template>

<script setup>
import {ref} from 'vue';
import commonContainer from "../components/commonContainer.vue";

const text = ref([
  "",
  "",
  "也祝你自己",
  "在新的一年",
  "梦想成真",
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
</script>

<style scoped lang="less">
.boy {
  position: absolute;
  bottom: 137px;
  width: 285px;
  height: 235px;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: boyMove 3.5s;
  -webkit-animation: boyMove 3.5s;
}

@media screen and (min-height: 800px) {
  .boy {
    bottom: 190px;
  }
}

.boyFire {
  position: absolute;
  bottom: 235px;
  width: 270px;
  height: 180px;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: fireMove 4.5s;
  -webkit-animation: fireMove 4.5s;
}

@keyframes boyMove {
  0% {
    transform: translate(0, 1000px);
  }
  90% {
    transform: translate(0, 0px);
  }
  100% {
    transform: translate(0, 0px);
  }
}

@keyframes fireMove {
  0% {
    transform: scale(0, 0);
  }
  40% {
    transform: scale(0, 0);
  }
  70% {
    transform: scale(0, 0);
  }
  90% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
