<template>
  <div class="end-container">
    <img src="../../assets/end/xiangji.png" class="xj">
    <img src="../../assets/end/plan.png" class="fj">
    <div class="icon">
      <img src="../../assets/end/tiger.png">
    </div>
    <div class="head">
      HAPPY NEW YEAR
    </div>
    <div class="title">
      <template v-for="(t,index) in title" :key="'t'+index">
        <div class="circle">
          <div class="title-text-font">
            {{ t }}
          </div>
        </div>
      </template>
    </div>
    <div class="title-text">
    </div>
    <div class="dsp">
      <img src="../../assets/end/tiger-pic.png" class="t-pic">
    </div>
  </div>
</template>

<script setup>
const title = ["虎", "力", "全", "开"]
</script>

<style scoped lang="less">
.end-container {
  background-color: #E86800;
  height: 100%;
  width: 100%;
  font-family: siyuan, sans-serif;
  position: relative;
  overflow: hidden;
}

.head {
  color: #F1ECCA;
  font-size: 26px;
  padding: 15px;
  border-bottom: 2px solid #2f2f2f;
  width: 83%;
  margin: 0 auto;
}

.xj {
  position: absolute;
  left: 18px;
  top: 26px;
  width: 35px;
}

.fj {
  position: absolute;
  right: 18px;
  top: 26px;
  width: 35px;
}

.icon {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 80px;
  left: 20px;
  border: 2px solid #313131;
  background-color: #F9A91E;
  text-align: center;

  img {
    width: 80%;
    height: 80%;
    margin-top: 3px;
  }
}

.title {
  position: absolute;
  top: 110px;
  display: flex;
  left: 0;
  right: 0;
  width: 70%;
  justify-content: center;
  margin: 0 auto;
  padding-left: 25px;
}

.circle {
  background-color: #F7D000;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  line-height: 60px;
  border: 2px solid #313131;
  margin-left: -13px;
  position: relative;

}

.title-text {
  background-color: #F7D000;
  position: absolute;
  width: 207px;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 131px;
  z-index: 200;
  height: 35px;
}

.title-text-font {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 300;
  font-size: 42px;
  line-height: 75px;
}

.dsp {
  width: 90%;
  height: 500px;
  top: 172px;
  margin-left: 5%;
  background: url("../../assets/end/bg.jpg");
  background-size: 100% 100%;
  margin-top: 100px;
}

.t-pic {
  position: absolute;
  width: 200px;
  top: 440px;
  right: 100px;
}
</style>
