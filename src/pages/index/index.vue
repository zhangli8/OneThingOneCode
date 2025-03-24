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
import Home from './components/Home.vue'
import { ref, onMounted } from 'vue'
import { StudentInfoModel } from '@/api/student/types'
import { useWindowInfo } from '@/hooks/useWindowInfo'
import { useAppStore } from '@/stores/app'


const appStore = useAppStore()
const code = ref<string>('')
const info = ref<StudentInfoModel>()
const { customBarHeight } = useWindowInfo()

onMounted(() => {
    getData();
    loginAndFetchData();
})

const loginAndFetchData = async () => {
  try {
    // 获取登录凭证
    const { code: wxCode } = await uni.login({
      provider: 'weixin'
    });

    console.log("微信code:", wxCode);

    // 发送凭证到后端获取用户数据
    const res = await uni.request({
      url: 'http://localhost:8080/getopenid',
      method: 'POST',
      data: {
        code: wxCode
      }
    });

    if (res.statusCode === 200) {
      const token = res.data as string; 
      appStore.setToken(token); 
    } else {
      console.error('请求失败:', res);
    }
  } catch (error) {
    console.error('登录失败:', error);
  }
};


function getData() {
  code.value = appStore.verifyCode || ''

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

</style>
