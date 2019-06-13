import { IOidcFrontendClient } from "@bentley/imodeljs-clients";
export declare class SimpleViewerApp {
    private static _isReady;
    private static _oidcClient;
    static readonly oidcClient: IOidcFrontendClient;
    static readonly ready: Promise<void>;
    static startup(): void;
    private static initializeRpc;
    private static initializeOidc;
    static shutdown(): void;
    private static getConnectionInfo;
}
//# sourceMappingURL=SimpleViewerApp.d.ts.map