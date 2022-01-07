import { forwardRef, useEffect, useRef, useState, useImperativeHandle } from 'react';
import RFB from '../noVNC/core/rfb';
import loader from './assets/loading.gif';

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
}

export type RFBHandler = {
    sendKey: (key: number, code: string, down: boolean)=> void,
};

export const VncScreen = forwardRef((props: Props, ref: React.Ref<RFBHandler>)=> {
    const [rfb, setRfb] = useState<RFB | null>(null);
    const screen = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useImperativeHandle(ref, ()=>({
        sendKey: (key: number, code: string, down: boolean)=> {
            rfb?.sendKey(key, code, down);
        }
    }));

    const {
        url,
        style,
        className,
        viewOnly,
        focusOnClick,
        clipViewport,
        dragViewport,
        scaleViewport,
        resizeSession,
        showDotCursor,
        background,
        qualityLevel,
        compressionLevel,
        retryDuration = 3000,
        debug = false,
    } = props;

    const logger = {
        log: (...args: any[]) => { if (debug) console.log(...args); },
        info: (...args: any[]) => { if (debug) console.info(...args); },
        error: (...args: any[]) => { if (debug) console.error(...args); },
    };

    const disconnect = () => {
        if (!rfb) {
            return;
        }

        rfb.disconnect();
        setRfb(null);
    };

    const connect = () => {
        try {
            disconnect();

            if (!screen.current) {
                return;
            }

            screen.current.innerHTML = '';

            const _rfb = new RFB(screen.current, url);

            _rfb.viewOnly = viewOnly || false;
            _rfb.focusOnClick = focusOnClick || false;
            _rfb.clipViewport = clipViewport || false;
            _rfb.dragViewport = dragViewport || false;
            _rfb.resizeSession = resizeSession || false;
            _rfb.scaleViewport = scaleViewport || false;
            _rfb.showDotCursor = showDotCursor || false;
            _rfb.background = background || '';
            _rfb.qualityLevel = qualityLevel || 6;
            _rfb.compressionLevel = compressionLevel || 2;
            setRfb(_rfb);

            _rfb.addEventListener('connect', () => {
                logger.info('Connected to remote VNC.');
                setLoading(false);
            });

            _rfb.addEventListener('disconnect', () => {
                logger.info(`Disconnected from remote VNC, retrying in ${retryDuration / 1000} seconds.`);
                setTimeout(connect, retryDuration);
                setLoading(true);
            });

            _rfb.addEventListener('credentialsrequired', () => {
                const password = prompt("Password Required:");
                _rfb.sendCredentials({ password: password });
            });

            _rfb.addEventListener('desktopname', (e: { detail: { name: string } }) => {
                logger.info(`Desktop name is ${e.detail.name}`);
            });
        } catch (err) {
            logger.error(err);
        }
    };

    useEffect(() => {
        connect();

        return disconnect;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = () => {
        if (!rfb) return;

        rfb.focus();
    }

    const handleMouseEnter = () => {
        if (document.activeElement && document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        handleClick();
    };

    const handleMouseLeave = () => {
        if (!rfb) {
            return;
        }

        rfb.blur();
    };

    console.log(screen.current?.offsetWidth);
    console.log(screen.current?.scrollTop, screen.current?.offsetHeight, screen.current?.offsetTop)

    return (
        <>
                    
            <div
                style={style}
                className={className}
                ref={screen}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                
            </div>
            {loading?
            <div style={{
                color: 'white', 
                position: 'absolute', 
                left: screen.current?.offsetWidth!/2 , 
                top: (screen.current?.offsetHeight!/2 + screen.current?.offsetTop!/2),
            }}><img alt='loading' src={loader} style={{height: '60px'}} /></div>: null}
        </>
    );
});
