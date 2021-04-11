/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountryCodeAndNames
// ====================================================

export interface GetCountryCodeAndNames_countries {
  __typename: "Country";
  code: string;
  name: string;
  emoji: string;
}

export interface GetCountryCodeAndNames {
  countries: GetCountryCodeAndNames_countries[];
}
