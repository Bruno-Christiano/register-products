import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss'],
})
export class MsgComponent implements OnInit {
  @Input() text: string;

  constructor() {}

  ngOnInit() {}
}
