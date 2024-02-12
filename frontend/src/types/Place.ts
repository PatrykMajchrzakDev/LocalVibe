type PlaceDetails = {
  id: string;
  displayName: DisplayName;
  formattedAddress: string;
  location: Location;
  rating: number;
  regularOpeningHours?: OpeningHours;
  photos?: Array<Photo>;
  types?: Array<string>;
  websiteUri?: string;
  userRatingCount: number;
};

type OpeningHours = {
  openNow: boolean;
  weekdayDescriptions?: Array<string>;
};

type DisplayName = {
  text: string;
  languageCode: string;
};

type Photo = {
  authorAttributions?: Array<AuthorAttribution>;
};

type AuthorAttribution = {
  uri: string;
  photoUri: string;
};

type Location = {
  latitude: number;
  longitude: number;
};

export default PlaceDetails;
