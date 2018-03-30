// 根据点击猫咪列表中的名称展示相应的图片
let $catItem = $('#cat-list').children();
let $cats = $('.cat');
$catItem.each(function (index) {
    $(this).click(function (e) {
        $cats.eq(index).siblings('div.cat').removeClass('show').addClass('hide');
        $cats.eq(index).removeClass('hide').addClass('show');
    });
});

const catNameArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
let $catName = $('.cat-name');

// 遍历猫咪名称元素，添加猫咪名称
$catName.each(function (index) {
    $(this).text(catNameArr[index]);
});

// 遍历猫咪图片元素，添加点击事件
$('.cat-img').each(function (index) {
    $(this).click(function (e) {
        let counter = $(this).siblings('.click-counter');
        console.log(counter);
        let counterText = parseInt(counter.text());
        counter.text(counterText + 1);
    });
});