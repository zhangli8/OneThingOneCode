<template>  
<view :style="{ paddingTop:`${customBarHeight}px`}">
    <Home>
        <view class="px-6">
            <view>
                <text class="text-xl text-primary font-medium">{{ title }}</text>
                <image class="storyimg w-full rounded-xl my-3" src="@/static/icons/storyimg.png" mode="aspectFill"></image>
                <view class="pb-20">
                    <rich-text :nodes="storyContent" class="text-sm leading-6 text">
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
import { getStory } from '@/api/story';

const title = ref('');
const storyContent = ref('');
const { customBarHeight } = useWindowInfo()

onMounted(() => {
    getData()
})
function getData(){
    getStory().then(res => {
        storyContent.value= res.data.content
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
