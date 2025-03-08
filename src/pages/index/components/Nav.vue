<template>
  <view>
    <view class="flex justify-between px-2">
    
      <navigator :url="`/pages/school/index?code=${props.code}`">
      <view class="flex flex-col items-center gap-1">
        <view class="w-16 h-16 rounded-full flex items-center justify-center">
          <image
            class="w-full h-full"
            mode="scaleToFill"
            src="/static/icons/school.png"
          />
        </view>
        <view class="text-primary-strong-1 text-sm">学校风采</view>
      </view>
    </navigator>

    <navigator :url="`/pages/ca/index?code=${props.code}`">
      <view class="flex flex-col items-center gap-1">
        <view class="w-16 h-16 rounded-full flex items-center justify-center">
          <image
            class="w-full h-full"
            mode="scaleToFill"
            src="/static/icons/report.png"
          />
        </view>
        <view class="text-primary-strong-1 text-sm">质检报告</view>
      </view>
    </navigator>


      <view @click="toMiniProgram" class="flex flex-col items-center gap-1">
        <view class="w-16 h-16 rounded-full flex items-center justify-center">
          <image
            class="w-full h-full"
            mode="scaleToFill"
            src="/static/icons/cart.png"
          />
        </view>
        <view class="text-primary-strong-1 text-sm">购买链接</view>
      </view>

    </view>
  </view>
</template>

<script lang="ts" setup>
import wx from 'weixin-js-sdk'

// 定义 props 来接收父组件传递的值
const props = defineProps({
  code: {
    type: String, // 指定 prop 的类型为字符串
    required: true // 指定该 prop 是必需的
  }
});

function toMiniProgram() {
  uni.navigateToMiniProgram({
    appId: 'wxf890539f221d6a6f',
    path: 'pages/home/index',
    extraData: {
      'mydata': '2dCode'
    },
    success(res) {
      // 打开成功
    }
  })
}

</script>

<style lang="scss" scoped>

</style>
