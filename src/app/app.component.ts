import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthComponent } from './components/auth/auth.component';
import { SiginComponent } from './components/auth/sigin/sigin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { ResumeComponent } from './components/task/resume/resume.component';
import { TaskformComponent } from './components/task/taskform/taskform.component';
import { TasklistComponent } from './components/task/tasklist/tasklist.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, TaskComponent, ResumeComponent, TaskformComponent, TasklistComponent, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '@abarmes1411';
  imagenAleatoria:string = ''
  nombre=""

  randomInt():number{
    return Math.random()*10;
  }

 contador: number = 0;

 contadorMas(): number {
   this.contador += 1; 
   console.log(`Valor actual: ${this.contador}`)
   return this.contador; 
 }

 contadorMenos(): number {
   this.contador -= 1; 
   console.log(`Valor actual: ${this.contador}`)
   return this.contador; 
 }


 

 muestraImagen(){
  let randomNum:number = Math.trunc((Math.random()*1000)+100)
  this.imagenAleatoria = "https://picsum.photos/200/300?random="+randomNum
 }
}
