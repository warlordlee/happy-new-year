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
        <div v-for="(t, index) in text" :key="'text' + index" :class="{ 'text-left': index === 0 }">
          {{ t }}
        </div>
      </div>
    </div>
    <!--信封图片-->
    <img src="../assets/home/text-bot.png" class="text-bot">
    <!--房子图片-->
    <img src="../assets/family/house.png" class="house">
  </commonContainer>
</template>

<script setup>
import {ref} from 'vue';
import commonContainer from "../components/commonContainer.vue";

const text = ref([
  "",
  "家是我们心灵的港湾",
  "新年伊始",
  "祝父母们身体健康幸福美满",
  "祝亲友们事业顺利财源广进",
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
  },
  {
    size: '30px',
    left: 'auto',
    right: '40%',
    top: '50%'
  },
  {
    size: '40px',
    left: 'auto',
    right: '55%',
    top: '45%'
  },
  {
    size: '35px',
    left: 'auto',
    right: '65%',
    top: '55%'
  }
]);
</script>

<style scoped lang="less">
.house {
  position: absolute;
  bottom: 120px;
  width: 250px;
  height: 185px;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: houseMove 3.5s;
  -webkit-animation: houseMove 3.5s;
}

@keyframes houseMove {
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

@media screen and (min-height: 800px) {
  .house {
    bottom: 190px;
  }
}
</style>
