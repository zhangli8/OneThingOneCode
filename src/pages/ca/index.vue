<template>
  <view :style="{ paddingTop:`${customBarHeight}px`}">
  <Home>
    <view class="px-6">
        <text class="text-xl text-primary font-medium">质检报告</text>
        
        <swiper class="w-full h-[952rpx] border my-3" :current="currentIndex" :indicator-dots="true" :duration="500">
            <!-- swiper-item 表示每个滑块项 -->
            <swiper-item class="h-full" v-for="(item, index) in urls" :key="index">
              <image class="w-full h-full" :src="item" mode="aspectFill"></image>
            </swiper-item>
        </swiper>
        <view class="flex justify-between pt-3 pb-8">
          <view class="w-24 bg-blue-500 h-8 leading-8 rounded-full text-center text-white text-sm" @click="handlePage(-1)">上一页</view>
          <view class="w-24 bg-blue-500 h-8 leading-8 rounded-full text-center text-white text-sm" @click="handlePage(1)">下一页</view>
        </view>
    </view>
  </Home>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Home from '../index/components/Home.vue';
import { getCaImg } from '@/api/ca/index';
import { useWindowInfo } from '@/hooks/useWindowInfo';

const { customBarHeight } = useWindowInfo()
const imgapiurl= import.meta.env.VITE_IMG_URL; 
const urls = ref<string[]>([]);
const currentIndex = ref(0);

onMounted(() => {
    getData()
})

function handlePage(num: number) {
  const newPage = currentIndex.value + num;
  currentIndex.value = Math.max(0, Math.min(newPage, urls.value.length - 1));
}

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
