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
  name: 'LivePage',
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
				'name': 'Sports',
				'subCategories': [
					{
						'id': 1,
						'name': 'Cover',
						'photo': 'https://test.creativeapps.me/cache/large/category/swXo3lX7GqehSK6ZF3tqDHwG9BipctbveAn6QhtY.png',

					},
					{
						'id': 2,
						'name': 'Dear Even',
						'photo': 'https://test.creativeapps.me/cache/large/category/L1wcG90oebff2FSlv4j6X6egv7ZLjqSGSJUKZ3vs.png',

					},
					{
						'id': 3,
						'name': 'Blue Bayou',
						'photo': 'https://test.creativeapps.me/cache/large/category/L2njree1DvlEhb5jxrv3YnvRHsoGf3tqh8l1lEkm.png',

					},
				],


			},
			{
				'id': 2,
				'name': 'Movies',
				'subCategories': [
					{
						'id': 10,
						'name': 'Cover',
						'photo': 'https://test.creativeapps.me/cache/large/category/8djNNiFJXc6Th7IncXjCh3XQlZ9gi1UvGtZA49Fc.png',

					},

					{
						'id': 20,
						'name': 'Cover',
						'photo': 'https://test.creativeapps.me/cache/large/category/jvl470YDHRPaVANP3UcDDeB8eDgCMaIXvbiJtjjT.png',

					},


					{
						'id': 30,
						'name': 'Cover',
						'photo': 'https://test.creativeapps.me/cache/large/category/8KEJr8hyds4wEnCyVX9NmuapRibzqrx3SQxezDFz.png',

					},
				],
			},
			{
				'id': 2323,
				'name': 'Entertainment',
				'subCategories': [
					{
						'id': 14440,
						'name': 'Cover',
						'photo': 'https://test.creativeapps.me/cache/large/category/gCHJXzrsTecZffcSV4GQ6bN4kzxc29npAkKDooSW.png',

					},

					{
						'id': 234340,
						'name': 'Cover',
						'photo': 'https://test.creativeapps.me/cache/large/category/uzi4VTlkW4jNt0Lwv4g5Y5AtHsDMA3ZuyIYYkltG.png',

					},


					{
						'id': 3343430,
						'name': 'Cover',
						'photo': 'https://test.creativeapps.me/cache/large/category/ZvWQLh9sEHEUqupKZkIMSKP17NepEHxgLjpdS7lg.png',

					},
				],
			},
		],
	}
  }
  
}
</script>
