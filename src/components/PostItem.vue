  <template>
    <div class="post">
        <div>
          <div><strong>Фамилия: </strong>{{ post.surname }}</div>
          <div><strong>Имя: </strong>{{ post.name }}</div>
          <div><strong>Электронная почта: </strong>{{ post.email }}</div>
          <div><strong>Телефон: </strong>{{ post.phone }}</div>
          <div><strong>Описание: </strong>{{ post.body }}</div>
          <div><strong>Дата: </strong>{{ post.date }}</div>
          <div><strong>Время: </strong>{{ post.time }}</div>
        </div>
        <div class="post_btn">
          <my-button>Редактировать</my-button>
          <my-button>Отменить</my-button>
          <my-button
            @click="$emit('remove',post)"
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
    props:{       
        post:{
            type: Object,
            require: true,
        }
    }
}
 
  </script>
  
  <style scoped>
    .post{
    padding: 35px;
    border:  2px solid teal;
    max-width: 50%;
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  .post_btn{
    margin-bottom: 10px;
    position:absolute;
    right: 51%;
  }
  </style>
  