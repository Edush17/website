import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent {

  constructor(private backendService : BackendService)
  {
  }

  onSubmit(){
    this.backendService.insertArticoli("https://michele-database-default-rtdb.europe-west1.firebasedatabase.app/articoli.json",
      {"titolo": "Titolo",
      "immagine": "immagine",
      "testo": "testo"}
    ).subscribe(data => {console.log(data)})
  }
}
