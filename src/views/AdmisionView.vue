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
							<option v-for="el in identidadesGenero" :value="el">{{ el.label }}</option>
						</select>
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Sexo biológico:</label>
						<select class="form-select" v-model="formData.sexoBiologico">
							<option value="">Seleccione...</option>
							<option v-for="sexo in sexosBiologicos" :value="sexo">{{ sexo.label }}</option>
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
				Datos del profesional
			</div>
			<div class="card-body">
				<div class="d-flex">
					<div class="col-2 pe-3">
						<label class="form-label" for="">RUN:</label>
						<input class="form-control" type="text" v-model="formData.runProfesional">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Nombre:</label>
						<input class="form-control" type="text" v-model="formData.nombreProfesional">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Apellido paterno:</label>
						<input class="form-control" type="text" v-model="formData.paternoProfesional">
					</div>
					<div class="col-2 pe-3">
						<label class="form-label" for="">Apellido materno:</label>
						<input class="form-control" type="text" v-model="formData.maternoProfesional">
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
					<label class="form-label" for="">Provincia:</label>
					<select class="form-select" v-model="formData.residenciaProvincia">
						<option value="">Seleccione...</option>
						<option v-for="provincia in provincias" :value="provincia">{{ provincia.label }}
						</option>
					</select>
				</div>
				<div class="col-2 pe-3">
					<label class="form-label" for="">Ciudad:</label>
					<select class="form-select" v-model="formData.residenciaCiudad">
						<option value="">Seleccione...</option>
						<option v-for="residencia in residenciaCiudades" :value="residencia">{{ residencia.label }}
						</option>
					</select>
				</div>
				<div class="col-2 pe-3">
					<label class="form-label" for="">Nacionalidad:</label>
					<select class="form-select" v-model="formData.residenciaNacionalidad">
						<option value="">Seleccione...</option>
						<option v-for="nacionalidad in nacionalidades" :value="nacionalidad">{{ nacionalidad.label }}
						</option>
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
		<code>{{ formData }}</code>
	</main>
</template>

<script setup>
import { ref } from "vue";

import { listaUrgencias } from '../stores/listaUrgencias';

// Usar el store
const urgenciasStore = listaUrgencias();

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
	motivoAdmision: '',
	nombreProfesional: '',
	paternoProfesional: '',
	maternoProfesional: '',
});

const identidadesGenero = ref([
	{ value: "1", label: "Masculino" },
	{ value: "2", label: "Femenina" },
	{ value: "3", label: "Transgénero Masculino" },
	{ value: "4", label: "Transgénero Femenina" },
	{ value: "5", label: "No binarie" },
	{ value: "6", label: "Otra" },
	{ value: "7", label: "No Revelado" }
])

const sexosBiologicos = ref([
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
])

const nacionalidades = ref([
	{ value: '152', label: 'Chile' }
])

const residenciaCiudades = ref([
	{ value: '08301', label: 'Los Ángeles' }
])

const provincias = ref([
	{ value: '083', label: 'Biobío' }
])

// FUNCTIONS
const enviarFormAdmision = () => {
	guardarAdmision(formData.value)
	urgenciasStore.agregarAdmision(formData.value)
}
</script>

<style>
textarea {
	resize: none;
}
</style>