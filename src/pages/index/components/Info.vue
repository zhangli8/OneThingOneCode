<template>
  <view>
    <view class="bg-white border-primary-light-8 border-solid border flex flex-col p-4 rounded-xl gap-3">
      <view class="flex gap-3 items-center">
        <view class="flex-shrink-0 text-gray-400 text-sm">产品名称</view>
        <view class="flex-1 text-primary-strong-1 text-base min-h-[1em]">{{ info?.product }}</view>
      </view>
      <view class="flex gap-3 items-center">
        <view class="flex-shrink-0 text-gray-400 text-sm">产品规格</view>
        <view class="flex-1 text-primary-strong-1 text-base min-h-[1em]">{{ info?.specification }}</view>
      </view>
      <view class="flex gap-3 items-center">
        <view class="flex-shrink-0 text-gray-400 text-sm">产品⾯料</view>
        <view class="flex-1 text-primary-strong-1 text-base min-h-[1em]">{{ info?.fabric }}</view>
      </view>
      <view class="flex gap-3 items-center">
        <view class="flex-shrink-0 text-gray-400 text-sm">⽣产⼚商</view>
        <view class="flex-1 text-primary-strong-1 text-base min-h-[1em]">{{ info?.manufacturer }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { StudentInfoModel } from '@/api/student/types';

defineProps<{
  info: StudentInfoModel | undefined
}>()
</script>

<style lang="scss" scoped>

</style>
