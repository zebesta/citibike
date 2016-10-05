import { Component } from '@angular/core';
import { GeocodeAddressComponent } from './geocode-address/geocode-address.component';
import { CitibikeService } from './citibike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CitibikeService]
})
export class AppComponent {
  title = 'app works!';
}
