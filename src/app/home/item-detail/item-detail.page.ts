import { UpperCasePipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
  IonToolbar,
  NavController,
} from '@ionic/angular/standalone';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  standalone: true,
  imports: [
    IonBadge,
    IonButton,
    IonFooter,
    IonText,
    IonLabel,
    IonItem,
    IonIcon,
    IonButtons,
    IonBackButton,
    IonToolbar,
    IonHeader,
    IonContent,
    UpperCasePipe,
    RouterLink,
  ],
})
export class ItemDetailPage implements OnInit, OnDestroy {
  id!: string;
  item: any;
  addToBag!: any;
  totalItems = 0;
  cartSub!: Subscription;
  private route = inject(ActivatedRoute);
  private navCtrl = inject(NavController);
  private dummyAPI = inject(ApiService);
  public cartService = inject(CartService);

  constructor() {}

  ngOnInit() {
    this.getItem();

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.totalItems = cart ? cart?.totalItem : 0;
      },
    });
  }

  getItem() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id || id == '0') {
      this.navCtrl.back();
      return;
    }
    this.id = id;

    this.item = this.dummyAPI.items.find((record: any) => record.id == id);
  }

  addItem() {
    // const result = this.cartService.addQuantity(this.item);
    this.addedText();
  }

  addedText() {
    this.addToBag = 'Added to Bag';
    setTimeout(() => {
      this.addToBag = null;
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.cartSub) this.cartSub.unsubscribe();
  }
}
