import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial';
  name :string = "";

  nameChange(e :Event){
    const inputElement = e.target as HTMLInputElement;
    this.name = inputElement.value;
    console.log(inputElement.value);
    
  }
}
