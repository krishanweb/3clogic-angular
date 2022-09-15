import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const uiElemnet ={
      sitenav :document.querySelectorAll('.primaryNav > li > a'),
      sitenavinner:document.querySelectorAll('.primaryNav > li > ul'),
      menuArrow:document.querySelector('.mobile-btn-sidebar'),
      sideNav:document.querySelector('.navSide'),
  }
  if(uiElemnet.sitenav !=null){
      uiElemnet.sitenav.forEach((item,index)=>{
         
         item.addEventListener('click',(e)=>{
          
          let parentEl = (<HTMLElement>e.target ).parentElement;
         
          uiElemnet.sitenav.forEach((classitem) =>{
              e.target != classitem  ? classitem.classList.remove('active') : parentEl.children[1] !=null? item.classList.toggle('active'):'';
           })
         
          uiElemnet.sitenavinner.forEach((item1)=>{
                  if(parentEl.children[1] != item1){
                      item1.classList.remove('show');
  
                  }
                 
              }) 
              parentEl.children[1] !=null?parentEl.children[1].classList.toggle('show'):'';
          })
      })
     
  }
  if(uiElemnet.menuArrow !=null){
      uiElemnet.menuArrow.addEventListener('click',()=>{
          uiElemnet.sideNav.classList.toggle('colapseSideNav');
      });
  }
  }

}
