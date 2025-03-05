// import { getPageParams } from "@/utils"

// const items = ['navigateTo', 'redirectTo', 'switchTab', 'reLaunch']

// items.forEach(item => {
//   uni.addInterceptor(item, {
//     invoke(args) {
//       if (!args.url) return;

//       const { code } = getPageParams();
//       const urlParts = args.url.split("?");
//       const baseUrl = urlParts[0];
//       const queryStr = urlParts[1] || "";
      
//       // 解析现有查询参数
//       const params = queryStr ? queryStr.split('&').reduce((acc: Record<string, string>, curr: string) => {
//         const [key, value] = curr.split('=');
//         acc[key] = value;
//         return acc;
//       }, {} as Record<string, string>) : {};
      
//       // 添加code参数
//       if (code) params.code = code;
      
//       // 构建新的查询字符串
//       const newQueryStr = Object.entries(params)
//         .map(([key, value]) => `${key}=${value}`)
//         .join('&');
      
//       args.url = `${baseUrl}${newQueryStr ? '?' + newQueryStr : ''}`;

//     }
//   })
// })
