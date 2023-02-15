import { Component, OnInit } from '@angular/core';
import { IPlayer } from 'src/app/models/players.models';
import { PlayersApiService } from 'src/app/services/players-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/internal/Observable';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPosition } from 'src/app/models/positions.models';
import { PositionsApiService } from 'src/app/services/positions-api.service';

@Component({
  selector: 'players-list-component',
  templateUrl: './players-list.component.html'
})
export class PlayersListComponent implements OnInit {
  filter: string = '';
  positions: Observable<IPosition[]> = new Observable();
  players: Observable<IPlayer[]> = new Observable();
  addPlayerModalTitle: string = "Add new player";
  addPlayerFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required, Validators.min(0)]),
    position:  new FormControl('', [Validators.required])
  });

  constructor(private playersApiService: PlayersApiService, private positionsApiService: PositionsApiService, private modalService: NgbModal) {}

  ngOnInit(): void {
      this.getPositions();
      this.getPlayers();
  }

  getPlayers() {
    this.players = this.playersApiService.getPlayers(this.filter);
  }

  getPositions() {
    this.positions = this.positionsApiService.getPositions();                                   
  }

  getFormData(filter: any) {
    this.filter = filter;
    this.getPlayers();
  }

  openModalAddPlayer(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }
  
  closeModalAddPlayer() {
    this.modalService.dismissAll();
    this.resetFormNewPlayer();
  }

  addNewPlayer() {
    if (!this.addPlayerFormGroup.valid) return;

    let newPlayer: IPlayer = {
      fullName: '',
      firstName: this.addPlayerFormGroup.value.firstName,
      lastName: this.addPlayerFormGroup.value.lastName,
      dateOfBirth: this.addPlayerFormGroup.value.birthDate,
      position: this.addPlayerFormGroup.value.position,
      number: this.addPlayerFormGroup.value.number
    };

    this.playersApiService.insertPlayer(newPlayer).subscribe(
      data => { console.log(data); this.closeModalAddPlayer(); this.getPlayers(); },
      error => console.log(error)
    );    
  }

  resetFormNewPlayer() {
    this.addPlayerFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required, Validators.min(0)]),
      position:  new FormControl('', [Validators.required])
    });
  }
}
