import inquirer from 'inquirer';
//var qr = require('qr-image');
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        message:"Escribe la URL de tu perfil de github",
        name:"URL",
    },
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    //console.log(answers);
    const enlace = answers.URL;
    var qr_png = qr.image(enlace);
    qr_png.pipe(fs.createWriteStream('qr_image.png'));

    fs.writeFile('enlace.txt', enlace, (err) => {
        if (err) throw err;
        console.log('El archivo ha sido creado');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });