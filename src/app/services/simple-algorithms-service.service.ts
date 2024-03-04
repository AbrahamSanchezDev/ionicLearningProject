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

    return arr;
  }
  esPrimo(n: number): number {
    if (n <= 1) {
      return 0;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return 0;
      }
    }
    return 1;
  }

  fibonacci(n: number): number[] {
    let arr: number[] = [0, 1];
    for (let i = 0; i <= n; i++) {
      let siguiente = arr[i] + arr[i + 1];
      arr.push(siguiente);
      //arr[i+2] = arr[i] + arr[i+1];
    }
    return arr;
  }
}
