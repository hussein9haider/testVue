<template>
	<div class="col-6 col-md-6 col-lg-3">
	<router-link to="/movie" active-class="active" exact class="move-box d-block">
	<div class="move-back-400" :style="{backgroundImage: 'url('+movie.photo+')'}"><div style="padding-left: 25px;" class="position-relative"><img style="margin-top:-2px;" width="35px" src="https://test.creativeapps.me/cache/large/category/TSXskPPYmqjeb4lDlB1BPix99UApMQaTWNuvDhG1.png"><div class="imd-rate">{{movie.rating}}</div></div></div><div class="move-name">{{movie.name}}</div>
	</router-link>
	</div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
	movie:Object
  }
}
</script>


