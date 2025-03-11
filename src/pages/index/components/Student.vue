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
      <view class="text-sm mt-2">{{ info?.bound_userinfo ? info.name+'@'+info.grade :'关联学生信息' }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { StudentInfoModel } from '@/api/student/types';
import { useAppStore } from '@/stores/app'

const code = useAppStore().verifyCode
const props = defineProps<{
  info: StudentInfoModel | undefined
}>()

function handleStudentClick() {
  if (props.info?.bound_userinfo) {
    uni.navigateTo({
      url: '/pages/student/info/index'+ '?code=' + code
    })
  } else {
    uni.navigateTo({
      url: '/pages/student/link/index'+ '?code=' + code
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
