<template>
	<div id="page-content-wrapper">
		<div class="container-fluid">
			<section>
				<h3 style="font-size: 25px;" class="text-white">Latest</h3>
				<div class="row">
					<LatestMovies v-for='movie in LatestMovies' :key='movie.id' :movie='movie'></LatestMovies>
				</div>
			</section>
			<section style="margin-top:60px ;">
				<h3 style="font-size: 25px;" class="text-white">Trending Movies</h3>
				<div class="row">
					<Movie v-for='movie in TrendingMovies' :key='movie.id' :movie='movie'></Movie>
				</div>
			</section>
			<section style="margin-top:60px ;">
				<h3 style="font-size: 25px;" class="text-white">Trending Series</h3>
				<div class="row">
					<Movie v-for='movie in TrendingSeries' :key='movie.id' :movie='movie'></Movie>
				</div>
			</section>	
			<section style="margin-top:60px ;">
				<h3 style="font-size: 25px;" class="text-white">Top 250 Rated Movies</h3>
				<div class="row">
					<Movie v-for='movie in RatedMovies' :key='movie.id' :movie='movie'></Movie>
				</div>
			</section>		
		</div>
	</div> 
</template>

<script>
import LatestMovies from '../components/LatestMovies.vue'
import Movie from '../components/Movie.vue'
export default {
	name: 'HomePage',
	components:{
		LatestMovies,
		Movie
	},
	props: {
	},
	data: function(){
		return{
			LatestMovies :[
				{
					'id':1,
					'name':'this is name',
					'photo':'https://www.uniquenewsonline.com/wp-content/uploads/2021/10/Untitled.jpg',
					'rating': 7.5,
				},
				{
					'id':2,
					'name':'this is name',
					'photo':'https://ntvb.tmsimg.com/assets/p20438519_b_h8_aa.jpg?w=960&h=540',
					'rating': 7.5,
				},
			],
			TrendingMovies : [
				{
					'id': 3,
					'name': 'Cover',
					'photo': 'https://m.media-amazon.com/images/M/MV5BNDg5OGQ0MDgtZGM0ZS00NzgzLTllOGQtNjQ0YzU2M2RkMjQyXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg',
					'rating': 7.5,
				},
				{
					'id': 4,
					'name': 'Dear Even',
					'photo': 'http://www.tolkienlibrary.com/press/images/movie-tie-in-The-hobbit.jpg',
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
			TrendingSeries : [
				{
					'id': 7,
					'name': 'Cover',
					'photo': 'https://preview.redd.it/34ep61vxqs301.jpg?auto=webp&s=ca4276f5be011e2e41c93eb2cf04ca068613c6a1',
					'rating': 7.5,
				},
				{
					'id': 8,
					'name': 'Dear Even',
					'photo': 'https://www2.pictures.zimbio.com/mp/WQWmxUKowttx.jpg',
					'rating': 8.5,
				},
				{
					'id': 9,
					'name': 'Blue Bayou',
					'photo': 'https://i.pinimg.com/736x/09/7f/b3/097fb3ccbd9489bd49874062b7c5bb72.jpg',
					'rating': 8.5,
				},
				{
					'id': 10,
					'name': 'Warning',
					'photo': 'https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500',
					'rating': 4.5,
				},
			],
			RatedMovies : [
				{
					'id': 7,
					'name': 'Cover',
					'photo': 'https://media.comicbook.com/uploads1/2015/06/antmanposter-139745.jpg',
					'rating': 6.5,
				},
				{
					'id': 8,
					'name': 'Dear Even',
					'photo': 'https://pics.filmaffinity.com/Dear_Evan_Hansen-766051462-large.jpg',
					'rating': 9.5,
				},
				{
					'id': 9,
					'name': 'Blue Bayou',
					'photo': 'http://media.comicbook.com/2017/10/avengers-2-movie-poster-marvel-cinematic-universe-1038898.jpg',
					'rating': 4.5,
				},
				{
					'id': 10,
					'name': 'Warning',
					'photo': 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-netflix-mary-poppins-returns-1585680787.png',
					'rating': 2.5,
				},
			],
		}
	}
}
</script>
