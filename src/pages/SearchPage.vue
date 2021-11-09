<template>
  
<div id="page-content-wrapper">
	<div class="container-fluid">
		<section style="margin-top:60px ;">
			<div class="input-group search-form-box">
				<input type="text" class="form-control form-control-lg rounded-0" placeholder="Search"
					aria-label="Recipient's username" aria-describedby="basic-addon2">
				<div class="input-group-append">
					<span class="input-group-text rounded-0" id="basic-addon2">
						<i class="lni lni-search-alt"></i></span>
				</div>
			</div>
		</section>
		<section style="margin-top:60px ;">

			<div class="row">
				<Movie v-for='movie in movies' :key='movie.id' :movie='movie'></Movie>
			</div>
		</section>
	</div>
</div>
  

</template>

<script>
import Movie from '../components/Movie.vue'
export default {
  name: 'SearchPage',
  components:{
	Movie,
  },
  data: function(){
		return{
			movies : [
				{
					'id': 3,
					'name': 'Cover',
					'photo': 'https://m.media-amazon.com/images/M/MV5BNDg5OGQ0MDgtZGM0ZS00NzgzLTllOGQtNjQ0YzU2M2RkMjQyXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg',
					'rating': 7.5,
				},
				{
					'id': 4,
					'name': 'Dear Even',
					'photo': 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-netflix-mary-poppins-returns-1585680787.png',
					'rating': 8.5,
				},
				{
					'id': 5,
					'name': 'Blue Bayou',
					'photo': 'https://m.media-amazon.com/images/M/MV5BZjkyNjY1ZDAtMDBmNC00NzU1LTk1MzMtZTc5OWY3ODMwZWIzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
					'rating': 8.5,
				},
				{
					'id': 6,
					'name': 'Warning',
					'photo': 'https://m.media-amazon.com/images/M/MV5BYmEzYjE0NGQtZTg1Ni00NDFmLWExZDYtNTZjNDdlMmE3NWFiXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_.jpg',
					'rating': 4.5,
				},
			],
		}
	},
  props: { 
  }
}
</script>