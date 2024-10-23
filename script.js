
function resolverEjercicio1() {
    let mensaje = prompt("Ingrese un mensaje para presentar N veces:");
    if (mensaje === null || mensaje.trim() === "") {
        alert("No se ingresó ningún mensaje.");
        return;
    }

    let n = parseInt(prompt("Ingrese un número N:"));
    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let resultado = "";
    for (let i = 0; i < n; i++) {
        resultado += mensaje + "\n";
    }
    document.getElementById("resultadoTexto1").textContent = resultado;
    document.getElementById("resultadoEjercicio1").style.display = "block";
}

function resolverEjercicio2() {
    let n = parseInt(prompt("Ingrese un número N para presentar los múltiplos de 7 hasta N:"));
    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let resultado = "";
    for (let i = 1; i <= n; i++) {
        if (i % 7 === 0) {
            resultado += i + "\n";
        }
    }
    document.getElementById("resultadoTexto2").textContent = resultado;
    document.getElementById("resultadoEjercicio2").style.display = "block";
}

function resolverEjercicio3() {
    let numero = parseInt(prompt("Ingrese un número para presentar sus múltiplos:"));
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let n = parseInt(prompt("Ingrese un valor N:"));
    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let resultado = "";
    for (let i = 1; i <= n; i++) {
        if (i % numero === 0) {
            resultado += i + "\n";
        }
    }
    document.getElementById("resultadoTexto3").textContent = resultado;
    document.getElementById("resultadoEjercicio3").style.display = "block";
}

function resolverEjercicio4() {
    let n = parseInt(prompt("Ingrese un número N para presentar los números positivos hasta N:"));
    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let resultado = "";
    for (let i = 1; i <= n; i++) {
        resultado += i + "\n";
    }
    document.getElementById("resultadoTexto4").textContent = resultado;
    document.getElementById("resultadoEjercicio4").style.display = "block";
}

function resolverEjercicio5() {
    let n = parseInt(prompt("Ingrese un número N para presentar los números pares hasta N:"));
    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let resultado = "";
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            resultado += i + "\n";
        }
    }
    document.getElementById("resultadoTexto5").textContent = resultado;
    document.getElementById("resultadoEjercicio5").style.display = "block";
}

function resolverEjercicio6() {
    let numero = parseInt(prompt("Ingrese un número para presentar sus divisores:"));
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let resultado = "";
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            resultado += i + "\n";
        }
    }
    document.getElementById("resultadoTexto6").textContent = resultado;
    document.getElementById("resultadoEjercicio6").style.display = "block";
}

function resolverEjercicio7() {
    let resultado = "";
    for (let i = 1; i <= 12; i++) {
        resultado += `10 + ${i} = ${10 + i}\n`;
    }
    document.getElementById("resultadoTexto7").textContent = resultado;
    document.getElementById("resultadoEjercicio7").style.display = "block";
}

function resolverEjercicio8() {
    let numero = parseInt(prompt("Ingrese un número para presentar su tabla de multiplicar:"));
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let inicio = parseInt(prompt("Ingrese el valor inicial:"));
    if (isNaN(inicio) || inicio <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let fin = parseInt(prompt("Ingrese el valor final:"));
    if (isNaN(fin) || fin <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let resultado = "";
    for (let i = inicio; i <= fin; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    document.getElementById("resultadoTexto8").textContent = resultado;
    document.getElementById("resultadoEjercicio8").style.display = "block";
}

function resolverEjercicio9() {
    let a = parseInt(prompt("Ingrese el primer número:"));
    if (isNaN(a) || a <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let b = parseInt(prompt("Ingrese el segundo número:"));
    if (isNaN(b) || b <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let resultado = "";
    for (let i = a; i <= b; i++) {
        resultado += i + "\n";
    }
    document.getElementById("resultadoTexto9").textContent = resultado;
    document.getElementById("resultadoEjercicio9").style.display = "block";
}

function resolverEjercicio10() {
    let a = parseInt(prompt("Ingrese el primer número:"));
    if (isNaN(a) || a <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let b = parseInt(prompt("Ingrese el segundo número:"));
    if (isNaN(b) || b <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let resultado = "";
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            resultado += i + "\n";
        }
    }
    document.getElementById("resultadoTexto10").textContent = resultado;
    document.getElementById("resultadoEjercicio10").style.display = "block";
}