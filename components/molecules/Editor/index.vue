<template>
  <div class="editor">
    <label
      v-if="label"
      for="input"
      class="editor__label"
    >
      {{ label }}
      <span v-if="required"> *</span>
    </label>

    <section class="editor__buttons">
      <button
        @click.prevent="editor?.chain().focus().toggleBold().run()"
        :disabled="!editor?.can().chain().focus().toggleBold().run()"
        :class="{ 'editor__button--active': editor?.isActive('bold') }"
        class="editor__button"
      >
        <BoldIcon title="Bold" />
      </button>

      <button
        @click.prevent="editor?.chain().focus().toggleItalic().run()"
        :disabled="!editor?.can().chain().focus().toggleItalic().run()"
        :class="{ 'editor__button--active': editor?.isActive('italic') }"
        class="editor__button"
      >
        <ItalicIcon title="Italic"/>
      </button>
      
      <button
        @click.prevent="editor?.chain().focus().toggleUnderline().run()"
        :disabled="!editor?.can().chain().focus().toggleUnderline().run()"
        :class="{ 'editor__button--active': editor?.isActive('underline') }"
        class="editor__button"
      >
        <UnderlineIcon title="Underline"/>
      </button>

      <button
        @click.prevent="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'editor__button--active': editor?.isActive('heading', { level: 2 }) }"
        class="editor__button"
      >
        <HeadingOneIcon title="Heading"/>
      </button>

      <button
        @click.prevent="editor?.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'editor__button--active': editor?.isActive('heading', { level: 1 }) }"
        class="editor__button"
      >
        <HeadingSecondIcon title="Heading 2"/>
      </button>

      <button
        @click.prevent="editor?.chain().focus().toggleBulletList().run()"
        :class="{ 'editor__button--active': editor?.isActive('bulletList') }"
        class="editor__button"
      >
        <ListIcon title="Bullet list"/>
      </button>
      
      <button
        @click.prevent="editor?.chain().focus().toggleOrderedList().run()"
        :class="{ 'editor__button--active': editor?.isActive('orderedList') }"
        class="editor__button"
      >
        <NumberListIcon title="Ordered List"/>
      </button>
    </section>

    <TiptapEditorContent :editor="editor"/>

    <span v-if="error" class="editor__error">{{ error }}</span>
  </div>
</template>

<script setup>
import Underline from '@tiptap/extension-underline';
import BoldIcon from 'vue-material-design-icons/FormatBold.vue'
import ItalicIcon from 'vue-material-design-icons/FormatItalic.vue'
import UnderlineIcon from 'vue-material-design-icons/FormatUnderline.vue'
import HeadingOneIcon from 'vue-material-design-icons/FormatHeader1.vue'
import HeadingSecondIcon from 'vue-material-design-icons/FormatHeader2.vue'
import ListIcon from 'vue-material-design-icons/FormatListBulleted.vue'
import NumberListIcon from 'vue-material-design-icons/FormatListNumbered.vue'

const props = defineProps({
  modelValue: String,
  label: String,
  required: Boolean,
  error: String
})

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML())
  },
  extensions: [TiptapStarterKit, Underline, ],
  parseOptions: {
    preserveWhitespace: 'full'
  }
});

onBeforeUnmount(() => {
  unref(editor)?.destroy();
});
</script>

<style lang="scss">
.editor {
  &__label {
    font-weight: 500;

    span {
      color: red;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border: 2px solid $gray-200;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: none;
    margin-top: 6px;
    padding: 16px;
    gap: 8px;
  }

  &__button {
    border: none;
    background-color: transparent;
    padding: 4px;

    &--active {
      background-color: $gray-400;
      border-radius: 4px;
    }
  }

  &__error {
    font-size: 12px;
    color: red;
  }
}

.tiptap {
  border: 2px solid $gray-200;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 16px;
  min-height: 12rem;
  max-height: 12rem;
  overflow-y: auto;

  @include lg {
    max-height: 20rem; 
  }

  &:focus-visible {
    outline: none;
  }
}
</style>