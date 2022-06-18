import { Component, OnInit } from '@angular/core';
import { Location } from "../../models/locations.model";
import { Subscription } from "rxjs";
import { UsersService } from "../../services/users.services";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations?: Location[];
  locationsSubscription?: Subscription;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.locationsSubscription = this.usersService.getLocations().subscribe((locations) => {
      this.locations = locations.results;
    });
  }

  ngOnDestroy(): void {
    this.locationsSubscription?.unsubscribe();
  }
}
