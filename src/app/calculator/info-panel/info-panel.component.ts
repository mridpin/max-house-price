import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {

  @Output() event = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.event.emit(false);
  }

}
