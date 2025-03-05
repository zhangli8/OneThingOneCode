<template>
  <Home>
    <view class="p-6 pt-[116rpx]">
        <text class="text-xl text-primary font-medium">质检报告</text>
        
        <swiper class="w-full h-[952rpx] border my-3" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
            <!-- swiper-item 表示每个滑块项 -->
            <swiper-item class="h-full" v-for="(item, index) in urls" :key="index">
              <image class="w-full h-full" :src="item" mode="aspectFill"></image>
            </swiper-item>
        </swiper>
    </view>
  </Home>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Home from '../index/components/Home.vue';
import { getCaImg } from '@/api/ca/index';

const imgapiurl= import.meta.env.VITE_IMG_URL; 
const urls = ref<string[]>([]);

onMounted(() => {
    getData()
})

function getData(){
    getCaImg().then(res => {
      urls.value = res.data.img.map((item) => {
        console.log(imgapiurl + item.url)
        return imgapiurl + item.url
        
      }) 
      
    })
}
</script>
<style lang="scss" scoped>
.h2{
    color:#2a95f2;
    font-size: 46rpx;
    font-weight: 600;
    line-height: 63rpx;
}
</style>
