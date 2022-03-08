<template>
  <div class="row">
    <!-- <FormValues @formValues="formValues = $event"/> -->
    <!-- <FormValues @formValues="updateFormValues($event)"/> -->
    <FormValues v-model="formValues"/>
    <YourData :formValues="formValues"/>
  </div>
</template>

<script>
  import FormValues from './FormValues.vue'
  import YourData from './YourData.vue'

  export default {
    data() {
      return {
        formValues: {}
      }
    },
    components: {
      FormValues,
      YourData,
    },
    methods: {
      updateFormValues(data) {
        console.log(data);
      }
    }
  }
</script>