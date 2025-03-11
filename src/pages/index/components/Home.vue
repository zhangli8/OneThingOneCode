<template>
    <view>
        <view class="pb-16">
            <slot></slot>
        </view>
        <view
            @click="goHome" 
            class="fixed bottom-0 left-0 right-0 flex justify-center items-center w-full h-16 bg-white">
            <image
            class="icon_home"
            mode="aspectFit"
            src="/static/icons/home.png"
            />
        </view>
    </view>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

function goHome() {
    uni.redirectTo({
        url: '/pages/index/index?code=' + appStore.verifyCode  
    })
}

</script>

<style lang="scss" scoped>
.icon_home {
    width: 68.7rpx;
    height: 59.16rpx;
}
</style>