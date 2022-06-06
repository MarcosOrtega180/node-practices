let respuestasGen = [
  {
    "transaccion_id": null,
    "transaccion_hash": "20220603:140720-625ab285-0c6a-4494-931f-22fffe87fcda",
    "success": true,
    "message": "",
    "secuencia": 2,
    "datosFormulario": {
      "monedaOrigen": {
        "id": 2,
        "country_long": "Paraguay",
        "iso_country_num_cd": "600",
        "iso_country_cd": "PY",
        "currency_cd": "PYG",
        "iso_currency_num_cd": "600",
        "currency_name": "Guarani paraguayo"
      },
      "monedaDestino": {
        "id": 18,
        "country_long": "Argentina",
        "iso_country_num_cd": "032",
        "iso_country_cd": "AR",
        "currency_cd": "ARS",
        "iso_currency_num_cd": "032",
        "currency_name": "Peso argentino"
      }
    }
  },
  {
    "transaccion_id": null,
    "transaccion_hash": "20220603:140720-625ab285-0c6a-4494-931f-22fffe87fcda",
    "success": true,
    "message": "",
    "secuencia": 3,
    "datosFormulario": {
      "paisDestino": {
        "id": 11,
        "country_long": "Argentina",
        "iso_country_cd": "AR"
      }
    }
  }
]
console.log('respuestaGen', respuestasGen);
let indice = 0;
const resultado = respuestasGen.find((item, index) => {
  if (item.secuencia === 2) {
    indice = index;
    console.log('item found', item);
    return item;
  }
});

console.log('resultado', resultado)
console.log('resultado', !respuestasGen.find(item => item.secuencia === 4))
console.log('indice', indice);
console.log('itemLissta', respuestasGen[indice])
respuestasGen[indice] = {
  "transaccion_id": null,
  "transaccion_hash": "otro",
  "success": true,
  "message": "",
  "secuencia": 2,
  "datosFormulario": {
    "monedaOrigen": {
      "id": 2,
      "country_long": "Paraguay",
      "iso_country_num_cd": "600",
      "iso_country_cd": "PY",
      "currency_cd": "PYG",
      "iso_currency_num_cd": "600",
      "currency_name": "Guarani paraguayo"
    },
    "monedaDestino": {
      "id": 18,
      "country_long": "Argentina",
      "iso_country_num_cd": "032",
      "iso_country_cd": "AR",
      "currency_cd": "ARS",
      "iso_currency_num_cd": "032",
      "currency_name": "Peso argentino"
    }
  }
};

console.log('resultado', respuestasGen);
