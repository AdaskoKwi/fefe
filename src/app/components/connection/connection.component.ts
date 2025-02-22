import {Component, inject, OnInit, signal} from '@angular/core';
import {ConnectionService} from '../../services/connection.service';
import { catchError } from 'rxjs';
import {JsonResponse} from '../../model/jsonResponse.type';

@Component({
  selector: 'app-connection',
  imports: [],
  templateUrl: './connection.component.html',
  standalone: true,
  styleUrl: './connection.component.css'
})
export class ConnectionComponent implements OnInit {
  connectionService = inject(ConnectionService);
  jsonData = signal<JsonResponse>({} as JsonResponse);

  ngOnInit() {
    this.connectionService
      .getResponseFromBE()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      ).subscribe((data) => {
      this.jsonData.set(data);
    })
  }
}
