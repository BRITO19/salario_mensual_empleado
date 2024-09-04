
const operacion= prompt("Para el promedio ingrese el 1 ,para el sueldo del empleado ingrese 2")

console.log(operacion)
switch(operacion){
    case "1":
        promedio()
    case "2":
        sueldo()

    default:
    alert("El numero no es correcto")
    break;
}
    
function sueldo()
{
    alert("Bienvendo!! "+" Vamos a calcular tu salario mensual")

    const precioPorHoras=prompt("Ingrese el precio por hora")
     const horasTrabajadas=prompt("Ingrese las horas trabajadas ")

     const salarioMensual=precioPorHoras*horasTrabajadas;
 
     alert("El salario mensual del empleado es " + salarioMensual + " DOP")
}_
function promedio(){
    
    alert("Bienvenido a Teorema")
    const num1=prompt("Ingrese el primer numero")
    const num1Int=Number(num1)
    const num2=prompt("Ingrese el segundo numero")
    const num2Int=Number(num2)
    const num3=prompt("Ingrese el tercer numero")
    const num3Int=Number(num3)
    
    const resultado=(num1Int+num2Int+num3Int)/3
    
    alert("el promedio de los tres numero es: " + resultado )

}


