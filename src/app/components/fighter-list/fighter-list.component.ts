import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-fighter-list',
  templateUrl: './fighter-list.component.html',
  styleUrls: ['./fighter-list.component.css']
})

export class FighterListComponent{

  fighters: any = [];

  constructor(private apiService: ApiService) {
    this.readFighter();
  }

  readFighter(){
    this.apiService.getFighters().subscribe((data) => {
     this.fighters = data;
    });
  }

  removeFighter(fighter, index) {
    if (window.confirm('êtes vous sure?')) {
        this.apiService.deleteFighter(fighter._id).subscribe((data) => {
          this.fighters.splice(index, 1);
        }
      )
    }
  }

}
