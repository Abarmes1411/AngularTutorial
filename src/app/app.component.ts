import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthComponent } from './components/auth/auth.component';
import { SiginComponent } from './components/auth/sigin/sigin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { ResumeComponent } from './components/task/resume/resume.component';
import { TaskformComponent } from './components/task/taskform/taskform.component';
import { TasklistComponent } from './components/task/tasklist/tasklist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AuthComponent, SiginComponent, LoginComponent, TaskComponent, ResumeComponent, TaskformComponent, TasklistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';

  randomInt():number{
    return Math.random()*10;
  }
}
