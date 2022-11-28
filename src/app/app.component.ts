import { Component, ElementRef, OnInit } from '@angular/core';
import { appInput } from 'dawn-js-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-dawn-js-ui';

  constructor(private dom: ElementRef) {}

  ngOnInit () {
    const context = this.dom.nativeElement.querySelctor
    appInput.register('ds-input', this.dom.nativeElement)
    appInput.props.set({ label: 'Nome'})
    appInput.init()
  }
}
