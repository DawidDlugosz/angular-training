import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p><h1>Oto moja strona w angularze jako template z componentu.</h1><br/>
  <p><h2>Drugi paragraf z tego samego componentu</h2>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';
}
