alert("Bienvendo!! "+" Vamos a calcular tu salario mensual")

const precioPorHoras=prompt("Ingrese el precio por hora")
 precioPorHoras=Number(precioPorHoras);

 const horasTrabajadas=prompt("Ingrese las horas trabajadas ")
 horasTrabajadas=Number(horasTrabajadas);

 const salarioMensual=precioPorHoras*horasTrabajadas;

 alert("El salario mensual del empleado es" + salarioMensual+ "DOP")