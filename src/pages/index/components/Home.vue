<template>
    <view>
        <view>
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

import { getPageParams } from '@/utils';

function goHome() {
    const params = getPageParams()
    uni.navigateTo({
        url: '/pages/index/index?code=' + params.code   
    })
}

</script>

<style lang="scss" scoped>
.icon_home {
    width: 68.7rpx;
    height: 59.16rpx;
}
</style>