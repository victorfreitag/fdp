import { Component } from '@angular/core';
import { Itarefas } from '../services/itarefas';
import {CdkDragDrop, moveItemInArray, transferArrayItem}from '@angular/cdk/drag-drop';
import { TarefasService } from '../services/tarefas.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  form = new FormGroup({
    id: new FormControl(),
    tarefa: new FormControl(''),
  })
  
  afazer: Itarefas[] = [];
  fazendo: Itarefas[] =[];
  finalizando: Itarefas[] = [];

  constructor (private servico: TarefasService){}
  ngOnInit() {this.listar()}

  drop(event: CdkDragDrop<Itarefas[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
