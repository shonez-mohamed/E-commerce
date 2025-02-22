import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // {
  //   path: 'home', 
  //   renderMode: RenderMode.Server,
  // },
  
  {
    path:'address/:cartID', 
    renderMode: RenderMode.Server,
  },
  
  {
    path:'productDetails/:productID' , 
    renderMode: RenderMode.Server,
  }, 

  // {
  //   path:'allOrders ' , 
  //   renderMode: RenderMode.Server,
  // },
  // {
  //   path:'cart' , 
  //   renderMode: RenderMode.Server,
  // },
  
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
