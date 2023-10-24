import { Injectable } from '@angular/core';
import { Itarefas } from './itarefas';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  private readonly API = "http://localhost:3000/tarefas";
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Itarefas[]>(this.API);
  }
  criar(tarefas: object){
    return this.http.post(this.API, tarefas).pipe(take(1))
  }   
}


