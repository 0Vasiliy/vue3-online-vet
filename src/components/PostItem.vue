  <template>
    <div class="post">
        <div>
          <div><strong>Название:</strong>{{ post.title }}</div>
          <div><strong>Описание:</strong>{{ post.body }}</div>
        </div>
        <div class="post_btns">
          <my-button
            @click="$emit('remove',post)"
           >Удалить</my-button>
        </div>
    </div>
  </template>
  
  <script>

import MyButton from './UI/MyButton.vue'
  
  export default {
   
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
    padding: 15px;
    border:  2px solid teal;
    max-width: 50%;
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  .post_btns{
    position:absolute;
    right: 51%;
  }
  </style>
  