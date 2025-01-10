import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const listaUrgencias = defineStore('listaUrgencias', () => {
  const admisiones = ref([])

  const agregarAdmision = (newData) => {
    admisiones.value.push(newData);
  }

  return {
    admisiones,
    agregarAdmision
  }
})
