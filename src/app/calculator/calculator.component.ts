import { Component, OnInit } from '@angular/core';

import {Bill} from '../bill'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  model = new Bill(0, 20, 1, 0, 0)

  onSubmit() {
    var taxTotal = +this.model.total * (this.model.tipPercentage * 0.01)

    this.model.grandTotal = +((+this.model.total + taxTotal).toFixed(2));

    this.model.splitTotal = +((this.model.grandTotal / this.model.splitBy).toFixed(2));
  }
}
