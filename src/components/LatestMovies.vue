<template>
	<div class="col-12 col-lg-6">
		<router-link to="/movie" active-class="active" exact class="d-block">
		<div class="move-back" :style="{backgroundImage: 'url('+movie.photo+')'}">
		</div>
		</router-link>

	</div>
</template>

<script>
export default {
  name: 'LatestMovies',
  props: {
	movie:Object
  }
}
</script>
