const datosFormulario = {
  "remitente": "MARCOS ANTONIO ORTEGA",
  "beneficiario": "Corina maría alderete",
  "paisMonedaOrigen": "PARAGUAY - Guarani paraguayo",
  "paisMonedaDestino": "Argentina Peso argentino",
  "montoOrigen": 100,
  "tasaCambio": 0.0232161,
  "montoDestino": 2.32,
  "tarifa": 48000,
  "totalCargos": 48000,
  "totalImpuestos": 4800,
  "totalAPagar": 52900
}

console.log('datosFormulario', datosFormulario);


Object.entries(datosFormulario).forEach(([key, value])=>{
  console.log(key, value);
});
