import { Component, OnInit } from '@angular/core';
import { CitibikeService } from '../citibike.service';
import { Addresses } from '../addresses';

@Component({
  selector: 'app-geocode-address',
  templateUrl: './geocode-address.component.html',
  styleUrls: ['./geocode-address.component.css'],
  providers: [CitibikeService]
})
export class GeocodeAddressComponent implements OnInit {
  something: string;
  errorMessage: any;
  startAddress: string = "70 Maujer, Brooklyn";
  endAddress: string = "455 Brodway, New York";
  citibikeTime: string;
  gettingAddress: boolean = true;
  addresses: Addresses;

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

  submit() {
    console.log("You clicked submit!");
    console.log(this.startAddress);
    console.log(this.endAddress);
    // this.citibikeService.getStations()
    //   .then(
    //     addresses => {
    //       console.log(addresses);
    //     },
    //     error => this.errorMessage = <any>error
    //   );
    this.citibikeService.getAddress(this.startAddress, this.endAddress)
      .then(
        res =>{
          console.log(res)
          this.addresses = res;
          this.startAddress = this.addresses.start;
          this.endAddress = this.addresses.end;
        }, error => this.errorMessage = <any>error
      );
  }

  calculateRouteTime() {
    console.log("You clicked calculate!");
    this.citibikeService.getTravelTimes(this.addresses)
      .then(
        res =>{
          console.log("Trying to resolve the promise in the geocode component for calculate!");
          console.log(res);
          this.citibikeTime = res;
        }, error => this.errorMessage = <any>error
      );

  }

}
