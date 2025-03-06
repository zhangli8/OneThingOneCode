<template>  
    <Home>
        <view class="p-6 pt-[50rpx]">
            <view>
                <text class="text-xl text-primary font-medium">{{ title }}</text>
                <image class="storyimg w-full rounded-xl my-3" src="@/static/icons/storyimg.png" mode="aspectFill"></image>
                <view>
                    <rich-text :nodes="designerContent" class="text">
                    </rich-text>
                </view>
            </view>
        </view>
    </Home>
</template>

<script lang="ts" setup>
import Home from '../index/components/Home.vue';
import { getDesigner } from '@/api/designer';

const title = ref('');
const designerContent = ref('');

onMounted(() => {
    getData()
})
function getData(){
    getDesigner().then(res => {
        designerContent.value= res.data.content
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
    line-height: 46rpx;
    font-size:26repx;
}
</style>
