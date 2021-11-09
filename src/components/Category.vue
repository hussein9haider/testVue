<template>
  <div class="col-12 col-md-6 col-lg-4">
    <router-link to="/search" class="d-block">
      <div class="category-back" :style="{backgroundImage: 'url('+Category.photo+')'}"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
	Category:Object
  }
}
</script>