import React from 'react'
/* import emailjs from 'emailjs-com'; */
import emailjs from '@emailjs/browser';
import './contacto.css'

function Contacto() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_6n826wl', 'template_thf3izk', e.target, 'user_Inb4pnOSNCR7kkMPeI7v5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
          e.target.reset();
    
      }

     const confirmation=()=>{
         alert('Gracias! Tu mensaje ha sido enviado')
     }



    return (
        <div class="contact" id='opacar3'>

        <h2 class="contact_title welcome_text"><span className='blue'>Contáctanos</span></h2><br/>
        <p className='contact_p'>Gracias por contactarnos, llama y cotiza <br/>a travéz de nuestro sitio web</p><br/>
       {/*  <div className="line"></div> */}
            <div class="contact_flex">
          {/*      <div class="contact_left">
                    <h2>Información de contácto</h2><br/>
                    
                    <p>Email: ebmc@gmail.com</p><br/>
                    <p>Cel: +52 6622 28 48 71</p><br/>
                    <p>Hermosillo, Son. México</p><br/>   
                
                </div> */}
            <div class="contact_right">
                <form  /* action="enviar-prueba.php" method="post" */ className="formulario column column--50" onSubmit={sendEmail}>
            
                    <label for="" className="formulario__label">Tu Nombre</label>
                    <div><input type="text" className="formulario__input-txt" name="nombre"/></div>
                    <label for="" class="formulario__label">Correo</label>
                    <div><input type="text" className="formulario__input-txt" name="correo"/></div>
                    <label for="" className="formulario__label">Teléfono</label>
                    <div><input type="text" className="formulario__input-txt" name="telefono"/></div>
                        <label for="" className="formulario__label">Mensaje</label>
                        <div><textarea name="mensaje" id="" cols="30" rows="10" className="formulario__textarea"> </textarea></div>
                            <input type="submit" className="btn formulario__btn" value="Send" onClick={confirmation}></input>
                           </form>
            </div>
            </div>
    </div>
    )
}

export default Contacto
