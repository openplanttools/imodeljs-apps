/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { IOidcFrontendClient, AccessToken, OidcClient, UserInfo } from "@bentley/imodeljs-clients";
import { BeEvent, ClientRequestContext } from "@bentley/bentleyjs-core";
// tslint:disable: no-console

/** Creates an OIDC client */
export class OidcIOSClient extends OidcClient implements IOidcFrontendClient {
  private _accessToken: AccessToken | undefined;
  public constructor() {
    super();
  }

  /** Initializes the client
   * @return a promise
   */
  public async initialize(): Promise<void> {
    console.log("In oidclosclient initialize");
    return new Promise<void>((resolve) => {
      (window as any).notifyOidcClient = () => {
        this.reloadInfo();
        this.onUserStateChanged.raiseEvent(this._accessToken);
      };
      resolve();
    });
  }

  /** Reloads the client info */
  private reloadInfo() {
    const settings = window.localStorage.getItem("ios:oidc_info");
    console.log("In oidclosclient reloadInfo");
    console.log(settings);
    const info = JSON.parse(settings!);
    const startsAt: Date = new Date(info!.expires_at - info!.expires_in);
    const expiresAt: Date = new Date(info!.expires_at);
    const userInfo = UserInfo.fromJson(info.user_info);
    this._accessToken = AccessToken.fromJsonWebTokenString(info.access_token, startsAt, expiresAt, userInfo);
  }

  /** Handles the user sign-in
   * @param requestContext the context provided for the sign-in
   * @return a promise
   */
  public async signIn(requestContext: ClientRequestContext): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        console.log("In oidclosclient signin");
        this.startSignIn(requestContext);
      } catch (error) {
        reject(error);
      }

      this.onUserStateChanged.addListener((token: AccessToken | undefined, _message: string) => {
        if (token)
          resolve();
        else
          reject();
      });
    });
  }

  /** Handles the sign-in start
   * @param _requestContext the context provided for the sign-in
   */
  private startSignIn(_requestContext: ClientRequestContext): void {
    console.log("In oidclosclient start signin");
    (window as any).webkit.messageHandlers.signIn.postMessage("");
  }

  /** Start the sign-out and return a promise that fulfils or rejects when it's complete
   * The call redirects application to postSignoutRedirectUri specified in the configuration
   * when sign-out is complete
   * @param requestContext the context provided for the sign-in
   * @return a promise
   */
  public async signOut(requestContext: ClientRequestContext): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.startSignOut(requestContext);
      } catch (error) {
        reject(error);
      }

      this.onUserStateChanged.addListener((token: AccessToken | undefined) => {
        if (!token)
          resolve();
        else
          reject();
      });
    });
  }

  /** Handles the user signing-out
   * @param _requestContext the context provided for sign-in
   */
  private startSignOut(_requestContext: ClientRequestContext): void {
    (window as any).webkit.messageHandlers.signOut.postMessage("");
  }

  /** Gets an access token if the user is signed in
   * @param _requestContext the context provided for sign-in
   * @return a promise to an access token if the user is signed in
   */
  public async getAccessToken(_requestContext?: ClientRequestContext): Promise<AccessToken> {
    console.log("In oidclosclient getaccesstoken");
    return new Promise<AccessToken>((resolve, reject) => {
      if (this._accessToken)
        resolve(this._accessToken);
      else
        reject("Not signed in");
    });
  }

  /** Set to true if there's a current authorized user or client (in the case of agent applications).
   * Set to true if signed in and the access token has not expired, and false otherwise.
   * @return whether or not the user is authorized
   */
  public get isAuthorized(): boolean {
    return !!this._accessToken;
  }

  /** Set to true if the user has signed in, but the token has expired and requires a refresh
   * @param whether or not the user's token has expired
   */
  public get hasExpired(): boolean {
    console.log("In oidclosclient hasExpired");
    return !!this._accessToken;
  }

  /** Set to true if signed in - the accessToken may be active or may have expired and require a refresh
   * @return whether or not the user has signed in
   */
  public get hasSignedIn(): boolean {
    console.log("In oidclosclient hasSignedin" + this.hasSignedIn);
    return !!this._accessToken;
  }

  /** Handles disposing the application */
  public dispose(): void {
  }

  // handles user state change
  public readonly onUserStateChanged = new BeEvent<(token: AccessToken | undefined, message: string) => void>();
}
