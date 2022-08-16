import StickySidebar from 'sticky-sidebar';

let sidebar = document.querySelector('.sidebar');
if (sidebar) {
   if (window.innerWidth > 1023.98) {
      new StickySidebar('.sidebar', {
         containerSelector: '.page__wrap',
         innerWrapperSelector: '.sidebar__wrap',
         topSpacing: 20,
         bottomSpacing: 20,
      });
   }
}
