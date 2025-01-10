<template>
<div>
    <main class="px-4">

        <div class="card mt-4">
			<div class="card-header fw-bold">
				Atención Médica
			</div>
            <div class="card-body d-flex ">
                <div class="pe-3">
					<label class="form-label" for="">Profesional Evaluador:</label>
					<select class="form-select" v-model="formData.profesionalEvaluador">
					<option value="">Seleccione...</option>
					<option value="2">Enfermero</option>
					</select>
				</div>
				<div class="pe-3">
					<label class="form-label" for="">Hora Atención:</label>
					<input class="form-control" type="time" v-model="formData.horaAtencion">
				</div>
				<div>
                    <label class="form-label" for="">Realizo Anamnesis:</label>
					<select class="form-select" v-model="formData.clasificacion">
					<option value="">Seleccione...</option>
					<option value="1">Si</option>
					<option value="2">No</option>
					</select>
				</div>
			</div>
		</div>

        <div class="card mt-4">
			<div class="card-header fw-bold">
				Diagnóstico Clínico
			</div>
            <div class="card-body d-flex ">
                <div class="pe-3">
					<label class="form-label" for="">Profesional Evaluador:</label>
					<select class="form-select" v-model="formData.profesionalEvaluador">
					<option value="">Seleccione...</option>
					<option value="1">Medico General</option>
					<option value="2">Enfermero</option>
                    <option value="2">TENS</option>
					</select>
				</div>

                <div class="pe-3">
                    <label class="form-label" for="">Diagnóstico:</label>
						<textarea class="form-control" type="text" v-model="formData.diagnostico" @input="checkDiagnostico"></textarea>
                        <div v-if="formData.diagnostico.toLowerCase() === 'crisis hipertensiva'" class="mt-2 text-muted">
                        Código (SNOMED 706882009)
                </div>
            </div>
			</div>
		</div>

		<div class="card mt-4">
			<div class="card-header fw-bold">
				Indicación
			</div>
            <div class="card-body d-flex ">
                <div class="pe-3">
					<label class="form-label" for="">Recomendacion(es):</label>
					<textarea class="form-control" type="text" v-model="formData.recomendacion"></textarea>
				</div>
				<div class="pe-3">
                    <label class="form-label" for="">Medicamento:</label>
                        <input class="form-control" type="text" v-model="formData.medicamento" @input="checkMedicamento">
                        <div v-if="formData.medicamento.toLowerCase() === 'captopril'" class="mt-2 text-muted">
                        Código (SNOMED 387160004)
                </div>
            </div>
			</div>
		</div>

		<div class="card mt-4">
			<div class="card-header fw-bold">
				Solicitud
			</div>
            <div class="card-body d-flex ">
				<div class="pe-3">
                    <label class="form-label" for="">Exámen:</label>
                        <input class="form-control" type="text" v-model="formData.examen" @input="checkExamen">
                        <div v-if="formData.examen.toLowerCase() === 'ecocardiografía'" class="mt-2 text-muted">
                        Código (LOINC 18706-5)
                </div>
            </div>
			</div>
		</div>

    </main>
</div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
    profesionalEvaluador: '',
	horaAtencion: '',
    clasificacion: '',
    diagnostico: '',
    recomendacion: '',
    medicamento: '',
	examen: ''
	

});

</script>