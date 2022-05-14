import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'renderer',
    loadChildren: () => import('./pages/renderer/renderer.module').then( m => m.RendererPageModule)
  },
  {
    path: 'element-ref',
    loadChildren: () => import('./pages/element-ref/element-ref.module').then( m => m.ElementRefPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pages/pipes/pipes.module').then( m => m.PipesPageModule)
  },
  {
    path: 'googlechart',
    loadChildren: () => import('./pages/google-chart/google-chart.module').then( m => m.GoogleChartPageModule)
  },
  {
    path: 'qr-scanner',
    loadChildren: () => import('./pages/qr-scanner/qr-scanner.module').then( m => m.QrScannerPageModule)
  },
  {
    path: 'api-caching',
    loadChildren: () => import('./pages/api-caching/api-caching.module').then( m => m.ApiCachingPageModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./pages/rxjs/rxjs.module').then( m => m.RxjsPageModule)
  },
  {
    path: 'ui-one',
    loadChildren: () => import('./pages/ui/ui-one/ui-one.module').then( m => m.UiOnePageModule)
  },
  {
    path: 'swiperjs',
    loadChildren: () => import('./pages/ui/swiperjs/swiperjs.module').then( m => m.SwiperjsPageModule)
  },
  {
    path: 'filesystem',
    loadChildren: () => import('./pages/filesystem/filesystem.module').then( m => m.FilesystemPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
