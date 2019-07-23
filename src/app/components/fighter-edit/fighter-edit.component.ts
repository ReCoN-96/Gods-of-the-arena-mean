import { Fighter } from '../../model/Fighter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-fighter-edit',
  templateUrl: './fighter-edit.component.html',
  styleUrls: ['./fighter-edit.component.css']
})

export class FighterEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  fighterData: Fighter[];
  SwordsmanProfile: any = [
    'Maximus : épée à une main',
    'Maximus : épée à deux mains',
    'Spartacus : épée à une main',
    'Spartacus : épée à deux mains',
    'Priscus',
    'Pollux'
  ];
  SpearmanProfile: any = [
    'Ganicus',
    'Crixus'
  ];
  RiderProfile: any = [
    'Jeanclaudedus',
    'Spiculus'
  ];
  ArcherProfile: any = [
    'Commodus',
    'Flamma'
  ];
  AnimalProfile: any = [
    'Mouton Noir',
    'Tigre',
    'Lion'
  ];

  categoryList: any;

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  ngOnInit() {
    this.updateFighter();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getFighter(id);
  }

    // Choose options with select-dropdown
  updateSwordsmanProfile(e) {
    this.editForm.get('swordsman').setValue(e, {
      onlySelf: true
    });
  }

  updateSpearmanProfile(e) {
    this.editForm.get('spearman').setValue(e, {
      onlySelf: true
    });
  }

  updateRiderProfile(e) {
    this.editForm.get('rider').setValue(e, {
      onlySelf: true
    });
  }

  updateArcherProfile(e) {
    this.editForm.get('archer').setValue(e, {
      onlySelf: true
    });
  }

  updateAnimalProfile(e) {
    this.editForm.get('animal').setValue(e, {
      onlySelf: true
    });
  }

  getFighter(id) {
    this.apiService.getFighter(id).subscribe(data => {
      this.categoryList = data;
      this.editForm.setValue({
        swordsman: data['swordsman'],
        spearman: data['spearman'],
        rider: data['rider'],
        archer: data['archer'],
        animal: data['animal'],
        avaibleEdit: true
      });
    });
  }

  updateFighter() {
    this.editForm = this.fb.group({
      swordsman: [''],
      spearman: [''],
      rider: [''],
      archer: [''],
      animal: [''],
      avaibleEdit: [true]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateFighter(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/fighters-list');
            console.log('Content updated successfully!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
