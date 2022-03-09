<template>
  <div class="col-12 col-lg-6 mt-3">
    <div class="box shadow">
      <div class="header">Your data</div>
      <div class="content">
        <div class="content-item">
          <p>Name: {{formValues.name}}</p>
        </div>
        <div class="content-item">
          <p>Email: {{formValues.email}}</p>
        </div>
        <div class="content-item">
          <p>Password: {{formValues.password}}</p>
        </div>
        <div class="content-item">
          <p>Description: {{formValues.description}}</p>
        </div>
        <div class="content-item">
          <p>Where you want to travel:</p>
          <ul>
            <li
              v-for="(item, index) in formValues.travelArr"
              :key=index
            >
              {{item}}
            </li>
          </ul>
        </div>
        <div class="content-item">
          <p>Gender: {{formValues.gender}}</p>
        </div>
        <div class="content-item">
          <p>Cost: {{formValues.cost || '100-200'}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formValues: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
@import './style/HandlingFormStyle.css';
</style>