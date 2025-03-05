<template>
  <view>
    <view class="px-6">
      <view class="pt-8">
        <view class="text-center text-xl text-primary">学生信息绑定</view>
      </view>

      <view class="relative border-4 border-solid border-primary w-32 h-32 rounded-full mx-auto mt-4 p-1.5">
        <view class="w-full h-full rounded-full overflow-hidden">
          <image class="w-full h-full" mode="aspectFill" :src="formData.avatar || '/static/icons/default-avatar.png'" />
        </view>

        <view 
          class="absolute w-10 h-10 left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2"
          @click="chooseImage"
        >
          <image class="w-full h-full" mode="scaleToFill" src="/static/icons/camera.png" />
        </view>
      </view>

      <view class="flex flex-col gap-4 mt-7">
        <AInput v-model="formData.name" icon="/static/icons/integral.png" placeholder="学生姓名" />
        <AInput v-model="formData.gradeClass" icon="/static/icons/student.png" placeholder="年级班级" />
        <AInput v-model="formData.phone" icon="/static/icons/mobile.png" placeholder="紧急联系电话" />
        <ARadio v-model="formData.gender" :options="[{ label: '男', value: 'male' }, { label: '女', value: 'female' }]" />
      </view>

      <view class="mt-20">
        <AButton text="提交" @click="submitForm" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import AInput from '@/components/AInput/index.vue'
import ARadio from '@/components/ARadio/index.vue'
import AButton from '@/components/AButton/index.vue'
import Home from '@/pages/index/components/Home.vue'

const formData = reactive({
  name: '',
  gradeClass: '',
  phone: '',
  gender: 'male',
  avatar: ''
})

function chooseImage() {
  uni.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    sourceType: ['album', 'camera'],
    success: (res) => {
      const tempFilePaths = res.tempFilePaths
      formData.avatar = tempFilePaths[0]
    }
  })
}

function submitForm() {
  console.log(formData)

  // 表单验证
  if (!formData.name) {
    uni.showToast({
      title: '请输入学生姓名',
      icon: 'none'
    })
    return
  }
  
  if (!formData.gradeClass) {
    uni.showToast({
      title: '请输入年级班级',
      icon: 'none'
    })
    return
  }
  
  if (!formData.phone) {
    uni.showToast({
      title: '请输入联系电话',
      icon: 'none'
    })
    return
  }
  
  // 显示加载提示
  uni.showLoading({
    title: '提交中...'
  })
  
  // 这里可以替换为实际的API调用
  setTimeout(() => {
    uni.hideLoading()
    uni.showToast({
      title: '提交成功',
      icon: 'success'
    })
    
    // 提交成功后跳转到其他页面
    setTimeout(() => {
      uni.navigateTo({
        url: '/pages/student/info/index'
      })
    }, 1500)
  }, 2000)
}
</script>

<style lang="scss" scoped>

</style>
