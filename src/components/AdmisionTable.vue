<template>
    <DataTable :value="admisiones" tableStyle="min-width: 50rem">
        <Column field="fechaAdmision" header="Fecha admisión"></Column>
        <Column field="name" header="Nombre paciente"></Column>
        <Column field="category" header="Apellido Paterno"></Column>
        <Column field="quantity" header="Apellido Materno"></Column>
    </DataTable>
</template>

<script setup>
import { ref, toRefs } from 'vue';

import { listaUrgencias } from '../stores/listaUrgencias';

const urgenciasStore = listaUrgencias();

const { admisiones } = storeToRefs(urgenciasStore)


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { storeToRefs } from 'pinia';


</script>