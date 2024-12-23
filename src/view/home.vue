<template>
  <div class="main" @click="handleClick">
    <el-carousel direction="vertical" :autoplay="false" indicator-position="none" ref="yearRef"
                 :initial-index="index">
      <el-carousel-item>
        <new-year :key="newYearKey"></new-year>
      </el-carousel-item>
      <el-carousel-item>
        <last-year :key="lastYearKey"></last-year>
      </el-carousel-item>
      <el-carousel-item>
        <wish :key="wishKey"></wish>
      </el-carousel-item>
      <el-carousel-item>
        <family :key="familyKey"></family>
      </el-carousel-item>
      <el-carousel-item>
        <honey :key="honeyKey"></honey>
      </el-carousel-item>
      <el-carousel-item>
        <end :key="endKey"></end>
      </el-carousel-item>
    </el-carousel>
    <div class="action"
         @click="handleClick">
      <img src="../assets/home/arr.png" style="width: 25px">
      <div>
        点击滚动
      </div>
    </div>
    <div class="music">
      <audio loop="loop" autoplay="autoplay">
        <source src="../assets/music/bg.mp3" type="audio/mpeg">
      </audio>
    </div>
  </div>
</template>

<script setup name="home">
import {ref} from 'vue';
import newYear from "./newYear.vue";
import lastYear from "./lastYear.vue";
import wish from "./wish.vue";
import family from "./family.vue";
import honey from "./honey.vue";
import end from "./end.vue";

const index = ref(0);
const key = ref(0);

const newYearKey = ref('newYear');
const lastYearKey = ref('lastYear');
const wishKey = ref('wish');
const familyKey = ref('family');
const honeyKey = ref('honey');
const endKey = ref('end');

const yearRef = ref(null);

const handleClick = () => {
  key.value++;
  newYearKey.value = 'newYear' + key.value;
  lastYearKey.value = 'lastYear' + key.value;
  wishKey.value = 'wish' + key.value;
  familyKey.value = 'family' + key.value;
  honeyKey.value = 'honey' + key.value;
  endKey.value = 'end' + key.value;
  if (yearRef.value) {
    yearRef.value.next();
  }
};
</script>

<style scoped lang="less">
.music {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
}
</style>
