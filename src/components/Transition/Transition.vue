<template>
  <h3 class="text-center mt-5">Animation</h3>
  <div class="col-12 col-md-6 mx-auto">
    <button
      class="btn btn-success d-block mx-auto"
      @click="show = !show"
    >
      Show notification
    </button>
    <transition name="fade">
      <div
        class="alert alert-primary mt-5"
        v-if="show"
      >
        This is a primary alert—check it out!
      </div>
      <!-- <div
        class="alert alert-primary mt-5"
        v-if="show"
      >
        This is a primary alert—check it out!
      </div> -->
    </transition>
    <transition name="scale" appear>
      <div
        class="alert alert-danger mt-5"
        v-if="show"
      >
        This is a danger alert—check it out!
      </div>
    </transition>
  </div>
</template>

<script>
//thẻ <transition> mà Vue cung cấp dùng để tạo các hiệu ứng animation khi element xuất hiện or biến mất
//1 thẻ <transition> chỉ được sử dụng cho 1 element
//appear ở trong thẻ <transition> mục đích là để hiệu ứng animation xuất hiện ngay khi vừa load trang (nếu đúng điều kiện)
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
/* Tạo transition */
/*reference: https://vuejs.org/guide/built-ins/transition.html */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .scale-enter-from { /* enter từ trạng thái nào vào */
    transform: scale(0);
  }
  .scale-enter-active { /* trạng thái sẽ hoạt động khi bắt đầu enter */
    transition: transform 1s;
  }
  .scale-leave-to { /* trạng thái khi element biến mất */
    transform: scale(0);
  }
  .scale-leave-active { /* trạng thái sẽ hoạt động khi element chuyển sang giai đoạn rời đi  */
    transition: transform 1s;
  }
</style>