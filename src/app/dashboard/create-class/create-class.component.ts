import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css'],
})
export class CreateClassComponent implements OnInit {
  public questions: any[] = [
    {
      question: '',
      answare1: '',
      answare2: '',
      answare3: '',
      answare4: '',
      rightAnsware: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
