//import { RouterOutlet } from '@angular/router'; Da Togliere il commento se serve "RouterOutlet", "AppProvaComponent"
//import { AppProvaComponent } from './app-prova/app-prova.component';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],   //Da Importare Se serve "RouterOutlet", "AppProvaComponent"
  template: `
  <main>
    <header class="brand-name">
    <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true" />
    <br>
    <br>
  </header>
  <section class="content">
    <app-home></app-home>
  </section>
</main>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProgettoAnuglarVSC';
}
