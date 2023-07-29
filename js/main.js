const Visa = function (pais,tipo,precio_USD,cantidad){
    this.pais=pais;
    this.tipo=tipo;
    this.precio_USD=precio_USD;
    this.cantidad=cantidad;
}
let visa1 = new Visa("Estados Unidos", "Turista", 200,20)
let visa2 = new Visa("Estados Unidos", "Work&Travel", 250,50)
let visa3 = new Visa("Canada", "Visitante", 300,100)
let visa4 = new Visa("Canada", "Work&Travel", 400,150)
let visa5 = new Visa("Australia", "Work&Travel", 350,200)
let visa6 = new Visa("Nueva Zelanda", "Work&Travel", 150,150)
let visa7 = new Visa("Noruega", "Work&Travel", 120,350)

let lista = [visa1,visa2,visa3,visa4,visa5,visa6,visa7]

function filtraVisa(){
    let palabraClave = prompt("Ingresar la visa que desea buscar").toUpperCase()
    let resultado = lista.filter ((visa)=>visa.pais.toUpperCase().includes(palabraClave))
    
    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("No se encontro ninguna coincidencia con:"+palabraClave)
    }
}

function agregarVisa(){
    let pais = prompt("Ingresar el país de la Visa")
    let tipo = prompt("Ingresar tipo de Visa")
    let precio_USD = parseInt(prompt("Ingresar el precio en USD de la Visa"))
    let cantidad = parseInt(prompt("Ingresar cantidad disponible de la Visa"))

    if(pais=== ""|| tipo=== ""){
      alert ("Por favor ingresar datos validos")  
      return 
    }
    
    let visa = new Visa(pais,tipo,precio_USD,cantidad)
    lista.push(visa)
    console.table(lista)
}



