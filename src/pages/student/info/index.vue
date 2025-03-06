<template>
  <Home>
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
        <view class="text-center text-xl text-primary">{{ info?.name}}</view>
        <view class="text-center text-gray-400">{{ StudentGenderVars[info?.gender as StudentGenderType]}}@{{ info?.grade }}</view>
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
</Home>
</template>

<script lang="ts" setup>
import { getStudentInfo } from '@/api/student'
import { StudentInfoModel } from '@/api/student/types'
import AButton from '@/components/AButton/index.vue'
import { StudentGenderType } from '@/enums/student'
import { getPageParams } from '@/utils'
import { StudentGenderVars } from '@/variants/student'
import Home from '@/pages/index/components/Home.vue'

const info = ref<StudentInfoModel>()

function handleEmergencyCall() {
  uni.makePhoneCall({
    phoneNumber: `${info.value?.phone_number}`
  })
  console.log(info.value?.phone_number)
}

onLoad(() => {
  getData()
})

function getData() {
  const { code } = getPageParams()
  getStudentInfo(code).then(res => {
    info.value = res.data
    console.log(res)
  })
}
</script>

<style lang="scss" scoped>

</style>