<template>
	<main class="px-4">
		<div class="card mt-4">
			<div class="card-header fw-bold">
				Categorización
			</div>
			<div class="card-body d-flex ">
				<div class="col-2 pe-3">
						<label class="form-label" for="">Nombre Profesional:</label>
						<input class="form-control" type="text" v-model="formData.nombrePaciente">
					</div>
                    <div class="col-2 pe-3">
						<label class="form-label" for="">RUN Profesional:</label>
						<input class="form-control" type="text" v-model="formData.run">
					</div>
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
						<input class="form-control" type="text" v-model="formData.nombrePaciente">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Profesion Participante:</label>
						<input class="form-control" type="text" v-model="formData.run">
					</div>
				</div>
                </div>
		</div>

		<div class="card mt-3">
			<div class="card-header fw-bold">
				Datos acompañante
			</div>
			<div class="card-body">
				<div class="d-flex">
					<div class="col-2 pe-3">
						<label class="form-label" for="">Nombre:</label>
						<input class="form-control" type="text" v-model="formData.nombreAcompanante">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Apellido paterno:</label>
						<input class="form-control" type="text" v-model="formData.apellidoPaternoAcompanante">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Apellido materno:</label>
						<input class="form-control" type="text" v-model="formData.apellidoMaternoAcompanante">
					</div>
				</div>
			</div>
		</div>

		<div class="card mt-3">
			<div class="card-header fw-bold">
				Datos de domicilio
			</div>
			<div class="card-body d-flex">
				<div class="col-2 pe-3">
					<label class="form-label" for="">Calle:</label>
					<input class="form-control" type="text" v-model="formData.residenciaCalle">
				</div>
				<div class="col-2 pe-3">
					<label class="form-label" for="">Número:</label>
					<input class="form-control" type="text" v-model="formData.residenciaNumero">
				</div>
				<div class="col-2 pe-3">
					<label class="form-label" for="">Ciudad:</label>
					<select class="form-select" v-model="formData.residenciaCiudad">
						<option value="">Seleccione...</option>
						<option value="08301">Los Ángeles</option>
					</select>
				</div>
				<div class="col-2 pe-3">
					<label class="form-label" for="">Nacionalidad:</label>
					<select class="form-select" v-model="formData.residenciaNacionalidad">
						<option value="">Seleccione...</option>
						<option value="152">Chile</option>
					</select>
				</div>
			</div>
		</div>

		<div class="card mt-4">
			<div class="card-header fw-bold">
				Motivo de admisión
			</div>
			<div class="card-body d-flex">
				<div class="form-floating col-12">
					<textarea class="form-control" placeholder="Detalle el motivo de la admisión"
						v-model="formData.motivoAdmision"></textarea>
					<label for="floatingTextarea">Motivo admisión</label>
				</div>
			</div>
		</div>



		<code>{{ formData }}</code>
	</main>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
	fechaAdmision: '',
	horaAdmision: '',
	run: '',
	nombrePaciente: '',
	apellidoPaterno: '',
	apellidoMaterno: '',
	nombreSocial: '',
	fechaNacimiento: '',
	residenciaCalle: '',
	residenciaNumero: '',
	residenciaCiudad: '',
	residenciaNacionalidad: '',
	identidadGenero: '',
	nombreAcompanante: '',
	apellidoPaternoAcompanante: '',
	apellidoMaternoAcompanante: '',
	sexoBiologico: '',
	motivoAdmision: ''
});

</script>

<style>
textarea {
	resize: none;
}
</style>