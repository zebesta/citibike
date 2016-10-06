import { Component, OnInit } from '@angular/core';
import { CitibikeService } from '../citibike.service';
import { Addresses } from '../addresses';
import { Travelcard } from '../travelcard'

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
  walk1: string;
  station1: string;
  walk2: string;
  station2: string;
  bike1: string;
  addresses: Addresses;
  travelcard: Travelcard;
  travelcards: Travelcard[];

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
          console.log(res[0]);
          this.travelcards = res;
          // this.travelcard = res[0];
          // this.citibikeTime = this.travelcard.timeString;
          // this.responseObject = JSON.parse(res);
          // this.citibikeTime = res.totaltime;
          // console.log(res.walk1);
          // this.walk1 = res.walk1;
          // this.walk2 = res.walk2;
          // this.station1 = res.station1;
          // this.station2 = res.station2;
          // this.bike1 = res.bike1;
        }, error => this.errorMessage = <any>error
      );

  }
  gotoMap(tc){
    console.log("Go to the travel cards map!!" + tc.type);
  }

}
