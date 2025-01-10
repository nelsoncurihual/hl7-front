<template>
<div>
    <main class="px-4">
        <div class="card mt-4">
			<div class="card-header fw-bold">
				Informacion de Alta Paciente
			</div>
            <div class="card-body d-flex ">
                <div class="pe-3">
					<label class="form-label" for="">Profesional que da Alta:</label>
					<select class="form-select" v-model="formData.profesionalQueDaAlta">
					<option value="">Seleccione...</option>
					<option value="2">Médico</option>
					</select>
				</div>
				<div class="pe-3">
					<label class="form-label" for="">Hora Alta:</label>
					<input class="form-control" type="time" v-model="formData.horaAlta">
				</div>
				<div>
                    <label class="form-label" for="">Derivado a:</label>
					<select class="form-select" v-model="formData.derivado">
					<option value="">Seleccione...</option>
					<option value="1">Domicilio</option>
					<option value="2">Hospital</option>
                    <option value="2">CESFAM</option>
                    <option value="2">Otro</option>
					</select>
				</div>
			</div>
		</div>
    </main>
</div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
    profesionalQueDaAlta: '',
	horaAlta: '',
    derivado: ''
	
});

</script>