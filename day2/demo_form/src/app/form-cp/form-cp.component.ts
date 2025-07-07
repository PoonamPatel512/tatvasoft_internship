import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ import this

@Component({
  selector: 'app-form-cp',
  standalone: true,
  imports: [FormsModule], // ✅ include FormsModule here
  templateUrl: './form-cp.component.html',
  styleUrls: ['./form-cp.component.css'] // ✅ typo fixed (was `styleUrl`)
})
export class FormCpComponent {
  onSubmit(formData: any) {
    console.log('Form Submitted:', formData);
    alert(`User Registered:\nName: ${formData.name}\nEmail: ${formData.email}`);
  }
}
