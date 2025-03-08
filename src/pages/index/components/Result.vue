<template>
  <view>
    <view class="bg-primary flex p-4 rounded-xl gap-1">
      <view class="flex-1 flex flex-col gap-2">
        <view class="text-white text-xl">
          <view class="text-white/60 text-sm">查询结果</view>
          <view>正品</view>
        </view>
        <view class="text-white text-xl">
          <view class="text-white/60 text-sm">产品认证序列号</view>
          <view class="block min-h-[1em]">{{ info?.verification_code }}</view>
        </view>
      </view>
      <view class="flex-shrink-0 self-center">
        <view class="w-20 h-24 relative">
          <image
            class="w-full h-full"
            mode="aspectFit"
            src="/static/icons/badge.png"
          />
        </view>
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
