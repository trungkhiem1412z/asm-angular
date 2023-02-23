import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySuffix',
})
export class CurrencySuffixPipe implements PipeTransform {
  transform(value: number, currencyCode: string = 'VND', symbol: string = '₫'): string {
    const formattedValue = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
    return `${formattedValue}`;
  }
}
