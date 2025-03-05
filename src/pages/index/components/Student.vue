<template>
  <view>
    <view
      class="bg-primary flex flex-col items-center p-4 rounded-xl gap-2 text-white"
      @click="handleStudentClick"
    >
      <view>
        <view class="w-8 h-6">
          <image
            class="w-full h-full"
            mode="aspectFit"
            src="/static/icons/link.png"
          />
        </view>
        <!-- <view class="w-8 h-8">
          <image
            class="w-full h-full"
            src="/static/icons/user.png"
            mode="aspectFit"
          />
        </view> -->
      </view>
      <view class="text-base">关联学生信息</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
function handleStudentClick() {
  if (true) {
    uni.navigateTo({
      url: '/pages/student/link/index'
    })
  } else {
    uni.navigateTo({
      url: '/pages/student/info/index'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
