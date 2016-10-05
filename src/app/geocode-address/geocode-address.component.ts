import { Component, OnInit } from '@angular/core';
import { CitibikeService } from '../citibike.service';

@Component({
  selector: 'app-geocode-address',
  templateUrl: './geocode-address.component.html',
  styleUrls: ['./geocode-address.component.css'],
  providers: [CitibikeService]
})
export class GeocodeAddressComponent implements OnInit {
  something: string;
  errorMessage: any;

  constructor(
    private citibikeService: CitibikeService
  ) { }

  ngOnInit() {
    this.getSomething();
  }

  getSomething(){
    this.citibikeService.getSomething()
      .then(
        something => {
          this.something = something;
          console.log(something);
        },
        error => this.errorMessage = <any>error
      );
  }

}
