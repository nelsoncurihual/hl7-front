import axios from 'axios';


export const guardarAdmision = async (datos) => {

    const backend_url = import.meta.env.VITE_URL_TRANSACCION;
    console.log(backend_url)
    const token = import.meta.env.VITE_TOKEN_TRANSACCION;

    const { data } = await axios.post(
        backend_url,
        {
            ...generarBundleAdmision(datos),
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
    );
    return data;
}


const generarBundleAdmision = (datos) => {
    return {
        "resourceType": "Bundle",
        "id": "Ej1BundleAdmision",
        "meta": {
            "profile": [
                "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/StructureDefinition/BundleAdmision"
            ]
        },
        "type": "transaction",
        "entry": [
            {
                "fullUrl": "urn:uuid:9eb3ffc4-66a4-47c6-bbde-964aecf01bd3",
                "resource": {
                    "resourceType": "Patient",
                    "id": "9eb3ffc4-66a4-47c6-bbde-964aecf01bd3",
                    "meta": {
                        "profile": [
                            "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/StructureDefinition/PatientUrg"
                        ]
                    },
                    "extension": [
                        {
                            "url": "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/StructureDefinition/PueblosOriginariosPerteneciente",
                            "valueBoolean": false
                        },
                        {
                            "url": "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/StructureDefinition/PueblosAfrodescendiente",
                            "valueBoolean": false
                        },
                        {
                            "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/IdentidadDeGenero",
                            "valueCodeableConcept": {
                                "coding": [
                                    {
                                        "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSIdentidaddeGenero",
                                        "code": datos.identidadGenero.value,
                                        "display": datos.identidadGenero.label
                                    }
                                ]
                            }
                        },
                        {
                            "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SexoBiologico",
                            "valueCodeableConcept": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/administrative-gender",
                                        "code": datos.sexoBiologico.value,
                                        "display": datos.sexoBiologico.label
                                    }
                                ]
                            }
                        },
                        {
                            "url": "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/StructureDefinition/PaisOrigenMPI",
                            "valueCodeableConcept": {
                                "coding": [
                                    {
                                        "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais",
                                        "code": datos.residenciaNacionalidad.value,
                                        "display": datos.residenciaNacionalidad.label
                                    }
                                ]
                            }
                        },
                        {
                            "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CodigoPaises",
                            "valueCodeableConcept": {
                                "coding": [
                                    {
                                        "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais",
                                        "code": datos.residenciaNacionalidad.value,
                                        "display": datos.residenciaNacionalidad.label
                                    }
                                ]
                            }
                        }
                    ],
                    "identifier": [
                        {
                            "use": "official",
                            "type": {
                                "extension": [
                                    {
                                        "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CodigoPaises",
                                        "valueCodeableConcept": {
                                            "coding": [
                                                {
                                                    "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais",
                                                    "code": datos.residenciaNacionalidad.value,
                                                    "display": datos.residenciaNacionalidad.label
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "coding": [
                                    {
                                        "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSTipoIdentificador",
                                        "code": "01",
                                        "display": "RUN"
                                    }
                                ],
                                "text": "Rol Único Nacional"
                            },
                            "value": datos.run,
                            "assigner": {
                                "display": "Republica de Chile"
                            }
                        }
                    ],
                    "active": true,
                    "name": [
                        {
                            "use": "official",
                            "text": `${datos.nombrePaciente} ${datos.apellidoPaterno} ${datos.apellidoMaterno}`,
                            "family": datos.apellidoPaterno,
                            "_family": {
                                "extension": [
                                    {
                                        "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SegundoApellido",
                                        "valueString": datos.apellidoMaterno
                                    }
                                ]
                            },
                            "given": datos.nombrePaciente.split(' ')
                        },
                        {
                            "use": "usual",
                            "given": [
                                datos.nombreSocial
                            ]
                        }
                    ],
                    "gender": datos.sexoBiologico.value,
                    "birthDate": datos.fechaNacimiento,
                    "deceasedBoolean": false,
                    "address": [
                        {
                            "use": "home",
                            "text": `Calle ${datos.residenciaCalle} ${datos.residenciaNumero}, depto. 208, ${datos.residenciaCiudad.label}`,
                            "line": [
                                `Calle ${datos.residenciaCalle} ${datos.residenciaNumero}, depto. 208`
                            ],
                            "city": datos.residenciaCiudad.label,
                            "_city": {
                                "extension": [
                                    {
                                        "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ComunasCl",
                                        "valueCodeableConcept": {
                                            "coding": [
                                                {
                                                    "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSCodComunasCL",
                                                    "code": datos.residenciaCiudad.value,
                                                    "display": datos.residenciaCiudad.label
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            "district": `Provincia del ${datos.residenciaProvincia.label}`,
                            "_district": {
                                "extension": [
                                    {
                                        "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ProvinciasCl",
                                        "valueCodeableConcept": {
                                            "coding": [
                                                {
                                                    "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSCodProvinciasCL",
                                                    "code": datos.residenciaProvincia.value,
                                                    "display": datos.residenciaProvincia.label
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            "state": `Región Del ${datos.residenciaProvincia.label}`,
                            "_state": {
                                "extension": [
                                    {
                                        "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/RegionesCl",
                                        "valueCodeableConcept": {
                                            "coding": [
                                                {
                                                    "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSCodRegionCL",
                                                    "code": "08",
                                                    "display": `Del ${datos.residenciaProvincia.label}`
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                },
                "request": {
                    "method": "POST",
                    "url": "Patient",
                    "ifNoneExist": `identifier=${datos.run}`
                }
            },
            {
                "fullUrl": "urn:uuid:e05e7fc8-ebf4-4f4e-90b3-5cec672b248d",
                "resource": {
                    "resourceType": "Encounter",
                    "id": "e05e7fc8-ebf4-4f4e-90b3-5cec672b248d",
                    "meta": {
                        "profile": [
                            "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/StructureDefinition/EncounterUrg"
                        ]
                    },
                    "extension": [
                        {
                            "url": "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/StructureDefinition/Acompanante",
                            "valueBoolean": false
                        }
                    ],
                    "identifier": [
                        {
                            "value": "encuentro1234"
                        }
                    ],
                    "status": "arrived",
                    "statusHistory": [
                        {
                            "status": "arrived",
                            "period": {
                                "start": `${datos.fechaAdmision}T${datos.horaAdmision}:00-03:00`
                            }
                        }
                    ],
                    "class": {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                        "code": "EMER"
                    },
                    "priority": {
                        "coding": [
                            {
                                "system": "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/CodeSystem/categorizacion-no-realizada",
                                "code": "99",
                                "display": "Sin Categorizar"
                            }
                        ]
                    },
                    "subject": {
                        "reference": "urn:uuid:9eb3ffc4-66a4-47c6-bbde-964aecf01bd3"
                    },
                    "participant": [
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/participant-type",
                                            "version": "4.0.1",
                                            "code": "emergency"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": `${datos.fechaAdmision}T${datos.horaAdmision}:00-03:00`
                            },
                            "individual": {
                                "reference": "urn:uuid:b80b1243-ada0-4522-ab88-975793b9f28c"
                            }
                        },
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                            "code": "ADM"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": `${datos.fechaAdmision}T${datos.horaAdmision}:00-03:00`
                            },
                            "individual": {
                                "reference": "urn:uuid:bcc09879-49cc-4aee-a2de-fc323e2ace00"
                            }
                        }
                    ],
                    "period": {
                        "start": `${datos.fechaAdmision}T${datos.horaAdmision}:00-03:00`
                    },
                    "hospitalization": {
                        "extension": [
                            {
                                "url": "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/StructureDefinition/MedioDeLlegada",
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/CodeSystem/MedioDeLlegada",
                                            "code": "99",
                                            "display": "Desconocido"
                                        }
                                    ]
                                }
                            },
                            {
                                "url": "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/StructureDefinition/ConsultaPorAccidente",
                                "valueBoolean": false
                            }
                        ],
                        "admitSource": {
                            "coding": [
                                {
                                    "system": "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/CodeSystem/Procedencia",
                                    "code": "9",
                                    "display": "Domicilio"
                                }
                            ]
                        }
                    },
                    "serviceProvider": {
                        "reference": "urn:uuid:e4277b3f-0041-4e70-a621-28dcd9b787ae"
                    }
                },
                "request": {
                    "method": "POST",
                    "url": "Encounter"
                }
            },
            {
                "fullUrl": "urn:uuid:e4277b3f-0041-4e70-a621-28dcd9b787ae",
                "resource": {
                    "resourceType": "Organization",
                    "id": "e4277b3f-0041-4e70-a621-28dcd9b787ae",
                    "meta": {
                        "profile": [
                            "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/StructureDefinition/EstablecimientoUrg"
                        ]
                    },
                    "identifier": [
                        {
                            "system": "http://deis.minsal.cl/establecimientos",
                            "value": "99119911"
                        }
                    ],
                    "active": true,
                    "name": "Hospital Nuevo Nuevo"
                },
                "request": {
                    "method": "POST",
                    "url": "Organization",
                    "ifNoneExist": "identifier=99119911"
                }
            },
            {
                "fullUrl": "urn:uuid:bcc09879-49cc-4aee-a2de-fc323e2ace00",
                "resource": {
                    "resourceType": "Practitioner",
                    "id": "bcc09879-49cc-4aee-a2de-fc323e2ace00",
                    "meta": {
                        "profile": [
                            "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/StructureDefinition/PrestadorAdministrativo"
                        ]
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "type": {
                                "coding": [
                                    {
                                        "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSTipoIdentificador",
                                        "code": "01",
                                        "display": "RUN"
                                    }
                                ]
                            },
                            "value": datos.runProfesional
                        }
                    ],
                    "name": [
                        {
                            "family": datos.paternoProfesional,
                            "_family": {
                                "extension": [
                                    {
                                        "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SegundoApellido",
                                        "valueString": datos.maternoProfesional
                                    }
                                ]
                            },
                            "given": [
                                datos.nombreProfesional
                            ]
                        }
                    ]
                },
                "request": {
                    "method": "POST",
                    "url": "Practitioner",
                    "ifNoneExist": `identifier=${datos.runProfesional}`
                }
            },
            {
                "fullUrl": "urn:uuid:b80b1243-ada0-4522-ab88-975793b9f28c",
                "resource": {
                    "resourceType": "RelatedPerson",
                    "id": "b80b1243-ada0-4522-ab88-975793b9f28c",
                    "meta": {
                        "profile": [
                            "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/StructureDefinition/AcompananteUrg"
                        ]
                    },
                    "patient": {
                        "reference": "urn:uuid:9eb3ffc4-66a4-47c6-bbde-964aecf01bd3"
                    },
                    "relationship": [
                        {
                            "coding": [
                                {
                                    "system": "https://interoperabilidad.minsal.cl/fhir/ig/urgencia/CodeSystem/RelacionAcompanante",
                                    "code": "3",
                                    "display": "Familiar"
                                }
                            ]
                        }
                    ],
                    "name": [
                        {
                            "family": datos.apellidoPaternoAcompanante,
                            "given": [
                                datos.nombreAcompanante
                            ]
                        }
                    ]
                },
                "request": {
                    "method": "POST",
                    "url": "RelatedPerson"
                }
            }
        ]
    }
}