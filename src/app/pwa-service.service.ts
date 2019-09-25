import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaServiceService {

  promptEvent;
  constructor() { 
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}
