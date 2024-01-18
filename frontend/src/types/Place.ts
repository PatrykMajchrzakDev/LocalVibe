type PlaceDetails = {
  displayName: DisplayName;
  formattedAddress: string;
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

export default PlaceDetails;
