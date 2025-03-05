<template>
    <view class="flex justify-center items-center h-screen">
        <view class="w-full px-[40rpx]">
            <view class="box bg-right-center bg-no-repeat">
                <text class="block text-gray-300 text-xs leading-[40rpx]">查询结果</text>
                <text class="block text-white text-xl leading-[50rpx] font-bold">无效信息</text>
                <text class="block text-gray-300 text-xs mt-2">联系平台客服</text>
                <text class="block text-white font-medium text-lg leading-[40rpx]">400 828 1949</text>
                <text class="relative bottom-[-90rpx] text-gray-400 leading-[0] block text-center">上海哈芙琳服装有限公司</text>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.box{
    padding: 46rpx;
    background-color: #5b5b5b;
    border-radius: 27rpx; 
    background-image: url('@/static/icons/error.png');
    background-size: 160rpx 160rpx;
    background-position: right 45rpx center;
}
</style>
