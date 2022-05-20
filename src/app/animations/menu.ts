import { trigger, state, style, transition, animate } from '@angular/animations';


export const onSideNavChange = trigger('onSideNavChange', [
    state('close',
        style({
            'width': '50px'
        })
    ),
    state('open',
        style({
            'width': '250px'
        })
    ),
    transition('close => open', animate('0.1s')),
    transition('open => close', animate('0.1s')),
]);


export const onMainContentChange = trigger('onMainContentChange', []);


export const animateText = trigger('animateText', [
    state('hide',
        style({
            'display': 'none',
            opacity: 0,
        })
    ),
    state('show',
        style({
            'display': 'inline-block',
            opacity: 1,
        })
    ),
    transition('close => open', animate('8000ms ease-in')),
    transition('open => close', animate('0s')),
]);
