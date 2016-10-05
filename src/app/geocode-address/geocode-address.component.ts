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
  startAddress: string = "70 Maujer, Brooklyn";
  endAddress: string = "455 Brodway, New York";
  gettingAddress: boolean = true;

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
        }, error => this.errorMessage = <any>error
      );
  }

}
