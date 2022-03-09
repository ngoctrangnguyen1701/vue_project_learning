<template>
  <div class="row">
    <!-- <FormValues @formValues="formValues = $event"/> -->
    <!-- <FormValues @formValues="updateFormValues($event)"/> -->
    <FormValues v-model:formValues="formValues"/>
    <YourData :formValues="formValues"/>
    <div class="mt-4">
      <TestModel v-model:test="test"/>
    </div>
  </div>
</template>

<script>
//kết hợp giữa emit với v-model để lấy dữ liệu từ ô input trong component con
//đồng thời có thể đồng bộ dữ liệu ở component cha và con khi giá trị của biến thay đổi
//https://vuejs.org/guide/components/events.html
  import FormValues from './FormValues.vue'
  import YourData from './YourData.vue'
  import TestModel from './TestModel.vue'

  export default {
    data() {
      return {
        // formValues: {},
        formValues: {
          name: '',
          email: '',
          password: '',
          description: '',
          travelArr: [],
          gender: 'Male',
          cost: '100-200',
        },
        test: 'test'
      }
    },
    components: {
      FormValues,
      YourData,
      TestModel,
    },
    methods: {
      updateFormValues(data) {
        console.log(data);
      }
    }
  }
</script>