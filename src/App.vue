<template>
  <div class="app">
    <h1>Запись на приём Ветклиники "ЛИС"</h1>
    <my-button
    @click="showDialog"
    >Создать клиента
  </my-button>
    <my-dialog v-model:show="dialogVisible">
        <PostForm
          @create="createPost">
        </PostForm>
    </my-dialog>
    
    <PostList
        :posts="posts"
        @remove="removePost"
        > 
          
      </PostList>
        
</div>


</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import PostItem from '@/components/PostItem.vue';
import MyButton from './components/UI/MyButton.vue';
import MyDialog from './components/UI/MyDialog.vue';
import Axios from 'axios';

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
        {id: 1, surname: 'Петров', name:'Иван', email: 'ronnew@mail.ru', phone: '8-911-000-00-01', body: 'Кастрация кота', date: '01.05.2024', time: '11.00', isEdit: false},
        {id: 2, surname: 'Иванова', name:'Елена', email: 'ronnew2@mail.ru', phone: '8-911-000-00-02', body: 'Стрижка когтей', date: '01.05.2024', time: '12.00', isEdit: false},
        {id: 3, surname: 'Семёнова', name:'Ирина', email: 'ronnew3@mail.ru', phone: '8-911-000-00-03', body: 'Первичный приём', date: '01.05.2024', time: '13.00', isEdit: false},
        {id: 4, surname: 'Максимов', name:'Алексей', email: 'ronnew4@mail.ru', phone: '8-911-000-00-04', body: 'Чистка ПАЖ', date: '01.05.2024', time: '14.00', isEdit: false},
        {id: 5, surname: 'Горыныч', name:'Олег', email: 'ronnew5@mail.ru', phone: '8-911-000-00-05', body: 'Повторный приём', date: '01.05.2024', time: '15.00', isEdit: false},
      ],
      // cancellationPost: {
      //   backgroundColor: 'red'
      // },
      // cancellationPost: false,
      dialogVisible: false,
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
  //     cancellation(){
  //       this.cancellationPost.backgroundColor = true
  // }
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
