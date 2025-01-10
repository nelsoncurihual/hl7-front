<template>
	<main class="px-4">
		<div class="card mt-4">
			<div class="card-header fw-bold">
				Datos de admisión
			</div>
			<div class="card-body d-flex ">
				<div class="pe-3">
					<label class="form-label" for="">Fecha admisión:</label>
					<input class="form-control" type="text" v-model="formData.fechaAdmision">
				</div>
				<div>
					<label class="form-label" for="">Hora admisión:</label>
					<input class="form-control" type="text" v-model="formData.horaAdmision">
				</div>
			</div>
		</div>

		<div class="card mt-3">
			<div class="card-header fw-bold">
				Datos paciente
			</div>
			<div class="card-body">
				<div class="d-flex">
					<div class="col-2 pe-3">
						<label class="form-label" for="">RUN:</label>
						<input class="form-control" type="text" v-model="formData.run">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Nombre paciente:</label>
						<input class="form-control" type="text" v-model="formData.nombrePaciente">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Apellido paterno:</label>
						<input class="form-control" type="text" v-model="formData.apellidoPaterno">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Apellido materno:</label>
						<input class="form-control" type="text" v-model="formData.apellidoMaterno">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Nombre social:</label>
						<input class="form-control" type="text" v-model="formData.nombreSocial">
					</div>
					<div class="col-2">
						<label class="form-label" for="">Fecha nacimiento:</label>
						<input class="form-control" type="text" v-model="formData.fechaNacimiento">
					</div>
				</div>
				<div class="d-flex mt-4">
					<div class="col-2 pe-3">
						<label class="form-label" for="">Identidad de género:</label>
						<select class="form-select" v-model="formData.identidadGenero">
							<option value="">Seleccione...</option>
							<option value="1">Masculino</option>
							<option value="2">Femenina</option>
							<option value="3">Transgénero Masculino</option>
							<option value="4">Transgénero Femenina</option>
							<option value="5">No binarie</option>
							<option value="6">Otra</option>
							<option value="7">No Revelado</option>
						</select>
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Sexo biológico:</label>
						<select class="form-select" v-model="formData.sexoBiologico">
							<option value="">Seleccione...</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</div>
					<!-- <div class="col-2 pe-3">
						<label class="form-label" for="">Nombre acompañante:</label>
						<input class="form-control" type="text" v-model="formData.nombreAcompanante">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Apellido paterno acompañante:</label>
						<input class="form-control" type="text" v-model="formData.apellidoPaternoAcompanante">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Apellido materno acompañante:</label>
						<input class="form-control" type="text" v-model="formData.apellidoMaternoAcompanante">
					</div> -->
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

		<div class="d-flex justify-content-end mt-3 mb-5">
			<button class="btn btn-primary" @click="enviarFormAdmision">Guardar</button>
		</div>
	</main>
</template>

<script setup>
import { ref } from "vue";

import { guardarAdmision } from "../peticiones/guardarAdmision";

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

// FUNCTIONS
const enviarFormAdmision = () => {
	guardarAdmision(formData.value)
}
</script>

<style>
textarea {
	resize: none;
}
</style>