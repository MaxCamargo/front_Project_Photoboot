import { NgModule } from '@angular/core';
import { MenuPage } from './menu.page';
import { DashboardPage } from '../dashboard/dashboard.page';
import { PerfilusuarioPage } from '../perfilusuario/perfilusuario.page';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'menu',
                component: MenuPage,
                children: [
                    {
                        path: 'dashboard',
                        outlet: 'menucontent',
                        component: DashboardPage
                    },
                    {
                        path: '',
                        outlet: 'perfilusuario',
                        component: PerfilusuarioPage
                    }
                ]
            },
            { path: '', redirectTo: '/menu/(menucontent:dashboard)' }
        ])
    ],
    exports: [RouterModule]
})
export class MenuRoutingModule { }