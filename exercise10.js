
let mail = "ceci@hotmail.com";

if ( mail.includes("@")){
   let position = mail.search("@");
   console.log(mail.slice(position + 1));
}

else{
    console.log("Dirección de correo incorrecta");
}

