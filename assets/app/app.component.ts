import { Component } from '@angular/core';

// This is called the App Component Decorator.
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [`
      .author {
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
      }

      .config {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
      }
    `]

})
export class AppComponent {
    message = {
      author: 'Jin Kwon',
      content: 'Some Message'
    }
}
