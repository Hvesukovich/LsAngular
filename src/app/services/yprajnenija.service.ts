import { Injectable } from '@angular/core';


interface YprajnenieInfoTip {
  gruppa_mishc: string;
  name: string;
  tip_yprajnenija: string;
  kolichestvo_polei: number;
  osnovnaja_nagruzka: string;
  vspomogatelnaja_nagruzka: string;
  akcent_na_puchok_mishci: string;
  snarad: string;
  izobrajenie?: string;
  pojasnenija?: string;

}

@Injectable()
export class YprajnenijaService {
  
  public yprajnenieInfo:YprajnenieInfoTip = {
    gruppa_mishc: null,
    name: null,
    tip_yprajnenija: null,
    kolichestvo_polei: 1,
    osnovnaja_nagruzka: null,
    vspomogatelnaja_nagruzka: null,
    akcent_na_puchok_mishci: null,
    snarad: null,
    izobrajenie: null,
    pojasnenija: null
  };

  getInfo(){
    
  }
}
