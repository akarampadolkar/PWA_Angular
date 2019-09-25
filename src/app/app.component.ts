import { Component , OnInit} from '@angular/core';
import { PwaServiceService } from './pwa-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'myApp';
  constructor(public Pwa: PwaServiceService) {}
  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

  ngOnInit() {
  }
  
}
