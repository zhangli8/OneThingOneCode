<template>
  <view>
    <view  class="p-6 pt-[116rpx]">
      <view class="pt-8">
        <view class="text-center text-xl text-primary">学生信息</view>
      </view>

      <view class="relative border-4 border-solid border-primary w-32 h-32 rounded-full mx-auto mt-4 p-1.5">
        <view class="w-full h-full rounded-full overflow-hidden">
          <image class="w-full h-full" mode="scaleToFill" src="/static/icons/school.png" />
        </view>
      </view>

      <view class="flex flex-col gap-4 mt-7">
        <view class="text-center text-xl text-primary">张小丽</view>
        <view class="text-center text-gray-400">女@二年级(3)班</view>
      </view>

      <view class="mt-20 flex flex-col gap-20">
        <AButton class="w-40 mx-auto" type="warning" @click="handleEmergencyCall">
          <view class="flex items-center gap-3">
            <view class="w-7 h-7">
              <image
                class="w-full h-full"
                src="/static/icons/phone.png"
                mode="aspectFit"
              />
            </view>
            <text class="text-white text-base">紧急呼叫</text>
          </view>
        </AButton>
        <AButton text="解除绑定" />
      </view>
    </view>
  </view>
<view>
  <!-- <Home /> -->
</view>
</template>

<script lang="ts" setup>
import { getStudentInfo } from '@/api/student'
import AButton from '@/components/AButton/index.vue'
import { getPageParams } from '@/utils'


function handleEmergencyCall() {
  uni.makePhoneCall({
    phoneNumber: '13800138000'
  })
}

onLoad(() => {
  getData()
})

function getData() {
  const { code } = getPageParams()

  getStudentInfo(code).then(res => {
    console.log(res)
  })
}
</script>

<style lang="scss" scoped>

</style>