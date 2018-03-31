/* ====== Model ====== */

let model = {
    currentCat: null,
    cats: [
        {
            clickCount: 0,
            name: 'Tabby',
            imgSrc: 'img/cat-1.jpg',
        },
        {
            clickCount: 0,
            name: 'Tiger',
            imgSrc: 'img/cat-2.jpg',
        },
        {
            clickCount: 0,
            name: 'Scaredy',
            imgSrc: 'img/cat-3.jpg',
        },
        {
            clickCount: 0,
            name: 'Shadow',
            imgSrc: 'img/cat-4.jpeg',
        },
        {
            clickCount: 0,
            name: 'Sleepy',
            imgSrc: 'img/cat-5.jpg',
        },
    ]
};

/* ====== Controller ====== */

let controller = {
    init: function () {
        // 将我们当前的猫设置为列表的第一个
        model.currentCat = model.cats[0];

        // 将视图初始化
        catListView.init();
        catView.init();
    },

    getCurrentCat: function () {
        return model.currentCat;
    },

    getCats: function () {
        return model.cats;
    },

    setCurrentCat: function (cat) {
        model.currentCat = cat;
    },

    incrementCounter: function () {
        model.currentCat.clickCount++;
        catView.render();
    }
};

/* ====== View ====== */

let catView = {
    init: function () {
        // 存储 DOM 元素以便稍后访问
        this.catElm = $('#cat');
        this.catNameElm = $('#cat-name');
        this.catImageElm = $('#cat-img');
        this.countElm = $('#cat-count');
        console.log(this.countElm);

        // 点击后，增加当前猫的计数器
        this.catImageElm.click(function () {
            controller.incrementCounter();
        });

        // 渲染此视图（用正确的值更新 DOM 元素）
        this.render();
    },

    render: function () {
        // 使用当前 cat 的值更新 DOM 元素
        let currentCat = controller.getCurrentCat();
        this.countElm.text(currentCat.clickCount);
        this.catNameElm.text(currentCat.name);
        this.catImageElm.attr('src', currentCat.imgSrc);
    }
};

let catListView =  {
    init: function () {
        // 存储 DOM 元素以便稍后访问
        this.catListElm = $('#cat-list');
        // 渲染此视图（用正确的值更新 DOM 元素）
        this.render();
    },

    render: function () {
        // 从 Controller 得到所有的猫
        let cats = controller.getCats();
        // 清空猫列表
        this.catListElm.html('');
        
        // 循环所有的猫
        const that = this;
        cats.forEach(function (cat) {
            // 创建一个新的猫列表并设置其文本
            const elm = $('<li></li>');
            elm.text(cat.name);
            // 点击时，setCurrentCat 并呈现 catView
            elm.click(function () {

                controller.setCurrentCat(cat);
                catView.render();
            });
            // 最后将元素添加到列表中
            that.catListElm.append(elm);
        });
        
    }
};

// 开始吧！
controller.init();