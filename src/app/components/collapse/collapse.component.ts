import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.sass']
})
export class CollapseComponent implements OnInit {

  @Input() id!: string;
  @Input() titulo!: string;
  @Input() lista: any;

  constructor() { }

  ngOnInit(): void {
  }

  abrirFechar(id: string) {
    let e: HTMLElement | null = window.document.getElementById(id)
    if(e){
      e.style.display == "none" ? e.style.display = "block" : e.style.display = "none";
    }
  }

}
