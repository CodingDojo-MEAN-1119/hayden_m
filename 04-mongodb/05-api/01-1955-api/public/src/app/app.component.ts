import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor (private taskService : HttpService){

 
  }
  ngOnInit(): void {
    console.log(this.taskService);
    console.log("Hayden");
  }
}

