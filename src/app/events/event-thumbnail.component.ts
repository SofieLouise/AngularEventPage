import { Component, Input} from '@angular/core';
/**
 * Angular is taking care of encapsulating our CSS styles. The styles below are only applied within this specific component.
 * ? is a safe navigation operator ( ?. ) . It's an Angular template expression operator. 
 *      Safe navigation operator avoids exception for null and undefined values in property paths.
 * * ngIf is used to render the DOM element if the expression is true. Otherwise it will be commented out and not rendered. 
 *      This is especially practical if we have components that fetch data from a server. When ngIf returns false, it won't do that.
 * But ngIf can be resource heavy, if we show and hide frequently. To avoid having to render the DOM everytime we can use another approach:
 *      We bind to the DOM element using [hidden]. We set hidden to the boolean value returned by the expression "!event?.location". 
 *      Angular sets the hidden property on the DOM element to the boolean value. This way the DOM element is still rendered, but hidden.
 */
@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: {{event?.price}} DKK </div>
        <div [hidden]="!event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">Online URL: {{event?.onlineUrl}}
    </div>
    `,
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    /**
     * This @Input decorator tells Angular that this event object 
     * will be passed in from a different component.
     */
    @Input() event:any

    getStartTimeStyle(){
        //Different approaches: You can return a space separated string, a list or an object with styles you want applied
        if(this.event && this.event.time === '8:00 am'){
            return {color: '#003300',
            'font-weight': 'bold'}
        }
        return {}
    }
}