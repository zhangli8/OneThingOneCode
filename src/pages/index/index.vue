<template>
  <view :style="{ paddingTop:`${customBarHeight}px`}">
    <view class="px-4 py-4 flex flex-col gap-4">
      <ProductResult :info="info" />
      <ProductInfo :info="info" />
      <ProductNav :code="code" />
      <ProductStudent :info="info" />
      <ProductOther :code="code" />
    </view>
    <view>
      <Home :code="code" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import ProductResult from './components/Result.vue'
import ProductInfo from './components/Info.vue'
import ProductNav from './components/Nav.vue'
import ProductStudent from './components/Student.vue'
import ProductOther from './components/Other.vue'
import { getStudentInfo } from '@/api/student'
import { getPageParams } from '@/utils'
import Home from './components/Home.vue'
import { ref, onMounted } from 'vue'
import { StudentInfoModel } from '@/api/student/types'
import { useWindowInfo } from '@/hooks/useWindowInfo'

const code = ref<string>('')
const info = ref<StudentInfoModel>()
const { customBarHeight } = useWindowInfo()

onMounted(() => {
    getData()
})

function getData() {
  const params = getPageParams()
  code.value = params.code || ''

  console.log(code.value)

  if (!code.value) {
    uni.redirectTo({
      url: '/pages/err/index'
    })
  }

  getStudentInfo(code.value).then(res => {
    info.value = res.data;
  }).catch(() => {
    uni.redirectTo({
      url: '/pages/err/index'
    })
  })

}
</script>

<style>
page {
  @apply bg-primary-light-9;
}
</style>
