<template>
  <view>
    <view class="border-2 border-solid bg-white border-primary rounded-xl h-14 overflow-hidden relative">
      <view class="w-10 h-10 rounded-full absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center">
        <image
          class="w-full h-full"
          :src="icon"
          mode="scaleToFill"
        />
      </view>
      <input 
        :placeholder="placeholder" 
        :type="type" 
        :value="modelValue" 
        class="h-full pl-14 pr-2 text-sm" 
        @input="onInput"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
interface Props {
  icon?: string;
  modelValue?: string;
  type?: string;
  placeholder?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(e: any) {
  emit('update:modelValue', e.detail.value)
}
</script>

<style lang="scss" scoped>

</style>
