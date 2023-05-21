//tab 2
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  nombreRestaurante: string = "";
  urlImagen: string = "";
  rating: number = 0.0;
  comentario: string = "";
  isLoggedIn: boolean = false;

  constructor(public authService: AuthService, private router: Router) {}

  async ionViewWillEnter() {
    this.isLoggedIn = this.authService.isAuthenticate;
  }
  
  formData = {
    nombreRestaurante: "",
    urlImagen:"",
    rating: 0.0,
    comentario: "",
    isLoggedIn: false
  }

  resetForm(): void {
    this.formData = {
      nombreRestaurante: "",
      urlImagen:"",
      rating: 0.0,
      comentario: "",
      isLoggedIn: false
    }

  };

  funcionesBoton(){
    this.agregarCard();
    this.registrarDatos();
    this.resetForm()
  }

  showMessage(): void {
    if (this.isLoggedIn){
    const message = 'Tu solicitud será procesada por un administrador';
    
    alert(message);
    }
  }

  cards: any[] = [];

  agregarCard(): void {
    // Validar los datos ingresados si es necesario

    // Crear un objeto con los datos del formulario
    const nuevaCard = {
      nombreRestaurante: this.nombreRestaurante,
      urlImagen: this.urlImagen,
      rating: this.rating,
      comentario: this.comentario
    };
    if (this.isLoggedIn) {
      if(this.nombreRestaurante!= "" && this.urlImagen!="" && this.comentario != ""){
      this.cards.push(nuevaCard);
      }
      else
        alert("Llena todas las casillas");
    }
  }




  registrarDatos() {
    // Verificar si el usuario está autenticado
    if (this.isLoggedIn) {

      
      // Lógica para registrar los datos
      // Puedes utilizar los valores de las variables como desees, por ejemplo, enviarlos a una API o almacenarlos en una base de datos
      console.log('Nombre del restaurante:', this.nombreRestaurante);
      console.log('URL de la imagen:', this.urlImagen);
      console.log('Rating:', this.rating);
      console.log('Comentario:', this.comentario);

      // Limpiar los campos después del registro
      this.nombreRestaurante = '';
      this.urlImagen = '';
      this.rating = 0;
      this.comentario = '';
    } else {
      // El usuario no está autenticado, mostrar mensaje de error o redirigir a la página de inicio de sesión
      this.router.navigate(['/tabs/tab3']);
    }
  }
}