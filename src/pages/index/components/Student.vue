<template>
  <view>
    <view
      class="bg-primary py-6 flex flex-col items-center p-4 rounded-xl gap-2 text-white"
      @click="handleStudentClick"
    >
      <view>
        <view v-if="info?.bound_userinfo" class="w-8 h-8">
          <image
            class="w-full h-full"
            src="/static/icons/user.png"
            mode="aspectFit"
          />
        </view>

        <view v-else class="w-8 h-6">
          <image
            class="w-full h-full"
            mode="aspectFit"
            src="/static/icons/link.png"
          />
        </view>

      </view>
      <view class="text-sm">{{ info?.bound_userinfo ?'查看学生信息':'关联学生信息' }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { StudentInfoModel } from '@/api/student/types';
import { getPageParams } from '@/utils';

const props = defineProps<{
  info: StudentInfoModel | undefined
}>()

function handleStudentClick() {
  const params = getPageParams()
  if (props.info?.bound_userinfo) {
    uni.navigateTo({
      url: '/pages/student/info/index'+ '?code=' + params.code
    })
  } else {
    uni.navigateTo({
      url: '/pages/student/link/index'+ '?code=' + params.code
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
