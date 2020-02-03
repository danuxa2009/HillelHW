"use strict";



class Tabset {
    constructor(el) {
        this.el = el

        this.init();
    }

}

init() {
    this.bindClasses();
}


bindClasses() {
    this.el.classList.add(Tabset.TABSET_CLASS);
}

















// const titles = document.querySelector('.tabs-titles')
// const titlesBody = document.querySelector('.tabs-body')


// class Tabset {
//     constructor(el) {
//         this.el = el

//         this.init();
//     }

//     init() {
//         // this.bindCallbacks()
//         this.bindClasses();
//         this.clickOnTab();
//         this.tabClick(event);
//     }


//     static TABSET_CLASS = 'tabset';
//     static TABSET_ITEM = 'tabset-item'
//     static TABSET_ITEM_ACTIVE = 'active'

//     bindClasses() {
//         this.el.classList.add(Tabset.TABSET_CLASS);
//         // titles.children[0].classList.add(Tabset.TABSET_ITEM_ACTIVE)
//         // titlesBody.children[0].classList.add(Tabset.TABSET_ITEM_ACTIVE)
//     }

//     clickOnTab() {
//         document.querySelector('.tab-t').addEventListener('click', tabClick)
//     }

//     tabClick(event) {
//         if (event.target.classList.contains('tab-t')) {
//             const dataTab = event.target.getAttribute('data-tab')
//             const tabBody = document.querySelectorAll('.tab-b');
//             for (let i = 0; i < tabBody; i++) {
//                 if (dataTab == i) {
//                     tabBody[i].style.display = 'block'
//                 } else {
//                     tabBody[i].style.display = 'none'
//                 }
//             }
//         }
//     }

// }




// bindCallbacks() {
//     this.el.addEventListener('click', this.onTabsetClick.bind(this));
// }

// onTabsetClick(e) {
//     switch(true){
//         case e.target.classList.contains()
//     }
// }





// document.querySelector(".tabs-header").addEventListener("click", fTabs);

// function fTabs(event) {
//     console.log(event);
//     if (event.target.classList.contains('tab-h')) {
//         //dataTab
//         const dataTab = event.target.getAttribute('data-tab')
//         // все tbs с содержимым
//         const tabBody = document.querySelector('.tab-b');
//         for (let i = 0; i < tabBody.length; i++) {
//             if (dataTab == i) {
//                 tabBody[i].style.display = 'block'; // show
//             } else {
//                 tabBody[i].style.display = 'none'; // hide
//             }
//         }
//     }
// }