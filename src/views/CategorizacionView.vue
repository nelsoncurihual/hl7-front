<template>
	<main class="px-4">
		<div class="card mt-4">
			<div class="card-header fw-bold">
				Categorización
			</div>
			<div class="col-2 pe-3">
				<label class="form-label" for="">Clasificación:</label>
					<select class="form-select" v-model="formData.clasificacion">
						<option value="">Seleccione...</option>
						<option value="1">C1</option>
						<option value="2">C2</option>
						<option value="3">C3</option>
						<option value="4">C4</option>
						<option value="5">C5</option>
					</select>
			</div>
            <div class="col-2 pe-3">
				<label class="form-label" for="">Hora Categorización:</label>
				<input class="form-control" type="time" v-model="formData.horaCategorizacion">
			</div>
		</div>

        <div class="card-body d-flex ">
		<div class="col-2 pe-3">
			<label class="form-label" for="">Profesional:</label>
			<input class="form-control" type="text" v-model="formData.nombreProfesional">
		</div>
            <div class="col-2 pe-3">
				<label class="form-label" for="">RUN Profesional:</label>
				<input class="form-control" type="text" v-model="formData.runProfesional">
			</div>
		</div>
		<div class="card mt-3">
			<div class="card-header fw-bold">
				Datos Participante
			</div>
			<div class="card-body">
				<div class="d-flex">
                    <div class="col-2 pe-3">
						<label class="form-label" for="">Nombre Participante:</label>
						<input class="form-control" type="text" v-model="formData.nombreParticipante">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Profesion Participante:</label>
						<select class="form-select" v-model="formData.profesionParticipante">
						<option value="">Seleccione...</option>
						<option value="1">TENS</option>
					</select>
					</div>
				</div>
            </div>
		</div>

		<div class="card mt-3">
			<div class="card-header fw-bold">
				Observación
			</div>
			<div class="card-body">
				<div class="d-flex">
					<div class="col-2 pe-3">
						<label class="form-label" for="">Presion Arterial:</label>
						<input class="form-control" type="text" v-model="formData.presionArterial">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Frecuencia Cardiaca:</label>
						<input class="form-control" type="text" v-model="formData.frecuenciaCardiaca">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Frecuencia Respiratoria:</label>
						<input class="form-control" type="text" v-model="formData.frecuenciaRespiratoria">
					</div>
                    <div class="col-2 pe-3">
						<label class="form-label" for="">Peso:</label>
						<input class="form-control" type="text" v-model="formData.peso">
					</div>
                    <div class="col-2 pe-3">
						<label class="form-label" for="">Altura:</label>
						<input class="form-control" type="text" v-model="formData.altura">
					</div>
				</div>
			</div>
		</div>
		<code>{{ formData }}</code>
	</main>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
	clasificacion: '',
	horaCategorizacion: '',
	nombreProfesional: '',
	runProfesional: '',
	nombreParticipante: '',
	profesionParticipante: '',
	presionArterial: '',
	frecuenciaCardiaca: '',
	frecuenciaRespiratoria: '',
	peso: '',
	altura: ''
});
</script>

<style>
textarea {
	resize: none;
}
</style>