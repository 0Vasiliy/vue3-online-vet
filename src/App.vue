<template>
  <div class="app">
    <h1>Запись на приём Ветклиники "ЛИС"</h1>
    <div class="app_btns">
      <my-button
        @click="showDialog"
        class="app_btn"
        >Создать клиента
      </my-button>
      <my-input 
      v-model="searchQuery"
      class="searh"
      placeholder="Поиск по фамилии..."
      ></my-input>
      <my-select 
      v-model="selectedSort"
      :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
        <PostForm
          @create="createPost">
        </PostForm>
    </my-dialog>
    <post-list
        :posts="searchedPosts"
        @remove="removePost"
        >         
  </post-list>
</div>


</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import PostItem from '@/components/PostItem.vue';
import MyButton from './components/UI/MyButton.vue';
import MyDialog from './components/UI/MyDialog.vue';
import MySelect from './components/UI/MySelect.vue';
import MyInput
 from './components/UI/MyInput.vue';
import Axios from 'axios';

export default {
  components: {
    PostForm,
    PostList,
    PostItem,
    MyButton,
    MyDialog,
    MySelect,
    MyInput
},
  data(){
    return{
      posts: [
        {id: 1, surname: 'Петров', name:'Иван', email: 'ronnew@mail.ru', phone: '8-911-000-00-01', body: 'Кастрация кота', date: '01.03.2024', time: '11.00', isEdit: false},
        {id: 2, surname: 'Иванова', name:'Елена', email: 'ronnew2@mail.ru', phone: '8-911-000-00-02', body: 'Стрижка когтей', date: '29.05.2024', time: '12.00', isEdit: false},
        {id: 3, surname: 'Семёнова', name:'Ирина', email: 'ronnew3@mail.ru', phone: '8-911-000-00-03', body: 'Первичный приём', date: '05.02.2024', time: '13.00', isEdit: false},
        {id: 4, surname: 'Максимов', name:'Алексей', email: 'ronnew4@mail.ru', phone: '8-911-000-00-04', body: 'Чистка ПАЖ', date: '12.01.2024', time: '14.00', isEdit: false},
        {id: 5, surname: 'Горыныч', name:'Олег', email: 'ronnew5@mail.ru', phone: '8-911-000-00-05', body: 'Повторный приём', date: '01.05.2024', time: '15.00', isEdit: false},
      ],
      dialogVisible: false,
      selectedSort: '',
      searchQuery: '',
      sortOptions:[
        {value: 'surname', name: 'По фамилии'},
        {value: 'name', name: 'По имени'},
        {value: 'email', name: 'По эл.почте'},
        {value: 'phone', name: 'По телефону'},
        {value: 'body', name: 'По услуге'},
        // {value: 'date', name: 'По дате'},
      ]
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
 },
 computed:{
  sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
  },
  searchedPosts(){
      return this.sortedPosts.filter(post => post.surname.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
 },

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
 .app_btns{
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.app_btn{
  margin-top: 20px;
}
.searh{
  max-width: 50%;
  border-radius: 5px;
  height: 40px;
}
</style>
