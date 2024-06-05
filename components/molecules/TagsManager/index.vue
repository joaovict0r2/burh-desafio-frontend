<template>
  <div class="tags-manager">
    <Select @handle-selected-tag="handleSelectedTag" />
    
    <div class="tags-manager__tags">
      <Tag v-for="tag in selectedTags" :key="tag.id" :label="tag.title" color="transparent" deleteable/>
    </div>
  </div>
</template>

<script setup lang='ts'>
type Tag = {
  id: number,
  title: string
}

const selectedTags = ref<Tag[]>([])

function handleSelectedTag(tag: Tag){
  selectedTags.value = [ ...selectedTags.value, tag ]
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
}
</style>