import { state, trigger, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';

export let expandCollapse  = trigger('expandCollapse',[
    state('collapsed', style({
      height:0,
      paddingTop:0,
      paddingBottom:0,
      opacity:0
    })),

    transition('collapsed => expanded',[
      animate('300ms ease-out',style({
        height:'*',
        paddingTop: '*',
        paddingBottom: '*',
      })),
      animate('1s', style({
        opacity:1
      }))
    ]),
    transition('expanded => collapsed',[
      animate('300ms ease-in')
    ])
  ])