<template lang="">
  <div class="t">
    <ul class="title">
      <li>用户名</li>
      <li>时间</li>
      <li>地址</li>
    </ul>
    <br>
    <ul v-for="(t,index) in tableData" :key="index" class="List">
      <div class="List_li" v-if="t.isComplete">
        <li>{{t.name}}</li>
        <li>{{t.date}}</li>
        <span v-if="!t.isEdit">{{t.address}}</span>
        <input type="text" v-else @blur="handleBlur(index,t)" v-model="t.address">
        <!-- <input type="text" disabled="disabled" value="t.name">
        <input type="text" disabled="disabled" value="t.name">
        <input type="text" disabled="disabled" value="t.name"> -->
        <span class="button_right">
          <button @click="delete_li(index)">删除</button>
          <button @click="modify_li(index)" v-show="!tableData.isEdit">修改</button>
          <button>详情</button>
        </span>

      </div>
    </ul>
  </div>
</template>
<script>
  import { reactive, toRefs, ref } from 'vue'
  export default {
    name: 'dingdan',
    setup() {
      const data = reactive({
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            isComplete: true
          },
          {
            date: '2016-05-04',
            name: '张三',
            address: '上海市普陀区金沙江路 1517 弄',
            isComplete: true
          },
          {
            date: '2016-05-01',
            name: '李四',
            address: '上海市普陀区金沙江路 1519 弄',
            isComplete: true
          },
          {
            date: '2016-05-03',
            name: '王五',
            address: '上海市普陀区金沙江路 1516 弄',
            isComplete: true
          },
        ],
      })
      const delete_li = (index) => {
        data.tableData[index].isComplete = false
      }
      const modify_li = (index) => {
        data.tableData[index].isEdit = true
        // console.log(data.tableData)
        console.log(data.input_address)
      }
      const handleBlur = (index, t) => {
        // console.log('aaa')
        data.tableData[index].address = t.address
        data.tableData[index].isEdit = false
        // console.log(data.tableData.isEdit)
      }
      return {
        ...toRefs(data), delete_li, modify_li, handleBlur
      }
    }
  }
</script>
<style scoped>
  .t {
    padding: 30px 0 10px;
    border-radius: 25px;
    background-color: rgb(244, 244, 244);
    width: 80vw;
    height: 70vh;
    margin: 50px auto;
  }

  .title li {
    width: 25%;
  }

  .List_li {
    width: 80vw;
    height: 50px;
    line-height: 50px;
    margin: 10px 0;
    color: gray;
    background-color:white;
    position: relative;
  }

  .List li,
  span,
  input {
    /* width: 25%; */
    width: 300px;
    /* margin-bottom: 20px; */
  }

  button {
    width: 80px;
    background-color: rgb(0, 255, 213);
    border: none;
    color: white;
    border-radius: 5px;
    height: 20px;
    margin-right: 5px;
    cursor: pointer;
  }
  button:hover{
    background-color: rgb(100, 100, 185);
  }
.button_right{
  position: absolute;
  right: 0px;
}
  .title {
    margin-top: 30px;
    width: 80vw;
    height: 50px;
    font-size: 30px;
  }

  .mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99999999;
  }

  /* span{
    width: 25%;
  }
  input{
    width: 25%;
  } */
</style>