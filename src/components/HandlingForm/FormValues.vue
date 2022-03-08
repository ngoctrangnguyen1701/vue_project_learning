<template>
  <form class="col-12 col-lg-6 mt-3">
    <div class="mt-3">
      <label>Name</label>
      <!-- <input type="text" class="form-control" v-model="formValues.name"> -->
      <input type="text" class="form-control" @input="e => updateValue({name: e.target.value})">
    </div>
    <div class="mt-3">
      <label>Email</label>
      <!-- <input type="email" class="form-control" v-model="formValues.email"> -->
      <input type="text" class="form-control" @input="e => updateValue({email: e.target.value})">
    </div>
    <div class="mt-3">
      <label>Password</label>
      <!-- <input type="password" class="form-control" v-model="formValues.password"> -->
      <input type="text" class="form-control" @input="e => updateValue({password: e.target.value})">
    </div>
    <div class="mt-3">
      <label>Description</label>
      <!-- <textarea class="form-control" placeholder="Input something" v-model="formValues.description"></textarea> -->
      <textarea type="text" class="form-control" @input="e => updateValue({description: e.target.value})"></textarea>
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
            @input="e => radioGender(e.target.value)"
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
            @input="e => radioGender(e.target.value)"
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
            @input="e => radioGender(e.target.value)"
          >
          <label for="Other">Other</label>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <label>Cost</label>
      <select class="form-control">
        
      </select>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      //có thể gom các dữ liệu từ thẻ input thành 1 object
      //và ở chỗ v-model sửa lại truy vấn đến biến dữ liệu thông qua object đó
      formValues: {
        name: '',
        email: '',
        password: '',
        description: '',
        travelArr: [],
        gender: ''
      }
    }
  },
  watch: {
    // 'formValues.name'(){
    //   console.log('change name');
    // } //cách theo dõi thuộc tính bên trong thuộc tính (nest property)
    // https://stackoverflow.com/questions/42133894/vue-js-how-to-properly-watch-for-nested-data
    formValues() {
      this.$emit('formValues', this.formValues)
    }
  },
  methods: {
    updateValue(obj) {
      // console.log(obj)
      this.formValues = {...this.formValues, ...obj}
      //clone ra để thằng watch nhận ra 1 object mới
    },
    checkboxTravel(value) {
      console.log(value);
      const {travelArr} = this.formValues
      let newArr = []
      const index = travelArr.findIndex(item => item === value)
      //nếu đã có value đó rồi thì sẽ loại bỏ, ngược lại chưa có sẽ thêm mới vào
      if(index !== -1){
        newArr = travelArr.filter(item => item !== value)
      }
      else{
        newArr = [...travelArr, value]
      }
      this.formValues = {...this.formValues, travelArr: newArr}
    },
    radioGender(value) {
      this.formValues = {...this.formValues, gender: value}
    }
  }
}
</script>