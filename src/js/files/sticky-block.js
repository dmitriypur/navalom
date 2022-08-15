import StickySidebar from 'sticky-sidebar';


if (window.innerWidth > 991){
   var sidebar = new StickySidebar('.sidebar', {
      containerSelector: '.page__wrap',
      innerWrapperSelector: '.sidebar__wrap',
      topSpacing: 20,
      bottomSpacing: 20,
   });
}