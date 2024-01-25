import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinitescrolla',
  templateUrl: './infinitescrolla.page.html',
  styleUrls: ['./infinitescrolla.page.scss'],
})
export class InfinitescrollaPage implements OnInit {
  items:any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
