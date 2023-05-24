import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { TravelService } from 'src/app/services/travel.service';

import {  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { LocationElement } from '../../interfaces/travelItem.interface';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.scss'],
})
export class AddTravelComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private formBuilder: FormBuilder,
    private travelService: TravelService,
    private _snackBar: MatSnackBar
  ) {}

  travellerForm: FormGroup;
  locations: LocationElement[];

  ngOnInit(): void {
    this.travellerForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      location: new FormControl(null),
      num_of_travellers: new FormControl(null),
      budget_per_person: new FormControl(null),
    });

    this.getLocations();
  }

  private getLocations(): void {
    this.travelService.getLocations().subscribe((data: any) => {
      this.locations = data;
    });
  }

  onSubmit() {
    this.travelService.createTravelProfile(this.travellerForm.value).subscribe((data: any) => {
      this.travellerForm.reset();
      this.openSnackBar('Successfully created!!!')
    },
    (error: any) => {
      var error = error.error
      var errorMessage = ''
      for(var i of Object.keys(error)){
        errorMessage += error[i][0]
      }
      this.openSnackBar(errorMessage)
    }
    );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
