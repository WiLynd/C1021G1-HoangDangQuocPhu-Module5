import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = 'yellow';
  @Input() progressColor = 'green';
  @Input() progress = 0;

  constructor() {
  }

  ngOnInit() {
    this.loading();
  }

  loading() {
    let interval = setInterval(() => {
      this.progress = +this.progress + 1;
      if (this.progress == 100) {
        clearInterval(interval);
      }
    }, 200);
  }
}
