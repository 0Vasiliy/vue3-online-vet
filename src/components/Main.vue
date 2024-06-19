<template>
    <div class="main">
      <h1>Запись на приём Ветклиники "ЛИС"</h1>
      <div class="main_btns">
        <my-button
          @click="showDialog"
          class="main_btn"
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

<!-- <script setup>

const props = defineProps({
    post:{
        type: Object,
        required: true,
        default: () => {},
    }
    
})
</script> -->

  <script>

 import axios from 'axios' 

  import PostForm from '@/components/PostForm.vue';
  import PostList from '@/components/PostList.vue';
  import PostItem from '@/components/PostItem.vue';
  import MyButton from '@/components/UI/MyButton.vue';
  import MyDialog from '@/components/UI/MyDialog.vue';
  import MySelect from '@/components/UI/MySelect.vue';
  import MyInput from '@/components/UI/MyInput.vue';

  export default {
    name: 'Main',
    components: {
      PostForm,
      PostList,
      PostItem,
      MyButton,
      MyDialog,
      MySelect,
      MyInput
  },
  props: {
    posts:{
      type: Array,
      require: true
    }
  },
    data(){
      return{
        posts: [
          // {id: 1, surname: 'Петров', name:'Иван', email: 'ronnew@mail.ru', phone: '8-911-000-00-01', body: 'Кастрация кота', date: '01.03.2024', time: '11.00', isEdit: false},
          // {id: 2, surname: 'Иванова', name:'Елена', email: 'ronnew2@mail.ru', phone: '8-911-000-00-02', body: 'Стрижка когтей', date: '29.05.2024', time: '12.00', isEdit: false},
          // {id: 3, surname: 'Семёнова', name:'Ирина', email: 'ronnew3@mail.ru', phone: '8-911-000-00-03', body: 'Первичный приём', date: '05.02.2024', time: '13.00', isEdit: false},
          // {id: 4, surname: 'Максимов', name:'Алексей', email: 'ronnew4@mail.ru', phone: '8-911-000-00-04', body: 'Чистка ПАЖ', date: '12.01.2024', time: '14.00', isEdit: false},
          // {id: 5, surname: 'Горыныч', name:'Олег', email: 'ronnew5@mail.ru', phone: '8-911-000-00-05', body: 'Повторный приём', date: '01.05.2024', time: '15.00', isEdit: false},
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
        async fetchPosts(){
          axios.get('http://localhost:8080/server/dbvet.json')
          .then(response => {
              this.posts = response.data; 
              })
          .catch(error => {
              console.log(error); 
              });
    },

   },
   computed:{
    sortedPosts() {
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    
      searchedPosts(){
        return this.sortedPosts.filter(post => post.surname.toLowerCase().includes(this.searchQuery.toLowerCase()))
        // || this.sortedPosts.filter(post => post.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        // || this.sortedPosts.filter(post => post.email.toLowerCase().includes(this.searchQuery.toLowerCase()))
        // || this.sortedPosts.filter(post => post.phone.toLowerCase().includes(this.searchQuery.toLowerCase()))
        // || this.sortedPosts.filter(post => post.body.toLowerCase().includes(this.searchQuery.toLowerCase()));
    // return this.sortedPosts.filter(post => Object.values(post).some(value => value.toString().toLowerCase().
      },
   },
   mounted() {
    this.fetchPosts();
   }
  }
  
  </script>
  
  <style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .main{
      padding: 80px;
    }
   .main_btns{
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .main_btn{
    margin-top: 20px;
  }
  .searh{
    max-width: 50%;
    border-radius: 5px;
    height: 40px;
  }
  </style>
  