import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'age',
})
export class agePipe implements PipeTransform {
  transform(birthdate: string): number {
    const today = new Date()
    const birthDate = new Date(birthdate)
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }
}
