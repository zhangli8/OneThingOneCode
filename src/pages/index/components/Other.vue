<template>
    <view class="flex flex-row gap-4">
      
      <navigator class="w-full" :url="`/pages/story/index?code=${props.code}`">
        <view class="flex w-full h-16 flex-row justify-center items-center bg-white border border-[#DBE1EE] border-solid rounded-md">
          <view class="w-1/4">
            <image
              class="icon"
              mode="aspectFit"
              src="/static/icons/balloon.png"
            />
          </view>
          <view class="text-primary-strong-1 text-sm">校服故事</view>
      </view>
      </navigator>

      <navigator class="w-full" :url="`/pages/designer/index?code=${props.code}`">
        <view class="flex w-full h-16 flex-row justify-center items-center bg-white border border-[#DBE1EE] border-solid rounded-md">
          <view class="w-1/4">
            <image
              class="icon"
              mode="aspectFit"
              src="/static/icons/skirt.png"
            />
          </view>
        <view class="text-primary-strong-1 text-sm">设计师寄语</view>
      </view>
      </navigator>
    </view>
</template>

<script lang="ts" setup>

const props = defineProps({
  code: {
    type: String, // 指定 prop 的类型为字符串
    required: true // 指定该 prop 是必需的
  }
});
</script>

<style lang="scss" scoped>
.icon{
  width: 53rpx;
  height: 67rpx;
}
</style>
