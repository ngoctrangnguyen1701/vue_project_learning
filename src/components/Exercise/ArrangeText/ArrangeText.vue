<template>
  <h1 style="color: red">Input text</h1>
  <div class="d-flex align-items-end flex-wrap">
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
    @isWannaMoveItem="message = $event ? 'Hold and drag mouse to move item to new position' : ''"
    @changedList="changedList($event)"
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
        console.log('editItem: ', index)
        this.textTyping = this.textList[index]
        this.isEditing = true
        this.indexEditing = index
      },
      acceptEditing() {
        if(this.textTyping){
          const editText = this.textTyping[0].toUpperCase() + this.textTyping.slice(1)
          const newArr = [...this.textList]
          newArr[this.indexEditing] = editText
          this.textList = newArr

          this.textTyping = ''
          this.isEditing = false
          this.indexEditing = ''
        }
      },
      changePosition(data) {
        console.log(data)
        const {dragIndex, dragItem, dropIndex, dropItem} = data
        const newArr = [...this.textList]
        newArr[dragIndex] = dropItem
        newArr[dropIndex] = dragItem
        this.textList = newArr
      },
      changedList(value) {
        console.log(value)
        // this.textList = [...value]
        //gán lại biến 'textList' như thế này sẽ bị lỗi hiển thị không đúng thứ tự kéo, 
        //chắc do xung đột giữa xài thư viện sortablejs với phần render textList của Vue
        //danh sách mà thư viện sortablejs thay đổi có thể chỉ thay đổi cái THUỘC TÍNH 'ORDER' trong css, chứ không thay đổi index của item
        //nên để cái thư viện sortablejs hiển thị đúng thứ tự kéo khi bấm F5, lưu danh sách thay đổi trực tiếp vào localStorage
        //KHÔNG clone ra và gán vào thằng 'textList' để thằng watch theo dõi tự update vào localStorage
        //trên thực tế cái 'textList' xem qua Vue dev tool vẫn là danh sách trước khi thay đổi
        localStorage.setItem('itemList', JSON.stringify(value))
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