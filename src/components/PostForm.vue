<template>
  <form @submit.prevent>
    <h4>Запись на приём</h4>
    <my-input
      v-model="post.surname"
      type="text"
      placeholder="Фамилия">
    </my-input>
    <my-input
      v-model="post.name"
      type="text"
      placeholder="Имя">
    </my-input>
      <my-input
      v-model="post.email"
      type="text"
      placeholder="Эл.почта">
    </my-input>
      <my-input
      v-model="post.phone"
      type="text"
      placeholder="Телефон">
    </my-input>
      <my-input
      v-model="post.body"
      type="text"
      placeholder="Описание">
    </my-input>
      <my-input
      v-model="post.date"
      type="text"
      placeholder="Дата">
    </my-input>
      <my-input
      v-model="post.time"
      type="text"
      placeholder="Время">
    </my-input>    
      <div class="postform_btns">
        <my-button @click="createPost">Создать</my-button>
      </div>
  </form>
</template>

<script>

import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';


export default {
  components:{
    MyButton,
    MyInput
  },
    data() {
        return {
            post: {
              surname: "",
              name: "",
              email: "",
              phone: "",
              body: "",
              date: "",
              time: "",
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                surname: "",
                name: "",
                email: "",
                phone: "",
                body: "",
                date: "",
                time: "",
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
  .postform_btns{
    margin-top: 10px;
  }

</style>
