import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
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

  addSub(str: string){
    this.name += str;
  }
}
