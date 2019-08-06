import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../../core/core.module';

import { ExamplesComponent } from './examples/examples.component';
import { ParentComponent } from './theming/parent/parent.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { TodosContainerComponent } from './todos/components/todos-container.component';
import { StockMarketContainerComponent } from './stock-market/components/stock-market-container.component';
import { CrudComponent } from './crud/components/crud.component';
import { FormComponent } from './configuration-editor/components/configuration-form/form.component';
import { NotificationsComponent } from './notifications/components/notifications.component';

const routes: Routes = [
    {
        path: '',
        component: ExamplesComponent,
        children: [
            {
                path: '',
                redirectTo: 'form',
                pathMatch: 'full'
            },
            {
                path: 'todos',
                component: TodosContainerComponent,
                data: { title: 'simbad.examples.menu.todos' }
            },
            {
                path: 'stock-market',
                component: StockMarketContainerComponent,
                data: { title: 'simbad.examples.menu.stocks' }
            },
            {
                path: 'theming',
                component: ParentComponent,
                data: { title: 'simbad.examples.menu.theming' }
            },
            {
                path: 'crud',
                redirectTo: 'crud/',
                pathMatch: 'full'
            },
            {
                path: 'crud/:id',
                component: CrudComponent,
                data: { title: 'simbad.examples.menu.crud' }
            },
            {
                path: 'form',
                component: FormComponent,
                data: { title: 'simbad.examples.menu.form' }
            },
            {
                path: 'notifications',
                component: NotificationsComponent,
                data: { title: 'simbad.examples.menu.notifications' }
            },
            {
                path: 'authenticated',
                component: AuthenticatedComponent,
                canActivate: [AuthGuardService],
                data: { title: 'simbad.examples.menu.auth' }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamplesRoutingModule {}
