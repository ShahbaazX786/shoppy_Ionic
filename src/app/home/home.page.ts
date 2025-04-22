import { Component, inject } from '@angular/core';
import {
  IonCard,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonRow,
  IonSearchbar,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
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
    IonSearchbar,
  ],
})
export class HomePage {
  items: any[] = [];
  allItems: any[] = [];
  searchQuery!: string;
  private dummyAPI = inject(ApiService);

  constructor() {}

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.allItems = this.dummyAPI.items;
    this.items = [...this.allItems];
  }

  handleSearch(event: any) {
    this.items = [];
    this.searchQuery = event.detail.value.toLowerCase();
    if (this.searchQuery.length > 0) {
      this.searchItems();
    } else {
      this.items = [...this.allItems];
    }
  }

  searchItems() {
    this.items = this.dummyAPI.items.filter((item) =>
      item.name.toLowerCase().includes(this.searchQuery)
    );
  }
}
