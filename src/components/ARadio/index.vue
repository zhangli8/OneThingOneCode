<template>
  <view>
    <view v-if="isMounted" class="radio-group bg-white">
      <view v-for="o in options" :key="o.value" class="flex-1 h-full z-10">
        <view :class="[o.value === modelValue ? 'text-white' : 'text-primary']"
          class="w-full h-full flex items-center justify-center rounded-full text-sm transition-[color] ease-in-out delay-200"
          @click="onChange(o.value)">
          {{ o.label }}
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue?: string | number;
  options: Array<{ label: string, value: string | number }>
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value?: string | number): void
}>()

const checkedIndex = computed(() => props.options.findIndex(o => o.value === props.modelValue))

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})

function onChange(v: string | number) {
  emit('update:modelValue', v)
}
</script>

<style lang="scss" scoped>
.radio-group {
  @apply h-14 rounded-full border-2 border-solid border-primary flex relative overflow-hidden;

  &::after {
    content: '';
    width: v-bind('`calc(100% / ${options.length})`');
    transform: v-bind('checkedIndex === -1 ? "translateX(0%)" : `translateX(${checkedIndex * 100}%)`');
    opacity: v-bind('checkedIndex === -1 ? 0 : 1');
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    @apply absolute h-full top-0 left-0 rounded-full bg-primary;
  }
}
</style>
