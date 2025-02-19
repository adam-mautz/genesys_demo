import React from 'react';
import { IconProps } from '../../icon/interfaces';
import { NonCancelableEventHandler } from '../../internal/events';
export interface DrawersProps {
    activeDrawerId?: string;
    items: ReadonlyArray<DrawersProps.Drawer>;
    onChange?: NonCancelableEventHandler<DrawersProps.ChangeDetail>;
    ariaLabel?: string;
}
declare namespace DrawersProps {
    export interface Drawer {
        ariaLabels?: Labels;
        content: React.ReactNode;
        id: string;
        trigger: Trigger;
    }
    export interface ChangeDetail {
        activeDrawerId: string | null;
    }
    interface Labels {
        closeButton?: string;
        content?: string;
        triggerButton?: string;
        resizeHandle?: string;
    }
    interface Trigger {
        iconName?: IconProps.Name;
        iconSvg?: React.ReactNode;
        iconUrl?: string;
    }
    export {};
}
/**
 * The Drawers root component is mounted in the AppLayout index file. It will only
 * render if the drawers are defined, and it will take over the mounting of and
 * rendering of the Tools and SplitPanel (side position) if they exist. If drawers
 * do not exist then the Tools and SplitPanel will be handled by the Tools component.
 */
export default function Drawers(): JSX.Element | null;
/**
 * The MobileTriggers will be mounted inside of the AppBar component and
 * only rendered when Drawers are defined in mobile viewports. The same logic
 * will in the AppBar component will suppress the rendering of the legacy
 * trigger button for the Tools drawer.
 */
export declare function MobileTriggers(): JSX.Element | null;
export {};
//# sourceMappingURL=drawers.d.ts.map