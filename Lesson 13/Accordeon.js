class Accordeon {
    constructor(el) {
        this.el = el;

        this.init();
    }

    static ACCORDEON_CLASS = 'accordeon';
    static ACCORDEON_ITEM_CLASS = 'accordeon-item';
    static ACCORDEON_ITEM_TITLE_CLASS = 'accordeon-item-title';
    static ACCORDEON_ITEM_CONTENT_CLASS = 'accordeon-item-content';
    static ACTIVE_ITEM_CLASS = 'active';

    init() {
        this.bindClasses();
        this.bindCallBacks();
    }

    bindClasses() {
        this.el.classList.add(Accordeon.ACCORDEON_CLASS);
        Array.prototype.forEach.call(this.el.children, (itemEl) => {
            itemEl.classList.add(Accordeon.ACCORDEON_ITEM_CLASS);
            itemEl.children[0].classList.add(Accordeon.ACCORDEON_ITEM_TITLE_CLASS);
            itemEl.children[1].classList.add(Accordeon.ACCORDEON_ITEM_CONTENT_CLASS);
        })

    }

    bindCallBacks() {
        this.el.addEventListener('click', this.onAccordeonClick.bind(this));
    }
    onAccordeonClick(e) {
        switch (true) {
            case e.target.classList.contains(Accordeon.ACCORDEON_ITEM_TITLE_CLASS):
                this.onTitleClick(e.target);
                break;
        }
    }
    onTitleClick(titleElem) {
        if (this.isVisible(titleElem.parentNode)) {
            this.hide(titleElem.parentNode);
        } else {
            this.show(titleElem.parentNode);
        }
    }
    show(itemElem) {
        itemElem.classList.add(Accordeon.ACTIVE_ITEM_CLASS);
    }

    hide(itemElem) {
        itemElem.classList.remove(Accordeon.ACTIVE_ITEM_CLASS);
    }

    isVisible(itemElem) {
        return itemElem.classList.contains(Accordeon.ACTIVE_ITEM_CLASS);
    }

    showIndex(index) {
        this.show(this.el.children[index])
    }
    hideIndex(index) {
        this.hide(this.el.children[index])
    }

}