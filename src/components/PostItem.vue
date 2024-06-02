  <template>
    <div class="post" :style="cancellationPost">
        <div v-if="!post.isEdit">
          <div><strong>Фамилия: </strong>{{ post.surname }}</div>
          <div><strong>Имя: </strong>{{ post.name }}</div>
          <div><strong>Электронная почта: </strong>{{ post.email }}</div>
          <div><strong>Телефон: </strong>{{ post.phone }}</div>
          <div><strong>Описание: </strong>{{ post.body }}</div>
          <div><strong>Дата: </strong>{{ post.date }}</div>
          <div><strong>Время: </strong>{{ post.time }}</div>
        </div>

        <div class="post-edit" v-else>
          <input v-model="post.surname" placeholder="Фамилия">
          <input v-model="post.name" placeholder="Имя">
          <input v-model="post.email" placeholder="Эл.Почта">
          <input v-model="post.phone" placeholder="Телефон">
          <input v-model="post.body" placeholder="Описание">
          <input v-model="post.data" placeholder="Дата">
          <input v-model="post.time" placeholder="Время"> 
          <button @click="save(post)" class="btn_save">Сохранить</button>
        </div>
        <div class="post_btn">
          <my-button
          @click="edit(post)"
          v-bind:disabled="isDisabled"
          >Редактировать</my-button>
          <my-button @click="cancellation">Отменить</my-button>
          <!-- <my-button @click="cancellation">Отменить</my-button> -->
          <my-button
            @click="$emit('remove',post)"
            v-bind:disabled="isDisabled"
           >Удалить</my-button>
        </div>
    </div>
  </template>
  
  <script>

import MyButton from './UI/MyButton.vue'

  export default {
   components:{
    MyButton,
   },
   data() {
    return {
      isDisabled: false,
      cancellationPost: {
      type: Boolean,
      require: false, 
      // backgroundColor : '',
      //  backgroundColor: false,
      //  backgroundColor: ''
      },
      // backgroundColor:{
      //   type: Boolean,
      // },
      // cancellationPost: true,
        // backgroundColor: true,
    };
  },
    props:{       
        post:{
            type: Object,
            require: true,
        }
    },
    methods: {
    edit(post) {
      post.isEdit = true;
    },
    save(post) {
		post.isEdit = false;
	},
  cancellation(){
    this.cancellationPost.backgroundColor = 'red';
    this.isDisabled = !this.isDisabled;
   
    // if(this.cancellationPost.backgroundColor == false){
      
    //   this.cancellationPost.backgroundColor = 'gray';
    // }else{
    //   this.cancellationPost.backgroundColor = 'red';
    // }
  },
  // cancellation2(){
  //   this.cancellationPost.backgroundColor = 'gray'
  // }
//   cancellation (){
//          if(this.cancellationPost.backgroundColor == false) {
//             return this.cancellationPost.backgroundColor = 'gray'
//          } else {
//             return this.cancellationPost.backgroundColor = 'red'
//  }
//     },
  }
}

   
  </script>
  
  <style scoped>
.red{
    background-color: red;
  }
  .gray{
    background-color: white;
  }
.post{
background-color: white;
padding: 40px;
border:  2px solid teal;
max-width: 50%;
margin-top: 20px;
display: flex;
align-items: center;
}
.post-edit{
  display: flex;
  flex-flow: column;
 }
 input{
  padding: 7px;
  margin-top: 7px;
  border:1px solid teal;
 }
  .post_btn{
    margin-bottom: 10px;
    position:absolute;
    right: 51%;
  }
  .btn_save{
    margin-top: 7px;
    padding: 7px;
    border:1px solid teal;
    cursor: pointer;
  }

  </style>
  