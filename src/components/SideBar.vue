<template>
	<div id="sidebar-wrapper">
		<ul class="sidebar-nav">
			<li class="sidebar-brand text-center">
				<a href="#">
					<img width="80%" src="https://test.creativeapps.me/cache/large/category/UHFn72jXFTD59X5UFoF6E4yCSRnhJx9cqJetbWSC.png">
				</a>
			</li>
		</ul>
		<ul class="sidebar-nav" style="top: 50%;transform: translate(0%, -50%);">
			<li>
				<router-link to="/" active-class="active" exact>Home</router-link>
			</li>
			<li>
				<router-link to="/search" active-class="active">Search</router-link>
			</li>
			<li>
				<router-link to="/live" active-class="active">Live Tv</router-link>
			</li>
			<li>
				<router-link to="/categories" active-class="active">Categories</router-link>
			</li>
		</ul>
	</div> 
</template>

<script>
export default {
  name: 'SideBar',
  props: {
  
  }
}
</script>
