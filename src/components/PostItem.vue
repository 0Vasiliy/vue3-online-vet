  <template>
    <div class="post" :class="[btnClass,btnClass2]">
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
        <div class="post_btns">
          <my-button class="post_btn" @click="executed">Исполненно</my-button>
          <my-button class="post_btn" @click="cancellation">Отменить</my-button>
          <my-button
          @click="edit(post)"
          v-bind:disabled="isDisabled"  
          class="post_btn"   
          >Редактировать</my-button>
          <my-button
            @click="$emit('remove',post)"
            v-bind:disabled="isDisabled"
            class="post_btn"
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
      btnClass: "white-color",
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
 
   cancellation() {
    if(this.btnClass === "white-color") {
      this.btnClass = "red-color";
      this.isDisabled = !this.isDisabled;
    } else {
     this.btnClass = "white-color";
    }
  },
  executed(){
    if(this.btnClass2 === "white-color") {
      this.btnClass2 = "green-color";
    } else {
     this.btnClass2 = "white-color";
    }
    this.isDisabled = !this.isDisabled;
  }
  }
}

   
  </script>
  
  <style scoped>
.white-color {
  background: white;
 }
  
.red-color {
  background: #FA8072;
 }
 .green-color{
  background: #32CD32;
 }
.post{
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
  .post_btns{
    margin-bottom: 10px;
    position:absolute;
    right: 51%;
  }
  .post_btn{
    margin-top: 10px;
  }
  .btn_save{
    margin-top: 7px;
    padding: 7px;
    border:1px solid teal;
    cursor: pointer;
  }
  @media(max-width:1150px){
    .post{
      max-width: 35%;
  
    }
    .post_btn{
      right: 0;
      left:15%;
    }
  }
  </style>
  