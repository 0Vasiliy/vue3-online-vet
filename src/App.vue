<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button
    @click="showDialog"
    >Создать пользователя</my-button>
    <my-dialog v-model:show="dialogVisible">
        <PostForm
          @create="createPost">
        </PostForm>
    </my-dialog>
    
    <PostList
        :posts="posts"
        @remove="removePost">
      </PostList>
    
</div>


</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import PostItem from '@/components/PostItem.vue';
import MyButton from './components/UI/MyButton.vue';
import MyDialog from './components/UI/MyDialog.vue';

export default {
  components: {
    PostForm,
    PostList,
    PostItem,
    MyButton,
    MyDialog
},
  data(){
    return{
      posts: [
        {id: 1, title: 'Java script-1', body: 'Описание поста-1'},
        {id: 2, title: 'Java script-2', body: 'Описание поста-2'},
        {id: 3, title: 'Java script-3', body: 'Описание поста-3'},
        {id: 4, title: 'Java script-4', body: 'Описание поста-4'},
        {id: 5, title: 'Java script-5', body: 'Описание поста-5'},
      ],
      
    }   
  },
  methods: {
      // Создание поста
      createPost(post){
       this.posts.push(post);
       this.dialogVisible = false;
      },
      // Удаление поста
      removePost(post){
        this.posts = this.posts.filter(p => p.id !== post.id);
      },
      //  Функция диалога, меняет значение dialogVisible
      showDialog() {
      this.dialogVisible = true;
    },
    }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app{
    padding: 80px;
  }
 
</style>
