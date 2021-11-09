<template>
<div id="page-content-wrapper">
	<div class="container-fluid">
		<section v-for='maincategory in mainCategories' :key='maincategory.id' style="margin-top:40px ;">
			<h3 style="font-size: 25px;" class="text-white">{{maincategory.name}}</h3>
			<div class="row">
				<Category v-for='category in maincategory.subCategories' 
					:key='category.id' 
					:Category='category'>
				</Category>
			</div>
		</section>
	</div>
</div>
</template>

<script>
import Category from '../components/Category.vue'
export default {
  name: 'CategoriesPage',
  components:{
	Category,
  },
  props: {
  },
  data:function(){
	return{
		mainCategories: [
			{
				'id': 1,
				'name': 'Movies Categories',
				'subCategories': [
					{
						'id': 10,
						'name': 'Cover',
						'photo': 'https://d2si6ql5qrjfmp.cloudfront.net/wp-content/uploads/2021/09/sony-is-allegedly-working-on-a-multiplayer-marvel-game-for-the-ps5-5.jpg',

					},
					{
						'id': 20,
						'name': 'Dear Even',
						'photo': 'https://s.studiobinder.com/wp-content/uploads/2019/09/Movie-Genres-Types-of-Movies-List-of-Genres-and-Categories-Header-StudioBinder.jpg',

					},
					{
						'id': 30,
						'name': 'Blue Bayou',
						'photo': 'https://i1.wp.com/alghad.com/wp-content/uploads/2020/04/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?fit=960%2C480&ssl=1',

					},
				],


			},

			{
				'id': 2,
				'name': 'Series Categories',
				'subCategories': [
					{
						'id': 100,
						'name': 'Cover',
						'photo': 'https://i.guim.co.uk/img/media/2054155cd35848d06117e47d8bea7c22d9111b31/0_190_3714_2229/master/3714.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=b08250cee038ec7575723be928415c3d',

					},

					{
						'id': 200,
						'name': 'Cover',
						'photo': 'https://cdn.vox-cdn.com/thumbor/jcXxYVt-8eP8MTWCWsPTwvzT8kw=/9x0:697x344/fit-in/1200x600/cdn.vox-cdn.com/assets/755523/netflix-logo-705px.png',

					},


					{
						'id': 300,
						'name': 'Cover',
						'photo': 'https://www.moufker.com/wp-content/uploads/2021/08/im-134590.jpg',

					},
				],
			},
		],
	}
  }
  
}
</script>
