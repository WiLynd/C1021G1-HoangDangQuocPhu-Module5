import { Component, OnInit } from '@angular/core';
import {IContract} from '../contract';
import {ContractDao} from '../contractDao';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contracts: IContract[] = ContractDao.contracts;

  constructor() { }

  ngOnInit(): void {
  }

}
