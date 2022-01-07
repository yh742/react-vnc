/// <reference types="react" />
interface Props {
    url: string;
    style?: object;
    className?: string;
    viewOnly?: boolean;
    focusOnClick?: boolean;
    clipViewport?: boolean;
    dragViewport?: boolean;
    scaleViewport?: boolean;
    resizeSession?: boolean;
    showDotCursor?: boolean;
    background?: string;
    qualityLevel?: number;
    compressionLevel?: number;
    retryDuration?: number;
    debug?: boolean;
    loadingSrc?: string;
}
export declare type RFBHandler = {
    sendKey: (key: number, code: string, down: boolean) => void;
};
export declare const VncScreen: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<RFBHandler>>;
export {};
