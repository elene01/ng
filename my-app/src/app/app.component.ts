import { Component } from '@angular/core'
import data from '../assets/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app'
  users = data
  show: boolean = false
  loading: boolean = false
  date:any = new Date() 
  userNames: string[] = []
  userNameShow:boolean = false

  loadUsers() {
    this.loading = true
   
    for(let i=0; i<this.users.length; i++){
      this.userNames.push(this.users[i]['firstName'])
    }
    setTimeout(() => {
      this.show = !this.show
      this.loading = !this.loading
      this.userNameShow = !this.userNameShow
    }, 1000)
  }

}
