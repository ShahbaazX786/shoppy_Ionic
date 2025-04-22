import { Component, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonCard,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonText,
  IonIcon,
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    NgFor,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRow,
    IonCol,
    IonCard,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonText,
    IonIcon,
  ],
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
