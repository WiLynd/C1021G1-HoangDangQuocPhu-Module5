import { Component } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent {


  input = '';
  result = '';


  pressNum(num: string) {

    // Do Not Allow . more than once
    // tslint:disable-next-line:triple-equals
    if (num == '.') {
      // tslint:disable-next-line:triple-equals
      if (this.input != '' ) {

        const lastNum = this.getLastOperand();
        console.log(lastNum.lastIndexOf('.'));
        if (lastNum.lastIndexOf('.') >= 0) { return; }
      }
    }

    // Do Not Allow 0 at beginning.
    // Javascript will throw Octal literals are not allowed in strict mode.
    // tslint:disable-next-line:triple-equals
    if (num == '0') {
      // tslint:disable-next-line:triple-equals
      if (this.input == '' ) {
        return;
      }
      const PrevKey = this.input[this.input.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+')  {
        return;
      }
    }

    this.input = this.input + num;
    this.calcAnswer();
  }


  getLastOperand() {
    let pos: number;
    console.log(this.input);
    pos = this.input.toString().lastIndexOf('+');
    if (this.input.toString().lastIndexOf('-') > pos) { pos = this.input.lastIndexOf('-'); }
    if (this.input.toString().lastIndexOf('*') > pos) { pos = this.input.lastIndexOf('*'); }
    if (this.input.toString().lastIndexOf('/') > pos) { pos = this.input.lastIndexOf('/'); }
    console.log('Last ' + this.input.substr(pos + 1));
    return this.input.substr(pos + 1);
  }


  pressOperator(op: string) {

    // Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      return;
    }

    this.input = this.input + op;
    this.calcAnswer();
  }


  clear() {
    // tslint:disable-next-line:triple-equals
    if (this.input != '' ) {
      this.input = this.input.substr(0, this.input.length - 1);
    }
  }

  allClear() {
    this.result = '';
    this.input = '';
  }

  calcAnswer() {
    let formula = this.input;

    let lastKey = formula[formula.length - 1];

    if (lastKey === '.')  {
      formula = formula.substr(0, formula.length - 1);
    }

    lastKey = formula[formula.length - 1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula = formula.substr(0, formula.length - 1);
    }

    console.log('Formula ' + formula);
    // tslint:disable-next-line:no-eval
    this.result = eval(formula);
  }

  getAnswer() {
    this.calcAnswer();
    this.input = this.result;
    // tslint:disable-next-line:triple-equals
    if (this.input == '0') { this.input = ''; }
  }

}
