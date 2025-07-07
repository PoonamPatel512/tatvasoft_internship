import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormCpComponent } from './form-cp/form-cp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormCpComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo_form';
}
