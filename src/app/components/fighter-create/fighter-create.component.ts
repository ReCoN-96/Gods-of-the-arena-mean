import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fighter-create',
  templateUrl: './fighter-create.component.html',
  styleUrls: ['./fighter-create.component.css']
})

export class FighterCreateComponent {
  submitted = false;
  fighterForm: FormGroup;
  SwordsmanProfile: any = ['Swordsman'];
  SpearmanProfile: any = ['Spearman'];
  RiderProfile: any = ['Rider'];
  ArcherProfile: any = ['Archer'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  MustTwoItem(controlSwordsman: string, controlSpearman: string, controlRider: string, controlArcher: string) {
    return (formGroup: FormGroup) => {
        // tslint:disable-next-line: no-shadowed-variable
        const swordsman = formGroup.controls[controlSwordsman];
        const spearman = formGroup.controls[controlSpearman];
        const rider = formGroup.controls[controlRider];
        const archer = formGroup.controls[controlArcher];

        // set error on matchingControl if validation fails
        if (swordsman.value.length + spearman.value.length + rider.value.length + archer.value.length > 10 ) {
          archer.setErrors(null);

        } else {
          archer.setErrors({ MustTwoItem: true });
        }
    };
}

  mainForm() {
    this.fighterForm = this.fb.group({
      swordsman: [''],
      spearman: [''],
      rider: [''],
      archer: ['']
    }, {
      validator: this.MustTwoItem('swordsman', 'spearman', 'rider', 'archer')
    });
  }

     // Choose options with select-dropdown
    updateSwordsmanProfile(e) {
      this.fighterForm.get('swordsman').setValue(e, {
        onlySelf: true
      });
    }

    updateSpearmanProfile(e) {
      this.fighterForm.get('spearman').setValue(e, {
        onlySelf: true
      });
    }

    updateRiderProfile(e) {
      this.fighterForm.get('rider').setValue(e, {
        onlySelf: true
      });
    }

    updateArcherProfile(e) {
      this.fighterForm.get('archer').setValue(e, {
        onlySelf: true
      });
    }

  // Getter to access form control
  get myForm(){
    return this.fighterForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.fighterForm.valid) {
      return false;
    } else {
      this.apiService.createFighter(this.fighterForm.value).subscribe(
        (res) => {
          console.log('Fighter successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/fighters-list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

}
