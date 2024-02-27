import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimpleAlgorithmsServiceService {
  constructor() {}

  bubbleSort(arr: number[]) {
    let size = arr.length;
    let checar;
    do {
      checar = false;
      for (let i = 0; i < size; i++) {
        if (arr[i] > arr[i + 1]) {
          let tmp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = tmp;
          checar = true;
          return arr;
        }
      }
    } while (checar);
    {
    }
  }
}
