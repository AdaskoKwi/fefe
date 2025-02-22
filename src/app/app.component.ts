import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConnectionComponent} from './components/connection/connection.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConnectionComponent],
  templateUrl: 'app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MedicalSurveysFE';
}
