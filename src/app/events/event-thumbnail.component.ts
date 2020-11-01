import { Component, Input} from '@angular/core';
/**
 * Angular is taking care of encapsulating our CSS styles.
 * The styles below are only applied within this specific component. 
 */
@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: {{event.price}} DKK </div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
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
}