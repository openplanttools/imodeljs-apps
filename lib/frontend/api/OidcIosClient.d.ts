import { IOidcFrontendClient, AccessToken, OidcClient } from "@bentley/imodeljs-clients";
import { BeEvent, ClientRequestContext } from "@bentley/bentleyjs-core";
export declare class OidcIOSClient extends OidcClient implements IOidcFrontendClient {
    private _accessToken;
    constructor();
    initialize(): Promise<void>;
    private reloadInfo;
    signIn(requestContext: ClientRequestContext): Promise<void>;
    private startSignIn;
    /** Start the sign-out and return a promise that fulfils or rejects when it's complete
     * The call redirects application to postSignoutRedirectUri specified in the configuration
     * when sign-out is complete
     */
    signOut(requestContext: ClientRequestContext): Promise<void>;
    private startSignOut;
    getAccessToken(_requestContext?: ClientRequestContext): Promise<AccessToken>;
    /** Set to true if there's a current authorized user or client (in the case of agent applications).
     * Set to true if signed in and the access token has not expired, and false otherwise.
     */
    readonly isAuthorized: boolean;
    /** Set to true if the user has signed in, but the token has expired and requires a refresh */
    readonly hasExpired: boolean;
    /** Set to true if signed in - the accessToken may be active or may have expired and require a refresh */
    readonly hasSignedIn: boolean;
    dispose(): void;
    readonly onUserStateChanged: BeEvent<(token: AccessToken | undefined, message: string) => void>;
}
//# sourceMappingURL=OidcIosClient.d.ts.map