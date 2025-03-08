export function useWindowInfo() {
    const windowInfo = uni.getWindowInfo();
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
  
    const statusBarHeight = windowInfo.statusBarHeight;
  
    const customBarHeight =
      menuButtonInfo.top + menuButtonInfo.bottom - statusBarHeight;
  
    const bottomSafeAreaHeight = windowInfo.safeAreaInsets.bottom;
  
    return {
      windowInfo,
      menuButtonInfo,
      statusBarHeight,
      customBarHeight,
      bottomSafeAreaHeight,
    };
  }