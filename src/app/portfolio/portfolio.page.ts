import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonSpinner, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Api } from '../services/api';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCard,IonSpinner,IonCardHeader,IonCardTitle,IonCardContent]
})
export class PortfolioPage implements OnInit {

  posts:any[] = [];
  loading:boolean = false;

  constructor(private api:Api) { }

  async ngOnInit() {
    try {
      this.posts = await this.api.getPosts();
      this.loading = true;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

}
