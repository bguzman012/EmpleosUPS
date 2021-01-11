import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  name: string = "Cristian Timbi";
  email: string;
  message: string;
  worked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.name, this.email, this.worked)
  }

}
