<template>
  <h1 style="color: red">Exercise</h1>
  <div class="d-flex align-items-end">
    <textarea
      placeholder="What you want to say..."
      v-model="textTyping"
    ></textarea>
    <button
      class="btn btn-warning ms-3"
      @click="acceptEditing"
      v-if="isEditing"
    >Edit</button>
    <button
      class="btn btn-success ms-3"
      @click="addText()"
      v-else
    >Add</button>
    <Message :message="message"/>
  </div>
  <TextLayout
    :textList="textList"
    @deleteItem="deleteItem($event)"
    @editItem="editItem($event)"
    @isPrepareMoveItem="message = $event ? 'Hold and drag to move item' : ''"
  />
</template>

<script>
  import TextLayout from './TextLayout.vue'
  import Message from './Message.vue'

  export default {
    data() {
      return {
        textTyping: '',
        textList: JSON.parse(localStorage.getItem('itemList')) || [],
        isEditing: false,
        indexEditing: '',

        message: '',
        // isPrepareMoveItem: false,
      }
    },
    components: {
      TextLayout,
      Message,
    },
    watch: {
      textList(newValue, oldValue) {
        // console.log({newValue})
        // console.log({oldValue})
        //save in localStorage
        localStorage.setItem('itemList', JSON.stringify(this.textList))
      },
    },
    methods: {
      addText() {
        // console.log(this.textTyping)
        if(this.textTyping){
          const editText = this.textTyping[0].toUpperCase() + this.textTyping.slice(1)
          // this.textList.push(editText)
          this.textList = [...this.textList, editText]
          //clone ra để thằng watch nhận ra sự thay đổi
          this.textTyping = ''
        }
      },
      deleteItem(index) {
        console.log(index)
        const newArr = [...this.textList]
        newArr.splice(index, 1)
        // console.log({newArr});
        this.textList = newArr
      },
      editItem(index) {
        this.textTyping = this.textList[index]
        this.isEditing = true
        this.indexEditing = index
      },
      acceptEditing(){
        if(this.textTyping){
          const editText = this.textTyping[0].toUpperCase() + this.textTyping.slice(1)
          const newArr = [...this.textList]
          newArr[this.indexEditing] = editText
          this.textList = newArr

          this.textTyping = ''
          this.isEditing = false
          this.indexEditing = ''
        }
      }
    }
  }
</script>

<style scoped>
  textarea{
    width: 300px;
    height: 100px;
    border: 1px solid red;
    border-radius: 5px;
    padding: 5px 10px;
    background: none;
    display: block;

    color: #ccc;
  }

  button{
    display: block;
  }
</style>