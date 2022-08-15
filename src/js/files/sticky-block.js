import StickySidebar from 'sticky-sidebar';

let sidebar = document.querySelector('.sidebar');
if (sidebar) {
   if (window.innerWidth > 991) {
      new StickySidebar('.sidebar', {
         containerSelector: '.page__wrap',
         innerWrapperSelector: '.sidebar__wrap',
         topSpacing: 20,
         bottomSpacing: 20,
      });
   }
}
