import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Event 1',
        date: '05/10/2020',
        time: '08:00 pm',
        price: 150.00,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: 'Campusvej 55',
            city: 'Odense M',
            country: 'Denmark'
        }
    }
}   