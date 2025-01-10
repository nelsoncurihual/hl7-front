<template>
	<main class="px-4">
		<div class="card">
			<div class="card-header">
				Lista admisiones
			</div>
			<div class="card-body">
				<AdmisionTable />
			</div>
		</div>
	</main>
</template>


<script setup>
import AdmisionTable from '../components/AdmisionTable.vue';

</script>