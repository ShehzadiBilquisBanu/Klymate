import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {FormControl} from '@angular/forms';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { LocationProvider } from '../../providers/location-provider/location-provider';


@Component({
  selector: 'location-dialog',
  templateUrl: 'location-dialog.html',
  styleUrls: ['location-dialog.css']
})
export class LocationDialog implements OnInit {

  searchTextResults: any[] = [];
  queryField: FormControl = new FormControl();
  places: string[];
  searchText = 'Chennai';

  constructor(public dialogRef: MatDialogRef<LocationDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public locationProvider: LocationProvider) {
  }

  ngOnInit() {
    this.getPlaces();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    console.log('save button is pressed');
  }

  getPlaces() {
    this.queryField.valueChanges.pipe(debounceTime(500))
      .subscribe(queryField => this.locationProvider.getPlaceSuggestions(queryField).subscribe((response: any) =>
        console.log(response.suggestions[0].address)));

  }
}
