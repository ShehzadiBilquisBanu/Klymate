import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LocationProvider } from '../../providers/location-provider/location-provider';
import { Address, LocationSuggestion } from "../../entities/location-suggestion";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { FormControl } from "@angular/forms";


@Component({
  selector: 'location-dialog',
  templateUrl: 'location-dialog.html',
  styleUrls: ['location-dialog.css']
})
export class LocationDialog implements OnInit {

  searchField: FormControl = new FormControl();
  suggestions: LocationSuggestion[] = [];

  constructor(public dialogRef: MatDialogRef<LocationDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public locationProvider: LocationProvider) {
  }

  ngOnInit(): void {
    this.searchField.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(() => {
        this.searchField.value
          ? this.getSuggestions(this.searchField.value)
          : this.suggestions = [];
      });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  getSuggestions(searchText: string) {
    this.locationProvider.getPlaceSuggestions(searchText)
      .subscribe(response => {
        this.suggestions = response.suggestions;
        console.log(this.suggestions);
      });
  }

  getLocationDetails(event: any) {
    let selectedSuggestion: LocationSuggestion = event.option.value;
    let address: Address = selectedSuggestion.address;
  /*  let location = `${address.city ? address.city : ''}, ` +
                      `${address.state ? address.state : ''}, ` +
                      `${address.country ? address.country : ''}`;     */

    let getlocation = `${ address.city ? address.city : address.county ? address.county : address.state ? address.state : address.country ? address.country : '' }`;
    let location = getlocation.replace(/(<([^>]+)>)/ig, '');
    this.searchField.setValue(location);
    this.locationProvider.getLocationDetails(selectedSuggestion.locationId)
      .subscribe((response: any) => {
        this.dialogRef.close({
          latLng: response.Response.View[0].Result[0].Location.DisplayPosition,
          locationName: location
          });
      });
  }
}
