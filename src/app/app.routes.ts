import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ListaComponent} from './lista/lista.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent},
    { path: 'lista', component: ListaComponent }
]

export const routing = RouterModule.forRoot(appRoutes)