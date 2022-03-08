<template>
  <div class="row">
    <!-- <FormValues @formValues="formValues = $event"/> -->
    <!-- <FormValues @formValues="updateFormValues($event)"/> -->
    <FormValues v-model:formValues="formValues"/>
    <YourData :formValues="formValues"/>
    <TestModel v-model:test="test"/>
  </div>
</template>

<script>
  import FormValues from './FormValues.vue'
  import YourData from './YourData.vue'
  import TestModel from './TestModel.vue'

  export default {
    data() {
      return {
        formValues: {},
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