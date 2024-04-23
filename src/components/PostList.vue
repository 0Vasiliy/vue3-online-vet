<template>
  <div v-show="posts.length > 0">
    <h3>Список клиентов</h3>
    <PostItem 
    v-for="post in posts"
    :post="post"
    :key="post.id"
    @remove="$emit('remove',post)"
    ></PostItem>
  </div>
  <h2 v-show="posts.length === 0">
      Список клиентов пуст
  </h2>
</template>

<script>

import PostItem from '@/components/PostItem.vue';
export default {
  components: {PostItem},
  props: {
    posts:{
      type: Array,
      require: true
    }
  }
}

</script>

<style scoped>
   h3{
    margin-top: 20px;
    font-size: 24px;
  }
  h2{
    color: red;
    display: block;
  }
</style>


