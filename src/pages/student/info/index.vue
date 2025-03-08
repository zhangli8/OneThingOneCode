<template>
  <Home>
  <view :style="{ paddingTop:`${customBarHeight}px`}">
    <view  class="px-6">
      <view class="pt-8">
        <view class="text-center text-xl text-primary">学生信息</view>
      </view>

      <view class="relative border-4 border-solid border-primary w-32 h-32 rounded-full mx-auto mt-4 p-1.5">
        <view class="w-full h-full rounded-full overflow-hidden">
          <image class="w-full h-full" mode="scaleToFill" src="/static/icons/default-avatar.png" />
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
        <button class="bg-blue-500 text-white w-full h-14 leading-[3.5rem] rounded-full text-base" @click="unBoundUserInfo">解除绑定</button>
      </view>
    </view>
  </view>
</Home>
</template>

<script lang="ts" setup>
import { getStudentInfo, updateBoundStatus } from '@/api/student'
import { StudentInfoModel } from '@/api/student/types'
import AButton from '@/components/AButton/index.vue'
import { StudentGenderType } from '@/enums/student'
import { getPageParams } from '@/utils'
import { StudentGenderVars } from '@/variants/student'
import Home from '@/pages/index/components/Home.vue'
import { useWindowInfo } from '@/hooks/useWindowInfo';

const code = ref('')
const { customBarHeight } = useWindowInfo()
const info = ref<StudentInfoModel>()

function handleEmergencyCall() {
  uni.makePhoneCall({
    phoneNumber: `${info.value?.phone_number}`,
    fail:(err) => {
      console.log(err)
    }
  })
  console.log(info.value?.phone_number)
}

function unBoundUserInfo(){
  uni.showModal({
    title: '解除绑定',
    content: '确定要解除绑定吗？',
    success: (res) => {
      if (res.confirm) {
        updateBoundStatus(code.value,{ "bound_userinfo": false }).then(res => {
        uni.redirectTo({
          url: '/pages/index/index?code=' + getPageParams().code
        })
      }).catch(() => {
        uni.redirectTo({
          url: '/pages/err/index'
        })
      })
        
      } else if (res.cancel) {
        console.log('用户点击取消');
      }
    }
  })
}

onMounted(() => {
  getData()
})

function getData() {
  const params = getPageParams()
  code.value = params.code || ''
  getStudentInfo(code.value).then(res => {
    info.value = res.data
    console.log(res)
  })
}
</script>

<style lang="scss" scoped>

</style>