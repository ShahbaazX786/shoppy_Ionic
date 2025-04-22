import { Component, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  items: any[] = [];
  allItems: any[] = [];
  private dummyAPI = inject(ApiService);

  constructor() {}

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.allItems = this.dummyAPI.items;
    this.items = [...this.allItems];
  }
}
