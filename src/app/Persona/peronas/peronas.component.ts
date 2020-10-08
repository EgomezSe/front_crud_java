import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peronas',
  templateUrl: './peronas.component.html',
  styleUrls: ['./peronas.component.css']
})
export class PeronasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  suma( numero1 , numero2){
      return numero1 + numero2;
  }

  resta( numero1 , numero2){
    return numero1 - numero2;
  }
}
