

/*const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach((el) => {
    el.addEventListener("click", () => {
        let currentBtn = el;
        let tabId = currentBtn.getAttribute("data-button");
        let currentTab = document.querySelector(tabId);
        
        if (!currentBtn.classList.contains("tabs__btn-item--active")) {
            tabItem.forEach((el) => {
                el.classList.remove("tabs__btn-item--active");
            });
            tabContent.forEach((el) => {
                el.classList.remove("tabs__btn-item--active");
            });
               
            currentBtn.classList.add("tabs__btn-item--active");
            currentTab.classList.add("tabs__btn-item--active");
            }
        })
    })*/

    const tabItem = document.querySelectorAll(".tabs__btn-item");
    const tabContent = document.querySelectorAll(".tabs__content-item");

    tabItem.forEach(function(element) {
      element.addEventListener("click", switcher);
    });
    function switcher(evt) {
        const tabTarget = evt.currentTarget;
        const button = tabTarget.dataset.button;

        tabItem.forEach(function(item) {
            item.classList.remove("tabs__btn-item--active");
        });
        tabContent.forEach(function(item) {
            item.classList.remove("tabs__content-item--active");
        });

        tabTarget.classList.add("tabs__btn-item--active");
        document.querySelector(`#${button}`).classList.add("tabs__content-item--active")
    }
