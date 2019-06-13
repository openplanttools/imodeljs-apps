"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const imodeljs_clients_1 = require("@bentley/imodeljs-clients");
const bentleyjs_core_1 = require("@bentley/bentleyjs-core");
class OidcIOSClient extends imodeljs_clients_1.OidcClient {
    constructor() {
        super();
        this.onUserStateChanged = new bentleyjs_core_1.BeEvent();
    }
    async initialize() {
        console.log("In oidclosclient initialize");
        return new Promise((resolve) => {
            window.notifyOidcClient = () => {
                this.reloadInfo();
                this.onUserStateChanged.raiseEvent(this._accessToken);
            };
            resolve();
        });
    }
    reloadInfo() {
        const settings = window.localStorage.getItem("ios:oidc_info");
        console.log("In oidclosclient reloadInfo");
        console.log(settings);
        const info = JSON.parse(settings);
        const startsAt = new Date(info.expires_at - info.expires_in);
        const expiresAt = new Date(info.expires_at);
        const userInfo = imodeljs_clients_1.UserInfo.fromJson(info.user_info);
        this._accessToken = imodeljs_clients_1.AccessToken.fromJsonWebTokenString(info.access_token, startsAt, expiresAt, userInfo);
    }
    async signIn(requestContext) {
        return new Promise((resolve, reject) => {
            try {
                console.log("In oidclosclient signin");
                this.startSignIn(requestContext);
            }
            catch (error) {
                reject(error);
            }
            this.onUserStateChanged.addListener((token, _message) => {
                if (token)
                    resolve();
                else
                    reject();
            });
        });
    }
    startSignIn(_requestContext) {
        console.log("In oidclosclient start signin");
        window.webkit.messageHandlers.signIn.postMessage("");
    }
    /** Start the sign-out and return a promise that fulfils or rejects when it's complete
     * The call redirects application to postSignoutRedirectUri specified in the configuration
     * when sign-out is complete
     */
    async signOut(requestContext) {
        return new Promise((resolve, reject) => {
            try {
                this.startSignOut(requestContext);
            }
            catch (error) {
                reject(error);
            }
            this.onUserStateChanged.addListener((token) => {
                if (!token)
                    resolve();
                else
                    reject();
            });
        });
    }
    startSignOut(_requestContext) {
        window.webkit.messageHandlers.signOut.postMessage("");
    }
    async getAccessToken(_requestContext) {
        console.log("In oidclosclient getaccesstoken");
        return new Promise((resolve, reject) => {
            if (this._accessToken)
                resolve(this._accessToken);
            else
                reject("Not signed in");
        });
    }
    /** Set to true if there's a current authorized user or client (in the case of agent applications).
     * Set to true if signed in and the access token has not expired, and false otherwise.
     */
    get isAuthorized() {
        return !!this._accessToken;
    }
    /** Set to true if the user has signed in, but the token has expired and requires a refresh */
    get hasExpired() {
        console.log("In oidclosclient hasExpired");
        return !!this._accessToken;
    }
    /** Set to true if signed in - the accessToken may be active or may have expired and require a refresh */
    get hasSignedIn() {
        console.log("In oidclosclient hasSignedin" + this.hasSignedIn);
        return !!this._accessToken;
    }
    dispose() {
    }
}
exports.OidcIOSClient = OidcIOSClient;
//# sourceMappingURL=OidcIosClient.js.map