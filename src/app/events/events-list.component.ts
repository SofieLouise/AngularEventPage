import { Component, OnInit } from "@angular/core";
import { ToastrService } from '../common/toastr.service';
import { EventService } from "./shared/event.service";

/*
 * The event-thumbnail component has an input parameter called [event].
 * Inter component communication. 3 different ways: input properties, output properties and template variables.
 * "event1" is a reference to the field event1 in the EventsListComponent class.
 * within the event-thumbnail component such as 'logFoo()' or 'someProperty'.
 * ngfor is a structural directive. It changes the structure of the dom by adding elements.
 * In this case it adds an event-thumbnail component for each event.
 */
@Component({
  selector: "events-list",
  templateUrl: "events-list.component.html",
})
export class EventsListComponent implements OnInit {
  events: any[];
  // private is short hand for assigning the value to a private variable called eventService in this class.
  constructor(private eventService: EventService, private toastrService: ToastrService) {}

  // Hooks into the initialization of the component
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName)
  }
}
