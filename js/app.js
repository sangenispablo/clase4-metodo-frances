function cuotaMensual(C0, n, i) {
  let a, tempo1, tempo2;
  tempo1 = 1 + i / 100;
  tempo2 = n * -1;
  a = (C0 * (i / 100)) / (1 - Math.pow(tempo1, tempo2));
  return a.toFixed(2);
}

function intereses(C0, i) {
  return C0 * (i / 100);
}

function capitalAmortizado(cuotaMensual, intereses) {
  return cuotaMensual - intereses;
}

function capitalPendiente(capital, capitalAmortizado) {
  return capital - capitalAmortizado;
}

function resolver() {
  // bandera para validar los datos ingresados
  let seguir = false;
  // C0 = monto del prestamo
  // n = cantidad de cuotas
  // i = tasa de interes anual (TNA)
  let C0, n, i;
  do {
    C0 = parseInt(prompt("Monto del prestamo C0"));
    n = parseInt(prompt("Cantida de cuotas n"));
    i = parseInt(prompt("Tasa de interes (TNA)"));
    if (isNaN(C0) || isNaN(n) || isNaN(i)) {
      alert("Error: Valores invalidos");
      seguir = true;
    } else {
      seguir = false;
    }
  } while (seguir);
  const cMensual = cuotaMensual(C0, n, i);
  console.log(`La cuota mensual es (Cta): $${cMensual} Monto Solicitado: ${C0}`);
  // armo la tabla de amortización
  let c0 = C0;
  for (let x = 1; x <= n; x++) {
    const int = intereses(c0, i).toFixed(2);
    const capAmor = capitalAmortizado(cMensual, int).toFixed(2);
    c0 = capitalPendiente(c0, capAmor).toFixed(2);
    console.log(
      `${x} Cta: ${cMensual} - Intereses: ${int} - Amortizado: ${capAmor} - Saldo: ${c0}`
    );
  }
}
