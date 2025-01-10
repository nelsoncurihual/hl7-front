<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
	<header>
		<div class="wrapper">
			<Header />
			<Navbar/>
		</div>
	</header>

	<RouterView />
</template>