


const registrarUsuario=async()=>{
 var correo=document.querySelector("#correo").value;
 var password=document.querySelector("#password").value;
 var nombre=document.querySelector("#nombre").value;


 if(correo.trim()===''||
 password.trim()===''||
 nombre.trim()===''){

    Swal.fire({
        icon: 'error',
        title: 'ERROR...',
        text: 'FALTA LLENAR CAMPOS',
        footer: 'CRUD CONTACTOS'
      })
 }

 if( !validarCorreo(correo)){

    Swal.fire({
        icon: 'error',
        title: 'ERROR...',
        text: 'INTRODUCE UN CORREO ELECTRÓNICO VÁLIDO',
        footer: 'CRUD CONTACTOS'
      })
     return;
    }
  
  
 if( !validarPassword(password)){

  Swal.fire({
      icon: 'error',
      title: 'ERROR...',
      text: 'INTRODUCE UNA CONTRASEÑA VÁLIDA [Mayúsculas,minúsculas, números y mínimo 8 caracteres] ',
      footer: 'CRUD CONTACTOS'
    })
   return;
  }


if( !validarNombre(nombre)){

  Swal.fire({
      icon: 'error',
      title: 'ERROR...',
      text: 'INTRODUCE UN NOMBRE VALIDO [Mayúsculas,minúsculas y números] ',
      footer: 'CRUD CONTACTOS'
    })
   return;
  }
  //INSERTAR A LA BASE DE DATOSSSSSSSSSSSSSS :))))))
  const datos=new FormData();
  datos.append("correo",correo);
  datos.append("password",password);
  datos.append("nombre",nombre);

var respuesta=await fetch ("php/Usuario/registrarUsuario.php",{
   method: 'POST',
   body:datos
});
Swal.fire({
  icon: 'sucess',
  title: 'EXITO',
  text: 'RESPUESTA '+ respuesta,
  footer: 'CRUD CONTACTOS'
})


}
