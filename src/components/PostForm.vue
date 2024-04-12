<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
      v-model="post.title"
      type="text"
      placeholder="Название"></my-input>
    <my-input
      v-model="post.body"
      type="text"
      placeholder="Описание"></my-input>
    <div class="postform_btn">
      <my-button @click="createPost">Создать</my-button>
    </div>
  </form>
</template>

<script>

import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';


export default {
    data() {
        return {
            post: {
                title: "",
                body: ""
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: ""
            };
        }
    },
    components: { MyInput }
}

</script>

<style scoped>
  h4{
    font-size: 24px;
  }

</style>
