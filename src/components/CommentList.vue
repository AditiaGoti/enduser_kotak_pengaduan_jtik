<template>
    <div v-for="comment in commentList" :key="comment.id" class="flex flex-row">
    <div class="ml-3 mt-1">
        <p class="font-bold ">{{commentList.createdBy}}</p>
        <p>{{commentList.message}}</p>
    </div>
</div>
</template>
<script>
 import Logo from "@/assets/img/PENGADUAN.png";
 import { CommentController } from "@/controller/CommentController.js";
  import moment from 'moment';

  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    },
    data()
  {
    return{
        moment: moment,
    Logo,
    // moment: moment,
        meta: {
          page: 1,
          size: "",
        },
        comment: new CommentController(false, false, ""),
    }
  },
  computed:{
    isError() {
        return this.comment.error;
      },
      commentList() {
      return this.comment.lists;
    },
      errorCause() {
        return this.comment.errorCause;
      },
      isLoading() {
        return this.comment.loading;
      },
  },
  mounted() {
    this.getComment();
    },
  methods: {
    async getCommentList() {
      return this.comment.getCommentList();
    },
    async getComment() {
      await this.getCommentList();
    },
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  </style>
  