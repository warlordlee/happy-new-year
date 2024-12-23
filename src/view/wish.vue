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
        你好,{{nextYear}}
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
    <img src="../assets/wish/girl.png" class="girl">
    <!--星星-->
    <template v-for="(s, index) in stars" :key="'star' + index">
      <img class="star"
           :style="{ width: s.width, left: s.left, bottom: s.bottom, right: s.right }"
           src="../assets/wish/stars.png">
    </template>
  </commonContainer>
</template>

<script setup>
import {ref} from 'vue';
import commonContainer from "../components/commonContainer.vue";

const nextYear = ref(new Date().getFullYear() + 1);
const text = ref([
  "",
  "未来的日子里",
  "辛勤的耕耘终将有收获",
  "每一点努力都会有回报",
  "你将创造更精彩的未来",
  "新的一年来到",
  "祝你身体健康万事如意"
]);

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

const stars = ref([
  {
    width: '50px',
    left: '17%',
    bottom: '43%',
  },
  {
    width: '45px',
    right: '20%',
    bottom: '45%',
  },
  {
    width: '40px',
    right: '45%',
    bottom: '28%',
  },
  {
    width: '40px',
    right: '55%',
    bottom: '49%',
  }
]);
</script>

<style scoped lang="less">
.girl {
  position: absolute;
  bottom: 120px;
  width: 250px;
  height: 240px;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: girlMove 3.5s;
  -webkit-animation: girlMove 3.5s;
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

.star {
  position: absolute;
  animation: starMove 1.5s;
  -webkit-animation: starMove 1.5s;
}

@keyframes starMove {
  0% {
    transform: scale(0, 0);
  }
  90% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
}

@media screen and (min-height: 800px) {
  .girl {
    bottom: 160px;
  }
}

@media screen and (max-height: 680px) {
  .girl {
    bottom: 80px;
  }
}
</style>
