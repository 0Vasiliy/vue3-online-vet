  <template>
    <button class="btn">
      <slot></slot>
    </button>
  </template>
  
  <script>

  export default {
   name: 'my-button'
  }
  
  </script>
  
  <style scoped>
     .btn{
        width: 150px;
        height: 40px;
        border:  2px solid teal;
        margin-top: 20px;
        cursor: pointer;
        color: teal;
        background: none;
  }
    
  </style>
  