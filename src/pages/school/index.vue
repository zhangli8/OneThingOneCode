<template>
<view :style="{ paddingTop:`${customBarHeight}px`}">
    <Home>
        <view class="px-6">
            <view>
                <text class="text-xl text-primary font-medium">{{ title }}</text>
                <image class="storyimg w-full rounded-xl my-3" src="@/static/icons/school-img.png" mode="aspectFill"></image>
                <view class="pb-20">
                    <rich-text :nodes="schoolContent" class="text-sm leading-6 text">
                    </rich-text>
                </view>
            </view>
        </view>
    </Home>
</view>
</template>

<script lang="ts" setup>
import { useWindowInfo } from '@/hooks/useWindowInfo';
import Home from '../index/components/Home.vue';
import { getSchool } from '@/api/school';

const { customBarHeight } = useWindowInfo()
const title = ref('');
const schoolContent = ref('');

onMounted(() => {
    getData()
})
function getData(){
    getSchool().then(res => {
        schoolContent.value= res.data.content
        title.value= res.data.title
        console.log(res)
    })
}

</script>
<style lang="scss" scoped>
.h2{
    color:#2a95f2;
    font-size: 46rpx;
    font-weight: 600;
    line-height: 63rpx;
}
.storyimg{
    height:280rpx;
}
.text{
    color:#3f4262;
}
</style>
