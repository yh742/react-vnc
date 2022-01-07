declare class RFB extends EventTargetMixin {
    static genDES(password: any, challenge: any): any;
    constructor(target: any, urlOrChannel: any, options: any);
    _target: any;
    _url: string | null;
    _rawChannel: any;
    _rfbCredentials: any;
    _shared: boolean;
    _repeaterID: any;
    _wsProtocols: any;
    _rfbConnectionState: string;
    _rfbInitState: string;
    _rfbAuthScheme: number;
    _rfbCleanDisconnect: boolean;
    _rfbVersion: number;
    _rfbMaxVersion: number;
    _rfbTightVNC: boolean;
    _rfbVeNCryptState: number;
    _rfbXvpVer: number;
    _fbWidth: number;
    _fbHeight: number;
    _fbName: string;
    _capabilities: {
        power: boolean;
    };
    _supportsFence: boolean;
    _supportsContinuousUpdates: boolean;
    _enabledContinuousUpdates: boolean;
    _supportsSetDesktopSize: boolean;
    _screenID: number;
    _screenFlags: number;
    _qemuExtKeyEventSupported: boolean;
    _clipboardText: any;
    _clipboardServerCapabilitiesActions: {};
    _clipboardServerCapabilitiesFormats: {};
    _sock: Websock;
    _display: Display;
    _flushing: boolean;
    _keyboard: Keyboard;
    _gestures: GestureHandler;
    _resizeObserver: ResizeObserver;
    _disconnTimer: NodeJS.Timeout | null;
    _resizeTimeout: NodeJS.Timeout | null;
    _mouseMoveTimer: NodeJS.Timeout | null;
    _decoders: {};
    _FBU: {
        rects: number;
        x: number;
        y: number;
        width: number;
        height: number;
        encoding: null;
    };
    _mousePos: {};
    _mouseButtonMask: number;
    _mouseLastMoveTime: number;
    _viewportDragging: boolean;
    _viewportDragPos: {};
    _viewportHasMoved: boolean;
    _accumulatedWheelDeltaX: number;
    _accumulatedWheelDeltaY: number;
    _gestureLastTapTime: number | null;
    _gestureFirstDoubleTapEv: any;
    _gestureLastMagnitudeX: number;
    _gestureLastMagnitudeY: number;
    _eventHandlers: {
        focusCanvas: (event: any) => void;
        handleResize: () => void;
        handleMouse: (ev: any) => void;
        handleWheel: (ev: any) => void;
        handleGesture: (ev: any) => void;
    };
    _screen: HTMLDivElement;
    _canvas: HTMLCanvasElement;
    _cursor: Cursor;
    _cursorImage: {
        rgbaPixels: Uint8Array;
        w: number;
        h: number;
        hotx: number;
        hoty: number;
    };
    _expectedClientWidth: number | null;
    _expectedClientHeight: number | null;
    dragViewport: boolean;
    focusOnClick: boolean;
    _viewOnly: boolean;
    _clipViewport: boolean;
    _scaleViewport: boolean;
    _resizeSession: boolean;
    _showDotCursor: any;
    _qualityLevel: number;
    _compressionLevel: number;
    set viewOnly(arg: boolean);
    get viewOnly(): boolean;
    get capabilities(): {
        power: boolean;
    };
    set touchButton(arg: number);
    get touchButton(): number;
    set clipViewport(arg: boolean);
    get clipViewport(): boolean;
    set scaleViewport(arg: boolean);
    get scaleViewport(): boolean;
    set resizeSession(arg: boolean);
    get resizeSession(): boolean;
    set showDotCursor(arg: any);
    get showDotCursor(): any;
    set background(arg: string);
    get background(): string;
    set qualityLevel(arg: number);
    get qualityLevel(): number;
    set compressionLevel(arg: number);
    get compressionLevel(): number;
    disconnect(): void;
    sendCredentials(creds: any): void;
    sendCtrlAltDel(): void;
    machineShutdown(): void;
    machineReboot(): void;
    machineReset(): void;
    sendKey(keysym: any, code: any, down: any): void;
    focus(options: any): void;
    blur(): void;
    clipboardPasteFrom(text: any): void;
    _connect(): void;
    _disconnect(): void;
    _socketOpen(): void;
    _socketClose(e: any): void;
    _socketError(e: any): void;
    _focusCanvas(event: any): void;
    _setDesktopName(name: any): void;
    _saveExpectedClientSize(): void;
    _currentClientSize(): number[];
    _clientHasExpectedSize(): boolean;
    _handleResize(): void;
    _updateClip(): void;
    _updateScale(): void;
    _requestRemoteResize(): void;
    _screenSize(): {
        w: number;
        h: number;
    };
    _fixScrollbars(): void;
    _updateConnectionState(state: any): void;
    _fail(details: any): boolean;
    _setCapability(cap: any, val: any): void;
    _handleMessage(): void;
    _handleKeyEvent(keysym: any, code: any, down: any): void;
    _handleMouse(ev: any): void;
    _handleMouseButton(x: any, y: any, down: any, bmask: any): void;
    _handleMouseMove(x: any, y: any): void;
    _handleDelayedMouseMove(): void;
    _sendMouse(x: any, y: any, mask: any): void;
    _handleWheel(ev: any): void;
    _fakeMouseMove(ev: any, elementX: any, elementY: any): void;
    _handleTapEvent(ev: any, bmask: any): void;
    _handleGesture(ev: any): void;
    _negotiateProtocolVersion(): boolean | undefined;
    _negotiateSecurity(): any;
    _securityContext: string | undefined;
    _securityStatus: number | undefined;
    _handleSecurityReason(): boolean;
    _negotiateXvpAuth(): any;
    _negotiateVeNCryptAuth(): boolean | undefined;
    _rfbVeNCryptSubtypesLength: number | undefined;
    _negotiateStdVNCAuth(): boolean;
    _negotiateTightUnixAuth(): boolean;
    _negotiateTightTunnels(numTunnels: any): boolean;
    _negotiateTightAuth(): any;
    _negotiateAuthentication(): any;
    _handleSecurityResult(): any;
    _negotiateServerInit(): boolean;
    _fbDepth: number | undefined;
    _sendEncodings(): void;
    _initMsg(): any;
    _handleSetColourMapMsg(): boolean;
    _handleServerCutText(): boolean;
    _handleServerFenceMsg(): boolean;
    _handleXvpMsg(): boolean;
    _normalMsg(): boolean;
    _onFlush(): void;
    _framebufferUpdate(): boolean;
    _handleRect(): any;
    _handleVMwareCursor(): boolean;
    _handleCursor(): boolean;
    _handleDesktopName(): boolean;
    _handleExtendedDesktopSize(): boolean;
    _handleDataRect(): any;
    _updateContinuousUpdates(): void;
    _resize(width: any, height: any): void;
    _xvpOp(ver: any, op: any): void;
    _updateCursor(rgba: any, hotx: any, hoty: any, w: any, h: any): void;
    _shouldShowDotCursor(): boolean;
    _refreshCursor(): void;
}
declare namespace RFB {
    namespace messages {
        function keyEvent(sock: any, keysym: any, down: any): void;
        function keyEvent(sock: any, keysym: any, down: any): void;
        function QEMUExtendedKeyEvent(sock: any, keysym: any, down: any, keycode: any): void;
        function QEMUExtendedKeyEvent(sock: any, keysym: any, down: any, keycode: any): void;
        function pointerEvent(sock: any, x: any, y: any, mask: any): void;
        function pointerEvent(sock: any, x: any, y: any, mask: any): void;
        function _buildExtendedClipboardFlags(actions: any, formats: any): Uint8Array;
        function _buildExtendedClipboardFlags(actions: any, formats: any): Uint8Array;
        function extendedClipboardProvide(sock: any, formats: any, inData: any): void;
        function extendedClipboardProvide(sock: any, formats: any, inData: any): void;
        function extendedClipboardNotify(sock: any, formats: any): void;
        function extendedClipboardNotify(sock: any, formats: any): void;
        function extendedClipboardRequest(sock: any, formats: any): void;
        function extendedClipboardRequest(sock: any, formats: any): void;
        function extendedClipboardCaps(sock: any, actions: any, formats: any): void;
        function extendedClipboardCaps(sock: any, actions: any, formats: any): void;
        function clientCutText(sock: any, data: any, extended?: boolean): void;
        function clientCutText(sock: any, data: any, extended?: boolean): void;
        function setDesktopSize(sock: any, width: any, height: any, id: any, flags: any): void;
        function setDesktopSize(sock: any, width: any, height: any, id: any, flags: any): void;
        function clientFence(sock: any, flags: any, payload: any): void;
        function clientFence(sock: any, flags: any, payload: any): void;
        function enableContinuousUpdates(sock: any, enable: any, x: any, y: any, width: any, height: any): void;
        function enableContinuousUpdates(sock: any, enable: any, x: any, y: any, width: any, height: any): void;
        function pixelFormat(sock: any, depth: any, trueColor: any): void;
        function pixelFormat(sock: any, depth: any, trueColor: any): void;
        function clientEncodings(sock: any, encodings: any): void;
        function clientEncodings(sock: any, encodings: any): void;
        function fbUpdateRequest(sock: any, incremental: any, x: any, y: any, w: any, h: any): void;
        function fbUpdateRequest(sock: any, incremental: any, x: any, y: any, w: any, h: any): void;
        function xvpOp(sock: any, ver: any, op: any): void;
        function xvpOp(sock: any, ver: any, op: any): void;
    }
    namespace cursors {
        namespace none {
            const rgbaPixels: Uint8Array;
            const w: number;
            const h: number;
            const hotx: number;
            const hoty: number;
        }
        namespace dot {
            const rgbaPixels_1: Uint8Array;
            export { rgbaPixels_1 as rgbaPixels };
            const w_1: number;
            export { w_1 as w };
            const h_1: number;
            export { h_1 as h };
            const hotx_1: number;
            export { hotx_1 as hotx };
            const hoty_1: number;
            export { hoty_1 as hoty };
        }
    }
}
export default RFB;
import EventTargetMixin from "./util/eventtarget.js";
import Websock from "./websock.js";
import Display from "./display.js";
import Keyboard from "./input/keyboard.js";
import GestureHandler from "./input/gesturehandler.js";
import Cursor from "./util/cursor.js";
