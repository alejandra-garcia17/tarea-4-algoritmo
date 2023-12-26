// Ejercicio del 1 al 3

    // Función para encontrar divisores
    function encontrarDivisores(numero) {
      var divisores = [];
  
      for (var i = 1; i <= numero; i++) {
        if (numero % i === 0) {
          divisores.push(i);
        }
      }
  
      return divisores;
    }
    function calcularDivisores() {
      var numeroIngresado = document.getElementById('numero').value;
      var divisoresCalculados = encontrarDivisores(numeroIngresado);
  
      const resultElement = document.getElementById('result');
      resultElement.textContent = `Los divisores de ${numeroIngresado} son: ${divisoresCalculados.join(", ")}`;
    }

    // Función para verificar si un número es perfecto
    function esNumeroPerfecto(numero) {
      var sumaDivisores = 0;

      for (var i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
          sumaDivisores += i;
        }
      }

      return sumaDivisores === numero;
    }
    
    function verificarNumeroPerfecto() {
      var numeroIngresado = document.getElementById('numero').value;
      var esPerfecto = esNumeroPerfecto(numeroIngresado);

      const resultElement = document.getElementById('result');
      resultElement.textContent = esPerfecto
        ? `${numeroIngresado} es un número perfecto.`
        : `${numeroIngresado} no es un número perfecto.`;
    }

    // Función para verificar si un número es primo
    function esNumeroPrimo(numero) {
      if (numero <= 1) {
        return false;
      }

      for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          return false;
        }
      }

      return true;
    }

    function verificarNumeroPrimo() {
      var numeroIngresado = document.getElementById('numero').value;
      var esPrimo = esNumeroPrimo(numeroIngresado);

      const resultElement = document.getElementById('result');
      resultElement.textContent = esPrimo
        ? `${numeroIngresado} es un número primo.`
        : `${numeroIngresado} no es un número primo.`;
    }
  

  // Ejercicios del 4 al 6
  
    // Función para verificar si un número es primo
    function esPrimo(numero) {
      for (let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return numero > 1;
    }

    function encontrarPrimosGemelos(inicio, fin) {
      let primosGemelos = [];

      for (let i = inicio; i <= fin - 2; i++) {
        if (esPrimo(i) && esPrimo(i + 2)) {
          primosGemelos.push([i, i + 2]);
        }
      }

      return primosGemelos;
    }

    function buscarPrimosGemelos() {
      var inicioRango = document.getElementById('inicio').value;
      var finRango = document.getElementById('fin').value;
      let primosGemelosEncontrados = encontrarPrimosGemelos(parseInt(inicioRango), parseInt(finRango));
      const resultElement = document.getElementById('result');
      resultElement.textContent = `Primos gemelos encontrados: ${JSON.stringify(primosGemelosEncontrados)}`;
    }
  
    function concatenarCadenas() {
      var cadena1 = document.getElementById('cadena1').value;
      var cadena2 = document.getElementById('cadena2').value;
      var resultado = cadena1 + cadena2;

      const resultElement = document.getElementById('result');
      resultElement.textContent = `Cadena 1: "${cadena1}"\nCadena 2: "${cadena2}"\nResultado: "${resultado}"`;
    }

    function buscarSubcadena() {
      var cadenaInput = document.getElementById('cadenaInput').value;
      var subcadenaInput = document.getElementById('subcadenaInput').value;

      if (cadenaInput.includes(subcadenaInput)) {
        var posicion = cadenaInput.indexOf(subcadenaInput);

        const resultElement = document.getElementById('result');
        resultElement.textContent = `La subcadena "${subcadenaInput}" se encuentra en la posición ${posicion}.`;
      } else {
        const resultElement = document.getElementById('result');
        resultElement.textContent = `La subcadena "${subcadenaInput}" no se encuentra en la cadena.`;
      }
    }

  // Ejercicio 7

  function insertarSubcadena() {
    var cadena = document.getElementById('cadena').value;
    var subcadena = document.getElementById('subcadena').value;
    var posicion = parseInt(document.getElementById('posicion').value);

    var nuevaCadena = cadena.slice(0, posicion) + subcadena + cadena.slice(posicion);

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Cadena original: "${cadena}"\nSubcadena insertada en posición ${posicion}: "${nuevaCadena}"`;
  }
 
  
  // Ejercicio 8

  function eliminarSubcadena() {
    var cadena = document.getElementById('cadena').value;
    var subcadena = document.getElementById('subcadena').value;

    var nuevaOracion = cadena.replace(new RegExp(subcadena, 'g'), '').trim();

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Cadena original: "${cadena}"\nNueva oración sin la subcadena: "${nuevaOracion}"`;
  }
  

  // Ejercicio del 9 al 11
  function convertirArreglo() {
    var arrInput = document.getElementById('arrInput').value;
    var arreglo = arrInput.split(',').map(item => item.trim());

    if (arreglo.length > 0) {
      var cadena = `(${arreglo.join(', ')})`;

      const resultElement = document.getElementById('result');
      resultElement.textContent = `Arreglo: [${arreglo.join(', ')}]\nCadena: ${cadena}`;
    } else {
      const resultElement = document.getElementById('result');
      resultElement.textContent = 'Ingrese al menos un elemento en el arreglo.';
    }
  }

  function encontrarMayor() {
    var arrInput = document.getElementById('arrInput').value;
    var arreglo = arrInput.split(',').map(item => parseFloat(item.trim()));

    if (arreglo.some(isNaN)) {
      const resultElement = document.getElementById('result');
      resultElement.textContent = 'Ingrese números válidos en el arreglo.';
    } else {
      const mayor = Math.max(...arreglo);

      const resultElement = document.getElementById('result');
      resultElement.textContent = `Arreglo: [${arreglo.join(', ')}]\nMayor elemento: ${mayor}`;
    }
  }

  function encontrarPosicion() {
    var arrInput = document.getElementById('arrInput').value;
    var arreglo = arrInput.split(',').map(item => parseInt(item.trim()));

    var numeroBuscar = parseInt(document.getElementById('numeroBuscar').value);

    if (!isNaN(numeroBuscar)) {
      var posicion = arreglo.indexOf(numeroBuscar);

      const resultElement = document.getElementById('result');
      if (posicion !== -1) {
        resultElement.textContent = `Arreglo: [${arreglo.join(', ')}]\nEl número ${numeroBuscar} está en la posición ${posicion}.`;
      } else {
        resultElement.textContent = `Arreglo: [${arreglo.join(', ')}]\nEl número ${numeroBuscar} no está en el arreglo.`;
      }
    } else {
      const resultElement = document.getElementById('result');
      resultElement.textContent = 'Ingrese un número válido a buscar.';
    }
  }

  // Ejercicios del 12 al 14
  
    // Operaciones con arreglos
    let miArreglo = [];

    function agregarElemento() {
      var elemento = parseInt(document.getElementById('elemento').value);

      if (!isNaN(elemento)) {
        miArreglo.push(elemento);

        const resultElement = document.getElementById('result');
        resultElement.textContent = `Elemento ${elemento} agregado. Arreglo resultante: [${miArreglo.join(", ")}]`;
      } else {
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'Ingrese un número válido como elemento.';
      }
    }
    function mostrarArreglo() {
      const resultElement = document.getElementById('result');
      resultElement.textContent = `Arreglo resultante: [${miArreglo.join(", ")}]`;
    }
  
    // Operaciones con arreglos
    let MiArreglo = [1, 2, 3];

    function eliminarElemento() {
      var indiceEliminar = parseInt(document.getElementById('indiceEliminar').value);

      if (!isNaN(indiceEliminar) && indiceEliminar >= 0 && indiceEliminar < miArreglo.length) {
        miArreglo.splice(indiceEliminar, 1);

        const resultElement = document.getElementById('result');
        resultElement.textContent = `Elemento en el índice ${indiceEliminar} eliminado. Arreglo resultante: [${miArreglo.join(", ")}]`;
      } else {
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'Ingrese un índice válido para eliminar un elemento.';
      }
    }
    function mostrarArreglo() {
      const resultElement = document.getElementById('result');
      resultElement.textContent = `Arreglo resultante: [${miArreglo.join(", ")}]`;
    }

    function convertirCadena() {
      var cadenaInput = document.getElementById('cadenaInput').value;
      var arregloCaracteres = Array.from(cadenaInput);

      const resultElement = document.getElementById('result');
      resultElement.textContent = `Cadena original: "${cadenaInput}"\nArreglo de caracteres: [${arregloCaracteres.join(", ")}]`;
    }
  
  
  // Ejercicio del 15 y 16
   function convertirDecimalABinario() {
    var decimalInput = parseInt(document.getElementById('decimalInput').value);

    if (!isNaN(decimalInput) && decimalInput >= 0 && Number.isInteger(decimalInput)) {
      var binario = decimalABinario(decimalInput);

      const resultElement = document.getElementById('result');
      resultElement.textContent = `El número ${decimalInput} en binario es: ${binario}`;
    } else {
      const resultElement = document.getElementById('result');
      resultElement.textContent = 'Ingrese un número decimal no negativo.';
    }
  }
  function decimalABinario(numeroDecimal) {
    if (numeroDecimal === 0) {
      return "0";
    }

    var binario = "";

    while (numeroDecimal > 0) {
      binario = (numeroDecimal % 2) + binario;
      numeroDecimal = Math.floor(numeroDecimal / 2);
    }
    return binario;
  }

  function convertirDecimalAOctal() {
    var decimalInput = parseInt(document.getElementById('decimalInput').value);

    if (!isNaN(decimalInput) && Number.isInteger(decimalInput)) {
      var octal = decimalAOctal(decimalInput);

      const resultElement = document.getElementById('result');
      resultElement.textContent = `Número decimal: ${decimalInput}\nNúmero octal: ${octal}`;
    } else {
      const resultElement = document.getElementById('result');
      resultElement.textContent = 'Ingrese un número decimal válido.';
    }
  }
  function decimalAOctal(numeroDecimal) {
    return numeroDecimal.toString(8);
  }
  

  //Ejercicio del 17 al 20
    function convertirDecimalAHexadecimal() {
      var decimalInput = parseInt(document.getElementById('decimalInput').value);

      if (!isNaN(decimalInput) && Number.isInteger(decimalInput)) {
        var hexadecimal = decimalAHexadecimal(decimalInput);

        const resultElement = document.getElementById('result');
        resultElement.textContent = `Número decimal: ${decimalInput}\nNúmero hexadecimal: ${hexadecimal}`;
      } else {
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'Ingrese un número decimal válido.';
      }
    }
    function decimalAHexadecimal(numeroDecimal) {
      return numeroDecimal.toString(16);
    }

    function convertirBinarioADecimal() {
      var binarioInput = document.getElementById('binarioInput').value;

      if (/^[01]+$/.test(binarioInput)) {
        var decimal = binarioADecimal(binarioInput);

        const resultElement = document.getElementById('result');
        resultElement.textContent = `Número binario: ${binarioInput}\nNúmero decimal: ${decimal}`;
      } else {
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'Ingrese un número binario válido (solo 0 y 1).';
      }
    }
    function binarioADecimal(numeroBinario) {
      return parseInt(numeroBinario, 2);
    }

    function convertirBinarioAOctal() {
      var binarioInput = document.getElementById('binarioInput').value;

      if (/^[01]+$/.test(binarioInput)) {
        var octal = binarioAOctal(binarioInput);

        const resultElement = document.getElementById('result');
        resultElement.textContent = `Número binario: ${binarioInput}\nNúmero octal: ${octal}`;
      } else {
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'Ingrese un número binario válido (solo 0 y 1).';
      }
    }
    function binarioAOctal(numeroBinario) {
      return parseInt(numeroBinario, 2).toString(8);
    }
    function convertirBinarioAHexadecimal() {
      var binarioInput = document.getElementById('binarioInput').value;

      if (/^[01]+$/.test(binarioInput)) {
        var hexadecimal = binarioAHexadecimal(binarioInput);

        const resultElement = document.getElementById('result');
        resultElement.textContent = `Número binario: ${binarioInput}\nNúmero hexadecimal: ${hexadecimal.toUpperCase()}`;
      } else {
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'Ingrese un número binario válido (solo 0 y 1).';
      }
    }
    function binarioAHexadecimal(numeroBinario) {
      return parseInt(numeroBinario, 2).toString(16);
    }
  

  
  
  
