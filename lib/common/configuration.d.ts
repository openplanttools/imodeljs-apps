/**
 * List of possible backends that simple-viewer-app can use
 */
export declare const enum UseBackend {
    /** Use local simple-viewer-app backend */
    Local = 0,
    /** Use deployed Navigator backend */
    Navigator = 1
}
/**
 * Setup configuration for the application
 *
 * **Note:** this part of configuration is shared between both the application itself and
 * the tests. Each of them also have unique configuration stored in:
 * - App: `src/common/config.json`
 * - Tests: `test/end-to-end/config.json`
 */
export default function setupEnv(): void;
//# sourceMappingURL=configuration.d.ts.map