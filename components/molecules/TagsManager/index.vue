<template>
  <div class="tags-manager">
    <Select @handle-selected-tag="handleSelectedTag" />
    <span>Selecione até 3 tags</span>
    
    <div v-if="props.selectedTags.length" class="tags-manager__tags">
      <Tag 
        v-for="tag in props.selectedTags"
        :label="tag.title"
        :key="tag.id"
        deleteable  
        color="transparent"
        @remove-tag="handleRemoveTag(tag.id)"
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
type Tag = {
  id: number,
  title: string
}

const emit = defineEmits(['handle-selected-tag', 'handle-remove-tag'])
const props = defineProps({
  selectedTags: {
    type: Array<Tag>,
    default: []
  }
})

const selectingTagIsAvailable = computed(() => props.selectedTags.length < 3)

function handleSelectedTag(tag: Tag){
  const tagAlreadySelected = props.selectedTags.some(item => item.id === tag.id)

  if (tagAlreadySelected) return

  if(selectingTagIsAvailable.value) {
    emit('handle-selected-tag', tag)
  }
}

function handleRemoveTag(tagId: number) {
  emit('handle-remove-tag', tagId)
}
</script>
  
<style lang="scss" scoped>
.tags-manager {
  &__tags {
    display: flex;
    gap: 8px;
    margin-top: 16px;
    overflow: auto;
    padding-bottom: 8px;
  }

  span {
    font-size: 12px;
    margin-left: 4px;
    opacity: .7;
  }
}
</style>