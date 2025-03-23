import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'open-api-docs/1 (api/6.1.3)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Create additional fee on account level
   *
   */
  postAdditionalFeesAccount(body: types.PostAdditionalFeesAccountBodyParam): Promise<FetchResponse<201, types.PostAdditionalFeesAccountResponse201>> {
    return this.core.fetch('/additional-fees/account', 'post', body);
  }

  /**
   * Get list of additional fees for account
   *
   */
  getAdditionalFeesAccount(): Promise<FetchResponse<200, types.GetAdditionalFeesAccountResponse200>> {
    return this.core.fetch('/additional-fees/account', 'get');
  }

  /**
   * Create additional fee on listing level
   *
   */
  postAdditionalFeesListingListingid(body: types.PostAdditionalFeesListingListingidBodyParam, metadata: types.PostAdditionalFeesListingListingidMetadataParam): Promise<FetchResponse<201, types.PostAdditionalFeesListingListingidResponse201>> {
    return this.core.fetch('/additional-fees/listing/{listingId}', 'post', body, metadata);
  }

  /**
   * Get list of additional fees for listing
   *
   */
  getAdditionalFeesListingListingid(metadata: types.GetAdditionalFeesListingListingidMetadataParam): Promise<FetchResponse<200, types.GetAdditionalFeesListingListingidResponse200>> {
    return this.core.fetch('/additional-fees/listing/{listingId}', 'get', metadata);
  }

  /**
   * Update existing additional fee
   *
   */
  patchAdditionalFeesId(body: types.PatchAdditionalFeesIdBodyParam, metadata: types.PatchAdditionalFeesIdMetadataParam): Promise<FetchResponse<200, types.PatchAdditionalFeesIdResponse200>>;
  patchAdditionalFeesId(metadata: types.PatchAdditionalFeesIdMetadataParam): Promise<FetchResponse<200, types.PatchAdditionalFeesIdResponse200>>;
  patchAdditionalFeesId(body?: types.PatchAdditionalFeesIdBodyParam | types.PatchAdditionalFeesIdMetadataParam, metadata?: types.PatchAdditionalFeesIdMetadataParam): Promise<FetchResponse<200, types.PatchAdditionalFeesIdResponse200>> {
    return this.core.fetch('/additional-fees/{id}', 'patch', body, metadata);
  }

  /**
   * Delete existing additional fee
   *
   */
  deleteAdditionalFeesId(metadata: types.DeleteAdditionalFeesIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/additional-fees/{id}', 'delete', metadata);
  }

  /**
   * Calculate additional fee amount for quote [Beta]
   *
   * @summary Calculate additional fee amount for quote [Beta]
   */
  postAdditionalFeesQuotesQuoteidAmount(body: types.PostAdditionalFeesQuotesQuoteidAmountBodyParam, metadata: types.PostAdditionalFeesQuotesQuoteidAmountMetadataParam): Promise<FetchResponse<200, types.PostAdditionalFeesQuotesQuoteidAmountResponse200>> {
    return this.core.fetch('/additional-fees/quotes/{quoteId}/amount', 'post', body, metadata);
  }

  /**
   * Add upsell fee to inquiry rate plans quotes. Add upsell fee id multiple times if you
   * want to add the same upsell fee multiple times. To remove the upsell fee exclude the ID
   * from an array [Beta]
   *
   * @summary Add upsell fee to inquiry rate plans quotes [Beta]
   */
  postAdditionalFeesInquiriesInquiryidUpsells(body: types.PostAdditionalFeesInquiriesInquiryidUpsellsBodyParam, metadata: types.PostAdditionalFeesInquiriesInquiryidUpsellsMetadataParam): Promise<FetchResponse<200, types.PostAdditionalFeesInquiriesInquiryidUpsellsResponse200>> {
    return this.core.fetch('/additional-fees/inquiries/{inquiryId}/upsells', 'post', body, metadata);
  }

  /**
   * Get account details of current user.
   *
   */
  getAccountsMe(): Promise<FetchResponse<200, types.GetAccountsMeResponse200>> {
    return this.core.fetch('/accounts/me', 'get');
  }

  /**
   * Get All Custom Fields
   *
   */
  getAccountsIdCustomFields(metadata: types.GetAccountsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.GetAccountsIdCustomFieldsResponse200>> {
    return this.core.fetch('/accounts/{id}/custom-fields', 'get', metadata);
  }

  /**
   * Create new custom field
   *
   */
  postAccountsIdCustomFields(body: types.PostAccountsIdCustomFieldsBodyParam, metadata: types.PostAccountsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.PostAccountsIdCustomFieldsResponse200>>;
  postAccountsIdCustomFields(metadata: types.PostAccountsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.PostAccountsIdCustomFieldsResponse200>>;
  postAccountsIdCustomFields(body?: types.PostAccountsIdCustomFieldsBodyParam | types.PostAccountsIdCustomFieldsMetadataParam, metadata?: types.PostAccountsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.PostAccountsIdCustomFieldsResponse200>> {
    return this.core.fetch('/accounts/{id}/custom-fields', 'post', body, metadata);
  }

  /**
   * Update custom field
   *
   */
  putAccountsIdCustomFields(body: types.PutAccountsIdCustomFieldsBodyParam, metadata: types.PutAccountsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.PutAccountsIdCustomFieldsResponse200>>;
  putAccountsIdCustomFields(metadata: types.PutAccountsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.PutAccountsIdCustomFieldsResponse200>>;
  putAccountsIdCustomFields(body?: types.PutAccountsIdCustomFieldsBodyParam | types.PutAccountsIdCustomFieldsMetadataParam, metadata?: types.PutAccountsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.PutAccountsIdCustomFieldsResponse200>> {
    return this.core.fetch('/accounts/{id}/custom-fields', 'put', body, metadata);
  }

  /**
   * Get Custom Field
   *
   */
  getAccountsIdCustomFieldsField_id(metadata: types.GetAccountsIdCustomFieldsFieldIdMetadataParam): Promise<FetchResponse<200, types.GetAccountsIdCustomFieldsFieldIdResponse200>> {
    return this.core.fetch('/accounts/{id}/custom-fields/{field_id}', 'get', metadata);
  }

  /**
   * Delete Custom Field
   *
   */
  deleteAccountsIdCustomFieldsField_id(metadata: types.DeleteAccountsIdCustomFieldsFieldIdMetadataParam): Promise<FetchResponse<200, types.DeleteAccountsIdCustomFieldsFieldIdResponse200>> {
    return this.core.fetch('/accounts/{id}/custom-fields/{field_id}', 'delete', metadata);
  }

  /**
   * Http endpoint to retrieve brandings by property id.
   *
   * @summary Get brand by property_id.
   * @throws FetchError<500, types.ExternalIntegrationsControllerGetBrandByPropertyResponse500> API error.
   */
  externalIntegrationsController_getBrandByProperty(metadata: types.ExternalIntegrationsControllerGetBrandByPropertyMetadataParam): Promise<FetchResponse<200, types.ExternalIntegrationsControllerGetBrandByPropertyResponse200>> {
    return this.core.fetch('/account-brands/properties/{propertyId}', 'get', metadata);
  }

  /**
   * List all users
   *
   * @summary List all users
   * @throws FetchError<400, types.UsersHttpControllerGetUsersResponse400> Bad request
   */
  usersHttpController_getUsers(metadata?: types.UsersHttpControllerGetUsersMetadataParam): Promise<FetchResponse<200, types.UsersHttpControllerGetUsersResponse200>> {
    return this.core.fetch('/users', 'get', metadata);
  }

  /**
   * Create a new user
   *
   * @summary Create user
   * @throws FetchError<400, types.UsersHttpControllerCreateUserResponse400> Bad request
   */
  usersHttpController_createUser(body: types.UsersHttpControllerCreateUserBodyParam): Promise<FetchResponse<201, types.UsersHttpControllerCreateUserResponse201>> {
    return this.core.fetch('/users', 'post', body);
  }

  /**
   * Get a user by ID.
   *
   * @summary Get user
   * @throws FetchError<400, types.UsersHttpControllerGetUserByIdResponse400> Bad request
   */
  usersHttpController_getUserById(metadata: types.UsersHttpControllerGetUserByIdMetadataParam): Promise<FetchResponse<200, types.UsersHttpControllerGetUserByIdResponse200>> {
    return this.core.fetch('/users/{id}', 'get', metadata);
  }

  /**
   * Update user by ID
   *
   * @summary Update user
   * @throws FetchError<400, types.UsersHttpControllerUpdateUserResponse400> Bad request
   */
  usersHttpController_updateUser(body: types.UsersHttpControllerUpdateUserBodyParam, metadata: types.UsersHttpControllerUpdateUserMetadataParam): Promise<FetchResponse<200, types.UsersHttpControllerUpdateUserResponse200>> {
    return this.core.fetch('/users/{id}', 'put', body, metadata);
  }

  /**
   * Delete user by ID
   *
   * @summary Delete user
   * @throws FetchError<400, types.UsersHttpControllerRemoveUserResponse400> Bad request
   */
  usersHttpController_removeUser(metadata: types.UsersHttpControllerRemoveUserMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/users/{id}', 'delete', metadata);
  }

  /**
   * Retrieve a list of all your account integrations.
   *
   * @summary List all integrations
   * @throws FetchError<401, types.GetIntegrationsResponse401> Unauthorized
   * @throws FetchError<500, types.GetIntegrationsResponse500> Unhandled exception. Something went wrong on server.
   */
  getIntegrations(metadata?: types.GetIntegrationsMetadataParam): Promise<FetchResponse<200, types.GetIntegrationsResponse200>> {
    return this.core.fetch('/integrations', 'get', metadata);
  }

  /**
   * Create an integration.
   *
   * @summary Create integration
   * @throws FetchError<401, types.PostIntegrationsResponse401> Unauthorized
   * @throws FetchError<500, types.PostIntegrationsResponse500> Unhandled exception. Something went wrong on server.
   */
  postIntegrations(body: types.PostIntegrationsBodyParam): Promise<FetchResponse<200, types.PostIntegrationsResponse200>> {
    return this.core.fetch('/integrations', 'post', body);
  }

  /**
   * Use this endpoint to retrieve all a single account integration.
   *
   * @summary Get integration
   * @throws FetchError<401, types.GetIntegrationsIdResponse401> Unauthorized
   * @throws FetchError<403, types.GetIntegrationsIdResponse403> Forbidden
   * @throws FetchError<404, types.GetIntegrationsIdResponse404> Not Found
   * @throws FetchError<500, types.GetIntegrationsIdResponse500> Unhandled exception. Something went wrong on server.
   */
  getIntegrationsId(metadata: types.GetIntegrationsIdMetadataParam): Promise<FetchResponse<200, types.GetIntegrationsIdResponse200>> {
    return this.core.fetch('/integrations/{id}', 'get', metadata);
  }

  /**
   * Selectively update fields of single account integration.
   *
   * @summary Update integration
   * @throws FetchError<400, types.PutIntegrationsIdResponse400> Invalid Input
   * @throws FetchError<401, types.PutIntegrationsIdResponse401> Unauthorized
   * @throws FetchError<500, types.PutIntegrationsIdResponse500> Internal Server Error
   */
  putIntegrationsId(body: types.PutIntegrationsIdBodyParam, metadata: types.PutIntegrationsIdMetadataParam): Promise<FetchResponse<200, types.PutIntegrationsIdResponse200>>;
  putIntegrationsId(metadata: types.PutIntegrationsIdMetadataParam): Promise<FetchResponse<200, types.PutIntegrationsIdResponse200>>;
  putIntegrationsId(body?: types.PutIntegrationsIdBodyParam | types.PutIntegrationsIdMetadataParam, metadata?: types.PutIntegrationsIdMetadataParam): Promise<FetchResponse<200, types.PutIntegrationsIdResponse200>> {
    return this.core.fetch('/integrations/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve all listings
   *
   */
  getListings(metadata?: types.GetListingsMetadataParam): Promise<FetchResponse<200, types.GetListingsResponse200>> {
    return this.core.fetch('/listings', 'get', metadata);
  }

  /**
   * Create a listing
   *
   */
  postListings(body: types.PostListingsBodyParam): Promise<FetchResponse<200, types.PostListingsResponse200>> {
    return this.core.fetch('/listings', 'post', body);
  }

  /**
   * Retrieve a listing
   *
   */
  getListingsId(metadata: types.GetListingsIdMetadataParam): Promise<FetchResponse<200, types.GetListingsIdResponse200>> {
    return this.core.fetch('/listings/{id}', 'get', metadata);
  }

  /**
   * Update a listing
   *
   */
  putListingsId(body: types.PutListingsIdBodyParam, metadata: types.PutListingsIdMetadataParam): Promise<FetchResponse<200, types.PutListingsIdResponse200>>;
  putListingsId(metadata: types.PutListingsIdMetadataParam): Promise<FetchResponse<200, types.PutListingsIdResponse200>>;
  putListingsId(body?: types.PutListingsIdBodyParam | types.PutListingsIdMetadataParam, metadata?: types.PutListingsIdMetadataParam): Promise<FetchResponse<200, types.PutListingsIdResponse200>> {
    return this.core.fetch('/listings/{id}', 'put', body, metadata);
  }

  /**
   * Delete a listing
   *
   */
  deleteListingsId(metadata: types.DeleteListingsIdMetadataParam): Promise<FetchResponse<200, types.DeleteListingsIdResponse200>> {
    return this.core.fetch('/listings/{id}', 'delete', metadata);
  }

  /**
   * Update listings availability settings
   *
   */
  putListingsIdAvailabilitySettings(body: types.PutListingsIdAvailabilitySettingsBodyParam, metadata: types.PutListingsIdAvailabilitySettingsMetadataParam): Promise<FetchResponse<200, types.PutListingsIdAvailabilitySettingsResponse200>> {
    return this.core.fetch('/listings/{id}/availability-settings', 'put', body, metadata);
  }

  /**
   * List all cities
   *
   */
  getListingsCities(): Promise<FetchResponse<200, types.GetListingsCitiesResponse200>> {
    return this.core.fetch('/listings/cities', 'get');
  }

  /**
   * List all tags
   *
   */
  getListingsTags(): Promise<FetchResponse<200, types.GetListingsTagsResponse200>> {
    return this.core.fetch('/listings/tags', 'get');
  }

  /**
   * providerAccountId is important! - this is how you identify with Stripe once the clearing
   * payment
   *
   * @summary Retrieve a listing's paymentProviderId
   */
  getListingsIdFieldsPaymentproviderid(metadata: types.GetListingsIdFieldsPaymentprovideridMetadataParam): Promise<FetchResponse<200, types.GetListingsIdFieldsPaymentprovideridResponse200>> {
    return this.core.fetch('/listings/{id}?fields=paymentProviderId', 'get', metadata);
  }

  /**
   * Same as GET /listings but results are returned as a downloadable csv file
   *
   * @summary Export as CSV
   */
  postListingsCsv(): Promise<FetchResponse<200, types.PostListingsCsvResponse200>> {
    return this.core.fetch('/listings.csv', 'post');
  }

  /**
   * Same as /listings but results are sent as an email
   *
   * @summary Send results in email
   */
  postListingsEmail(body: types.PostListingsEmailBodyParam): Promise<FetchResponse<200, types.PostListingsEmailResponse200>> {
    return this.core.fetch('/listings.email', 'post', body);
  }

  /**
   * Get custom fields such as wifi password etc.
   *
   * @summary Get all listing's custom fields
   */
  getListingsIdCustomFields(metadata: types.GetListingsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.GetListingsIdCustomFieldsResponse200>> {
    return this.core.fetch('/listings/{id}/custom-fields', 'get', metadata);
  }

  /**
   * Update listing's Custom Fields
   *
   */
  putListingsIdCustomFields(body: types.PutListingsIdCustomFieldsBodyParam, metadata: types.PutListingsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.PutListingsIdCustomFieldsResponse200>>;
  putListingsIdCustomFields(metadata: types.PutListingsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.PutListingsIdCustomFieldsResponse200>>;
  putListingsIdCustomFields(body?: types.PutListingsIdCustomFieldsBodyParam | types.PutListingsIdCustomFieldsMetadataParam, metadata?: types.PutListingsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.PutListingsIdCustomFieldsResponse200>> {
    return this.core.fetch('/listings/{id}/custom-fields', 'put', body, metadata);
  }

  /**
   * Get custom field-Listings
   *
   */
  getListingsIdCustomFieldsField_id(metadata: types.GetListingsIdCustomFieldsFieldIdMetadataParam): Promise<FetchResponse<200, types.GetListingsIdCustomFieldsFieldIdResponse200>> {
    return this.core.fetch('/listings/{id}/custom-fields/{field_id}', 'get', metadata);
  }

  /**
   * Delete listing's custom fields
   *
   */
  deleteListingsListing_idCustomFieldsField_id(metadata: types.DeleteListingsListingIdCustomFieldsFieldIdMetadataParam): Promise<FetchResponse<200, types.DeleteListingsListingIdCustomFieldsFieldIdResponse200>> {
    return this.core.fetch('/listings/{listing_id}/custom-fields/{field_id}', 'delete', metadata);
  }

  /**
   * Retrieve listing Financials
   *
   */
  getFinancialsListingId(metadata: types.GetFinancialsListingIdMetadataParam): Promise<FetchResponse<200, types.GetFinancialsListingIdResponse200>> {
    return this.core.fetch('/financials/listing/{id}', 'get', metadata);
  }

  /**
   * Only accessible to Admin or User tokens.
   *
   * @summary Update listing Financials
   */
  putFinancialsListingId(body: types.PutFinancialsListingIdBodyParam, metadata: types.PutFinancialsListingIdMetadataParam): Promise<FetchResponse<200, types.PutFinancialsListingIdResponse200>>;
  putFinancialsListingId(metadata: types.PutFinancialsListingIdMetadataParam): Promise<FetchResponse<200, types.PutFinancialsListingIdResponse200>>;
  putFinancialsListingId(body?: types.PutFinancialsListingIdBodyParam | types.PutFinancialsListingIdMetadataParam, metadata?: types.PutFinancialsListingIdMetadataParam): Promise<FetchResponse<200, types.PutFinancialsListingIdResponse200>> {
    return this.core.fetch('/financials/listing/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve a list of all the photos for a property.
   *
   * @summary Retrieve all photos for a given listing.
   * @throws FetchError<403, types.GetResponse403> Unauthorized Request.
   * @throws FetchError<404, types.GetResponse404> Property not found.
   */
  get(metadata: types.GetMetadataParam): Promise<FetchResponse<200, types.GetResponse200>> {
    return this.core.fetch('/properties-api/property-photos/property-photos/{propertyId}', 'get', metadata);
  }

  /**
   * Upload new property photos using URLs. Ensure the repositories are accessible to Guesty.
   *
   * @summary Add new photos to property
   * @throws FetchError<403, types.UploadByUrlsResponse403> Unauthorized Request.
   * @throws FetchError<404, types.UploadByUrlsResponse404> Property not found.
   */
  uploadByUrls(body: types.UploadByUrlsBodyParam, metadata: types.UploadByUrlsMetadataParam): Promise<FetchResponse<200, types.UploadByUrlsResponse200>> {
    return this.core.fetch('/properties-api/property-photos/property-photos/{propertyId}', 'post', body, metadata);
  }

  /**
   * Alter the order of the existing property photos. All listed photos will be placed first,
   * and the rest will be placed at the end.
   *
   * @summary Change the photo order on a property
   * @throws FetchError<403, types.OrderResponse403> Unauthorized Request.
   * @throws FetchError<404, types.OrderResponse404> Property not found.
   */
  order(body: types.OrderBodyParam, metadata: types.OrderMetadataParam): Promise<FetchResponse<200, types.OrderResponse200>> {
    return this.core.fetch('/properties-api/property-photos/property-photos/{propertyId}/order', 'post', body, metadata);
  }

  /**
   * Edit a Photo
   *
   * @summary Replace photo or edit caption without changing order or room assignment.
   * @throws FetchError<403, types.EditResponse403> Unauthorized Request.
   * @throws FetchError<404, types.EditResponse404> Property not found.
   */
  edit(body: types.EditBodyParam, metadata: types.EditMetadataParam): Promise<FetchResponse<200, types.EditResponse200>> {
    return this.core.fetch('/properties-api/property-photos/property-photos/{propertyId}/{photoId}', 'post', body, metadata);
  }

  /**
   * Delete a specific photo from a given property.
   *
   * @summary Delete a Photo
   * @throws FetchError<403, types.DeleteResponse403> Unauthorized Request.
   * @throws FetchError<404, types.DeleteResponse404> Property not found.
   */
  delete(metadata: types.DeleteMetadataParam): Promise<FetchResponse<200, types.DeleteResponse200>> {
    return this.core.fetch('/properties-api/property-photos/property-photos/{propertyId}/{photoId}', 'delete', metadata);
  }

  /**
   * Retrieve all reservations or a filtered subset of them.
   *
   * @summary Search reservations
   * @throws FetchError<401, types.GetReservationsResponse401> Unauthorized
   * @throws FetchError<500, types.GetReservationsResponse500> Unhandled exception. Something went wrong on server.
   */
  getReservations(metadata?: types.GetReservationsMetadataParam): Promise<FetchResponse<200, types.GetReservationsResponse200>> {
    return this.core.fetch('/reservations', 'get', metadata);
  }

  /**
   * Use this request to create a direct booking. **Note:** This endpoint is soon to be
   * deprecated. Please use [this
   * endpoint](https://open-api-docs.guesty.com/reference/reservationsopenapicontroller_quickbooking)
   * instead.
   *
   * @summary Create a reservation
   * @throws FetchError<400, types.PostReservationsResponse400> Bad Request
   * @throws FetchError<401, types.PostReservationsResponse401> Unauthorized
   * @throws FetchError<403, types.PostReservationsResponse403> Forbidden
   * @throws FetchError<500, types.PostReservationsResponse500> Unhandled exception. Something went wrong on server.
   */
  postReservations(body: types.PostReservationsBodyParam): Promise<FetchResponse<200, types.PostReservationsResponse200>> {
    return this.core.fetch('/reservations', 'post', body);
  }

  /**
   * This allows you to obtain details about a specific reservation. 
   *
   * NOTE: 
   * - To include the check-in and check-out times of a reservations include the parameters:
   * `listing.defaultCheckInTime`, `plannedArrival`, `listing.defaultCheckOutTime` and
   * `plannedDeparture`. Planned arrival and departure times override the default times.
   * - Use `checkInDateLocalized` and `checkOutDateLocalized` to retrieve the reservation
   * according to the location of the listing.
   *
   * @summary Retrieve a reservation
   * @throws FetchError<401, types.GetReservationsIdResponse401> Unauthorized
   * @throws FetchError<403, types.GetReservationsIdResponse403> Forbidden
   * @throws FetchError<404, types.GetReservationsIdResponse404> Not Found
   * @throws FetchError<500, types.GetReservationsIdResponse500> Unhandled exception. Something went wrong on server.
   */
  getReservationsId(metadata: types.GetReservationsIdMetadataParam): Promise<FetchResponse<200, types.GetReservationsIdResponse200>> {
    return this.core.fetch('/reservations/{id}', 'get', metadata);
  }

  /**
   * Use this request to alter a guest reservation.
   *
   * NOTE:
   * - To amend the check-in and check-out dates, please use`checkInDateLocalized` and
   * `checkOutDateLocalized` with the format `YYYY-MM-DD`.
   * In this case, we do not recommend using fields `checkIn` and `checkOut` with UTC format
   * (example `2023-01-30T10:00:00+02:00`) it might cause timezone and dates discrepancies.
   * - Update check-in and check-out times using `plannedArrival` and `plannedDeparture`.
   *
   * IMPORTANT:
   * Include `ignoreCalendar` and `ignoreTerms` at your own risk. These will ignore any
   * calendar block or listing requirement and may lead to an overbooking or unsuitable
   * booking.
   *
   * @summary Update a reservation
   * @throws FetchError<400, types.PutReservationsIdResponse400> Invalid Input
   * @throws FetchError<401, types.PutReservationsIdResponse401> Unauthorized
   * @throws FetchError<403, types.PutReservationsIdResponse403> Forbidden
   * @throws FetchError<404, types.PutReservationsIdResponse404> Not Found
   * @throws FetchError<500, types.PutReservationsIdResponse500> Unhandled exception. Something went wrong on server.
   */
  putReservationsId(body: types.PutReservationsIdBodyParam, metadata: types.PutReservationsIdMetadataParam): Promise<FetchResponse<200, types.PutReservationsIdResponse200>>;
  putReservationsId(metadata: types.PutReservationsIdMetadataParam): Promise<FetchResponse<200, types.PutReservationsIdResponse200>>;
  putReservationsId(body?: types.PutReservationsIdBodyParam | types.PutReservationsIdMetadataParam, metadata?: types.PutReservationsIdMetadataParam): Promise<FetchResponse<200, types.PutReservationsIdResponse200>> {
    return this.core.fetch('/reservations/{id}', 'put', body, metadata);
  }

  /**
   * Use this request to create an immediate or future payment, and to add a record to
   * payment history. 
   *
   * An immediate or future payment is charged using a credit card, where a rerocded payment
   * indicates the funds were collected in other methods such as bank transfer, cash, e-check
   * etc
   *
   * @summary Add a payment to reservation
   * @throws FetchError<400, types.PostReservationsIdPaymentsResponse400> Invalid Input
   * @throws FetchError<401, types.PostReservationsIdPaymentsResponse401> Unauthorized
   * @throws FetchError<403, types.PostReservationsIdPaymentsResponse403> Forbidden
   * @throws FetchError<404, types.PostReservationsIdPaymentsResponse404> Not Found
   * @throws FetchError<500, types.PostReservationsIdPaymentsResponse500> Unhandled exception. Something went wrong on server.
   */
  postReservationsIdPayments(body: types.PostReservationsIdPaymentsBodyParam, metadata: types.PostReservationsIdPaymentsMetadataParam): Promise<FetchResponse<201, types.PostReservationsIdPaymentsResponse201>> {
    return this.core.fetch('/reservations/{id}/payments', 'post', body, metadata);
  }

  /**
   * For creating new invoice item use the <a
   * href="https://open-api-docs.guesty.com/reference/invoiceitemscontroller_createinvoiceitem">new
   * API</a>
   *
   * @summary Create new Invoice item
   * @throws FetchError<400, types.PostReservationsIdInvoiceitemsResponse400> Invalid Input
   * @throws FetchError<401, types.PostReservationsIdInvoiceitemsResponse401> Unauthorized
   * @throws FetchError<403, types.PostReservationsIdInvoiceitemsResponse403> Forbidden
   * @throws FetchError<404, types.PostReservationsIdInvoiceitemsResponse404> Not Found
   * @throws FetchError<500, types.PostReservationsIdInvoiceitemsResponse500> Unhandled exception. Something went wrong on server.
   */
  postReservationsIdInvoiceitems(body: types.PostReservationsIdInvoiceitemsBodyParam, metadata: types.PostReservationsIdInvoiceitemsMetadataParam): Promise<FetchResponse<200, types.PostReservationsIdInvoiceitemsResponse200>> {
    return this.core.fetch('/reservations/{id}/invoiceItems', 'post', body, metadata);
  }

  /**
   * Use this request to update or cancel an upcoming payment. To cancel, set the the payment
   * status to `CANCELLED`.
   *
   * @summary Update or cancel a payment for reservation
   * @throws FetchError<400, types.PutReservationsIdPaymentsPaymentidResponse400> Invalid Input
   * @throws FetchError<401, types.PutReservationsIdPaymentsPaymentidResponse401> Unauthorized
   * @throws FetchError<403, types.PutReservationsIdPaymentsPaymentidResponse403> Forbidden
   * @throws FetchError<404, types.PutReservationsIdPaymentsPaymentidResponse404> Not Found
   * @throws FetchError<500, types.PutReservationsIdPaymentsPaymentidResponse500> Unhandled exception. Something went wrong on server.
   */
  putReservationsIdPaymentsPaymentid(body: types.PutReservationsIdPaymentsPaymentidBodyParam, metadata: types.PutReservationsIdPaymentsPaymentidMetadataParam): Promise<FetchResponse<200, types.PutReservationsIdPaymentsPaymentidResponse200>> {
    return this.core.fetch('/reservations/{id}/payments/{paymentId}', 'put', body, metadata);
  }

  /**
   * Use this endpoint to refund a guest's payment charged on an existing reservation.
   *
   * @summary Refund an existing payment
   * @throws FetchError<401, types.PostReservationsIdPaymentsPaymentidRefundResponse401> Unauthorized
   * @throws FetchError<403, types.PostReservationsIdPaymentsPaymentidRefundResponse403> Forbidden
   * @throws FetchError<404, types.PostReservationsIdPaymentsPaymentidRefundResponse404> Not Found
   * @throws FetchError<500, types.PostReservationsIdPaymentsPaymentidRefundResponse500> Unhandled exception. Something went wrong on server.
   */
  postReservationsIdPaymentsPaymentidRefund(body: types.PostReservationsIdPaymentsPaymentidRefundBodyParam, metadata: types.PostReservationsIdPaymentsPaymentidRefundMetadataParam): Promise<FetchResponse<201, types.PostReservationsIdPaymentsPaymentidRefundResponse201>> {
    return this.core.fetch('/reservations/{id}/payments/{paymentId}/refund', 'post', body, metadata);
  }

  /**
   * Use this endpoint to cancel a pending or recorded payment
   *
   * @summary Cancels a pending or recorded payment
   * @throws FetchError<401, types.PatchReservationsIdPaymentsPaymentidCancelResponse401> Unauthorized
   * @throws FetchError<403, types.PatchReservationsIdPaymentsPaymentidCancelResponse403> Forbidden
   * @throws FetchError<404, types.PatchReservationsIdPaymentsPaymentidCancelResponse404> Not Found
   * @throws FetchError<500, types.PatchReservationsIdPaymentsPaymentidCancelResponse500> Unhandled exception. Something went wrong on server.
   */
  patchReservationsIdPaymentsPaymentidCancel(metadata: types.PatchReservationsIdPaymentsPaymentidCancelMetadataParam): Promise<FetchResponse<201, types.PatchReservationsIdPaymentsPaymentidCancelResponse201>> {
    return this.core.fetch('/reservations/{id}/payments/{paymentId}/cancel', 'patch', metadata);
  }

  /**
   * Use this request to export a custom list of reservations as CSV file. Results are
   * limited to 500 reservations per a request.
   *
   * @summary Export as CSV
   * @throws FetchError<401, types.PostReservationsCsvResponse401> Unauthorized
   * @throws FetchError<500, types.PostReservationsCsvResponse500> Unhandled exception. Something went wrong on server.
   */
  postReservationsCsv(metadata?: types.PostReservationsCsvMetadataParam): Promise<FetchResponse<200, types.PostReservationsCsvResponse200>> {
    return this.core.fetch('/reservations.csv', 'post', metadata);
  }

  /**
   * Use this request to export a custom list of reservations in an Email. Results are
   * limited to 250 reservations per a request.
   *
   * @summary Send results in email
   * @throws FetchError<401, types.PostReservationsEmailResponse401> Unauthorized
   * @throws FetchError<500, types.PostReservationsEmailResponse500> Unhandled exception. Something went wrong on server.
   */
  postReservationsEmail(body: types.PostReservationsEmailBodyParam, metadata?: types.PostReservationsEmailMetadataParam): Promise<FetchResponse<200, types.PostReservationsEmailResponse200>> {
    return this.core.fetch('/reservations.email', 'post', body, metadata);
  }

  /**
   * Use this call to accept a pending reservation request.
   *
   * @summary Approve a pending booking request
   * @throws FetchError<400, types.PostReservationsIdApproveResponse400> Invalid Input
   * @throws FetchError<401, types.PostReservationsIdApproveResponse401> Unauthorized
   * @throws FetchError<403, types.PostReservationsIdApproveResponse403> Forbidden
   * @throws FetchError<404, types.PostReservationsIdApproveResponse404> Not Found
   * @throws FetchError<500, types.PostReservationsIdApproveResponse500> Unhandled exception. Something went wrong on server.
   */
  postReservationsIdApprove(metadata: types.PostReservationsIdApproveMetadataParam): Promise<FetchResponse<200, types.PostReservationsIdApproveResponse200>> {
    return this.core.fetch('/reservations/{id}/approve', 'post', metadata);
  }

  /**
   * Use this call to deny a pending reservation request.
   *
   * @summary Decline a pending booking request
   * @throws FetchError<400, types.PostReservationsIdDeclineResponse400> Invalid Input
   * @throws FetchError<401, types.PostReservationsIdDeclineResponse401> Unauthorized
   * @throws FetchError<403, types.PostReservationsIdDeclineResponse403> Forbidden
   * @throws FetchError<404, types.PostReservationsIdDeclineResponse404> Not Found
   * @throws FetchError<500, types.PostReservationsIdDeclineResponse500> Unhandled exception. Something went wrong on server.
   */
  postReservationsIdDecline(metadata: types.PostReservationsIdDeclineMetadataParam): Promise<FetchResponse<200, types.PostReservationsIdDeclineResponse200>> {
    return this.core.fetch('/reservations/{id}/decline', 'post', metadata);
  }

  /**
   * Retrieve all populated custom fields and boolean fields with change to their default
   * state from an existing reservation.
   *
   * @summary Retrieve all populated custom fields on an existing reservation.
   * @throws FetchError<401, types.GetReservationsIdCustomFieldsResponse401> Unauthorized
   * @throws FetchError<403, types.GetReservationsIdCustomFieldsResponse403> Forbidden
   * @throws FetchError<404, types.GetReservationsIdCustomFieldsResponse404> Not Found
   * @throws FetchError<500, types.GetReservationsIdCustomFieldsResponse500> Unhandled exception. Something went wrong on server.
   */
  getReservationsIdCustomFields(metadata: types.GetReservationsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.GetReservationsIdCustomFieldsResponse200>> {
    return this.core.fetch('/reservations/{id}/custom-fields', 'get', metadata);
  }

  /**
   * Edit the values of any custom fields on an existing reservation.
   *
   * @summary Update reservation's Custom Fields
   * @throws FetchError<401, types.PutReservationsIdCustomFieldsResponse401> Unauthorized
   * @throws FetchError<403, types.PutReservationsIdCustomFieldsResponse403> Forbidden
   * @throws FetchError<404, types.PutReservationsIdCustomFieldsResponse404> Not Found
   * @throws FetchError<500, types.PutReservationsIdCustomFieldsResponse500> Unhandled exception. Something went wrong on server.
   */
  putReservationsIdCustomFields(body: types.PutReservationsIdCustomFieldsBodyParam, metadata: types.PutReservationsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.PutReservationsIdCustomFieldsResponse200>>;
  putReservationsIdCustomFields(metadata: types.PutReservationsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.PutReservationsIdCustomFieldsResponse200>>;
  putReservationsIdCustomFields(body?: types.PutReservationsIdCustomFieldsBodyParam | types.PutReservationsIdCustomFieldsMetadataParam, metadata?: types.PutReservationsIdCustomFieldsMetadataParam): Promise<FetchResponse<200, types.PutReservationsIdCustomFieldsResponse200>> {
    return this.core.fetch('/reservations/{id}/custom-fields', 'put', body, metadata);
  }

  /**
   * Retrieve a specific custom field from and existing reservation.
   *
   * @summary Get custom field - Reservations
   * @throws FetchError<401, types.GetReservationsIdCustomFieldsFieldIdResponse401> Unauthorized
   * @throws FetchError<403, types.GetReservationsIdCustomFieldsFieldIdResponse403> Forbidden
   * @throws FetchError<404, types.GetReservationsIdCustomFieldsFieldIdResponse404> Not Found
   * @throws FetchError<500, types.GetReservationsIdCustomFieldsFieldIdResponse500> Unhandled exception. Something went wrong on server.
   */
  getReservationsIdCustomFieldsField_id(metadata: types.GetReservationsIdCustomFieldsFieldIdMetadataParam): Promise<FetchResponse<200, types.GetReservationsIdCustomFieldsFieldIdResponse200>> {
    return this.core.fetch('/reservations/{id}/custom-fields/{field_id}', 'get', metadata);
  }

  /**
   * Delete specific custom fields from an existing reservation.
   *
   * @summary Delete reservation's custom fields
   * @throws FetchError<401, types.DeleteReservationsReservationIdCustomFieldsFieldIdResponse401> Unauthorized
   * @throws FetchError<403, types.DeleteReservationsReservationIdCustomFieldsFieldIdResponse403> Forbidden
   * @throws FetchError<404, types.DeleteReservationsReservationIdCustomFieldsFieldIdResponse404> Not Found
   * @throws FetchError<500, types.DeleteReservationsReservationIdCustomFieldsFieldIdResponse500> Unhandled exception. Something went wrong on server.
   */
  deleteReservationsReservation_idCustomFieldsField_id(metadata: types.DeleteReservationsReservationIdCustomFieldsFieldIdMetadataParam): Promise<FetchResponse<200, types.DeleteReservationsReservationIdCustomFieldsFieldIdResponse200>> {
    return this.core.fetch('/reservations/{reservation_id}/custom-fields/{field_id}', 'delete', metadata);
  }

  /**
   * Use this call to request a new reservation cancellation from your guest.
   *
   * @summary Request airbnb reservation cancellation on the platform
   * @throws FetchError<400, types.PostReservationsIdRequestCancellationSyncResponse400> Invalid request
   * @throws FetchError<401, types.PostReservationsIdRequestCancellationSyncResponse401> Unauthorized
   * @throws FetchError<403, types.PostReservationsIdRequestCancellationSyncResponse403> Forbidden
   * @throws FetchError<404, types.PostReservationsIdRequestCancellationSyncResponse404> Not Found
   * @throws FetchError<500, types.PostReservationsIdRequestCancellationSyncResponse500> Unhandled exception. Something went wrong on server.
   */
  postReservationsIdRequestCancellationSync(body: types.PostReservationsIdRequestCancellationSyncBodyParam, metadata: types.PostReservationsIdRequestCancellationSyncMetadataParam): Promise<FetchResponse<200, types.PostReservationsIdRequestCancellationSyncResponse200>>;
  postReservationsIdRequestCancellationSync(metadata: types.PostReservationsIdRequestCancellationSyncMetadataParam): Promise<FetchResponse<200, types.PostReservationsIdRequestCancellationSyncResponse200>>;
  postReservationsIdRequestCancellationSync(body?: types.PostReservationsIdRequestCancellationSyncBodyParam | types.PostReservationsIdRequestCancellationSyncMetadataParam, metadata?: types.PostReservationsIdRequestCancellationSyncMetadataParam): Promise<FetchResponse<200, types.PostReservationsIdRequestCancellationSyncResponse200>> {
    return this.core.fetch('/reservations/{id}/request-cancellation-sync', 'post', body, metadata);
  }

  /**
   * Use this endpoint to retrieve daily calendar availability and pricing for a given
   * listing ID and date range.
   *
   * IMPORTANT: Multi-unit calendar availability is determined by unit allotment, not its
   * `status` field. To calculate if a multi-unit has availability, use the following
   * formula:
   *
   * ```
   * const isAvailable = _.isNumber(currentDay.allotment)?
   * currentDay.allotment > 0 : currentDay.status === 'available';
   * ```
   *
   * @summary Retrieve the calendar for a single listing
   * @throws FetchError<404, types.GetAvailabilityPricingApiCalendarListingsIdResponse404> Listing Not Found
   * @throws FetchError<422, types.GetAvailabilityPricingApiCalendarListingsIdResponse422> Validation Error
   * @throws FetchError<500, types.GetAvailabilityPricingApiCalendarListingsIdResponse500> Unhandled exception. Something went wrong on server.
   */
  getAvailabilityPricingApiCalendarListingsId(metadata: types.GetAvailabilityPricingApiCalendarListingsIdMetadataParam): Promise<FetchResponse<200, types.GetAvailabilityPricingApiCalendarListingsIdResponse200>> {
    return this.core.fetch('/availability-pricing/api/calendar/listings/{id}', 'get', metadata);
  }

  /**
   * Set the nightly rate, minimum stay and availability of any calendar date per listing.
   *
   * @summary Update the calendar for a single listing
   * @throws FetchError<404, types.PutAvailabilityPricingApiCalendarListingsIdResponse404> Listing Not Found
   * @throws FetchError<422, types.PutAvailabilityPricingApiCalendarListingsIdResponse422> Validation Error
   * @throws FetchError<500, types.PutAvailabilityPricingApiCalendarListingsIdResponse500> Unhandled exception. Something went wrong on server.
   */
  putAvailabilityPricingApiCalendarListingsId(body: types.PutAvailabilityPricingApiCalendarListingsIdBodyParam, metadata: types.PutAvailabilityPricingApiCalendarListingsIdMetadataParam): Promise<FetchResponse<200, types.PutAvailabilityPricingApiCalendarListingsIdResponse200>> {
    return this.core.fetch('/availability-pricing/api/calendar/listings/{id}', 'put', body, metadata);
  }

  /**
   * Use this endpoint to retrieve calendar availability and pricing for multiple listings
   * according to a date range.
   *
   * @summary Retrieve calendars for multiple listings
   * @throws FetchError<404, types.GetAvailabilityPricingApiCalendarListingsResponse404> Listing Not Found
   * @throws FetchError<422, types.GetAvailabilityPricingApiCalendarListingsResponse422> Validation Error
   * @throws FetchError<500, types.GetAvailabilityPricingApiCalendarListingsResponse500> Unhandled exception. Something went wrong on server.
   */
  getAvailabilityPricingApiCalendarListings(metadata: types.GetAvailabilityPricingApiCalendarListingsMetadataParam): Promise<FetchResponse<200, types.GetAvailabilityPricingApiCalendarListingsResponse200>> {
    return this.core.fetch('/availability-pricing/api/calendar/listings', 'get', metadata);
  }

  /**
   * Use this endpoint to set availability and pricing for multiple listings across a range
   * of dates.
   *
   * IMPORTANT:
   * - It is strongly suggested updating a single unique listing ID in a single HTTP request,
   * despite the fact the API does support receiving different listing IDs.
   * - Max allowed days to be updated - 730 (~2 years)
   * - Strongly suggested to not update the same listing ID in parallel.
   * - To decrease response time, send fewer date periods.
   *
   * @summary Update calendar for multiple listings
   * @throws FetchError<404, types.PutAvailabilityPricingApiCalendarListingsResponse404> Listing Not Found
   * @throws FetchError<422, types.PutAvailabilityPricingApiCalendarListingsResponse422> Validation Error
   * @throws FetchError<500, types.PutAvailabilityPricingApiCalendarListingsResponse500> Unhandled exception. Something went wrong on server.
   */
  putAvailabilityPricingApiCalendarListings(body: types.PutAvailabilityPricingApiCalendarListingsBodyParam): Promise<FetchResponse<200, types.PutAvailabilityPricingApiCalendarListingsResponse200>> {
    return this.core.fetch('/availability-pricing/api/calendar/listings', 'put', body);
  }

  /**
   * Retrieves a list of block logs based on the specified filters.
   *
   * @summary Get calendar block logs
   * @throws FetchError<400, types.CalendarLogsOpenApiControllerGetCalendarLogsResponse400> Bad Request - Invalid parameters provided
   * @throws FetchError<401, types.CalendarLogsOpenApiControllerGetCalendarLogsResponse401> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.CalendarLogsOpenApiControllerGetCalendarLogsResponse403> Forbidden - You do not have permission to access this resource
   * @throws FetchError<404, types.CalendarLogsOpenApiControllerGetCalendarLogsResponse404> No block logs found for this listing
   * @throws FetchError<500, types.CalendarLogsOpenApiControllerGetCalendarLogsResponse500> Internal Server Error - Something went wrong on the server
   */
  calendarLogsOpenApiController_getCalendarLogs(metadata?: types.CalendarLogsOpenApiControllerGetCalendarLogsMetadataParam): Promise<FetchResponse<200, types.CalendarLogsOpenApiControllerGetCalendarLogsResponse200>> {
    return this.core.fetch('/api/block-logs', 'get', metadata);
  }

  /**
   * Create guest
   *
   * @summary Create guest
   */
  guestsOpenApiController_createGuest(body: types.GuestsOpenApiControllerCreateGuestBodyParam): Promise<FetchResponse<200, types.GuestsOpenApiControllerCreateGuestResponse200>> {
    return this.core.fetch('/guests-crud', 'post', body);
  }

  /**
   * Get guests list
   *
   * @summary Get guests list
   */
  guestsOpenApiController_getGuestsList(metadata: types.GuestsOpenApiControllerGetGuestsListMetadataParam): Promise<FetchResponse<200, types.GuestsOpenApiControllerGetGuestsListResponse200>> {
    return this.core.fetch('/guests-crud', 'get', metadata);
  }

  /**
   * Update guest
   *
   * @summary Update guest
   */
  guestsOpenApiController_updateGuest(body: types.GuestsOpenApiControllerUpdateGuestBodyParam, metadata: types.GuestsOpenApiControllerUpdateGuestMetadataParam): Promise<FetchResponse<200, types.GuestsOpenApiControllerUpdateGuestResponse200>> {
    return this.core.fetch('/guests-crud/{guestId}', 'put', body, metadata);
  }

  /**
   * Get guest by id
   *
   * @summary Get guest by id
   */
  guestsOpenApiController_getGuest(metadata: types.GuestsOpenApiControllerGetGuestMetadataParam): Promise<FetchResponse<200, types.GuestsOpenApiControllerGetGuestResponse200>> {
    return this.core.fetch('/guests-crud/{guestId}', 'get', metadata);
  }

  /**
   * Create payment method
   *
   */
  postGuestsIdPaymentMethods(body: types.PostGuestsIdPaymentMethodsBodyParam, metadata: types.PostGuestsIdPaymentMethodsMetadataParam): Promise<FetchResponse<number, unknown>>;
  postGuestsIdPaymentMethods(metadata: types.PostGuestsIdPaymentMethodsMetadataParam): Promise<FetchResponse<number, unknown>>;
  postGuestsIdPaymentMethods(body?: types.PostGuestsIdPaymentMethodsBodyParam | types.PostGuestsIdPaymentMethodsMetadataParam, metadata?: types.PostGuestsIdPaymentMethodsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/guests/{id}/payment-methods', 'post', body, metadata);
  }

  /**
   * Retrieve payment method list by guest id
   *
   * @summary List guest's payment methods
   */
  getGuestsIdPaymentMethods(metadata: types.GetGuestsIdPaymentMethodsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/guests/{id}/payment-methods', 'get', metadata);
  }

  /**
   * Get list of owners
   *
   * @summary Get list of owners
   */
  getOwners(metadata?: types.GetOwnersMetadataParam): Promise<FetchResponse<200, types.GetOwnersResponse200>> {
    return this.core.fetch('/owners', 'get', metadata);
  }

  /**
   * Create an owner
   *
   * @summary Create an owner
   */
  postOwners(body: types.PostOwnersBodyParam): Promise<FetchResponse<200, types.PostOwnersResponse200>> {
    return this.core.fetch('/owners', 'post', body);
  }

  /**
   * Create multiple owners with assigned listings
   *
   * @summary Create multiple owners with assigned listings
   * @throws FetchError<400, types.PostOwnersBulkResponse400>
   */
  postOwnersBulk(body?: types.PostOwnersBulkBodyParam): Promise<FetchResponse<201, types.PostOwnersBulkResponse201>> {
    return this.core.fetch('/owners/bulk', 'post', body);
  }

  /**
   * Get owner
   *
   * @summary Get owner
   */
  getOwnersId(metadata: types.GetOwnersIdMetadataParam): Promise<FetchResponse<200, types.GetOwnersIdResponse200>> {
    return this.core.fetch('/owners/{id}', 'get', metadata);
  }

  /**
   * update owner, entered fields will be updated (support partial update)
   *
   * @summary Update owner
   */
  putOwnersId(body: types.PutOwnersIdBodyParam, metadata: types.PutOwnersIdMetadataParam): Promise<FetchResponse<200, types.PutOwnersIdResponse200>> {
    return this.core.fetch('/owners/{id}', 'put', body, metadata);
  }

  /**
   * Delete owner
   *
   * @summary Delete owner
   */
  deleteOwnersId(metadata: types.DeleteOwnersIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/owners/{id}', 'delete', metadata);
  }

  /**
   * Get saved replies
   *
   * @throws FetchError<403, types.GetSavedRepliesResponse403> User does not have the permissions to use this endpoint
   */
  getSavedReplies(metadata?: types.GetSavedRepliesMetadataParam): Promise<FetchResponse<200, types.GetSavedRepliesResponse200>> {
    return this.core.fetch('/saved-replies', 'get', metadata);
  }

  /**
   * Post saved reply
   *
   * @throws FetchError<500, types.PostSavedRepliesResponse500> Error
   */
  postSavedReplies(body: types.PostSavedRepliesBodyParam): Promise<FetchResponse<200, types.PostSavedRepliesResponse200>> {
    return this.core.fetch('/saved-replies', 'post', body);
  }

  /**
   * Get saved reply by id
   *
   * @throws FetchError<404, types.GetSavedRepliesReplyidResponse404> Not found
   */
  getSavedRepliesReplyid(metadata: types.GetSavedRepliesReplyidMetadataParam): Promise<FetchResponse<200, types.GetSavedRepliesReplyidResponse200>> {
    return this.core.fetch('/saved-replies/{replyId}', 'get', metadata);
  }

  /**
   * Update saved reply by id
   *
   * @throws FetchError<404, types.PutSavedRepliesReplyidResponse404> Not found
   */
  putSavedRepliesReplyid(body: types.PutSavedRepliesReplyidBodyParam, metadata: types.PutSavedRepliesReplyidMetadataParam): Promise<FetchResponse<200, types.PutSavedRepliesReplyidResponse200>>;
  putSavedRepliesReplyid(metadata: types.PutSavedRepliesReplyidMetadataParam): Promise<FetchResponse<200, types.PutSavedRepliesReplyidResponse200>>;
  putSavedRepliesReplyid(body?: types.PutSavedRepliesReplyidBodyParam | types.PutSavedRepliesReplyidMetadataParam, metadata?: types.PutSavedRepliesReplyidMetadataParam): Promise<FetchResponse<200, types.PutSavedRepliesReplyidResponse200>> {
    return this.core.fetch('/saved-replies/{replyId}', 'put', body, metadata);
  }

  /**
   * Delete saved reply by id
   *
   * @throws FetchError<404, types.DeleteSavedRepliesReplyidResponse404> Not found
   */
  deleteSavedRepliesReplyid(metadata: types.DeleteSavedRepliesReplyidMetadataParam): Promise<FetchResponse<200, types.DeleteSavedRepliesReplyidResponse200>> {
    return this.core.fetch('/saved-replies/{replyId}', 'delete', metadata);
  }

  /**
   * Returns saved replies filtered by the listing id. By default only ids are returned.
   *
   * @summary Get saved replies by listing id
   * @throws FetchError<403, types.GetSavedRepliesListingListingidResponse403> User does not have the permissions to use this endpoint
   */
  getSavedRepliesListingListingid(metadata: types.GetSavedRepliesListingListingidMetadataParam): Promise<FetchResponse<200, types.GetSavedRepliesListingListingidResponse200>> {
    return this.core.fetch('/saved-replies/listing/{listingId}', 'get', metadata);
  }

  /**
   * Get tasks list
   *
   * @throws FetchError<403, types.GetTasksOpenApiTasksResponse403> Forbidden
   */
  getTasksOpenApiTasks(metadata: types.GetTasksOpenApiTasksMetadataParam): Promise<FetchResponse<200, types.GetTasksOpenApiTasksResponse200>> {
    return this.core.fetch('/tasks-open-api/tasks', 'get', metadata);
  }

  /**
   * Create a new task
   *
   * @throws FetchError<403, types.PostTasksOpenApiCreateSingleTaskResponse403> Forbidden
   */
  postTasksOpenApiCreateSingleTask(body: types.PostTasksOpenApiCreateSingleTaskBodyParam): Promise<FetchResponse<200, types.PostTasksOpenApiCreateSingleTaskResponse200>> {
    return this.core.fetch('/tasks-open-api/create-single-task', 'post', body);
  }

  /**
   * Update a task
   *
   * @throws FetchError<403, types.PutTasksOpenApiTaskidResponse403> Forbidden
   */
  putTasksOpenApiTaskid(body: types.PutTasksOpenApiTaskidBodyParam, metadata: types.PutTasksOpenApiTaskidMetadataParam): Promise<FetchResponse<200, types.PutTasksOpenApiTaskidResponse200>> {
    return this.core.fetch('/tasks-open-api/{taskId}', 'put', body, metadata);
  }

  /**
   * Get a specific task
   *
   * @throws FetchError<403, types.GetTasksOpenApiTaskidResponse403> Forbidden
   */
  getTasksOpenApiTaskid(metadata: types.GetTasksOpenApiTaskidMetadataParam): Promise<FetchResponse<200, types.GetTasksOpenApiTaskidResponse200>> {
    return this.core.fetch('/tasks-open-api/{taskId}', 'get', metadata);
  }

  /**
   * Delete a task
   *
   * @throws FetchError<403, types.DeleteTasksOpenApiTaskidResponse403> Forbidden
   */
  deleteTasksOpenApiTaskid(metadata: types.DeleteTasksOpenApiTaskidMetadataParam): Promise<FetchResponse<200, types.DeleteTasksOpenApiTaskidResponse200>> {
    return this.core.fetch('/tasks-open-api/{taskId}', 'delete', metadata);
  }

  /**
   * Get hooks
   *
   */
  getHooks(metadata?: types.GetHooksMetadataParam): Promise<FetchResponse<200, types.GetHooksResponse200>> {
    return this.core.fetch('/hooks', 'get', metadata);
  }

  /**
   * Post hook
   *
   */
  postHooks(body?: types.PostHooksBodyParam): Promise<FetchResponse<200, types.PostHooksResponse200>> {
    return this.core.fetch('/hooks', 'post', body);
  }

  /**
   * Get hook by id
   *
   */
  getHooksHookid(metadata: types.GetHooksHookidMetadataParam): Promise<FetchResponse<200, types.GetHooksHookidResponse200>> {
    return this.core.fetch('/hooks/{hookId}', 'get', metadata);
  }

  /**
   * Update hook by id
   *
   */
  putHooksHookid(body: types.PutHooksHookidBodyParam, metadata: types.PutHooksHookidMetadataParam): Promise<FetchResponse<200, types.PutHooksHookidResponse200>>;
  putHooksHookid(metadata: types.PutHooksHookidMetadataParam): Promise<FetchResponse<200, types.PutHooksHookidResponse200>>;
  putHooksHookid(body?: types.PutHooksHookidBodyParam | types.PutHooksHookidMetadataParam, metadata?: types.PutHooksHookidMetadataParam): Promise<FetchResponse<200, types.PutHooksHookidResponse200>> {
    return this.core.fetch('/hooks/{hookId}', 'put', body, metadata);
  }

  /**
   * Delete hook by id
   *
   */
  deleteHooksHookid(metadata: types.DeleteHooksHookidMetadataParam): Promise<FetchResponse<200, types.DeleteHooksHookidResponse200>> {
    return this.core.fetch('/hooks/{hookId}', 'delete', metadata);
  }

  /**
   * List all webhooks
   *
   * @summary List all webhooks
   */
  getWebhooks(): Promise<FetchResponse<200, types.GetWebhooksResponse200>> {
    return this.core.fetch('/webhooks', 'get');
  }

  /**
   * Create a Webhook
   *
   */
  postWebhooks(body?: types.PostWebhooksBodyParam): Promise<FetchResponse<201, types.PostWebhooksResponse201>> {
    return this.core.fetch('/webhooks', 'post', body);
  }

  /**
   * Retrieve a Webhook
   *
   */
  getWebhooksId(metadata: types.GetWebhooksIdMetadataParam): Promise<FetchResponse<200, types.GetWebhooksIdResponse200>> {
    return this.core.fetch('/webhooks/{id}', 'get', metadata);
  }

  /**
   * Update a webhook
   *
   * @summary Update webhook
   */
  putWebhooksId(body: types.PutWebhooksIdBodyParam, metadata: types.PutWebhooksIdMetadataParam): Promise<FetchResponse<200, types.PutWebhooksIdResponse200>>;
  putWebhooksId(metadata: types.PutWebhooksIdMetadataParam): Promise<FetchResponse<200, types.PutWebhooksIdResponse200>>;
  putWebhooksId(body?: types.PutWebhooksIdBodyParam | types.PutWebhooksIdMetadataParam, metadata?: types.PutWebhooksIdMetadataParam): Promise<FetchResponse<200, types.PutWebhooksIdResponse200>> {
    return this.core.fetch('/webhooks/{id}', 'put', body, metadata);
  }

  /**
   * Delete webhook
   *
   */
  deleteWebhooksId(metadata: types.DeleteWebhooksIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/webhooks/{id}', 'delete', metadata);
  }

  /**
   * Get the secret for a webhook endpoint
   *
   * @summary Get webhook secret
   */
  svixSecretApiController_getSecret(metadata: types.SvixSecretApiControllerGetSecretMetadataParam): Promise<FetchResponse<200, types.SvixSecretApiControllerGetSecretResponse200>> {
    return this.core.fetch('/webhooks-v2/secret', 'get', metadata);
  }

  /**
   * Assign listings to Stripe account
   *
   */
  postPaymentProvidersIdAssignListings(body: types.PostPaymentProvidersIdAssignListingsBodyParam, metadata: types.PostPaymentProvidersIdAssignListingsMetadataParam): Promise<FetchResponse<200, types.PostPaymentProvidersIdAssignListingsResponse200>> {
    return this.core.fetch('/payment-providers/{id}/assign-listings', 'post', body, metadata);
  }

  /**
   * Get summary
   *
   */
  getSummary(): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/payment-providers/summary', 'get');
  }

  /**
   * Get default payment provider
   *
   */
  getDefaultProvider(): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/payment-providers/default', 'get');
  }

  /**
   * Get provider stats
   *
   */
  getStats(): Promise<FetchResponse<200, types.GetStatsResponse200>> {
    return this.core.fetch('/payment-providers/stats', 'get');
  }

  /**
   * Get payment provider by id
   *
   */
  getPaymentProvider(metadata: types.GetPaymentProviderMetadataParam): Promise<FetchResponse<200, types.GetPaymentProviderResponse200>> {
    return this.core.fetch('/payment-providers/{providerId}', 'get', metadata);
  }

  /**
   * Get payment provider by listing id
   *
   */
  getPaymentProviderByListing(metadata: types.GetPaymentProviderByListingMetadataParam): Promise<FetchResponse<200, types.GetPaymentProviderByListingResponse200>> {
    return this.core.fetch('/payment-providers/provider-by-listing', 'get', metadata);
  }

  /**
   * Retrieve all views
   *
   */
  getViews(metadata: types.GetViewsMetadataParam): Promise<FetchResponse<200, types.GetViewsResponse200>> {
    return this.core.fetch('/views', 'get', metadata);
  }

  /**
   * Create a view
   *
   */
  postViews(body: types.PostViewsBodyParam): Promise<FetchResponse<200, types.PostViewsResponse200>> {
    return this.core.fetch('/views', 'post', body);
  }

  /**
   * Retrieve a view
   *
   */
  getViewsId(metadata: types.GetViewsIdMetadataParam): Promise<FetchResponse<200, types.GetViewsIdResponse200>> {
    return this.core.fetch('/views/{id}', 'get', metadata);
  }

  /**
   * Update a view
   *
   */
  putViewsId(body: types.PutViewsIdBodyParam, metadata: types.PutViewsIdMetadataParam): Promise<FetchResponse<200, types.PutViewsIdResponse200>>;
  putViewsId(metadata: types.PutViewsIdMetadataParam): Promise<FetchResponse<200, types.PutViewsIdResponse200>>;
  putViewsId(body?: types.PutViewsIdBodyParam | types.PutViewsIdMetadataParam, metadata?: types.PutViewsIdMetadataParam): Promise<FetchResponse<200, types.PutViewsIdResponse200>> {
    return this.core.fetch('/views/{id}', 'put', body, metadata);
  }

  /**
   * Delete a view
   *
   */
  deleteViewsId(metadata: types.DeleteViewsIdMetadataParam): Promise<FetchResponse<200, types.DeleteViewsIdResponse200>> {
    return this.core.fetch('/views/{id}', 'delete', metadata);
  }

  /**
   * Get list of owner documents
   *
   * @summary Get list of owner documents
   * @throws FetchError<400, types.GetOwnersOwneridDocumentsResponse400> Bad request
   */
  getOwnersOwneridDocuments(metadata: types.GetOwnersOwneridDocumentsMetadataParam): Promise<FetchResponse<200, types.GetOwnersOwneridDocumentsResponse200>> {
    return this.core.fetch('/owners/{ownerId}/documents', 'get', metadata);
  }

  /**
   * Create an owner document
   *
   * @summary Create an owner document
   * @throws FetchError<400, types.PostOwnersOwneridDocumentsResponse400> Bad request
   */
  postOwnersOwneridDocuments(body: types.PostOwnersOwneridDocumentsBodyParam, metadata: types.PostOwnersOwneridDocumentsMetadataParam): Promise<FetchResponse<201, types.PostOwnersOwneridDocumentsResponse201>> {
    return this.core.fetch('/owners/{ownerId}/documents', 'post', body, metadata);
  }

  /**
   * Get owner document
   *
   * @summary Get owner document
   * @throws FetchError<400, types.GetOwnersOwneridDocumentsDocumentidResponse400> Bad request
   * @throws FetchError<404, types.GetOwnersOwneridDocumentsDocumentidResponse404> Not found
   */
  getOwnersOwneridDocumentsDocumentid(metadata: types.GetOwnersOwneridDocumentsDocumentidMetadataParam): Promise<FetchResponse<200, types.GetOwnersOwneridDocumentsDocumentidResponse200>> {
    return this.core.fetch('/owners/{ownerId}/documents/{documentId}', 'get', metadata);
  }

  /**
   * Update owner document (supports partial update)
   *
   * @summary Update owner document
   * @throws FetchError<400, types.PatchOwnersOwneridDocumentsDocumentidResponse400> Bad request
   * @throws FetchError<404, types.PatchOwnersOwneridDocumentsDocumentidResponse404> Not found
   */
  patchOwnersOwneridDocumentsDocumentid(body: types.PatchOwnersOwneridDocumentsDocumentidBodyParam, metadata: types.PatchOwnersOwneridDocumentsDocumentidMetadataParam): Promise<FetchResponse<200, types.PatchOwnersOwneridDocumentsDocumentidResponse200>> {
    return this.core.fetch('/owners/{ownerId}/documents/{documentId}', 'patch', body, metadata);
  }

  /**
   * Delete owner document
   *
   * @summary Delete owner document
   * @throws FetchError<400, types.DeleteOwnersOwneridDocumentsDocumentidResponse400> Bad request
   */
  deleteOwnersOwneridDocumentsDocumentid(metadata: types.DeleteOwnersOwneridDocumentsDocumentidMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/owners/{ownerId}/documents/{documentId}', 'delete', metadata);
  }

  /**
   * Download owner document
   *
   * @summary Download owner document
   * @throws FetchError<400, types.GetOwnersOwneridDocumentsDocumentidDownloadResponse400> Bad request
   * @throws FetchError<404, types.GetOwnersOwneridDocumentsDocumentidDownloadResponse404> Not found
   */
  getOwnersOwneridDocumentsDocumentidDownload(metadata: types.GetOwnersOwneridDocumentsDocumentidDownloadMetadataParam): Promise<FetchResponse<200, types.GetOwnersOwneridDocumentsDocumentidDownloadResponse200>> {
    return this.core.fetch('/owners/{ownerId}/documents/{documentId}/download', 'get', metadata);
  }

  /**
   * Retrieve a list of all owner reservations. This endpoint is filterable.
   *
   * @summary List owners reservations
   * @throws FetchError<401, types.GetOwnersReservationsResponse401> Unauthorized
   * @throws FetchError<500, types.GetOwnersReservationsResponse500> Unhandled exception. Something went wrong on server.
   */
  getOwnersReservations(metadata?: types.GetOwnersReservationsMetadataParam): Promise<FetchResponse<200, types.GetOwnersReservationsResponse200>> {
    return this.core.fetch('/owners-reservations', 'get', metadata);
  }

  /**
   * This allows you to obtain details about a specific owner's reservation.
   *
   * @summary Retrieve an owner reservation
   * @throws FetchError<401, types.GetOwnersReservationsIdResponse401> Unauthorized
   * @throws FetchError<403, types.GetOwnersReservationsIdResponse403> Forbidden
   * @throws FetchError<404, types.GetOwnersReservationsIdResponse404> Not Found
   * @throws FetchError<500, types.GetOwnersReservationsIdResponse500> Unhandled exception. Something went wrong on server.
   */
  getOwnersReservationsId(metadata: types.GetOwnersReservationsIdMetadataParam): Promise<FetchResponse<200, types.GetOwnersReservationsIdResponse200>> {
    return this.core.fetch('/owners-reservations/{id}', 'get', metadata);
  }

  /**
   * Use this request to alter an owner's reservation.
   *
   * @summary Update an owner reservation
   * @throws FetchError<401, types.PutOwnersReservationsIdResponse401> Unauthorized
   * @throws FetchError<403, types.PutOwnersReservationsIdResponse403> Forbidden
   * @throws FetchError<500, types.PutOwnersReservationsIdResponse500> Unhandled exception. Something went wrong on server.
   */
  putOwnersReservationsId(body: types.PutOwnersReservationsIdBodyParam, metadata: types.PutOwnersReservationsIdMetadataParam): Promise<FetchResponse<200, types.PutOwnersReservationsIdResponse200>> {
    return this.core.fetch('/owners-reservations/{id}', 'put', body, metadata);
  }

  /**
   * Creates a new contact in the phonebook with the provided information.
   *
   * @summary Create a new contact
   */
  openApiContactsController_create(body: types.OpenApiContactsControllerCreateBodyParam): Promise<FetchResponse<201, types.OpenApiContactsControllerCreateResponse201>> {
    return this.core.fetch('/contacts', 'post', body);
  }

  /**
   * Retrieves a paginated list of contacts for the authenticated user's account.
   *
   * @summary List all contacts
   */
  openApiContactsController_findAll(metadata?: types.OpenApiContactsControllerFindAllMetadataParam): Promise<FetchResponse<200, types.OpenApiContactsControllerFindAllResponse200>> {
    return this.core.fetch('/contacts', 'get', metadata);
  }

  /**
   * Retrieves a specific contact by its ID.
   *
   * @summary Get a specific contact
   */
  openApiContactsController_findOne(metadata: types.OpenApiContactsControllerFindOneMetadataParam): Promise<FetchResponse<200, types.OpenApiContactsControllerFindOneResponse200>> {
    return this.core.fetch('/contacts/{contactId}', 'get', metadata);
  }

  /**
   * Updates an existing contact with the provided information.
   *
   * @summary Update a contact
   */
  openApiContactsController_update(body: types.OpenApiContactsControllerUpdateBodyParam, metadata: types.OpenApiContactsControllerUpdateMetadataParam): Promise<FetchResponse<200, types.OpenApiContactsControllerUpdateResponse200>> {
    return this.core.fetch('/contacts/{contactId}', 'put', body, metadata);
  }

  /**
   * Permanently deletes a contact from the phonebook.
   *
   * @summary Delete a contact
   */
  openApiContactsController_remove(metadata: types.OpenApiContactsControllerRemoveMetadataParam): Promise<FetchResponse<200, types.OpenApiContactsControllerRemoveResponse200>> {
    return this.core.fetch('/contacts/{contactId}', 'delete', metadata);
  }

  /**
   * List closed airbnb resolutions for reservation.
   *
   * @summary List closed airbnb resolutions for reservation
   */
  airbnbResolutionsController_listResolutions(metadata: types.AirbnbResolutionsControllerListResolutionsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/airbnb-resolutions-center/reservations/{guestyReservationId}/resolutions', 'get', metadata);
  }

  /**
   * Upsert listing expectations for Airbnb channel by Guesty listing ID.
   *
   * @summary Upsert Airbnb listing expectations
   * @throws FetchError<400, types.ListingExpectationsControllerUpsertListingExpectationsResponse400> The provided input data is invalid
   * @throws FetchError<401, types.ListingExpectationsControllerUpsertListingExpectationsResponse401> Unauthorized
   * @throws FetchError<404, types.ListingExpectationsControllerUpsertListingExpectationsResponse404> Resource is not found
   */
  listingExpectationsController_upsertListingExpectations(body: types.ListingExpectationsControllerUpsertListingExpectationsBodyParam, metadata: types.ListingExpectationsControllerUpsertListingExpectationsMetadataParam): Promise<FetchResponse<200, types.ListingExpectationsControllerUpsertListingExpectationsResponse200>> {
    return this.core.fetch('/airbnb-resource-service/listing-expectations/{id}', 'put', body, metadata);
  }

  /**
   * Get listing expectations for Airbnb channel by Guesty listing ID.
   *
   * @summary Retrieve Airbnb listing expectations
   * @throws FetchError<401, types.ListingExpectationsControllerGetListingExpectationsResponse401> Unauthorized
   * @throws FetchError<404, types.ListingExpectationsControllerGetListingExpectationsResponse404> Resource is not found
   */
  listingExpectationsController_getListingExpectations(metadata: types.ListingExpectationsControllerGetListingExpectationsMetadataParam): Promise<FetchResponse<200, types.ListingExpectationsControllerGetListingExpectationsResponse200>> {
    return this.core.fetch('/airbnb-resource-service/listing-expectations/{id}', 'get', metadata);
  }

  /**
   * Get folio balances by reservation ID.
   *         For each reservation get the accounting folio balances per ledger.
   *         Balances represent current and future entries.
   *
   * @summary Get folio balances
   * @throws FetchError<403, types.ReservationsControllerFolioBalancesResponse403> You do not have sufficient permissions to access this resource
   * @throws FetchError<404, types.ReservationsControllerFolioBalancesResponse404> Can't find reservation, by provided ID
   * @throws FetchError<500, types.ReservationsControllerFolioBalancesResponse500> Unhandled exception. Something went wrong on server
   */
  reservationsController_folioBalances(metadata: types.ReservationsControllerFolioBalancesMetadataParam): Promise<FetchResponse<200, types.ReservationsControllerFolioBalancesResponse200>> {
    return this.core.fetch('/accounting-api/reservations/{id}/balance', 'get', metadata);
  }

  /**
   * Get journal entries
   *
   * @summary Get journal entries
   * @throws FetchError<400, types.JournalEntriesControllerListResponse400> Payload validation failed
   * @throws FetchError<403, types.JournalEntriesControllerListResponse403> Accounting feature flow disabled
   * @throws FetchError<500, types.JournalEntriesControllerListResponse500> Unhandled exception. Something went wrong on server
   */
  journalEntriesController_list(metadata: types.JournalEntriesControllerListMetadataParam): Promise<FetchResponse<200, types.JournalEntriesControllerListResponse200>> {
    return this.core.fetch('/accounting-api/journal-entries', 'get', metadata);
  }

  /**
   * Get latest owner working capital by owner ID.
   *
   * @summary Get owner working capital
   * @throws FetchError<403, types.OwnersControllerRetrieveResponse403> You do not have sufficient permissions to access this resource
   * @throws FetchError<404, types.OwnersControllerRetrieveResponse404> Can't find owner, by provided ID
   * @throws FetchError<500, types.OwnersControllerRetrieveResponse500> Unhandled exception. Something went wrong on server
   */
  ownersController_retrieve(metadata: types.OwnersControllerRetrieveMetadataParam): Promise<FetchResponse<200, types.OwnersControllerRetrieveResponse200>> {
    return this.core.fetch('/accounting-api/owners/{id}/working-capital', 'get', metadata);
  }

  /**
   * Update owner working capital by owner ID.
   *
   * @summary Update owner working capital
   * @throws FetchError<400, types.OwnersControllerUpdateResponse400> Input data is not valid.
   * @throws FetchError<403, types.OwnersControllerUpdateResponse403> You do not have sufficient permissions to access this resource
   * @throws FetchError<500, types.OwnersControllerUpdateResponse500> Unhandled exception. Something went wrong on server
   */
  ownersController_update(body: types.OwnersControllerUpdateBodyParam, metadata: types.OwnersControllerUpdateMetadataParam): Promise<FetchResponse<200, types.OwnersControllerUpdateResponse200>> {
    return this.core.fetch('/accounting-api/owners/{id}/working-capital', 'put', body, metadata);
  }

  /**
   * Assign provided listings to appropriate Business model
   *
   * @summary Assign listings to Business Models
   * @throws FetchError<400, types.AssignListingControllerUpdateResponse400> Input data is not valid
   * @throws FetchError<403, types.AssignListingControllerUpdateResponse403> You do not have sufficient permissions to access this resource
   * @throws FetchError<404, types.AssignListingControllerUpdateResponse404> Can't find business model, by provided ID
   * @throws FetchError<500, types.AssignListingControllerUpdateResponse500> Unhandled exception. Something went wrong on server
   */
  assignListingController_update(body: types.AssignListingControllerUpdateBodyParam, metadata: types.AssignListingControllerUpdateMetadataParam): Promise<FetchResponse<200, types.AssignListingControllerUpdateResponse200>> {
    return this.core.fetch('/business-models-api/assignment/{businessModelId}', 'put', body, metadata);
  }

  /**
   * Get list of Business Models by accountId
   *
   * @summary Get Business Models
   * @throws FetchError<400, types.BusinessModelsOaControllerIndexResponse400> Input data is not valid
   * @throws FetchError<403, types.BusinessModelsOaControllerIndexResponse403> You do not have sufficient permissions to access this resource
   * @throws FetchError<404, types.BusinessModelsOaControllerIndexResponse404> Can't find business model, by provided accountId
   * @throws FetchError<500, types.BusinessModelsOaControllerIndexResponse500> Unhandled exception. Something went wrong on server
   */
  businessModelsOAController_index(metadata?: types.BusinessModelsOaControllerIndexMetadataParam): Promise<FetchResponse<200, types.BusinessModelsOaControllerIndexResponse200>> {
    return this.core.fetch('/business-models-api/light-business-models', 'get', metadata);
  }

  /**
   * Create charge for provided owner.
   *
   * @summary Create owner charge
   * @throws FetchError<400, types.TransactionsControllerCreateChargeResponse400> Input data is not valid.
   * @throws FetchError<403, types.TransactionsControllerCreateChargeResponse403> Accounting feature flow disabled
   * @throws FetchError<500, types.TransactionsControllerCreateChargeResponse500> Unhandled exception. Something went wrong on server
   */
  transactionsController_createCharge(body: types.TransactionsControllerCreateChargeBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/business-models-api/transactions/owner-charges', 'post', body);
  }

  /**
   * Create expense for provided vendor. The expense will be created only for the specified
   * owner and will not be split between all the listing ownerships.
   *
   * @summary Create expense
   * @throws FetchError<400, types.TransactionsControllerCreateExpenseResponse400> Input data is not valid
   * @throws FetchError<403, types.TransactionsControllerCreateExpenseResponse403> Accounting feature flow disabled
   * @throws FetchError<500, types.TransactionsControllerCreateExpenseResponse500> Unhandled exception. Something went wrong on server
   */
  transactionsController_createExpense(body: types.TransactionsControllerCreateExpenseBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/business-models-api/transactions/expenses', 'post', body);
  }

  /**
   * Create an expense for the provided listing. This will apply to all owners unless you
   * include a given ownerId.
   *
   * @summary Create expense by listing
   * @throws FetchError<400, types.TransactionsControllerCreateExpenseByListingResponse400> Input data is not valid
   * @throws FetchError<403, types.TransactionsControllerCreateExpenseByListingResponse403> Accounting feature flow disabled
   * @throws FetchError<500, types.TransactionsControllerCreateExpenseByListingResponse500> Unhandled exception. Something went wrong on server
   */
  transactionsController_createExpenseByListing(body: types.TransactionsControllerCreateExpenseByListingBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/business-models-api/transactions/expenses-by-listing', 'post', body);
  }

  /**
   * Get conversations
   *
   * @summary Get conversations
   * @throws FetchError<500, types.GetCommunicationConversationsResponse500> Internal Server Error
   */
  getCommunicationConversations(metadata?: types.GetCommunicationConversationsMetadataParam): Promise<FetchResponse<200, types.GetCommunicationConversationsResponse200>> {
    return this.core.fetch('/communication/conversations', 'get', metadata);
  }

  /**
   * Get conversation by id
   *
   * @throws FetchError<500, types.GetCommunicationConversationsConversationidResponse500> Internal Server Error
   */
  getCommunicationConversationsConversationid(metadata: types.GetCommunicationConversationsConversationidMetadataParam): Promise<FetchResponse<200, types.GetCommunicationConversationsConversationidResponse200>> {
    return this.core.fetch('/communication/conversations/{conversationId}', 'get', metadata);
  }

  /**
   * Get posts (by conversation id)
   *
   * @throws FetchError<500, types.GetCommunicationConversationsConversationidPostsResponse500> Internal Server Error
   */
  getCommunicationConversationsConversationidPosts(metadata: types.GetCommunicationConversationsConversationidPostsMetadataParam): Promise<FetchResponse<200, types.GetCommunicationConversationsConversationidPostsResponse200>> {
    return this.core.fetch('/communication/conversations/{conversationId}/posts', 'get', metadata);
  }

  /**
   * Post msg to conversation without sending it
   *
   */
  postCommunicationConversationsConversationidPosts(body: types.PostCommunicationConversationsConversationidPostsBodyParam, metadata: types.PostCommunicationConversationsConversationidPostsMetadataParam): Promise<FetchResponse<200, types.PostCommunicationConversationsConversationidPostsResponse200>> {
    return this.core.fetch('/communication/conversations/{conversationId}/posts', 'post', body, metadata);
  }

  /**
   * Owners conversations do not support airbnb2 module type, messages that sent with
   * platform module type will be sent through Email.
   *
   * @summary Post msg(Send new msg)
   */
  postCommunicationConversationsConversationidSendMessage(body: types.PostCommunicationConversationsConversationidSendMessageBodyParam, metadata: types.PostCommunicationConversationsConversationidSendMessageMetadataParam): Promise<FetchResponse<200, types.PostCommunicationConversationsConversationidSendMessageResponse200>> {
    return this.core.fetch('/communication/conversations/{conversationId}/send-message', 'post', body, metadata);
  }

  /**
   * Use to define on which level the taxes are defined for a specific unit type.
   *
   * @summary Create or update tax level configuration
   */
  taxesLevelConfigurationsController_upsertTaxesLevelConfigurationsOpenApi(body: types.TaxesLevelConfigurationsControllerUpsertTaxesLevelConfigurationsOpenApiBodyParam): Promise<FetchResponse<200, types.TaxesLevelConfigurationsControllerUpsertTaxesLevelConfigurationsOpenApiResponse200>> {
    return this.core.fetch('/taxes/level-configurations', 'put', body);
  }

  /**
   * Get tax level configuration
   *
   * @summary Get tax level configuration
   */
  taxesLevelConfigurationsController_getUnitTypeTaxesLevelConfigurations(metadata: types.TaxesLevelConfigurationsControllerGetUnitTypeTaxesLevelConfigurationsMetadataParam): Promise<FetchResponse<200, types.TaxesLevelConfigurationsControllerGetUnitTypeTaxesLevelConfigurationsResponse200>> {
    return this.core.fetch('/taxes/level-configurations/unit-type/{id}', 'get', metadata);
  }

  /**
   * Create tax configuration with the provided settings.
   *
   * @summary Create tax
   */
  openApiTaxesController_createTax(body: types.OpenApiTaxesControllerCreateTaxBodyParam): Promise<FetchResponse<201, types.OpenApiTaxesControllerCreateTaxResponse201>> {
    return this.core.fetch('/taxes', 'post', body);
  }

  /**
   * Delete tax by id.
   *
   * @summary Delete tax
   */
  openApiTaxesController_deleteTax(metadata: types.OpenApiTaxesControllerDeleteTaxMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/taxes/{id}', 'delete', metadata);
  }

  /**
   * Update tax by id.
   *
   * @summary Update tax
   */
  openApiTaxesController_updateTax(body: types.OpenApiTaxesControllerUpdateTaxBodyParam, metadata: types.OpenApiTaxesControllerUpdateTaxMetadataParam): Promise<FetchResponse<200, types.OpenApiTaxesControllerUpdateTaxResponse200>> {
    return this.core.fetch('/taxes/{id}', 'patch', body, metadata);
  }

  /**
   * Get account level taxes
   *
   * @summary Get account level taxes
   */
  openApiTaxesController_getAccountLevelTaxes(): Promise<FetchResponse<200, types.OpenApiTaxesControllerGetAccountLevelTaxesResponse200>> {
    return this.core.fetch('/taxes/account', 'get');
  }

  /**
   * Get unit type (parent unit) level taxes
   *
   * @summary Get unit type (parent unit) level taxes
   */
  openApiTaxesController_getUnitTypeLevelTaxes(metadata: types.OpenApiTaxesControllerGetUnitTypeLevelTaxesMetadataParam): Promise<FetchResponse<200, types.OpenApiTaxesControllerGetUnitTypeLevelTaxesResponse200>> {
    return this.core.fetch('/taxes/unit-type/{id}', 'get', metadata);
  }

  /**
   * Get actual taxes of unit type (parent unit level)
   *
   * @summary Get actual taxes of unit type (parent unit level)
   */
  openApiTaxesController_getUnitTypeActualTaxes(metadata: types.OpenApiTaxesControllerGetUnitTypeActualTaxesMetadataParam): Promise<FetchResponse<200, types.OpenApiTaxesControllerGetUnitTypeActualTaxesResponse200>> {
    return this.core.fetch('/taxes/unit-type/{id}/actual', 'get', metadata);
  }

  /**
   * Use to create a manual price adjustments (increase or decrease) for a reservation.
   *
   * @summary Create a total amount price adjustments
   */
  priceAdjustmentsController_createManualPriceAdjustments(body: types.PriceAdjustmentsControllerCreateManualPriceAdjustmentsBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/price-adjustments/manual-total-amount', 'post', body);
  }

  /**
   * Get all total amount price adjustments for a reservation
   *
   * @summary Get all total amount price adjustments for a reservation
   */
  priceAdjustmentsController_getAllTotalAmountPriceAdjustment(metadata: types.PriceAdjustmentsControllerGetAllTotalAmountPriceAdjustmentMetadataParam): Promise<FetchResponse<200, types.PriceAdjustmentsControllerGetAllTotalAmountPriceAdjustmentResponse200>> {
    return this.core.fetch('/price-adjustments/total-amount/{id}', 'get', metadata);
  }

  /**
   * This endpoint allows you to send Guesty an updated amount for channel commissions.
   * Providing an amount to an existing integration object or manual source will update its
   * channel commission value. If the integration object or manual source do not exist, they
   * will be added.
   *
   * example for bookingCom: { bookingCom: {tax: 10, commission: {value: 5, of:
   * ["ACCOMMODATION_FARE"]}}}
   *
   *
   * Applying your channel commission on fees & taxes is currently in beta.
   *
   * @summary Update account channel commission
   */
  channelCommissionController_updateAccountChannelCommission(body: types.ChannelCommissionControllerUpdateAccountChannelCommissionBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/channel-commission/account', 'put', body);
  }

  /**
   * Get account channel commission.
   *
   * @summary Get account channel commission
   */
  channelCommissionController_getAccountChannelCommission(): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/channel-commission/account', 'get');
  }

  /**
   * This endpoint allows you to send Guesty an updated amount for channel commissions.
   * Providing an amount to an existing integration object or manual source will update its
   * channel commission value. If the integration object or manual source do not exist, they
   * will be added.
   *
   *
   * example for bookingCom: {channelCommissions: [{listingId: "923892d53f4f56cfcb25586d",
   * bookingCom: {tax: 10, commission: {value: 5, of: ["ACCOMMODATION_FARE"]}}}]}
   *
   *
   * Applying your channel commission on fees & taxes is currently in beta.
   *
   * @summary Update listings channel commission
   */
  channelCommissionController_updateListingsChannelCommission(body: types.ChannelCommissionControllerUpdateListingsChannelCommissionBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/channel-commission/listings', 'put', body);
  }

  /**
   * Get channel commission from multiple listings.
   *
   * @summary Get listings channel commission
   */
  channelCommissionController_getListingsChannelCommission(metadata: types.ChannelCommissionControllerGetListingsChannelCommissionMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/channel-commission/listings', 'get', metadata);
  }

  /**
   * This endpoint allows you to send Guesty an updated amount for channel commissions.
   * Providing an amount to an existing integration object or manual source will update its
   * channel commission value. If the integration object or manual source do not exist, they
   * will be added.
   *
   * example for bookingCom: { bookingCom: {tax: 10, commission: {value: 5, of:
   * ["ACCOMMODATION_FARE"]}}}
   *
   *
   * Applying your channel commission on fees & taxes is currently in beta.
   *
   * @summary Update account channel commission
   */
  channelCommissionController_updateAccountChannelCommission1(body: types.ChannelCommissionControllerUpdateAccountChannelCommission1BodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/channel-commissions-v2/account', 'put', body);
  }

  /**
   * Get account channel commission.
   *
   * @summary Get account channel commission
   */
  channelCommissionController_getAccountChannelCommission1(): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/channel-commissions-v2/account', 'get');
  }

  /**
   * This endpoint allows you to send Guesty an updated amount for channel commissions.
   * Providing an amount to an existing integration object or manual source will update its
   * channel commission value. If the integration object or manual source do not exist, they
   * will be added.
   *
   *
   * example for bookingCom: {channelCommissions: [{listingId: "923892d53f4f56cfcb25586d",
   * bookingCom: {tax: 10, commission: {value: 5, of: ["ACCOMMODATION_FARE"]}}}]}
   *
   *
   * Applying your channel commission on fees & taxes is currently in beta.
   *
   * @summary Update listings channel commission
   */
  channelCommissionController_updateListingsChannelCommission1(body: types.ChannelCommissionControllerUpdateListingsChannelCommission1BodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/channel-commissions-v2/listings', 'put', body);
  }

  /**
   * Get channel commission from multiple listings.
   *
   * @summary Get listings channel commission
   */
  channelCommissionController_getListingsChannelCommission1(metadata: types.ChannelCommissionControllerGetListingsChannelCommission1MetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/channel-commissions-v2/listings', 'get', metadata);
  }

  /**
   * Create Invoice Item
   *
   * @summary Create Invoice Item
   */
  invoiceItemsController_createInvoiceItem(body: types.InvoiceItemsControllerCreateInvoiceItemBodyParam, metadata: types.InvoiceItemsControllerCreateInvoiceItemMetadataParam): Promise<FetchResponse<201, types.InvoiceItemsControllerCreateInvoiceItemResponse201>> {
    return this.core.fetch('/invoice-items/reservation/{reservationId}', 'post', body, metadata);
  }

  /**
   * Get url and filename of the check-in form summary. Url is valid for 1 hour.
   *
   * @summary Get check-in form summary by reservation id
   */
  guestAppOpenApiController_getCifSummaryDetails(metadata: types.GuestAppOpenApiControllerGetCifSummaryDetailsMetadataParam): Promise<FetchResponse<200, types.GuestAppOpenApiControllerGetCifSummaryDetailsResponse200>> {
    return this.core.fetch('/guest-app-api/guest-app-runtime/{reservationId}/module/{moduleType}/summary', 'get', metadata);
  }

  /**
   * To retrieve data for a specific imported calendar, 
   *       including iCalendar name, URL, state & events adjustment, 
   *       use the following request
   *
   * @summary Get imported calendar by id
   * @throws FetchError<404, types.ImportedCalendarOpenApiControllerGetImportedCalendarByIdResponse404> Imported calendar not found
   */
  importedCalendarOpenApiController_getImportedCalendarById(metadata: types.ImportedCalendarOpenApiControllerGetImportedCalendarByIdMetadataParam): Promise<FetchResponse<200, types.ImportedCalendarOpenApiControllerGetImportedCalendarByIdResponse200>> {
    return this.core.fetch('/icalendar-api/imported-calendars/{importedCalendarId}', 'get', metadata);
  }

  /**
   * If any adjustments are made to the values, the import sync process will be automatically
   * triggered. 
   *       You can use this request to update the URL, name, or events adjustment of a
   * specific imported calendar ID. 
   *       To pause or resume the import process, navigate to "Pause/Resume Imported-Calendar
   * Sync." 
   *       Please note that you can only update the allowed properties that are listed below.
   *
   * @summary Update imported calendar
   * @throws FetchError<404, types.ImportedCalendarOpenApiControllerUpdateImportedCalendarResponse404> Listing not found
   */
  importedCalendarOpenApiController_updateImportedCalendar(body: types.ImportedCalendarOpenApiControllerUpdateImportedCalendarBodyParam, metadata: types.ImportedCalendarOpenApiControllerUpdateImportedCalendarMetadataParam): Promise<FetchResponse<200, types.ImportedCalendarOpenApiControllerUpdateImportedCalendarResponse200>> {
    return this.core.fetch('/icalendar-api/imported-calendars/{importedCalendarId}', 'put', body, metadata);
  }

  /**
   * You can remove imported calendar with one of the following behaviors (strategies)
   * regarding existing imported events.
   *
   * @summary Delete imported calendar
   * @throws FetchError<404, types.ImportedCalendarOpenApiControllerDeleteImportedCalendarResponse404> Imported calendar not found
   */
  importedCalendarOpenApiController_deleteImportedCalendar(metadata: types.ImportedCalendarOpenApiControllerDeleteImportedCalendarMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/icalendar-api/imported-calendars/{importedCalendarId}', 'delete', metadata);
  }

  /**
   * To retrieve a list of all imported calendars, use the following request.
   *
   * @summary Get imported calendars list
   * @throws FetchError<404, types.ImportedCalendarOpenApiControllerGetImportedCalendarsResponse404> Listing not found
   */
  importedCalendarOpenApiController_getImportedCalendars(metadata: types.ImportedCalendarOpenApiControllerGetImportedCalendarsMetadataParam): Promise<FetchResponse<200, types.ImportedCalendarOpenApiControllerGetImportedCalendarsResponse200>> {
    return this.core.fetch('/icalendar-api/imported-calendars', 'get', metadata);
  }

  /**
   * To import external calendar events into Guesty Calendar via the iCalendar link,
   *       you must first create an imported-calendar entity. 
   *       This entity stores the import settings, such as the URL, calendar name, state, and
   * events adjustment. 
   *       Once the entity is created, the import sync process will be initiated.
   *
   * @summary Import a calendar
   * @throws FetchError<404, types.ImportedCalendarOpenApiControllerCreateImportedCalendarResponse404> Listing not found
   */
  importedCalendarOpenApiController_createImportedCalendar(body: types.ImportedCalendarOpenApiControllerCreateImportedCalendarBodyParam): Promise<FetchResponse<200, types.ImportedCalendarOpenApiControllerCreateImportedCalendarResponse200> | FetchResponse<201, types.ImportedCalendarOpenApiControllerCreateImportedCalendarResponse201>> {
    return this.core.fetch('/icalendar-api/imported-calendars', 'post', body);
  }

  /**
   * You can manually pause or resume the import process with the following requests. 
   *     Once the imported calendar is resumed, the import sync process will be triggered.
   *
   * @summary Unsync imported calendar
   * @throws FetchError<404, types.ImportedCalendarOpenApiControllerPauseImportedCaledarResponse404> Listing not found
   */
  importedCalendarOpenApiController_pauseImportedCaledar(metadata: types.ImportedCalendarOpenApiControllerPauseImportedCaledarMetadataParam): Promise<FetchResponse<200, types.ImportedCalendarOpenApiControllerPauseImportedCaledarResponse200>> {
    return this.core.fetch('/icalendar-api/imported-calendars/{importedCalendarId}/pause', 'post', metadata);
  }

  /**
   * You can manually pause or resume the import process with the following requests. 
   *       Once the imported calendar is resumed, the import sync process will be triggered.
   *
   * @summary Resume imported calendar sync
   * @throws FetchError<404, types.ImportedCalendarOpenApiControllerResumeImportedCaledarResponse404> Listing not found
   */
  importedCalendarOpenApiController_resumeImportedCaledar(metadata: types.ImportedCalendarOpenApiControllerResumeImportedCaledarMetadataParam): Promise<FetchResponse<200, types.ImportedCalendarOpenApiControllerResumeImportedCaledarResponse200>> {
    return this.core.fetch('/icalendar-api/imported-calendars/{importedCalendarId}/resume', 'post', metadata);
  }

  /**
   * When you export your Guesty calendar to an external service, 
   *     the events from the Guesty calendar will block the external calendar. 
   *     You must create an exported calendar entity to export data from Guesty via the
   * iCalendar link. 
   *     This entity stores the settings used during the export process, such as the URL,
   * state, and adjustments.
   *     Once the entity is created, the export sync process will be triggered. 
   *     Please note that you can only have one exported calendar per listing. 
   *     After posting your request, you will receive an exported calendar descriptor, which
   * includes the URL property. 
   *     You will use this URL in your other services to pull data from Guesty.
   *
   * @summary Create exported calendar link
   * @throws FetchError<404, types.ExportedCalendarOpenApiControllerCreateExportedCalendarResponse404> Listing not found
   */
  exportedCalendarOpenApiController_createExportedCalendar(body: types.ExportedCalendarOpenApiControllerCreateExportedCalendarBodyParam): Promise<FetchResponse<200, types.ExportedCalendarOpenApiControllerCreateExportedCalendarResponse200> | FetchResponse<201, types.ExportedCalendarOpenApiControllerCreateExportedCalendarResponse201>> {
    return this.core.fetch('/icalendar-api/exported-calendars', 'post', body);
  }

  /**
   * Any listing can have only 1 exported calendar, composed by Guesty. 
   *     You can use the following request to retrieve an active exported-calendar for a
   * specified listing. 
   *     Please, note, the response body will contain either an empty list, or a list with a
   * single item - the exported calendar itself.
   *     You can use this endpoint to get currently active exported calendar, if you do not
   * have its id.
   *
   * @summary Get active exported calendar
   * @throws FetchError<404, types.ExportedCalendarOpenApiControllerGetExportedCalendarResponse404> Listing not found
   */
  exportedCalendarOpenApiController_getExportedCalendar(metadata: types.ExportedCalendarOpenApiControllerGetExportedCalendarMetadataParam): Promise<FetchResponse<200, types.ExportedCalendarOpenApiControllerGetExportedCalendarResponse200>> {
    return this.core.fetch('/icalendar-api/exported-calendars', 'get', metadata);
  }

  /**
   * Should return the state of an exported calendar entity by its id.
   *     If an exported calendar was removed, you will receive an error.
   *
   * @summary Get a specific exported calendar
   * @throws FetchError<404, types.ExportedCalendarOpenApiControllerGetExportedCalendarByIdResponse404> Exported calendar not found
   */
  exportedCalendarOpenApiController_getExportedCalendarById(metadata: types.ExportedCalendarOpenApiControllerGetExportedCalendarByIdMetadataParam): Promise<FetchResponse<200, types.ExportedCalendarOpenApiControllerGetExportedCalendarByIdResponse200>> {
    return this.core.fetch('/icalendar-api/exported-calendars/{exportedCalendarId}', 'get', metadata);
  }

  /**
   * If adjustment values are updated, the export sync process will be triggered. 
   *     Use this request to update events adjustment of your exported Guesty calendar. 
   *     Please note you can update only the parameters listed below.
   *
   * @summary Update exported calendar
   * @throws FetchError<404, types.ExportedCalendarOpenApiControllerUpdateExportedCalendarResponse404> Exported calendar not found
   */
  exportedCalendarOpenApiController_updateExportedCalendar(body: types.ExportedCalendarOpenApiControllerUpdateExportedCalendarBodyParam, metadata: types.ExportedCalendarOpenApiControllerUpdateExportedCalendarMetadataParam): Promise<FetchResponse<200, types.ExportedCalendarOpenApiControllerUpdateExportedCalendarResponse200>> {
    return this.core.fetch('/icalendar-api/exported-calendars/{exportedCalendarId}', 'put', body, metadata);
  }

  /**
   * Keep in mind - when you remove an exported calendar, any services that use its URL will
   * encounter a 404 error.
   *     To permanently delete the exported calendar, use the following request.
   *
   * @summary Delete exported calendar
   * @throws FetchError<404, types.ExportedCalendarOpenApiControllerDeleteExportedCalendarResponse404> Exported calendar not found
   */
  exportedCalendarOpenApiController_deleteExportedCalendar(metadata: types.ExportedCalendarOpenApiControllerDeleteExportedCalendarMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/icalendar-api/exported-calendars/{exportedCalendarId}', 'delete', metadata);
  }

  /**
   * List bed-types
   *
   */
  getPropertiesSpacesBedTypes(): Promise<FetchResponse<200, types.GetPropertiesSpacesBedTypesResponse200>> {
    return this.core.fetch('/properties/spaces/bed-types', 'get');
  }

  /**
   * List room-types
   *
   */
  getPropertiesSpacesRoomTypes(): Promise<FetchResponse<200, types.GetPropertiesSpacesRoomTypesResponse200>> {
    return this.core.fetch('/properties/spaces/room-types', 'get');
  }

  /**
   * Retrieve spaces for a unit-type
   *
   */
  getPropertiesSpacesUnitTypeUnittypeid(metadata: types.GetPropertiesSpacesUnitTypeUnittypeidMetadataParam): Promise<FetchResponse<200, types.GetPropertiesSpacesUnitTypeUnittypeidResponse200>> {
    return this.core.fetch('/properties/spaces/unit-type/{unitTypeId}', 'get', metadata);
  }

  /**
   * Retrieve spaces for a complex
   *
   */
  getPropertiesSpacesComplexComplexid(metadata: types.GetPropertiesSpacesComplexComplexidMetadataParam): Promise<FetchResponse<200, types.GetPropertiesSpacesComplexComplexidResponse200>> {
    return this.core.fetch('/properties/spaces/complex/{complexId}', 'get', metadata);
  }

  /**
   * Add space to unit-type (Create Space)
   *
   */
  postPropertiesSpacesUnitTypeUnittypeidAdd(body: types.PostPropertiesSpacesUnitTypeUnittypeidAddBodyParam, metadata: types.PostPropertiesSpacesUnitTypeUnittypeidAddMetadataParam): Promise<FetchResponse<200, types.PostPropertiesSpacesUnitTypeUnittypeidAddResponse200>>;
  postPropertiesSpacesUnitTypeUnittypeidAdd(metadata: types.PostPropertiesSpacesUnitTypeUnittypeidAddMetadataParam): Promise<FetchResponse<200, types.PostPropertiesSpacesUnitTypeUnittypeidAddResponse200>>;
  postPropertiesSpacesUnitTypeUnittypeidAdd(body?: types.PostPropertiesSpacesUnitTypeUnittypeidAddBodyParam | types.PostPropertiesSpacesUnitTypeUnittypeidAddMetadataParam, metadata?: types.PostPropertiesSpacesUnitTypeUnittypeidAddMetadataParam): Promise<FetchResponse<200, types.PostPropertiesSpacesUnitTypeUnittypeidAddResponse200>> {
    return this.core.fetch('/properties/spaces/unit-type/{unitTypeId}/add', 'post', body, metadata);
  }

  /**
   * Edit space details
   *
   */
  patchPropertiesSpacesSpaceSpaceidDetails(body: types.PatchPropertiesSpacesSpaceSpaceidDetailsBodyParam, metadata: types.PatchPropertiesSpacesSpaceSpaceidDetailsMetadataParam): Promise<FetchResponse<200, types.PatchPropertiesSpacesSpaceSpaceidDetailsResponse200>>;
  patchPropertiesSpacesSpaceSpaceidDetails(metadata: types.PatchPropertiesSpacesSpaceSpaceidDetailsMetadataParam): Promise<FetchResponse<200, types.PatchPropertiesSpacesSpaceSpaceidDetailsResponse200>>;
  patchPropertiesSpacesSpaceSpaceidDetails(body?: types.PatchPropertiesSpacesSpaceSpaceidDetailsBodyParam | types.PatchPropertiesSpacesSpaceSpaceidDetailsMetadataParam, metadata?: types.PatchPropertiesSpacesSpaceSpaceidDetailsMetadataParam): Promise<FetchResponse<200, types.PatchPropertiesSpacesSpaceSpaceidDetailsResponse200>> {
    return this.core.fetch('/properties/spaces/space/{spaceId}/details', 'patch', body, metadata);
  }

  /**
   * Remove space from unit-type
   *
   */
  postPropertiesSpacesSpaceSpaceidRemove(metadata: types.PostPropertiesSpacesSpaceSpaceidRemoveMetadataParam): Promise<FetchResponse<200, types.PostPropertiesSpacesSpaceSpaceidRemoveResponse200>> {
    return this.core.fetch('/properties/spaces/space/{spaceId}/remove', 'post', metadata);
  }

  /**
   * Edit space beds
   *
   */
  postPropertiesSpacesSpaceSpaceidEdit(body: types.PostPropertiesSpacesSpaceSpaceidEditBodyParam, metadata: types.PostPropertiesSpacesSpaceSpaceidEditMetadataParam): Promise<FetchResponse<200, types.PostPropertiesSpacesSpaceSpaceidEditResponse200>>;
  postPropertiesSpacesSpaceSpaceidEdit(metadata: types.PostPropertiesSpacesSpaceSpaceidEditMetadataParam): Promise<FetchResponse<200, types.PostPropertiesSpacesSpaceSpaceidEditResponse200>>;
  postPropertiesSpacesSpaceSpaceidEdit(body?: types.PostPropertiesSpacesSpaceSpaceidEditBodyParam | types.PostPropertiesSpacesSpaceSpaceidEditMetadataParam, metadata?: types.PostPropertiesSpacesSpaceSpaceidEditMetadataParam): Promise<FetchResponse<200, types.PostPropertiesSpacesSpaceSpaceidEditResponse200>> {
    return this.core.fetch('/properties/spaces/space/{spaceId}/edit', 'post', body, metadata);
  }

  /**
   * Retrieve unit-type house-rules
   *
   */
  getPropertiesHouseRulesUnitTypeUnittypeid(metadata: types.GetPropertiesHouseRulesUnitTypeUnittypeidMetadataParam): Promise<FetchResponse<200, types.GetPropertiesHouseRulesUnitTypeUnittypeidResponse200>> {
    return this.core.fetch('/properties/house-rules/unit-type/{unitTypeId}', 'get', metadata);
  }

  /**
   * Update unit-type house-rules
   *
   */
  putPropertiesHouseRulesUnitTypeUnittypeid(body: types.PutPropertiesHouseRulesUnitTypeUnittypeidBodyParam, metadata: types.PutPropertiesHouseRulesUnitTypeUnittypeidMetadataParam): Promise<FetchResponse<number, unknown>>;
  putPropertiesHouseRulesUnitTypeUnittypeid(metadata: types.PutPropertiesHouseRulesUnitTypeUnittypeidMetadataParam): Promise<FetchResponse<number, unknown>>;
  putPropertiesHouseRulesUnitTypeUnittypeid(body?: types.PutPropertiesHouseRulesUnitTypeUnittypeidBodyParam | types.PutPropertiesHouseRulesUnitTypeUnittypeidMetadataParam, metadata?: types.PutPropertiesHouseRulesUnitTypeUnittypeidMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/properties/house-rules/unit-type/{unitTypeId}', 'put', body, metadata);
  }

  /**
   * List house rules
   *
   */
  getPropertiesHouseRules(metadata: types.GetPropertiesHouseRulesMetadataParam): Promise<FetchResponse<200, types.GetPropertiesHouseRulesResponse200>> {
    return this.core.fetch('/properties/house-rules/', 'get', metadata);
  }

  /**
   * Update multiple unit-type house-rules
   *
   */
  postPropertiesHouseRules(body?: types.PostPropertiesHouseRulesBodyParam): Promise<FetchResponse<200, types.PostPropertiesHouseRulesResponse200>> {
    return this.core.fetch('/properties/house-rules/', 'post', body);
  }

  /**
   * Get a list of all complexes, including their IDs, titles, nicknames, propertyIds, and
   * tags
   *
   * @summary Get a list of all complexes
   * @throws FetchError<403, types.GetAllComplexesResponse403> Unauthorized Request
   * @throws FetchError<404, types.GetAllComplexesResponse404> No Complexs were found
   */
  getAllComplexes(): Promise<FetchResponse<200, types.GetAllComplexesResponse200>> {
    return this.core.fetch('/properties-api/complexes', 'get');
  }

  /**
   * Create a new complex and return the ID of the newly created complex
   *
   * @summary Create a new complex
   * @throws FetchError<400, types.AddComplexResponse400> Bad Request
   * @throws FetchError<403, types.AddComplexResponse403> Unauthorized Request
   * @throws FetchError<404, types.AddComplexResponse404> Complex not found
   */
  addComplex(body: types.AddComplexBodyParam): Promise<FetchResponse<201, types.AddComplexResponse201>> {
    return this.core.fetch('/properties-api/complexes', 'post', body);
  }

  /**
   * Get a specific complex based on the complexId
   *
   * @summary Get complex
   * @throws FetchError<403, types.ComplexesControllerGetComplexByIdResponse403> Unauthorized Request
   * @throws FetchError<404, types.ComplexesControllerGetComplexByIdResponse404> Complex not found
   */
  complexesController_getComplexById(metadata: types.ComplexesControllerGetComplexByIdMetadataParam): Promise<FetchResponse<200, types.ComplexesControllerGetComplexByIdResponse200>> {
    return this.core.fetch('/properties-api/complexes/{id}', 'get', metadata);
  }

  /**
   * Updates the details of a specific complex based on the complexId, and returns the
   * modified values
   *
   * @summary Update complex details
   * @throws FetchError<403, types.ComplexesControllerUpdateComplexDetailsResponse403> Unauthorized Request
   * @throws FetchError<404, types.ComplexesControllerUpdateComplexDetailsResponse404> Complex not found
   */
  complexesController_updateComplexDetails(body: types.ComplexesControllerUpdateComplexDetailsBodyParam, metadata: types.ComplexesControllerUpdateComplexDetailsMetadataParam): Promise<FetchResponse<200, types.ComplexesControllerUpdateComplexDetailsResponse200>> {
    return this.core.fetch('/properties-api/complexes/{id}', 'put', body, metadata);
  }

  /**
   * Deletes a specific complex based on the complexId
   *
   * @summary Delete complex
   * @throws FetchError<403, types.ComplexesControllerRemoveComplexResponse403> Unauthorized Request
   * @throws FetchError<404, types.ComplexesControllerRemoveComplexResponse404> Complex not found
   */
  complexesController_removeComplex(metadata: types.ComplexesControllerRemoveComplexMetadataParam): Promise<FetchResponse<200, types.ComplexesControllerRemoveComplexResponse200>> {
    return this.core.fetch('/properties-api/complexes/{id}', 'delete', metadata);
  }

  /**
   * Assign propertyIds to a specific complex based on the complexId, and returns the
   * assigned values
   *
   * @summary Assign propertyIds to a complex
   * @throws FetchError<403, types.ComplexesControllerAssignComplexPropertyIdsResponse403> Unauthorized Request
   * @throws FetchError<404, types.ComplexesControllerAssignComplexPropertyIdsResponse404> Complex not found
   */
  complexesController_assignComplexPropertyIds(body: types.ComplexesControllerAssignComplexPropertyIdsBodyParam, metadata: types.ComplexesControllerAssignComplexPropertyIdsMetadataParam): Promise<FetchResponse<200, types.ComplexesControllerAssignComplexPropertyIdsResponse200>> {
    return this.core.fetch('/properties-api/complexes/{id}/assign', 'put', body, metadata);
  }

  /**
   * Unassign propertyIds from a specific complex based on the complexId, and returns the
   * unassigned values
   *
   * @summary Un-Assign propertyIds from a complex
   * @throws FetchError<403, types.ComplexesControllerUnassignComplexPropertyIdsResponse403> Unauthorized Request
   * @throws FetchError<404, types.ComplexesControllerUnassignComplexPropertyIdsResponse404> Complex not found
   */
  complexesController_unassignComplexPropertyIds(body: types.ComplexesControllerUnassignComplexPropertyIdsBodyParam, metadata: types.ComplexesControllerUnassignComplexPropertyIdsMetadataParam): Promise<FetchResponse<200, types.ComplexesControllerUnassignComplexPropertyIdsResponse200>> {
    return this.core.fetch('/properties-api/complexes/{id}/unassign', 'put', body, metadata);
  }

  /**
   * Get a list of all supported amenities, including their names, groups and channels
   *
   * @summary Get a List of All Supported Amenities
   * @throws FetchError<403, types.GetSupportedAmenitiesResponse403> Unauthorized Request
   */
  getSupportedAmenities(): Promise<FetchResponse<200, types.GetSupportedAmenitiesResponse200>> {
    return this.core.fetch('/properties-api/amenities/supported', 'get');
  }

  /**
   * Get a list of all available amenity groups
   *
   * @summary Get a List Of All Available Amenity Groups
   * @throws FetchError<403, types.GetAmenitiesGroupsResponse403> Unauthorized Request
   */
  getAmenitiesGroups(): Promise<FetchResponse<200, types.GetAmenitiesGroupsResponse200>> {
    return this.core.fetch('/properties-api/amenities/groups', 'get');
  }

  /**
   * Retrieve a property's amenities.
   *
   * @summary Retrieve Property Amenities
   * @throws FetchError<403, types.AmenitiesControllerGetForUnitTypeResponse403> Unauthorized Request
   * @throws FetchError<404, types.AmenitiesControllerGetForUnitTypeResponse404> Amenities not found
   */
  amenitiesController_getForUnitType(metadata: types.AmenitiesControllerGetForUnitTypeMetadataParam): Promise<FetchResponse<200, types.AmenitiesControllerGetForUnitTypeResponse200>> {
    return this.core.fetch('/properties-api/amenities/{propertyId}', 'get', metadata);
  }

  /**
   * Set selected amenities list to the property
   *
   * @summary Set Amenities For Property
   * @throws FetchError<400, types.AmenitiesControllerSetAmenitiesForPropertyResponse400> Only MTL and SINGLE property types are supported
   * @throws FetchError<403, types.AmenitiesControllerSetAmenitiesForPropertyResponse403> Unauthorized Request
   * @throws FetchError<404, types.AmenitiesControllerSetAmenitiesForPropertyResponse404> Unit type not found
   */
  amenitiesController_setAmenitiesForProperty(body: types.AmenitiesControllerSetAmenitiesForPropertyBodyParam, metadata: types.AmenitiesControllerSetAmenitiesForPropertyMetadataParam): Promise<FetchResponse<200, types.AmenitiesControllerSetAmenitiesForPropertyResponse200>> {
    return this.core.fetch('/properties-api/amenities/{propertyId}', 'put', body, metadata);
  }

  /**
   * Retrieve a list of all room photo mappings for each property, including photo ID, space
   * ID, and photo URL.
   *
   * @summary List All Room Photos per Property
   * @throws FetchError<403, types.GetRoomPhotosByPropertyIdResponse403> Unauthorized Request.
   * @throws FetchError<404, types.GetRoomPhotosByPropertyIdResponse404> Property not found.
   */
  getRoomPhotosByPropertyId(metadata: types.GetRoomPhotosByPropertyIdMetadataParam): Promise<FetchResponse<200, types.GetRoomPhotosByPropertyIdResponse200>> {
    return this.core.fetch('/properties-api/room-photos/property/{propertyId}', 'get', metadata);
  }

  /**
   * Assigns the selected photo to a space.
   *
   * @summary Assign a Photo to a Space
   * @throws FetchError<403, types.RoomPhotosControllerAssignRoomPhotoResponse403> Unauthorized Request.
   * @throws FetchError<404, types.RoomPhotosControllerAssignRoomPhotoResponse404> Property not found.
   */
  roomPhotosController_assignRoomPhoto(body: types.RoomPhotosControllerAssignRoomPhotoBodyParam, metadata: types.RoomPhotosControllerAssignRoomPhotoMetadataParam): Promise<FetchResponse<200, types.RoomPhotosControllerAssignRoomPhotoResponse200>> {
    return this.core.fetch('/properties-api/room-photos/photos/{photoId}/assign', 'put', body, metadata);
  }

  /**
   * Removes the selected photo from the designated space.
   *
   * @summary Unassign a Photo from a Space
   * @throws FetchError<403, types.RoomPhotosControllerUnassignRoomPhotoResponse403> Unauthorized Request.
   * @throws FetchError<404, types.RoomPhotosControllerUnassignRoomPhotoResponse404> Property not found.
   */
  roomPhotosController_unassignRoomPhoto(body: types.RoomPhotosControllerUnassignRoomPhotoBodyParam, metadata: types.RoomPhotosControllerUnassignRoomPhotoMetadataParam): Promise<FetchResponse<200, types.RoomPhotosControllerUnassignRoomPhotoResponse200>> {
    return this.core.fetch('/properties-api/room-photos/photos/{photoId}/unassign', 'put', body, metadata);
  }

  /**
   * Get a room photo mapping for a photo, including photo id, space id and photo URL
   *
   * @summary Retrieve a Room Photo by ID
   * @throws FetchError<403, types.Get1Response403> Unauthorized Request.
   * @throws FetchError<404, types.Get1Response404> Photo not found.
   */
  get1(metadata: types.Get1MetadataParam): Promise<FetchResponse<200, types.Get1Response200>> {
    return this.core.fetch('/properties-api/room-photos/photos/{photoId}', 'get', metadata);
  }

  /**
   * Retrieve a list of translation fields for a specific language slug or all languages
   *
   * @summary Get a list of translation fields
   * @throws FetchError<404, types.GetFieldsResponse404> Not Found
   */
  getFields(metadata: types.GetFieldsMetadataParam): Promise<FetchResponse<200, types.GetFieldsResponse200>> {
    return this.core.fetch('/marketing/fields/{id}', 'get', metadata);
  }

  /**
   * Get a list of translation fields for a specific language slug or all languages per
   * channel.
   *
   * @summary [Beta] Get a list of translation fields per channel
   * @throws FetchError<404, types.GetFieldsPerChannelResponse404> Not Found
   */
  getFieldsPerChannel(metadata: types.GetFieldsPerChannelMetadataParam): Promise<FetchResponse<200, types.GetFieldsPerChannelResponse200>> {
    return this.core.fetch('/marketing/fields/{id}/channels/{channel}', 'get', metadata);
  }

  /**
   * Get a list of translation fields for a specific language slug or all languages per
   * description set.
   *
   * @summary [Beta] Get a list of translation fields per description set.
   * @throws FetchError<404, types.GetFieldsPerDescriptionSetResponse404> Not Found
   */
  getFieldsPerDescriptionSet(metadata: types.GetFieldsPerDescriptionSetMetadataParam): Promise<FetchResponse<200, types.GetFieldsPerDescriptionSetResponse200>> {
    return this.core.fetch('/marketing/fields/{id}/description-sets/{descriptionSetId}', 'get', metadata);
  }

  /**
   * Upsert a new translation for specific listing and language slug.
   *
   * @summary Upsert translation
   * @throws FetchError<404, types.UpsertFieldsResponse404> Not Found
   */
  upsertFields(body: types.UpsertFieldsBodyParam, metadata: types.UpsertFieldsMetadataParam): Promise<FetchResponse<200, types.UpsertFieldsResponse200>> {
    return this.core.fetch('/marketing/fields/{id}/upsert', 'put', body, metadata);
  }

  /**
   * Retrieve a list of supported languages.
   *
   * @summary Retrieve a list of supported languages.
   * @throws FetchError<403, types.GetLanguagesResponse403> Unauthorized Request.
   */
  getLanguages(): Promise<FetchResponse<200, types.GetLanguagesResponse200>> {
    return this.core.fetch('/marketing/languages', 'get');
  }

  /**
   * Retrieve a list of supported languages for specific listing by listing id
   *
   * @summary [Beta] Retrieve a list of supported languages for specific listing
   * @throws FetchError<403, types.GetPropertyLanguagesResponse403> Unauthorized Request.
   * @throws FetchError<404, types.GetPropertyLanguagesResponse404> Not Found
   */
  getPropertyLanguages(metadata: types.GetPropertyLanguagesMetadataParam): Promise<FetchResponse<200, types.GetPropertyLanguagesResponse200>> {
    return this.core.fetch('/marketing/languages/{id}', 'get', metadata);
  }

  /**
   * Upsert supported languages for specific listing
   *
   * @summary [Beta] upsert supported languages for specific listing
   * @throws FetchError<403, types.UpsertPropertyLanguagesResponse403> Unauthorized Request.
   * @throws FetchError<404, types.UpsertPropertyLanguagesResponse404> Not Found
   */
  upsertPropertyLanguages(body: types.UpsertPropertyLanguagesBodyParam, metadata: types.UpsertPropertyLanguagesMetadataParam): Promise<FetchResponse<200, types.UpsertPropertyLanguagesResponse200>> {
    return this.core.fetch('/marketing/languages/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve a list of supported channels.
   *
   * @summary Retrieve a list of supported channels.
   * @throws FetchError<403, types.GetChannelsResponse403> Unauthorized Request.
   */
  getChannels(): Promise<FetchResponse<200, types.GetChannelsResponse200>> {
    return this.core.fetch('/marketing/channels', 'get');
  }

  /**
   * Retrieve a list of description sets for a specific Listing.
   *
   * @summary [Beta] Get a list of description sets.
   * @throws FetchError<403, types.GetDescriptionSetsResponse403> Unauthorized Request.
   * @throws FetchError<404, types.GetDescriptionSetsResponse404> Not Found
   */
  getDescriptionSets(metadata: types.GetDescriptionSetsMetadataParam): Promise<FetchResponse<200, types.GetDescriptionSetsResponse200>> {
    return this.core.fetch('/marketing/description-sets/{listingId}', 'get', metadata);
  }

  /**
   * Create a new Description Set.
   *
   * @summary [Beta] Create Description Set.
   * @throws FetchError<403, types.CreateDescriptionSetResponse403> Unauthorized Request.
   * @throws FetchError<404, types.CreateDescriptionSetResponse404> Not Found
   */
  createDescriptionSet(body: types.CreateDescriptionSetBodyParam): Promise<FetchResponse<200, types.CreateDescriptionSetResponse200>> {
    return this.core.fetch('/marketing/description-sets', 'post', body);
  }

  /**
   * Update the Description Set.
   *
   * @summary [Beta] Update Description Set.
   * @throws FetchError<403, types.UpdateDescriptionSetResponse403> Unauthorized Request.
   * @throws FetchError<404, types.UpdateDescriptionSetResponse404> Not Found
   */
  updateDescriptionSet(body: types.UpdateDescriptionSetBodyParam, metadata: types.UpdateDescriptionSetMetadataParam): Promise<FetchResponse<200, types.UpdateDescriptionSetResponse200>> {
    return this.core.fetch('/marketing/description-sets/{id}', 'put', body, metadata);
  }

  /**
   * Delete the Description Set.
   *
   * @summary [Beta] Delete Description Set.
   * @throws FetchError<403, types.DeleteDescriptionSetResponse403> Unauthorized Request.
   * @throws FetchError<404, types.DeleteDescriptionSetResponse404> Not Found
   */
  deleteDescriptionSet(metadata: types.DeleteDescriptionSetMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/marketing/description-sets/{id}', 'delete', metadata);
  }

  /**
   * Get the listing address of the given property.
   *
   * @summary Retrieve Property Address
   * @throws FetchError<403, types.AddressControllerGetAddressResponse403> Unauthorized Request.
   * @throws FetchError<404, types.AddressControllerGetAddressResponse404> Address not found.
   */
  addressController_getAddress(metadata: types.AddressControllerGetAddressMetadataParam): Promise<FetchResponse<200, types.AddressControllerGetAddressResponse200>> {
    return this.core.fetch('/address/{id}', 'get', metadata);
  }

  /**
   * Converts the full address into latitude and longitude coordinates and populates
   * individual address fields.
   *
   * @summary Geocode Location by Full Address
   * @throws FetchError<403, types.AddressControllerGeocodeAddressResponse403> Unauthorized Request.
   */
  addressController_geocodeAddress(body: types.AddressControllerGeocodeAddressBodyParam): Promise<FetchResponse<200, types.AddressControllerGeocodeAddressResponse200>> {
    return this.core.fetch('/address/geocode', 'post', body);
  }

  /**
   * Edit the address of a given property. If it is a multi-unit, all sub-units will be
   * updated too.
   *
   * @summary Update Property Address
   * @throws FetchError<403, types.AddressControllerUpdateAddressResponse403> Unauthorized Request.
   * @throws FetchError<404, types.AddressControllerUpdateAddressResponse404> Address not found.
   */
  addressController_updateAddress(body: types.AddressControllerUpdateAddressBodyParam, metadata: types.AddressControllerUpdateAddressMetadataParam): Promise<FetchResponse<200, types.AddressControllerUpdateAddressResponse200>> {
    return this.core.fetch('/address/{id}/update', 'put', body, metadata);
  }

  /**
   * Edit a complex's address. All children will be updated too.
   *
   * @summary Update Complex Address
   * @throws FetchError<403, types.AddressControllerUpdateComplexAddressResponse403> Unauthorized Request.
   * @throws FetchError<404, types.AddressControllerUpdateComplexAddressResponse404> Address not found.
   */
  addressController_updateComplexAddress(body: types.AddressControllerUpdateComplexAddressBodyParam, metadata: types.AddressControllerUpdateComplexAddressMetadataParam): Promise<FetchResponse<200, types.AddressControllerUpdateComplexAddressResponse200>> {
    return this.core.fetch('/address/{id}/update/complex', 'put', body, metadata);
  }

  /**
   * Use this call to send a [pre-approval](https://www.airbnb.com/help/article/35).
   *
   * @summary Pre-approve an existing inquiry (Airbnb)
   * @throws FetchError<400, types.PostReservationsApiReservationsReservationidPreApproveResponse400> Invalid request
   * @throws FetchError<500, types.PostReservationsApiReservationsReservationidPreApproveResponse500> Unhandled exception. Something went wrong on server.
   */
  postReservationsApiReservationsReservationidPreApprove(metadata: types.PostReservationsApiReservationsReservationidPreApproveMetadataParam): Promise<FetchResponse<200, types.PostReservationsApiReservationsReservationidPreApproveResponse200>> {
    return this.core.fetch('/reservations-api/reservations/{reservationId}/pre-approve', 'post', metadata);
  }

  /**
   * Create a reservation based on an existing quote with all the necessary reservation data.
   * You can create a quote using the [dedicated
   * endpoint](https://open-api-docs.guesty.com/reference/quotesopenapicontroller_create) or
   * the [booking engine
   * API](https://booking-api-docs.guesty.com/reference/createreservationquote).
   *
   * @summary Create a reservation from quote
   */
  reservationsOpenApiController_createReservation(body: types.ReservationsOpenApiControllerCreateReservationBodyParam): Promise<FetchResponse<200, types.ReservationsOpenApiControllerCreateReservationResponse200>> {
    return this.core.fetch('/reservations-v3/quote', 'post', body);
  }

  /**
   * Create a confirmed owner reservation - This endpoint enables the creation of an Owner
   * Reservation instantly with minimal required input. It is designed for simplicity and
   * speed, focusing on essential details only. Behind the scenes, it will create a quote +
   * reservation from a quote picking the first applicable rate plan and promotions
   *
   * @summary Create a confirmed owner reservation
   */
  reservationsOpenApiController_createOwnerConfirmed(body: types.ReservationsOpenApiControllerCreateOwnerConfirmedBodyParam): Promise<FetchResponse<200, types.ReservationsOpenApiControllerCreateOwnerConfirmedResponse200>> {
    return this.core.fetch('/reservations-v3/owner/confirmed', 'post', body);
  }

  /**
   * Create a reservation without needing a quote. When the listing doesn't have an active
   * rate plan assigned, a default rate plan is selected. Otherwise, the first active rate
   * plan is selected.
   *
   * @summary Create a Reservation Without a Quote
   */
  reservationsOpenApiController_quickBooking(body: types.ReservationsOpenApiControllerQuickBookingBodyParam): Promise<FetchResponse<201, types.ReservationsOpenApiControllerQuickBookingResponse201>> {
    return this.core.fetch('/reservations-v3', 'post', body);
  }

  /**
   * Retrieve multiple reservations by ID. Use this endpoint to get all the relevant
   * information about your reservation including the financial breakdown and guest details
   *
   * @summary Retrieve Reservations
   */
  reservationsOpenApiController_getReservationsByIds(metadata: types.ReservationsOpenApiControllerGetReservationsByIdsMetadataParam): Promise<FetchResponse<200, types.ReservationsOpenApiControllerGetReservationsByIdsResponse200>> {
    return this.core.fetch('/reservations-v3', 'get', metadata);
  }

  /**
   * Change the guest stay status of the reservation
   *
   * @summary Change Reservation Guest Stay Status
   */
  reservationsOpenApiController_changeStay(body: types.ReservationsOpenApiControllerChangeStayBodyParam): Promise<FetchResponse<200, types.ReservationsOpenApiControllerChangeStayResponse200>> {
    return this.core.fetch('/reservations-v3/guest-stay', 'put', body);
  }

  /**
   * Change a reservation's source and point of sale parameters and choose whether to
   * recalculate financials
   *
   * @summary Change Reservation Source
   */
  reservationsOpenApiController_updateReservationSource(body: types.ReservationsOpenApiControllerUpdateReservationSourceBodyParam, metadata: types.ReservationsOpenApiControllerUpdateReservationSourceMetadataParam): Promise<FetchResponse<200, types.ReservationsOpenApiControllerUpdateReservationSourceResponse200>> {
    return this.core.fetch('/reservations-v3/{reservationId}/source', 'put', body, metadata);
  }

  /**
   * Update reservation notes, including the key code and special requests fields
   *
   * @summary Update Reservation notes
   */
  reservationsOpenApiController_updateReservationNotes(body: types.ReservationsOpenApiControllerUpdateReservationNotesBodyParam, metadata: types.ReservationsOpenApiControllerUpdateReservationNotesMetadataParam): Promise<FetchResponse<200, types.ReservationsOpenApiControllerUpdateReservationNotesResponse200>> {
    return this.core.fetch('/reservations-v3/{reservationId}/notes', 'put', body, metadata);
  }

  /**
   * Change the check-in or check-out date and time for a specific reservation. Modifying the
   * date will automatically trigger a financial recalculation, regardless of the
   * `applyRecalculation` flag
   *
   * @summary Update Reservation Dates
   */
  reservationsOpenApiController_updateReservationDates(body: types.ReservationsOpenApiControllerUpdateReservationDatesBodyParam, metadata: types.ReservationsOpenApiControllerUpdateReservationDatesMetadataParam): Promise<FetchResponse<200, types.ReservationsOpenApiControllerUpdateReservationDatesResponse200>> {
    return this.core.fetch('/reservations-v3/{reservationId}/dates', 'put', body, metadata);
  }

  /**
   * Change a listing for specific reservations.
   *
   * @summary Update reservation listing
   */
  reservationsOpenApiController_updateReservationListing(body: types.ReservationsOpenApiControllerUpdateReservationListingBodyParam, metadata: types.ReservationsOpenApiControllerUpdateReservationListingMetadataParam): Promise<FetchResponse<200, types.ReservationsOpenApiControllerUpdateReservationListingResponse200>> {
    return this.core.fetch('/reservations-v3/{reservationId}/relocate', 'put', body, metadata);
  }

  /**
   * Choose between inquiry/reserved/confirmed/canceled
   *
   * @summary Update reservation status
   */
  reservationsOpenApiController_updateReservationStatus(body: types.ReservationsOpenApiControllerUpdateReservationStatusBodyParam, metadata: types.ReservationsOpenApiControllerUpdateReservationStatusMetadataParam): Promise<FetchResponse<200, types.ReservationsOpenApiControllerUpdateReservationStatusResponse200>> {
    return this.core.fetch('/reservations-v3/{reservationId}/status', 'put', body, metadata);
  }

  /**
   * Update the reservation guest count, including the guest breakdown object (adults,
   * children, infants, pets, etc.). Financial recalculation is automatically applied
   *
   * @summary Update Reservation Guests Breakdown
   */
  reservationsOpenApiController_updateReservationGuests(body: types.ReservationsOpenApiControllerUpdateReservationGuestsBodyParam, metadata: types.ReservationsOpenApiControllerUpdateReservationGuestsMetadataParam): Promise<FetchResponse<200, types.ReservationsOpenApiControllerUpdateReservationGuestsResponse200>> {
    return this.core.fetch('/reservations-v3/{reservationId}/guests', 'put', body, metadata);
  }

  /**
   * Edit the values of any custom fields on an existing reservation.
   *
   * @summary Update reservation's Custom Fields
   */
  reservationsOpenApiController_updateReservationCustomFields(body: types.ReservationsOpenApiControllerUpdateReservationCustomFieldsBodyParam, metadata: types.ReservationsOpenApiControllerUpdateReservationCustomFieldsMetadataParam): Promise<FetchResponse<200, types.ReservationsOpenApiControllerUpdateReservationCustomFieldsResponse200>> {
    return this.core.fetch('/reservations-v3/{reservationId}/custom-fields', 'put', body, metadata);
  }

  /**
   * Get group reservation by group id, including it's sub reservations (up to 25 sub
   * reservations)
   *
   * @summary Get group reservation by group id
   */
  groupReservationsOpenAPIController_getGroupReservation(metadata: types.GroupReservationsOpenApiControllerGetGroupReservationMetadataParam): Promise<FetchResponse<200, types.GroupReservationsOpenApiControllerGetGroupReservationResponse200>> {
    return this.core.fetch('/reservations-v3/group/{groupId}', 'get', metadata);
  }

  /**
   * This endpoint allows the creation of a group reservation, based on an array of quotes
   *
   * @summary Create a group reservation
   */
  groupReservationsOpenAPIController_create(body: types.GroupReservationsOpenApiControllerCreateBodyParam): Promise<FetchResponse<201, types.GroupReservationsOpenApiControllerCreateResponse201>> {
    return this.core.fetch('/reservations-v3/group', 'post', body);
  }

  /**
   * This endpoint allows retrieval of a specific quote using its unique ID. It is used to
   * fetch details of a previously created quote. If the quote has expired, the endpoint
   * returns an error message indicating that the quote is expired and suggests creating a
   * new quote.
   *
   * @summary Retrieve a Quote by ID
   */
  quotesOpenApiController_getQuote(metadata: types.QuotesOpenApiControllerGetQuoteMetadataParam): Promise<FetchResponse<200, types.QuotesOpenApiControllerGetQuoteResponse200>> {
    return this.core.fetch('/quotes/{quoteId}', 'get', metadata);
  }

  /**
   * This endpoint allows the creation of a price quote for a reservation. It requires
   * details such as the listing ID, check-in and check-out dates, and guest count. The
   * response includes detailed information about the quote, including rates, promotions, and
   * applicable fees.
   *
   * @summary Create a Quote
   */
  quotesOpenApiController_create(body: types.QuotesOpenApiControllerCreateBodyParam): Promise<FetchResponse<201, types.QuotesOpenApiControllerCreateResponse201>> {
    return this.core.fetch('/quotes', 'post', body);
  }

  /**
   * This endpoint allows the creation of multiple price quotes for a reservation.
   *
   * @summary Create multiple quotes for reservation
   */
  quotesOpenApiController_createMultiple(body: types.QuotesOpenApiControllerCreateMultipleBodyParam): Promise<FetchResponse<201, types.QuotesOpenApiControllerCreateMultipleResponse201>> {
    return this.core.fetch('/quotes/multiple', 'post', body);
  }

  /**
   * Add coupons to an existing quote
   *
   * @summary Add coupons to an existing quote
   */
  quotesOpenApiController_changeCoupons(body: types.QuotesOpenApiControllerChangeCouponsBodyParam, metadata: types.QuotesOpenApiControllerChangeCouponsMetadataParam): Promise<FetchResponse<200, types.QuotesOpenApiControllerChangeCouponsResponse200>> {
    return this.core.fetch('/quotes/{quoteId}/coupons', 'post', body, metadata);
  }

  /**
   * Retrieves a report of reservations based on the view ID
   *
   * @summary Get reservations report by view id
   */
  reservationsReportsOpenApiController_getReportByViewId(metadata: types.ReservationsReportsOpenApiControllerGetReportByViewIdMetadataParam): Promise<FetchResponse<200, types.ReservationsReportsOpenApiControllerGetReportByViewIdResponse200>> {
    return this.core.fetch('/reservations-reports/{viewId}', 'get', metadata);
  }

  /**
   * Retrieve reviews sorted descending by last update time
   *
   * @summary Retrieve reviews sorted descending by last update time
   */
  reviewController_getReviews(metadata?: types.ReviewControllerGetReviewsMetadataParam): Promise<FetchResponse<200, types.ReviewControllerGetReviewsResponse200>> {
    return this.core.fetch('/reviews', 'get', metadata);
  }

  /**
   * Publish a review by channel
   *
   * @summary Publish a review by channel
   */
  reviewController_upsertReview(body: types.ReviewControllerUpsertReviewBodyParam): Promise<FetchResponse<200, types.ReviewControllerUpsertReviewResponse200>> {
    return this.core.fetch('/reviews', 'put', body);
  }

  /**
   * Retrieve Average reviews score by Listings IDs
   *
   * @summary Retrieve Average reviews score by Listings IDs
   */
  reviewController_getListingsAverageReview(metadata: types.ReviewControllerGetListingsAverageReviewMetadataParam): Promise<FetchResponse<200, types.ReviewControllerGetListingsAverageReviewResponse200>> {
    return this.core.fetch('/reviews/listings-average', 'get', metadata);
  }

  /**
   * Retrieve a review
   *
   * @summary Retrieve a review
   */
  reviewController_getReview(metadata: types.ReviewControllerGetReviewMetadataParam): Promise<FetchResponse<200, types.ReviewControllerGetReviewResponse200>> {
    return this.core.fetch('/reviews/{reviewId}', 'get', metadata);
  }

  /**
   * Publish reply to channel and store in DB. Airbnb and Booking.com allow to publish only
   * one reply per review. Airbnb allows to update reply. Booking.com does not allow to
   * update reply
   *
   * @summary Publish review reply to channel
   */
  reviewController_upsertReviewReply(body: types.ReviewControllerUpsertReviewReplyBodyParam, metadata: types.ReviewControllerUpsertReviewReplyMetadataParam): Promise<FetchResponse<200, types.ReviewControllerUpsertReviewReplyResponse200>> {
    return this.core.fetch('/reviews/{reviewId}/reply', 'put', body, metadata);
  }

  /**
   * Get promotion list by account id.
   *
   * @summary Get promotion list by account id.
   */
  promotionController_getList(): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/rm-promotions/promotions', 'get');
  }

  /**
   * Assign listings to promotion.
   *
   * @summary Assign listings to promotion.
   */
  promotionController_assignListings(body: types.PromotionControllerAssignListingsBodyParam, metadata: types.PromotionControllerAssignListingsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/rm-promotions/promotions/{promotionId}/assign', 'put', body, metadata);
  }

  /**
   * Unassign listings from promotion.
   *
   * @summary Unassign listings from promotion.
   */
  promotionController_unassignListings(body: types.PromotionControllerUnassignListingsBodyParam, metadata: types.PromotionControllerUnassignListingsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/rm-promotions/promotions/{promotionId}/unassign', 'put', body, metadata);
  }

  /**
   * Retrieves all rate plans by channel. 
   *
   *  Currently in pilot, the Rate Plans API allows the creation and management of
   * independent rate plans that are not visible or editable within the Guesty UI. This API
   * is available exclusively for <a href="http://Booking.com">Booking.com</a>   and direct
   * reservations. 
   *
   * To participate in the pilot, customers should contact Guesty for an eligibility review
   * and to receive detailed information on potential limitations and risks.
   *
   * @summary Get All Rate Plans
   */
  ratePlanController_getAll(metadata: types.RatePlanControllerGetAllMetadataParam): Promise<FetchResponse<200, types.RatePlanControllerGetAllResponse200>> {
    return this.core.fetch('/rm-rate-plans-ext/rate-plans', 'get', metadata);
  }

  /**
   * Creates a Rate Plan. 
   *
   *  Currently in pilot, the Rate Plans API allows the creation and management of
   * independent rate plans that are not visible or editable within the Guesty UI. This API
   * is available exclusively for <a href="http://Booking.com">Booking.com</a>   and direct
   * reservations. 
   *
   * To participate in the pilot, customers should contact Guesty for an eligibility review
   * and to receive detailed information on potential limitations and risks.
   *
   * @summary Create a Rate Plan
   * @throws FetchError<400, types.RatePlanControllerCreateResponse400> Bad request
   */
  ratePlanController_create(body: types.RatePlanControllerCreateBodyParam): Promise<FetchResponse<201, types.RatePlanControllerCreateResponse201>> {
    return this.core.fetch('/rm-rate-plans-ext/rate-plans', 'post', body);
  }

  /**
   * Retrieves a rate plan by querying its ID. 
   *
   *  Currently in pilot, the Rate Plans API allows the creation and management of
   * independent rate plans that are not visible or editable within the Guesty UI. This API
   * is available exclusively for <a href="http://Booking.com">Booking.com</a>   and direct
   * reservations. 
   *
   * To participate in the pilot, customers should contact Guesty for an eligibility review
   * and to receive detailed information on potential limitations and risks.
   *
   * @summary Get a Rate Plan by ID
   * @throws FetchError<404, types.RatePlanControllerGetByIdResponse404> Not found
   */
  ratePlanController_getById(metadata: types.RatePlanControllerGetByIdMetadataParam): Promise<FetchResponse<200, types.RatePlanControllerGetByIdResponse200>> {
    return this.core.fetch('/rm-rate-plans-ext/rate-plans/{ratePlanId}', 'get', metadata);
  }

  /**
   * Updates an existing rate plan. 
   *
   *  Currently in pilot, the Rate Plans API allows the creation and management of
   * independent rate plans that are not visible or editable within the Guesty UI. This API
   * is available exclusively for <a href="http://Booking.com">Booking.com</a>   and direct
   * reservations. 
   *
   * To participate in the pilot, customers should contact Guesty for an eligibility review
   * and to receive detailed information on potential limitations and risks.
   *
   * @summary Update a Rate Plan
   * @throws FetchError<400, types.RatePlanControllerUpdateResponse400> Bad request
   * @throws FetchError<404, types.RatePlanControllerUpdateResponse404> Not found
   */
  ratePlanController_update(body: types.RatePlanControllerUpdateBodyParam, metadata: types.RatePlanControllerUpdateMetadataParam): Promise<FetchResponse<200, types.RatePlanControllerUpdateResponse200>> {
    return this.core.fetch('/rm-rate-plans-ext/rate-plans/{ratePlanId}', 'put', body, metadata);
  }

  /**
   * patch rate plan.  
   *
   *  Currently in pilot, the Rate Plans API allows the creation and management of
   * independent rate plans that are not visible or editable within the Guesty UI. This API
   * is available exclusively for <a href="http://Booking.com">Booking.com</a>   and direct
   * reservations. 
   *
   * To participate in the pilot, customers should contact Guesty for an eligibility review
   * and to receive detailed information on potential limitations and risks.
   *
   * @summary patch rate plan
   * @throws FetchError<400, types.RatePlanControllerPatchResponse400> Bad request
   * @throws FetchError<404, types.RatePlanControllerPatchResponse404> Not found
   */
  ratePlanController_patch(body: types.RatePlanControllerPatchBodyParam, metadata: types.RatePlanControllerPatchMetadataParam): Promise<FetchResponse<200, types.RatePlanControllerPatchResponse200>> {
    return this.core.fetch('/rm-rate-plans-ext/rate-plans/{ratePlanId}', 'patch', body, metadata);
  }

  /**
   * Deletes an existing rate plan. 
   *
   *  Currently in pilot, the Rate Plans API allows the creation and management of
   * independent rate plans that are not visible or editable within the Guesty UI. This API
   * is available exclusively for <a href="http://Booking.com">Booking.com</a>   and direct
   * reservations. 
   *
   * To participate in the pilot, customers should contact Guesty for an eligibility review
   * and to receive detailed information on potential limitations and risks.
   *
   * @summary Remove a Rate Plan
   * @throws FetchError<404, types.RatePlanControllerRemoveResponse404> Not found
   */
  ratePlanController_remove(metadata: types.RatePlanControllerRemoveMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/rm-rate-plans-ext/rate-plans/{ratePlanId}', 'delete', metadata);
  }

  /**
   * Assigns listings to a rate plan. 
   *
   *  Currently in pilot, the Rate Plans API allows the creation and management of
   * independent rate plans that are not visible or editable within the Guesty UI. This API
   * is available exclusively for <a href="http://Booking.com">Booking.com</a>   and direct
   * reservations. 
   *
   * To participate in the pilot, customers should contact Guesty for an eligibility review
   * and to receive detailed information on potential limitations and risks.
   *
   * @summary Assign Properties to a Rate Plan
   * @throws FetchError<400, types.RatePlanControllerInitAssignListingsResponse400> Bad request
   * @throws FetchError<404, types.RatePlanControllerInitAssignListingsResponse404> Not found
   */
  ratePlanController_initAssignListings(body: types.RatePlanControllerInitAssignListingsBodyParam, metadata: types.RatePlanControllerInitAssignListingsMetadataParam): Promise<FetchResponse<202, types.RatePlanControllerInitAssignListingsResponse202>> {
    return this.core.fetch('/rm-rate-plans-ext/rate-plans/{ratePlanId}/init-assign-listings', 'put', body, metadata);
  }

  /**
   * Removes listings from a rate plan. 
   *
   *  Currently in pilot, the Rate Plans API allows the creation and management of
   * independent rate plans that are not visible or editable within the Guesty UI. This API
   * is available exclusively for <a href="http://Booking.com">Booking.com</a>   and direct
   * reservations. 
   *
   * To participate in the pilot, customers should contact Guesty for an eligibility review
   * and to receive detailed information on potential limitations and risks.
   *
   * @summary Unassign Properties from a Rate Plan
   * @throws FetchError<400, types.RatePlanControllerInitUnassignListingsResponse400> Bad request
   * @throws FetchError<404, types.RatePlanControllerInitUnassignListingsResponse404> Not found
   */
  ratePlanController_initUnassignListings(body: types.RatePlanControllerInitUnassignListingsBodyParam, metadata: types.RatePlanControllerInitUnassignListingsMetadataParam): Promise<FetchResponse<202, types.RatePlanControllerInitUnassignListingsResponse202>> {
    return this.core.fetch('/rm-rate-plans-ext/rate-plans/{ratePlanId}/init-unassign-listings', 'put', body, metadata);
  }

  /**
   * Retrieve rate plans by the listing ID. 
   *
   *  Currently in pilot, the Rate Plans API allows the creation and management of
   * independent rate plans that are not visible or editable within the Guesty UI. This API
   * is available exclusively for <a href="http://Booking.com">Booking.com</a>   and direct
   * reservations. 
   *
   * To participate in the pilot, customers should contact Guesty for an eligibility review
   * and to receive detailed information on potential limitations and risks.
   *
   * @summary Get Rate Plans by Property
   * @throws FetchError<404, types.RatePlanControllerGetByListingResponse404> Not found
   */
  ratePlanController_getByListing(metadata: types.RatePlanControllerGetByListingMetadataParam): Promise<FetchResponse<200, types.RatePlanControllerGetByListingResponse200>> {
    return this.core.fetch('/rm-rate-plans-ext/rate-plans/listing/{listingId}', 'get', metadata);
  }

  /**
   * Retrieves the rate plan's rates, availability and inventory by calendar date.
   *
   * @summary GET Rate Plan Calendar
   */
  ariCalendarController_get(metadata: types.AriCalendarControllerGetMetadataParam): Promise<FetchResponse<200, types.AriCalendarControllerGetResponse200>> {
    return this.core.fetch('/rm-rate-plans-ext/ari-calendar/listing/{listingId}/ratePlan/{ratePlanId}', 'get', metadata);
  }

  /**
   * Set rate plan calendar availability, rates and inventory.
   *
   * @summary Upsert Rate Plan ARI Calendar
   * @throws FetchError<400, types.AriCalendarControllerUpsertResponse400> Bad request
   */
  ariCalendarController_upsert(body: types.AriCalendarControllerUpsertBodyParam, metadata: types.AriCalendarControllerUpsertMetadataParam): Promise<FetchResponse<200, types.AriCalendarControllerUpsertResponse200>> {
    return this.core.fetch('/rm-rate-plans-ext/ari-calendar/listing/{listingId}/ratePlan/{ratePlanId}', 'put', body, metadata);
  }

  /**
   * Use this endpoint to retrieve an account's associated rate strategy settings.
   *
   * @summary Retrieve All Rate Strategies.
   */
  rateStrategyController_getList(): Promise<FetchResponse<200, types.RateStrategyControllerGetListResponse200>> {
    return this.core.fetch('/rm-rate-strategies-open-api/rate-strategies', 'get');
  }

  /**
   * Use this endpoint to retrieve the property's associated rate strategy settings.
   *
   * @summary Retrieve Property's Rate Strategy.
   */
  rateStrategyController_getByUnitTypeId(metadata: types.RateStrategyControllerGetByUnitTypeIdMetadataParam): Promise<FetchResponse<200, types.RateStrategyControllerGetByUnitTypeIdResponse200>> {
    return this.core.fetch('/rm-rate-strategies-open-api/rate-strategies/unitType/{unitTypeId}', 'get', metadata);
  }

  /**
   * Get a specific Smart Calendar Rule
   *
   * @summary Get smart calendar rule
   */
  scrOpenApiController_getScrByPublicId(metadata: types.ScrOpenApiControllerGetScrByPublicIdMetadataParam): Promise<FetchResponse<200, types.ScrOpenApiControllerGetScrByPublicIdResponse200>> {
    return this.core.fetch('/api/scr-v2/open-api/{scrId}', 'get', metadata);
  }

  /**
   * Remove a specific Smart Calendar Rule from Guesty.
   *
   * @summary Remove a Smart Calendar Rule
   */
  scrOpenApiController_removeSmartCalendarRule(metadata: types.ScrOpenApiControllerRemoveSmartCalendarRuleMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/scr-v2/open-api/{scrId}', 'delete', metadata);
  }

  /**
   * Update a specific Smart Calendar Rule in Guesty
   *
   * @summary Update a Smart Calendar Rule
   */
  scrOpenApiController_updateScr(body: types.ScrOpenApiControllerUpdateScrBodyParam, metadata: types.ScrOpenApiControllerUpdateScrMetadataParam): Promise<FetchResponse<200, types.ScrOpenApiControllerUpdateScrResponse200>> {
    return this.core.fetch('/api/scr-v2/open-api/{scrId}', 'put', body, metadata);
  }

  /**
   * Get a list of Smart Calendar Rules based on specific property
   *
   * @summary Get Smart Calendar Rules per listing
   */
  scrOpenApiController_getScrList(metadata: types.ScrOpenApiControllerGetScrListMetadataParam): Promise<FetchResponse<200, types.ScrOpenApiControllerGetScrListResponse200>> {
    return this.core.fetch('/api/scr-v2/open-api/{listingId}/list', 'get', metadata);
  }

  /**
   * Create a new smart calendar rule in Guesty to sync between two or more property
   * calendars
   *
   * @summary Create a smart calendar rule
   */
  scrOpenApiController_createScr(body: types.ScrOpenApiControllerCreateScrBodyParam): Promise<FetchResponse<201, types.ScrOpenApiControllerCreateScrResponse201>> {
    return this.core.fetch('/api/scr-v2/open-api', 'post', body);
  }

  /**
   * Get guest code data for reservations with future check-out times, by reservation ID.
   *       Note: The main guest codes are codes with "purpose" set to "GUEST".
   *       Codes with "purpose" set to "GUEST_BACKUP" are codes to share with guests in case
   * the "GUEST" code has errors, starting from the check-in day.
   *       "GUEST_BACKUP" codes are a dynamic pool of codes associated with reservations on
   * check-in day. When fetching a "GUEST_BACKUP" code before the check-in day, the code is
   * not guaranteed to stay the same until the check-in day.
   *
   * @summary Get guest code
   * @throws FetchError<400, types.ReservationAccessCodeControllerGetLocksAndCodesByReservationResponse400> Bad request
   * @throws FetchError<404, types.ReservationAccessCodeControllerGetLocksAndCodesByReservationResponse404> Can't find reservation, by provided ID
   */
  reservationAccessCodeController_getLocksAndCodesByReservation(metadata: types.ReservationAccessCodeControllerGetLocksAndCodesByReservationMetadataParam): Promise<FetchResponse<200, types.ReservationAccessCodeControllerGetLocksAndCodesByReservationResponse200>> {
    return this.core.fetch('/guest-code', 'get', metadata);
  }

  /**
   * Get a list of vendors
   *
   * @summary Query vendors
   * @throws FetchError<400, types.VendorsControllerGetAllResponse400> Validation failed
   * @throws FetchError<403, types.VendorsControllerGetAllResponse403> You do not have sufficient permissions to access this resource
   * @throws FetchError<500, types.VendorsControllerGetAllResponse500> Unhandled exception. Something went wrong on server
   */
  vendorsController_getAll(metadata?: types.VendorsControllerGetAllMetadataParam): Promise<FetchResponse<200, types.VendorsControllerGetAllResponse200>> {
    return this.core.fetch('/vendors', 'get', metadata);
  }

  /**
   * Get specific vendor by ID
   *
   * @summary Query a vendor
   * @throws FetchError<403, types.VendorsControllerGetByIdResponse403> You do not have sufficient permissions to access this resource
   * @throws FetchError<404, types.VendorsControllerGetByIdResponse404> Can't find vendor, by provided ID
   * @throws FetchError<500, types.VendorsControllerGetByIdResponse500> Unhandled exception. Something went wrong on server
   */
  vendorsController_getById(metadata: types.VendorsControllerGetByIdMetadataParam): Promise<FetchResponse<200, types.VendorsControllerGetByIdResponse200>> {
    return this.core.fetch('/vendors/{id}', 'get', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { AddComplexBodyParam, AddComplexResponse201, AddComplexResponse400, AddComplexResponse403, AddComplexResponse404, AddressControllerGeocodeAddressBodyParam, AddressControllerGeocodeAddressResponse200, AddressControllerGeocodeAddressResponse403, AddressControllerGetAddressMetadataParam, AddressControllerGetAddressResponse200, AddressControllerGetAddressResponse403, AddressControllerGetAddressResponse404, AddressControllerUpdateAddressBodyParam, AddressControllerUpdateAddressMetadataParam, AddressControllerUpdateAddressResponse200, AddressControllerUpdateAddressResponse403, AddressControllerUpdateAddressResponse404, AddressControllerUpdateComplexAddressBodyParam, AddressControllerUpdateComplexAddressMetadataParam, AddressControllerUpdateComplexAddressResponse200, AddressControllerUpdateComplexAddressResponse403, AddressControllerUpdateComplexAddressResponse404, AirbnbResolutionsControllerListResolutionsMetadataParam, AmenitiesControllerGetForUnitTypeMetadataParam, AmenitiesControllerGetForUnitTypeResponse200, AmenitiesControllerGetForUnitTypeResponse403, AmenitiesControllerGetForUnitTypeResponse404, AmenitiesControllerSetAmenitiesForPropertyBodyParam, AmenitiesControllerSetAmenitiesForPropertyMetadataParam, AmenitiesControllerSetAmenitiesForPropertyResponse200, AmenitiesControllerSetAmenitiesForPropertyResponse400, AmenitiesControllerSetAmenitiesForPropertyResponse403, AmenitiesControllerSetAmenitiesForPropertyResponse404, AriCalendarControllerGetMetadataParam, AriCalendarControllerGetResponse200, AriCalendarControllerUpsertBodyParam, AriCalendarControllerUpsertMetadataParam, AriCalendarControllerUpsertResponse200, AriCalendarControllerUpsertResponse400, AssignListingControllerUpdateBodyParam, AssignListingControllerUpdateMetadataParam, AssignListingControllerUpdateResponse200, AssignListingControllerUpdateResponse400, AssignListingControllerUpdateResponse403, AssignListingControllerUpdateResponse404, AssignListingControllerUpdateResponse500, BusinessModelsOaControllerIndexMetadataParam, BusinessModelsOaControllerIndexResponse200, BusinessModelsOaControllerIndexResponse400, BusinessModelsOaControllerIndexResponse403, BusinessModelsOaControllerIndexResponse404, BusinessModelsOaControllerIndexResponse500, CalendarLogsOpenApiControllerGetCalendarLogsMetadataParam, CalendarLogsOpenApiControllerGetCalendarLogsResponse200, CalendarLogsOpenApiControllerGetCalendarLogsResponse400, CalendarLogsOpenApiControllerGetCalendarLogsResponse401, CalendarLogsOpenApiControllerGetCalendarLogsResponse403, CalendarLogsOpenApiControllerGetCalendarLogsResponse404, CalendarLogsOpenApiControllerGetCalendarLogsResponse500, ChannelCommissionControllerGetListingsChannelCommission1MetadataParam, ChannelCommissionControllerGetListingsChannelCommissionMetadataParam, ChannelCommissionControllerUpdateAccountChannelCommission1BodyParam, ChannelCommissionControllerUpdateAccountChannelCommissionBodyParam, ChannelCommissionControllerUpdateListingsChannelCommission1BodyParam, ChannelCommissionControllerUpdateListingsChannelCommissionBodyParam, ComplexesControllerAssignComplexPropertyIdsBodyParam, ComplexesControllerAssignComplexPropertyIdsMetadataParam, ComplexesControllerAssignComplexPropertyIdsResponse200, ComplexesControllerAssignComplexPropertyIdsResponse403, ComplexesControllerAssignComplexPropertyIdsResponse404, ComplexesControllerGetComplexByIdMetadataParam, ComplexesControllerGetComplexByIdResponse200, ComplexesControllerGetComplexByIdResponse403, ComplexesControllerGetComplexByIdResponse404, ComplexesControllerRemoveComplexMetadataParam, ComplexesControllerRemoveComplexResponse200, ComplexesControllerRemoveComplexResponse403, ComplexesControllerRemoveComplexResponse404, ComplexesControllerUnassignComplexPropertyIdsBodyParam, ComplexesControllerUnassignComplexPropertyIdsMetadataParam, ComplexesControllerUnassignComplexPropertyIdsResponse200, ComplexesControllerUnassignComplexPropertyIdsResponse403, ComplexesControllerUnassignComplexPropertyIdsResponse404, ComplexesControllerUpdateComplexDetailsBodyParam, ComplexesControllerUpdateComplexDetailsMetadataParam, ComplexesControllerUpdateComplexDetailsResponse200, ComplexesControllerUpdateComplexDetailsResponse403, ComplexesControllerUpdateComplexDetailsResponse404, CreateDescriptionSetBodyParam, CreateDescriptionSetResponse200, CreateDescriptionSetResponse403, CreateDescriptionSetResponse404, DeleteAccountsIdCustomFieldsFieldIdMetadataParam, DeleteAccountsIdCustomFieldsFieldIdResponse200, DeleteAdditionalFeesIdMetadataParam, DeleteDescriptionSetMetadataParam, DeleteDescriptionSetResponse403, DeleteDescriptionSetResponse404, DeleteHooksHookidMetadataParam, DeleteHooksHookidResponse200, DeleteListingsIdMetadataParam, DeleteListingsIdResponse200, DeleteListingsListingIdCustomFieldsFieldIdMetadataParam, DeleteListingsListingIdCustomFieldsFieldIdResponse200, DeleteMetadataParam, DeleteOwnersIdMetadataParam, DeleteOwnersOwneridDocumentsDocumentidMetadataParam, DeleteOwnersOwneridDocumentsDocumentidResponse400, DeleteReservationsReservationIdCustomFieldsFieldIdMetadataParam, DeleteReservationsReservationIdCustomFieldsFieldIdResponse200, DeleteReservationsReservationIdCustomFieldsFieldIdResponse401, DeleteReservationsReservationIdCustomFieldsFieldIdResponse403, DeleteReservationsReservationIdCustomFieldsFieldIdResponse404, DeleteReservationsReservationIdCustomFieldsFieldIdResponse500, DeleteResponse200, DeleteResponse403, DeleteResponse404, DeleteSavedRepliesReplyidMetadataParam, DeleteSavedRepliesReplyidResponse200, DeleteSavedRepliesReplyidResponse404, DeleteTasksOpenApiTaskidMetadataParam, DeleteTasksOpenApiTaskidResponse200, DeleteTasksOpenApiTaskidResponse403, DeleteViewsIdMetadataParam, DeleteViewsIdResponse200, DeleteWebhooksIdMetadataParam, EditBodyParam, EditMetadataParam, EditResponse200, EditResponse403, EditResponse404, ExportedCalendarOpenApiControllerCreateExportedCalendarBodyParam, ExportedCalendarOpenApiControllerCreateExportedCalendarResponse200, ExportedCalendarOpenApiControllerCreateExportedCalendarResponse201, ExportedCalendarOpenApiControllerCreateExportedCalendarResponse404, ExportedCalendarOpenApiControllerDeleteExportedCalendarMetadataParam, ExportedCalendarOpenApiControllerDeleteExportedCalendarResponse404, ExportedCalendarOpenApiControllerGetExportedCalendarByIdMetadataParam, ExportedCalendarOpenApiControllerGetExportedCalendarByIdResponse200, ExportedCalendarOpenApiControllerGetExportedCalendarByIdResponse404, ExportedCalendarOpenApiControllerGetExportedCalendarMetadataParam, ExportedCalendarOpenApiControllerGetExportedCalendarResponse200, ExportedCalendarOpenApiControllerGetExportedCalendarResponse404, ExportedCalendarOpenApiControllerUpdateExportedCalendarBodyParam, ExportedCalendarOpenApiControllerUpdateExportedCalendarMetadataParam, ExportedCalendarOpenApiControllerUpdateExportedCalendarResponse200, ExportedCalendarOpenApiControllerUpdateExportedCalendarResponse404, ExternalIntegrationsControllerGetBrandByPropertyMetadataParam, ExternalIntegrationsControllerGetBrandByPropertyResponse200, ExternalIntegrationsControllerGetBrandByPropertyResponse500, Get1MetadataParam, Get1Response200, Get1Response403, Get1Response404, GetAccountsIdCustomFieldsFieldIdMetadataParam, GetAccountsIdCustomFieldsFieldIdResponse200, GetAccountsIdCustomFieldsMetadataParam, GetAccountsIdCustomFieldsResponse200, GetAccountsMeResponse200, GetAdditionalFeesAccountResponse200, GetAdditionalFeesListingListingidMetadataParam, GetAdditionalFeesListingListingidResponse200, GetAllComplexesResponse200, GetAllComplexesResponse403, GetAllComplexesResponse404, GetAmenitiesGroupsResponse200, GetAmenitiesGroupsResponse403, GetAvailabilityPricingApiCalendarListingsIdMetadataParam, GetAvailabilityPricingApiCalendarListingsIdResponse200, GetAvailabilityPricingApiCalendarListingsIdResponse404, GetAvailabilityPricingApiCalendarListingsIdResponse422, GetAvailabilityPricingApiCalendarListingsIdResponse500, GetAvailabilityPricingApiCalendarListingsMetadataParam, GetAvailabilityPricingApiCalendarListingsResponse200, GetAvailabilityPricingApiCalendarListingsResponse404, GetAvailabilityPricingApiCalendarListingsResponse422, GetAvailabilityPricingApiCalendarListingsResponse500, GetChannelsResponse200, GetChannelsResponse403, GetCommunicationConversationsConversationidMetadataParam, GetCommunicationConversationsConversationidPostsMetadataParam, GetCommunicationConversationsConversationidPostsResponse200, GetCommunicationConversationsConversationidPostsResponse500, GetCommunicationConversationsConversationidResponse200, GetCommunicationConversationsConversationidResponse500, GetCommunicationConversationsMetadataParam, GetCommunicationConversationsResponse200, GetCommunicationConversationsResponse500, GetDescriptionSetsMetadataParam, GetDescriptionSetsResponse200, GetDescriptionSetsResponse403, GetDescriptionSetsResponse404, GetFieldsMetadataParam, GetFieldsPerChannelMetadataParam, GetFieldsPerChannelResponse200, GetFieldsPerChannelResponse404, GetFieldsPerDescriptionSetMetadataParam, GetFieldsPerDescriptionSetResponse200, GetFieldsPerDescriptionSetResponse404, GetFieldsResponse200, GetFieldsResponse404, GetFinancialsListingIdMetadataParam, GetFinancialsListingIdResponse200, GetGuestsIdPaymentMethodsMetadataParam, GetHooksHookidMetadataParam, GetHooksHookidResponse200, GetHooksMetadataParam, GetHooksResponse200, GetIntegrationsIdMetadataParam, GetIntegrationsIdResponse200, GetIntegrationsIdResponse401, GetIntegrationsIdResponse403, GetIntegrationsIdResponse404, GetIntegrationsIdResponse500, GetIntegrationsMetadataParam, GetIntegrationsResponse200, GetIntegrationsResponse401, GetIntegrationsResponse500, GetLanguagesResponse200, GetLanguagesResponse403, GetListingsCitiesResponse200, GetListingsIdCustomFieldsFieldIdMetadataParam, GetListingsIdCustomFieldsFieldIdResponse200, GetListingsIdCustomFieldsMetadataParam, GetListingsIdCustomFieldsResponse200, GetListingsIdFieldsPaymentprovideridMetadataParam, GetListingsIdFieldsPaymentprovideridResponse200, GetListingsIdMetadataParam, GetListingsIdResponse200, GetListingsMetadataParam, GetListingsResponse200, GetListingsTagsResponse200, GetMetadataParam, GetOwnersIdMetadataParam, GetOwnersIdResponse200, GetOwnersMetadataParam, GetOwnersOwneridDocumentsDocumentidDownloadMetadataParam, GetOwnersOwneridDocumentsDocumentidDownloadResponse200, GetOwnersOwneridDocumentsDocumentidDownloadResponse400, GetOwnersOwneridDocumentsDocumentidDownloadResponse404, GetOwnersOwneridDocumentsDocumentidMetadataParam, GetOwnersOwneridDocumentsDocumentidResponse200, GetOwnersOwneridDocumentsDocumentidResponse400, GetOwnersOwneridDocumentsDocumentidResponse404, GetOwnersOwneridDocumentsMetadataParam, GetOwnersOwneridDocumentsResponse200, GetOwnersOwneridDocumentsResponse400, GetOwnersReservationsIdMetadataParam, GetOwnersReservationsIdResponse200, GetOwnersReservationsIdResponse401, GetOwnersReservationsIdResponse403, GetOwnersReservationsIdResponse404, GetOwnersReservationsIdResponse500, GetOwnersReservationsMetadataParam, GetOwnersReservationsResponse200, GetOwnersReservationsResponse401, GetOwnersReservationsResponse500, GetOwnersResponse200, GetPaymentProviderByListingMetadataParam, GetPaymentProviderByListingResponse200, GetPaymentProviderMetadataParam, GetPaymentProviderResponse200, GetPropertiesHouseRulesMetadataParam, GetPropertiesHouseRulesResponse200, GetPropertiesHouseRulesUnitTypeUnittypeidMetadataParam, GetPropertiesHouseRulesUnitTypeUnittypeidResponse200, GetPropertiesSpacesBedTypesResponse200, GetPropertiesSpacesComplexComplexidMetadataParam, GetPropertiesSpacesComplexComplexidResponse200, GetPropertiesSpacesRoomTypesResponse200, GetPropertiesSpacesUnitTypeUnittypeidMetadataParam, GetPropertiesSpacesUnitTypeUnittypeidResponse200, GetPropertyLanguagesMetadataParam, GetPropertyLanguagesResponse200, GetPropertyLanguagesResponse403, GetPropertyLanguagesResponse404, GetReservationsIdCustomFieldsFieldIdMetadataParam, GetReservationsIdCustomFieldsFieldIdResponse200, GetReservationsIdCustomFieldsFieldIdResponse401, GetReservationsIdCustomFieldsFieldIdResponse403, GetReservationsIdCustomFieldsFieldIdResponse404, GetReservationsIdCustomFieldsFieldIdResponse500, GetReservationsIdCustomFieldsMetadataParam, GetReservationsIdCustomFieldsResponse200, GetReservationsIdCustomFieldsResponse401, GetReservationsIdCustomFieldsResponse403, GetReservationsIdCustomFieldsResponse404, GetReservationsIdCustomFieldsResponse500, GetReservationsIdMetadataParam, GetReservationsIdResponse200, GetReservationsIdResponse401, GetReservationsIdResponse403, GetReservationsIdResponse404, GetReservationsIdResponse500, GetReservationsMetadataParam, GetReservationsResponse200, GetReservationsResponse401, GetReservationsResponse500, GetResponse200, GetResponse403, GetResponse404, GetRoomPhotosByPropertyIdMetadataParam, GetRoomPhotosByPropertyIdResponse200, GetRoomPhotosByPropertyIdResponse403, GetRoomPhotosByPropertyIdResponse404, GetSavedRepliesListingListingidMetadataParam, GetSavedRepliesListingListingidResponse200, GetSavedRepliesListingListingidResponse403, GetSavedRepliesMetadataParam, GetSavedRepliesReplyidMetadataParam, GetSavedRepliesReplyidResponse200, GetSavedRepliesReplyidResponse404, GetSavedRepliesResponse200, GetSavedRepliesResponse403, GetStatsResponse200, GetSupportedAmenitiesResponse200, GetSupportedAmenitiesResponse403, GetTasksOpenApiTaskidMetadataParam, GetTasksOpenApiTaskidResponse200, GetTasksOpenApiTaskidResponse403, GetTasksOpenApiTasksMetadataParam, GetTasksOpenApiTasksResponse200, GetTasksOpenApiTasksResponse403, GetViewsIdMetadataParam, GetViewsIdResponse200, GetViewsMetadataParam, GetViewsResponse200, GetWebhooksIdMetadataParam, GetWebhooksIdResponse200, GetWebhooksResponse200, GroupReservationsOpenApiControllerCreateBodyParam, GroupReservationsOpenApiControllerCreateResponse201, GroupReservationsOpenApiControllerGetGroupReservationMetadataParam, GroupReservationsOpenApiControllerGetGroupReservationResponse200, GuestAppOpenApiControllerGetCifSummaryDetailsMetadataParam, GuestAppOpenApiControllerGetCifSummaryDetailsResponse200, GuestsOpenApiControllerCreateGuestBodyParam, GuestsOpenApiControllerCreateGuestResponse200, GuestsOpenApiControllerGetGuestMetadataParam, GuestsOpenApiControllerGetGuestResponse200, GuestsOpenApiControllerGetGuestsListMetadataParam, GuestsOpenApiControllerGetGuestsListResponse200, GuestsOpenApiControllerUpdateGuestBodyParam, GuestsOpenApiControllerUpdateGuestMetadataParam, GuestsOpenApiControllerUpdateGuestResponse200, ImportedCalendarOpenApiControllerCreateImportedCalendarBodyParam, ImportedCalendarOpenApiControllerCreateImportedCalendarResponse200, ImportedCalendarOpenApiControllerCreateImportedCalendarResponse201, ImportedCalendarOpenApiControllerCreateImportedCalendarResponse404, ImportedCalendarOpenApiControllerDeleteImportedCalendarMetadataParam, ImportedCalendarOpenApiControllerDeleteImportedCalendarResponse404, ImportedCalendarOpenApiControllerGetImportedCalendarByIdMetadataParam, ImportedCalendarOpenApiControllerGetImportedCalendarByIdResponse200, ImportedCalendarOpenApiControllerGetImportedCalendarByIdResponse404, ImportedCalendarOpenApiControllerGetImportedCalendarsMetadataParam, ImportedCalendarOpenApiControllerGetImportedCalendarsResponse200, ImportedCalendarOpenApiControllerGetImportedCalendarsResponse404, ImportedCalendarOpenApiControllerPauseImportedCaledarMetadataParam, ImportedCalendarOpenApiControllerPauseImportedCaledarResponse200, ImportedCalendarOpenApiControllerPauseImportedCaledarResponse404, ImportedCalendarOpenApiControllerResumeImportedCaledarMetadataParam, ImportedCalendarOpenApiControllerResumeImportedCaledarResponse200, ImportedCalendarOpenApiControllerResumeImportedCaledarResponse404, ImportedCalendarOpenApiControllerUpdateImportedCalendarBodyParam, ImportedCalendarOpenApiControllerUpdateImportedCalendarMetadataParam, ImportedCalendarOpenApiControllerUpdateImportedCalendarResponse200, ImportedCalendarOpenApiControllerUpdateImportedCalendarResponse404, InvoiceItemsControllerCreateInvoiceItemBodyParam, InvoiceItemsControllerCreateInvoiceItemMetadataParam, InvoiceItemsControllerCreateInvoiceItemResponse201, JournalEntriesControllerListMetadataParam, JournalEntriesControllerListResponse200, JournalEntriesControllerListResponse400, JournalEntriesControllerListResponse403, JournalEntriesControllerListResponse500, ListingExpectationsControllerGetListingExpectationsMetadataParam, ListingExpectationsControllerGetListingExpectationsResponse200, ListingExpectationsControllerGetListingExpectationsResponse401, ListingExpectationsControllerGetListingExpectationsResponse404, ListingExpectationsControllerUpsertListingExpectationsBodyParam, ListingExpectationsControllerUpsertListingExpectationsMetadataParam, ListingExpectationsControllerUpsertListingExpectationsResponse200, ListingExpectationsControllerUpsertListingExpectationsResponse400, ListingExpectationsControllerUpsertListingExpectationsResponse401, ListingExpectationsControllerUpsertListingExpectationsResponse404, OpenApiContactsControllerCreateBodyParam, OpenApiContactsControllerCreateResponse201, OpenApiContactsControllerFindAllMetadataParam, OpenApiContactsControllerFindAllResponse200, OpenApiContactsControllerFindOneMetadataParam, OpenApiContactsControllerFindOneResponse200, OpenApiContactsControllerRemoveMetadataParam, OpenApiContactsControllerRemoveResponse200, OpenApiContactsControllerUpdateBodyParam, OpenApiContactsControllerUpdateMetadataParam, OpenApiContactsControllerUpdateResponse200, OpenApiTaxesControllerCreateTaxBodyParam, OpenApiTaxesControllerCreateTaxResponse201, OpenApiTaxesControllerDeleteTaxMetadataParam, OpenApiTaxesControllerGetAccountLevelTaxesResponse200, OpenApiTaxesControllerGetUnitTypeActualTaxesMetadataParam, OpenApiTaxesControllerGetUnitTypeActualTaxesResponse200, OpenApiTaxesControllerGetUnitTypeLevelTaxesMetadataParam, OpenApiTaxesControllerGetUnitTypeLevelTaxesResponse200, OpenApiTaxesControllerUpdateTaxBodyParam, OpenApiTaxesControllerUpdateTaxMetadataParam, OpenApiTaxesControllerUpdateTaxResponse200, OrderBodyParam, OrderMetadataParam, OrderResponse200, OrderResponse403, OrderResponse404, OwnersControllerRetrieveMetadataParam, OwnersControllerRetrieveResponse200, OwnersControllerRetrieveResponse403, OwnersControllerRetrieveResponse404, OwnersControllerRetrieveResponse500, OwnersControllerUpdateBodyParam, OwnersControllerUpdateMetadataParam, OwnersControllerUpdateResponse200, OwnersControllerUpdateResponse400, OwnersControllerUpdateResponse403, OwnersControllerUpdateResponse500, PatchAdditionalFeesIdBodyParam, PatchAdditionalFeesIdMetadataParam, PatchAdditionalFeesIdResponse200, PatchOwnersOwneridDocumentsDocumentidBodyParam, PatchOwnersOwneridDocumentsDocumentidMetadataParam, PatchOwnersOwneridDocumentsDocumentidResponse200, PatchOwnersOwneridDocumentsDocumentidResponse400, PatchOwnersOwneridDocumentsDocumentidResponse404, PatchPropertiesSpacesSpaceSpaceidDetailsBodyParam, PatchPropertiesSpacesSpaceSpaceidDetailsMetadataParam, PatchPropertiesSpacesSpaceSpaceidDetailsResponse200, PatchReservationsIdPaymentsPaymentidCancelMetadataParam, PatchReservationsIdPaymentsPaymentidCancelResponse201, PatchReservationsIdPaymentsPaymentidCancelResponse401, PatchReservationsIdPaymentsPaymentidCancelResponse403, PatchReservationsIdPaymentsPaymentidCancelResponse404, PatchReservationsIdPaymentsPaymentidCancelResponse500, PostAccountsIdCustomFieldsBodyParam, PostAccountsIdCustomFieldsMetadataParam, PostAccountsIdCustomFieldsResponse200, PostAdditionalFeesAccountBodyParam, PostAdditionalFeesAccountResponse201, PostAdditionalFeesInquiriesInquiryidUpsellsBodyParam, PostAdditionalFeesInquiriesInquiryidUpsellsMetadataParam, PostAdditionalFeesInquiriesInquiryidUpsellsResponse200, PostAdditionalFeesListingListingidBodyParam, PostAdditionalFeesListingListingidMetadataParam, PostAdditionalFeesListingListingidResponse201, PostAdditionalFeesQuotesQuoteidAmountBodyParam, PostAdditionalFeesQuotesQuoteidAmountMetadataParam, PostAdditionalFeesQuotesQuoteidAmountResponse200, PostCommunicationConversationsConversationidPostsBodyParam, PostCommunicationConversationsConversationidPostsMetadataParam, PostCommunicationConversationsConversationidPostsResponse200, PostCommunicationConversationsConversationidSendMessageBodyParam, PostCommunicationConversationsConversationidSendMessageMetadataParam, PostCommunicationConversationsConversationidSendMessageResponse200, PostGuestsIdPaymentMethodsBodyParam, PostGuestsIdPaymentMethodsMetadataParam, PostHooksBodyParam, PostHooksResponse200, PostIntegrationsBodyParam, PostIntegrationsResponse200, PostIntegrationsResponse401, PostIntegrationsResponse500, PostListingsBodyParam, PostListingsCsvResponse200, PostListingsEmailBodyParam, PostListingsEmailResponse200, PostListingsResponse200, PostOwnersBodyParam, PostOwnersBulkBodyParam, PostOwnersBulkResponse201, PostOwnersBulkResponse400, PostOwnersOwneridDocumentsBodyParam, PostOwnersOwneridDocumentsMetadataParam, PostOwnersOwneridDocumentsResponse201, PostOwnersOwneridDocumentsResponse400, PostOwnersResponse200, PostPaymentProvidersIdAssignListingsBodyParam, PostPaymentProvidersIdAssignListingsMetadataParam, PostPaymentProvidersIdAssignListingsResponse200, PostPropertiesHouseRulesBodyParam, PostPropertiesHouseRulesResponse200, PostPropertiesSpacesSpaceSpaceidEditBodyParam, PostPropertiesSpacesSpaceSpaceidEditMetadataParam, PostPropertiesSpacesSpaceSpaceidEditResponse200, PostPropertiesSpacesSpaceSpaceidRemoveMetadataParam, PostPropertiesSpacesSpaceSpaceidRemoveResponse200, PostPropertiesSpacesUnitTypeUnittypeidAddBodyParam, PostPropertiesSpacesUnitTypeUnittypeidAddMetadataParam, PostPropertiesSpacesUnitTypeUnittypeidAddResponse200, PostReservationsApiReservationsReservationidPreApproveMetadataParam, PostReservationsApiReservationsReservationidPreApproveResponse200, PostReservationsApiReservationsReservationidPreApproveResponse400, PostReservationsApiReservationsReservationidPreApproveResponse500, PostReservationsBodyParam, PostReservationsCsvMetadataParam, PostReservationsCsvResponse200, PostReservationsCsvResponse401, PostReservationsCsvResponse500, PostReservationsEmailBodyParam, PostReservationsEmailMetadataParam, PostReservationsEmailResponse200, PostReservationsEmailResponse401, PostReservationsEmailResponse500, PostReservationsIdApproveMetadataParam, PostReservationsIdApproveResponse200, PostReservationsIdApproveResponse400, PostReservationsIdApproveResponse401, PostReservationsIdApproveResponse403, PostReservationsIdApproveResponse404, PostReservationsIdApproveResponse500, PostReservationsIdDeclineMetadataParam, PostReservationsIdDeclineResponse200, PostReservationsIdDeclineResponse400, PostReservationsIdDeclineResponse401, PostReservationsIdDeclineResponse403, PostReservationsIdDeclineResponse404, PostReservationsIdDeclineResponse500, PostReservationsIdInvoiceitemsBodyParam, PostReservationsIdInvoiceitemsMetadataParam, PostReservationsIdInvoiceitemsResponse200, PostReservationsIdInvoiceitemsResponse400, PostReservationsIdInvoiceitemsResponse401, PostReservationsIdInvoiceitemsResponse403, PostReservationsIdInvoiceitemsResponse404, PostReservationsIdInvoiceitemsResponse500, PostReservationsIdPaymentsBodyParam, PostReservationsIdPaymentsMetadataParam, PostReservationsIdPaymentsPaymentidRefundBodyParam, PostReservationsIdPaymentsPaymentidRefundMetadataParam, PostReservationsIdPaymentsPaymentidRefundResponse201, PostReservationsIdPaymentsPaymentidRefundResponse401, PostReservationsIdPaymentsPaymentidRefundResponse403, PostReservationsIdPaymentsPaymentidRefundResponse404, PostReservationsIdPaymentsPaymentidRefundResponse500, PostReservationsIdPaymentsResponse201, PostReservationsIdPaymentsResponse400, PostReservationsIdPaymentsResponse401, PostReservationsIdPaymentsResponse403, PostReservationsIdPaymentsResponse404, PostReservationsIdPaymentsResponse500, PostReservationsIdRequestCancellationSyncBodyParam, PostReservationsIdRequestCancellationSyncMetadataParam, PostReservationsIdRequestCancellationSyncResponse200, PostReservationsIdRequestCancellationSyncResponse400, PostReservationsIdRequestCancellationSyncResponse401, PostReservationsIdRequestCancellationSyncResponse403, PostReservationsIdRequestCancellationSyncResponse404, PostReservationsIdRequestCancellationSyncResponse500, PostReservationsResponse200, PostReservationsResponse400, PostReservationsResponse401, PostReservationsResponse403, PostReservationsResponse500, PostSavedRepliesBodyParam, PostSavedRepliesResponse200, PostSavedRepliesResponse500, PostTasksOpenApiCreateSingleTaskBodyParam, PostTasksOpenApiCreateSingleTaskResponse200, PostTasksOpenApiCreateSingleTaskResponse403, PostViewsBodyParam, PostViewsResponse200, PostWebhooksBodyParam, PostWebhooksResponse201, PriceAdjustmentsControllerCreateManualPriceAdjustmentsBodyParam, PriceAdjustmentsControllerGetAllTotalAmountPriceAdjustmentMetadataParam, PriceAdjustmentsControllerGetAllTotalAmountPriceAdjustmentResponse200, PromotionControllerAssignListingsBodyParam, PromotionControllerAssignListingsMetadataParam, PromotionControllerUnassignListingsBodyParam, PromotionControllerUnassignListingsMetadataParam, PutAccountsIdCustomFieldsBodyParam, PutAccountsIdCustomFieldsMetadataParam, PutAccountsIdCustomFieldsResponse200, PutAvailabilityPricingApiCalendarListingsBodyParam, PutAvailabilityPricingApiCalendarListingsIdBodyParam, PutAvailabilityPricingApiCalendarListingsIdMetadataParam, PutAvailabilityPricingApiCalendarListingsIdResponse200, PutAvailabilityPricingApiCalendarListingsIdResponse404, PutAvailabilityPricingApiCalendarListingsIdResponse422, PutAvailabilityPricingApiCalendarListingsIdResponse500, PutAvailabilityPricingApiCalendarListingsResponse200, PutAvailabilityPricingApiCalendarListingsResponse404, PutAvailabilityPricingApiCalendarListingsResponse422, PutAvailabilityPricingApiCalendarListingsResponse500, PutFinancialsListingIdBodyParam, PutFinancialsListingIdMetadataParam, PutFinancialsListingIdResponse200, PutHooksHookidBodyParam, PutHooksHookidMetadataParam, PutHooksHookidResponse200, PutIntegrationsIdBodyParam, PutIntegrationsIdMetadataParam, PutIntegrationsIdResponse200, PutIntegrationsIdResponse400, PutIntegrationsIdResponse401, PutIntegrationsIdResponse500, PutListingsIdAvailabilitySettingsBodyParam, PutListingsIdAvailabilitySettingsMetadataParam, PutListingsIdAvailabilitySettingsResponse200, PutListingsIdBodyParam, PutListingsIdCustomFieldsBodyParam, PutListingsIdCustomFieldsMetadataParam, PutListingsIdCustomFieldsResponse200, PutListingsIdMetadataParam, PutListingsIdResponse200, PutOwnersIdBodyParam, PutOwnersIdMetadataParam, PutOwnersIdResponse200, PutOwnersReservationsIdBodyParam, PutOwnersReservationsIdMetadataParam, PutOwnersReservationsIdResponse200, PutOwnersReservationsIdResponse401, PutOwnersReservationsIdResponse403, PutOwnersReservationsIdResponse500, PutPropertiesHouseRulesUnitTypeUnittypeidBodyParam, PutPropertiesHouseRulesUnitTypeUnittypeidMetadataParam, PutReservationsIdBodyParam, PutReservationsIdCustomFieldsBodyParam, PutReservationsIdCustomFieldsMetadataParam, PutReservationsIdCustomFieldsResponse200, PutReservationsIdCustomFieldsResponse401, PutReservationsIdCustomFieldsResponse403, PutReservationsIdCustomFieldsResponse404, PutReservationsIdCustomFieldsResponse500, PutReservationsIdMetadataParam, PutReservationsIdPaymentsPaymentidBodyParam, PutReservationsIdPaymentsPaymentidMetadataParam, PutReservationsIdPaymentsPaymentidResponse200, PutReservationsIdPaymentsPaymentidResponse400, PutReservationsIdPaymentsPaymentidResponse401, PutReservationsIdPaymentsPaymentidResponse403, PutReservationsIdPaymentsPaymentidResponse404, PutReservationsIdPaymentsPaymentidResponse500, PutReservationsIdResponse200, PutReservationsIdResponse400, PutReservationsIdResponse401, PutReservationsIdResponse403, PutReservationsIdResponse404, PutReservationsIdResponse500, PutSavedRepliesReplyidBodyParam, PutSavedRepliesReplyidMetadataParam, PutSavedRepliesReplyidResponse200, PutSavedRepliesReplyidResponse404, PutTasksOpenApiTaskidBodyParam, PutTasksOpenApiTaskidMetadataParam, PutTasksOpenApiTaskidResponse200, PutTasksOpenApiTaskidResponse403, PutViewsIdBodyParam, PutViewsIdMetadataParam, PutViewsIdResponse200, PutWebhooksIdBodyParam, PutWebhooksIdMetadataParam, PutWebhooksIdResponse200, QuotesOpenApiControllerChangeCouponsBodyParam, QuotesOpenApiControllerChangeCouponsMetadataParam, QuotesOpenApiControllerChangeCouponsResponse200, QuotesOpenApiControllerCreateBodyParam, QuotesOpenApiControllerCreateMultipleBodyParam, QuotesOpenApiControllerCreateMultipleResponse201, QuotesOpenApiControllerCreateResponse201, QuotesOpenApiControllerGetQuoteMetadataParam, QuotesOpenApiControllerGetQuoteResponse200, RatePlanControllerCreateBodyParam, RatePlanControllerCreateResponse201, RatePlanControllerCreateResponse400, RatePlanControllerGetAllMetadataParam, RatePlanControllerGetAllResponse200, RatePlanControllerGetByIdMetadataParam, RatePlanControllerGetByIdResponse200, RatePlanControllerGetByIdResponse404, RatePlanControllerGetByListingMetadataParam, RatePlanControllerGetByListingResponse200, RatePlanControllerGetByListingResponse404, RatePlanControllerInitAssignListingsBodyParam, RatePlanControllerInitAssignListingsMetadataParam, RatePlanControllerInitAssignListingsResponse202, RatePlanControllerInitAssignListingsResponse400, RatePlanControllerInitAssignListingsResponse404, RatePlanControllerInitUnassignListingsBodyParam, RatePlanControllerInitUnassignListingsMetadataParam, RatePlanControllerInitUnassignListingsResponse202, RatePlanControllerInitUnassignListingsResponse400, RatePlanControllerInitUnassignListingsResponse404, RatePlanControllerPatchBodyParam, RatePlanControllerPatchMetadataParam, RatePlanControllerPatchResponse200, RatePlanControllerPatchResponse400, RatePlanControllerPatchResponse404, RatePlanControllerRemoveMetadataParam, RatePlanControllerRemoveResponse404, RatePlanControllerUpdateBodyParam, RatePlanControllerUpdateMetadataParam, RatePlanControllerUpdateResponse200, RatePlanControllerUpdateResponse400, RatePlanControllerUpdateResponse404, RateStrategyControllerGetByUnitTypeIdMetadataParam, RateStrategyControllerGetByUnitTypeIdResponse200, RateStrategyControllerGetListResponse200, ReservationAccessCodeControllerGetLocksAndCodesByReservationMetadataParam, ReservationAccessCodeControllerGetLocksAndCodesByReservationResponse200, ReservationAccessCodeControllerGetLocksAndCodesByReservationResponse400, ReservationAccessCodeControllerGetLocksAndCodesByReservationResponse404, ReservationsControllerFolioBalancesMetadataParam, ReservationsControllerFolioBalancesResponse200, ReservationsControllerFolioBalancesResponse403, ReservationsControllerFolioBalancesResponse404, ReservationsControllerFolioBalancesResponse500, ReservationsOpenApiControllerChangeStayBodyParam, ReservationsOpenApiControllerChangeStayResponse200, ReservationsOpenApiControllerCreateOwnerConfirmedBodyParam, ReservationsOpenApiControllerCreateOwnerConfirmedResponse200, ReservationsOpenApiControllerCreateReservationBodyParam, ReservationsOpenApiControllerCreateReservationResponse200, ReservationsOpenApiControllerGetReservationsByIdsMetadataParam, ReservationsOpenApiControllerGetReservationsByIdsResponse200, ReservationsOpenApiControllerQuickBookingBodyParam, ReservationsOpenApiControllerQuickBookingResponse201, ReservationsOpenApiControllerUpdateReservationCustomFieldsBodyParam, ReservationsOpenApiControllerUpdateReservationCustomFieldsMetadataParam, ReservationsOpenApiControllerUpdateReservationCustomFieldsResponse200, ReservationsOpenApiControllerUpdateReservationDatesBodyParam, ReservationsOpenApiControllerUpdateReservationDatesMetadataParam, ReservationsOpenApiControllerUpdateReservationDatesResponse200, ReservationsOpenApiControllerUpdateReservationGuestsBodyParam, ReservationsOpenApiControllerUpdateReservationGuestsMetadataParam, ReservationsOpenApiControllerUpdateReservationGuestsResponse200, ReservationsOpenApiControllerUpdateReservationListingBodyParam, ReservationsOpenApiControllerUpdateReservationListingMetadataParam, ReservationsOpenApiControllerUpdateReservationListingResponse200, ReservationsOpenApiControllerUpdateReservationNotesBodyParam, ReservationsOpenApiControllerUpdateReservationNotesMetadataParam, ReservationsOpenApiControllerUpdateReservationNotesResponse200, ReservationsOpenApiControllerUpdateReservationSourceBodyParam, ReservationsOpenApiControllerUpdateReservationSourceMetadataParam, ReservationsOpenApiControllerUpdateReservationSourceResponse200, ReservationsOpenApiControllerUpdateReservationStatusBodyParam, ReservationsOpenApiControllerUpdateReservationStatusMetadataParam, ReservationsOpenApiControllerUpdateReservationStatusResponse200, ReservationsReportsOpenApiControllerGetReportByViewIdMetadataParam, ReservationsReportsOpenApiControllerGetReportByViewIdResponse200, ReviewControllerGetListingsAverageReviewMetadataParam, ReviewControllerGetListingsAverageReviewResponse200, ReviewControllerGetReviewMetadataParam, ReviewControllerGetReviewResponse200, ReviewControllerGetReviewsMetadataParam, ReviewControllerGetReviewsResponse200, ReviewControllerUpsertReviewBodyParam, ReviewControllerUpsertReviewReplyBodyParam, ReviewControllerUpsertReviewReplyMetadataParam, ReviewControllerUpsertReviewReplyResponse200, ReviewControllerUpsertReviewResponse200, RoomPhotosControllerAssignRoomPhotoBodyParam, RoomPhotosControllerAssignRoomPhotoMetadataParam, RoomPhotosControllerAssignRoomPhotoResponse200, RoomPhotosControllerAssignRoomPhotoResponse403, RoomPhotosControllerAssignRoomPhotoResponse404, RoomPhotosControllerUnassignRoomPhotoBodyParam, RoomPhotosControllerUnassignRoomPhotoMetadataParam, RoomPhotosControllerUnassignRoomPhotoResponse200, RoomPhotosControllerUnassignRoomPhotoResponse403, RoomPhotosControllerUnassignRoomPhotoResponse404, ScrOpenApiControllerCreateScrBodyParam, ScrOpenApiControllerCreateScrResponse201, ScrOpenApiControllerGetScrByPublicIdMetadataParam, ScrOpenApiControllerGetScrByPublicIdResponse200, ScrOpenApiControllerGetScrListMetadataParam, ScrOpenApiControllerGetScrListResponse200, ScrOpenApiControllerRemoveSmartCalendarRuleMetadataParam, ScrOpenApiControllerUpdateScrBodyParam, ScrOpenApiControllerUpdateScrMetadataParam, ScrOpenApiControllerUpdateScrResponse200, SvixSecretApiControllerGetSecretMetadataParam, SvixSecretApiControllerGetSecretResponse200, TaxesLevelConfigurationsControllerGetUnitTypeTaxesLevelConfigurationsMetadataParam, TaxesLevelConfigurationsControllerGetUnitTypeTaxesLevelConfigurationsResponse200, TaxesLevelConfigurationsControllerUpsertTaxesLevelConfigurationsOpenApiBodyParam, TaxesLevelConfigurationsControllerUpsertTaxesLevelConfigurationsOpenApiResponse200, TransactionsControllerCreateChargeBodyParam, TransactionsControllerCreateChargeResponse400, TransactionsControllerCreateChargeResponse403, TransactionsControllerCreateChargeResponse500, TransactionsControllerCreateExpenseBodyParam, TransactionsControllerCreateExpenseByListingBodyParam, TransactionsControllerCreateExpenseByListingResponse400, TransactionsControllerCreateExpenseByListingResponse403, TransactionsControllerCreateExpenseByListingResponse500, TransactionsControllerCreateExpenseResponse400, TransactionsControllerCreateExpenseResponse403, TransactionsControllerCreateExpenseResponse500, UpdateDescriptionSetBodyParam, UpdateDescriptionSetMetadataParam, UpdateDescriptionSetResponse200, UpdateDescriptionSetResponse403, UpdateDescriptionSetResponse404, UploadByUrlsBodyParam, UploadByUrlsMetadataParam, UploadByUrlsResponse200, UploadByUrlsResponse403, UploadByUrlsResponse404, UpsertFieldsBodyParam, UpsertFieldsMetadataParam, UpsertFieldsResponse200, UpsertFieldsResponse404, UpsertPropertyLanguagesBodyParam, UpsertPropertyLanguagesMetadataParam, UpsertPropertyLanguagesResponse200, UpsertPropertyLanguagesResponse403, UpsertPropertyLanguagesResponse404, UsersHttpControllerCreateUserBodyParam, UsersHttpControllerCreateUserResponse201, UsersHttpControllerCreateUserResponse400, UsersHttpControllerGetUserByIdMetadataParam, UsersHttpControllerGetUserByIdResponse200, UsersHttpControllerGetUserByIdResponse400, UsersHttpControllerGetUsersMetadataParam, UsersHttpControllerGetUsersResponse200, UsersHttpControllerGetUsersResponse400, UsersHttpControllerRemoveUserMetadataParam, UsersHttpControllerRemoveUserResponse400, UsersHttpControllerUpdateUserBodyParam, UsersHttpControllerUpdateUserMetadataParam, UsersHttpControllerUpdateUserResponse200, UsersHttpControllerUpdateUserResponse400, VendorsControllerGetAllMetadataParam, VendorsControllerGetAllResponse200, VendorsControllerGetAllResponse400, VendorsControllerGetAllResponse403, VendorsControllerGetAllResponse500, VendorsControllerGetByIdMetadataParam, VendorsControllerGetByIdResponse200, VendorsControllerGetByIdResponse403, VendorsControllerGetByIdResponse404, VendorsControllerGetByIdResponse500 } from './types';
