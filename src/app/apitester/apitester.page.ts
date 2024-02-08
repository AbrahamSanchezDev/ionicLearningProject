import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apitester',
  templateUrl: './apitester.page.html',
  styleUrls: ['./apitester.page.scss'],
})
export class ApitesterPage implements OnInit {
  url: string = '';
  respuesta: string = '';

  constructor() {}

  ngOnInit() {}

  peticion() {}
}
