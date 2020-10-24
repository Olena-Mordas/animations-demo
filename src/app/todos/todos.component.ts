import { Component } from '@angular/core';
import { state, trigger, transition, style, animate, keyframes,group, query, useAnimation ,animateChild, stagger} from '@angular/animations';
import { bounceOutLeftAnimation, fadeInAnimation, fadeOutAnimation } from 'app/animations';



@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation',[
      transition(':enter',[
        group([
          query('h1',[
            style({transform: 'translateY(-20px)'}),
            animate('1s')
          ]),
          query('@todoAnimation',
            stagger('300ms',animateChild()))
        ])
      ])
    ]),
    trigger('todoAnimation',[
      transition(':enter',[
        useAnimation(fadeInAnimation,{
          params:{
            duration:'500ms',
            ease:'ease-out'
          }
        }
      )
    ]),
      transition(':leave',[
        style({backgroundColor: 'red'}),
        animate(500),
        useAnimation(bounceOutLeftAnimation)
        
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event){
    console.log($event);
  }
  animationDone($event){
    console.log($event);
  }
}
