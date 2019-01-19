export interface LocationSuggestion {
  address: Address;
  countryCode: string;
  label: string;
  language: string;
  locationId: string;
  matchLevel: string;
}

export interface Address {
  city: string;
  country: string;
  county: string;
  postalCode: string;
  state: string;
}

export interface LatLng {
  Latitude: number;
  Longitude: number;
}
