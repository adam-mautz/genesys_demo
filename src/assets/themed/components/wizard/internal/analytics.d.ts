import { WizardProps } from '../interfaces';
export declare const trackStartWizard: () => void;
export declare const trackEndWizard: (funnelId: string | undefined) => void;
export declare const trackStartStep: (stepIndex: number, funnelId?: string) => void;
export declare const trackNavigate: (activeStepIndex: number, requestedStepIndex: number, reason: WizardProps.NavigationReason, funnelId?: string) => void;
export declare const trackSubmit: (stepIndex: number, funnelId?: string) => void;
export declare const trackCancel: (stepIndex: number, funnelId?: string) => void;
//# sourceMappingURL=analytics.d.ts.map