import { Injectable } from '@angular/core';
import { Location } from '../../shared/interfaces/forservices';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  constructor() { }
  location:Location[]=[
    {country:"All", city:["All"]},
    {country:"Armenia", city:["Yerevan", "Gyumri"]},
    {country:"Belarus", city:["Minsk", "Gordno"]},
    {country:"Russia", city:["Moscow", "Saint Petersburg"]},
    {country:"England", city:["London", "Manchester"]},
    {country:"Georgia", city:["Tbilisi", "Batumi"]},
    {country:"Italy", city:["Rome", "Milan"]},
    {country:"France", city:["Paris", "Marseille"]},
    {country:"Germany", city:["Berlin", "Hamburg"]},
    {country:"Mexico", city:["Mexico City", "Guadalajara"]}
  ];
  
  languages:Array<string>=["Armenian", "Belarusian", "Russian", "English", "Georgian", "Italian", "French", "German", "Danish", "Dutch"]

}