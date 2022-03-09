<template>
  <form class="col-12 col-lg-6">
    <div>
      <label>Name</label>
      <!-- <input type="text" class="form-control" v-model="formValues.name"> -->
      <!-- <input type="text" class="form-control" @input="e => updateValue({name: e.target.value})"> -->
      <!-- cách ghi nào cũng lấy được giá tri của ô input -->
      <!-- <input type="text" class="form-control" @input="updateValue({name: $event.target.value})"> -->
      <input
        type="text"
        class="form-control"
        @input="updateValue({name: $event.target.value})"
      >
      <!-- <input
        type="text"
        class="form-control"
        @input="$emit('update:formValues', {...formValues, name: $event.target.value})"
      > -->
    </div>
    <div class="mt-3">
      <label>Email</label>
      <!-- <input type="email" class="form-control" v-model="formValues.email"> -->
      <!-- <input type="text" class="form-control" @input="e => updateValue({email: e.target.value})"> -->
      <input
        type="text"
        class="form-control"
        @input="updateValue({email: $event.target.value})"
      >
      <!-- <input
        type="email"
        class="form-control"
        @input="$emit('update:formValues', {...formValues, email: $event.target.value})"
      > -->
    </div>
    <div class="mt-3">
      <label>Password</label>
      <!-- <input type="password" class="form-control" v-model="formValues.password"> -->
      <!-- <input type="text" class="form-control" @input="e => updateValue({password: e.target.value})"> -->
      <input
        type="text"
        class="form-control"
        @input="updateValue({password: $event.target.value})"
      >
      <!-- <input
        type="password"
        class="form-control"
        @input="$emit('update:formValues', {...formValues, password: $event.target.value})"
      > -->
    </div>
    <div class="mt-3">
      <label>Description</label>
      <!-- <textarea class="form-control" placeholder="Input something" v-model="formValues.description"></textarea> -->
      <!-- <textarea type="text" class="form-control" @input="e => updateValue({description: e.target.value})"></textarea> -->
      <textarea
        type="text"
        class="form-control"
        @input="updateValue({description: $event.target.value})"
      ></textarea>
      <!-- <textarea
        type="text"
        class="form-control"
        @input="$emit('update:formValues', {...formValues, description: $event.target.value})"
      ></textarea> -->
    </div>

    <div class="mt-3">
      <label>Where you want to travel</label>
      <div class="d-flex">
        <div class="me-2">
          <input
            type="checkbox"
            id="Vietnam"
            value="Vietnam"
            class="me-1"
            @input="e => checkboxTravel(e.target.value)"
          >
          <label for="Vietnam">Vietnam</label>
        </div>
        <div class="me-2">
          <input
            type="checkbox"
            id="China"
            value="China"
            class="me-1"
            @input="e => checkboxTravel(e.target.value)"
          >
          <label for="China">China</label>
        </div>
        <div class="me-2">
          <input
            type="checkbox"
            id="Japan"
            value="Japan"
            class="me-1"
            @input="e => checkboxTravel(e.target.value)"
          >
          <label for="Japan">Japan</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="France"
            value="France"
            class="me-1"
            @input="e => checkboxTravel(e.target.value)"
          >
          <label for="France">France</label>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <label>Gender</label>
      <div class="d-flex">
        <div class="me-2">
          <input
            type="radio"
            id="Male"
            value="Male"
            class="me-1"
            name="Gender"
            @input="e => updateValue({gender: e.target.value})"
          >
          <label for="Male">Male</label>
        </div>
        <div class="me-2">
          <input
            type="radio"
            id="Female"
            value="Female"
            class="me-1"
            name="Gender"
            @input="e => updateValue({gender: e.target.value})"
          >
          <label for="Female">Female</label>
        </div>
        <div class="me-2">
          <input
            type="radio"
            id="Other"
            value="Other"
            class="me-1"
            name="Gender"
            @input="e => updateValue({gender: e.target.value})"
          >
          <label for="Other">Other</label>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <label>Cost</label>
      <select class="form-control" @change="updateValue({cost: $event.target.value})">
        <option value="100-200">100-200</option>
        <option value="200-500">200-500</option>
        <option value="Over 500">Over 500</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
//kết hợp giữa emit với v-model để lấy dữ liệu từ ô input trong component con
//đồng thời có thể đồng bộ dữ liệu ở component cha và con khi giá trị của biến thay đổi
//https://vuejs.org/guide/components/events.html
//còn nếu xử lý theo kiểu bình thường từ component con phát tín hiệu (emit) ra thằng cha,
//thằng cha lắng nghe sự kiện và lấy giá trị thay đổi thì khi thằng cha thay đổi giá trị đó,
//giá trị bên trong thằng con sẽ không thay đổi theo do không có sử dụng props để truyền vào
  props: {
    formValues: Object
  },
  data() {
    return {
      // formValuesHere: formValues
      //có thể gom các dữ liệu từ thẻ input thành 1 object
      //và ở chỗ v-model sửa lại truy vấn đến biến dữ liệu thông qua object đó
      // formValues: {
      //   name: '',
      //   email: '',
      //   password: '',
      //   description: '',
      //   travelArr: [],
      //   gender: 'Male',
      //   cost: '100-200',
      // }
      someVar: this.formValues
    }
  },
  watch: {
    formValues(newValue) {
      console.log(newValue);
      this.someVar = newValue
      // this.formValuesHere = newValue
    }
    // 'formValues.name'(){
    //   console.log('change name');
    // } //cách theo dõi thuộc tính bên trong thuộc tính (nest property)
    // https://stackoverflow.com/questions/42133894/vue-js-how-to-properly-watch-for-nested-data
    // formValues() {
    //   this.$emit('formValues', this.formValues)
    //   // this.$emit('update:formValues', this.formValues)
    // }
  },
  methods: {
    updateValue(obj) {
      console.log(obj);
      // console.log(formValues);
      console.log(this.someVar);
      this.$emit('update:formValues', {...this.someVar, ...obj})
    },
    checkboxTravel(value) {
      console.log(value);
      // const {travelArr} = this.formValues
      const {travelArr} = this.someVar
      let newArr = []
      const index = travelArr.findIndex(item => item === value)
      //nếu đã có value đó rồi thì sẽ loại bỏ, ngược lại chưa có sẽ thêm mới vào
      if(index !== -1){
        newArr = travelArr.filter(item => item !== value)
      }
      else{
        newArr = [...travelArr, value]
      }
      // this.formValues = {...this.formValues, travelArr: newArr}
      this.updateValue({travelArr: newArr})
    },
    // updateValue(obj) {
    //   // console.log(obj)
    //   this.formValues = {...this.formValues, ...obj}
    //   //clone ra để thằng watch nhận ra 1 object mới
    // },
    // checkboxTravel(value) {
    //   console.log(value);
    //   const {travelArr} = this.formValues
    //   let newArr = []
    //   const index = travelArr.findIndex(item => item === value)
    //   //nếu đã có value đó rồi thì sẽ loại bỏ, ngược lại chưa có sẽ thêm mới vào
    //   if(index !== -1){
    //     newArr = travelArr.filter(item => item !== value)
    //   }
    //   else{
    //     newArr = [...travelArr, value]
    //   }
    //   this.formValues = {...this.formValues, travelArr: newArr}
    // },
    // radioGender(value) {
    //   this.formValues = {...this.formValues, gender: value}
    // }
  }
}
</script>