<script setup lang="ts">
import { onLaunch} from "@dcloudio/uni-app";
import { useAppStore } from "./stores/app";

const appStore = useAppStore()
const queryURLParams = (url: string) => {
    const pattern = /(\w+)=(\w+)/gi; //定义正则表达式
    const parames: Record<string, any> = {}; // 定义参数对象
    url.replace(pattern, ($, $1, $2) => {
        parames[$1] = $2;
        return "";
    });
    return parames;
};
onLaunch((options: any) => {
    // 二维码链接内容会以参数 `q` 的形式带给页面,获取时需自行 `decodeURIComponent` 一次
    // 链接示例：https://tag.haodan.vip?code=123456789
	const url = decodeURIComponent(options.query.q)
	const params = queryURLParams(url)
    appStore.verifyCode = params.code
    console.log(url,appStore.verifyCode)
});

</script>
<style lang="scss">
@use 'tailwindcss/base';
@use 'tailwindcss/components';
@use 'tailwindcss/utilities';
</style>
