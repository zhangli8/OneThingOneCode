<template>
  <view>
    <view
      class="h-14 rounded-full flex items-center justify-center transition-opacity"
      :style="{ backgroundColor: getBackgroundColor }"
      :class="[disabled ? 'opacity-50' : 'opacity-100']"
      :hover-class="disabled ? '' : 'opacity-80'"
      @click="onClick"
    >
      <slot>
        <text class="text-white text-base">{{ text }}</text>
      </slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  text?: string;
  disabled?: boolean;
  type?: 'primary' | 'warning';
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  disabled: false,
  type: 'primary'
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

const getBackgroundColor = computed(() => {
  const colorMap = {
    primary: '#2994F1',
    warning: '#FF6426',
  }
  return colorMap[props.type]
})

function onClick() {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<style lang="scss" scoped>

</style>