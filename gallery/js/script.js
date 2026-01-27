$(function () {

  // 画像クリック → モーダル表示
  $('.gallery-item img').on('click', function () {
    const src = $(this).attr('src');
    $('.modal img').attr('src', src);
    $('.modal').fadeIn(300);
  });

  // モーダルクリック → 閉じる
  $('.modal').on('click', function () {
    $(this).fadeOut(300);
  });

});

const cards = [
  "img/sinrimutyuu.png",
  "img/collage-grass.png",
  "img/shape.png",
  "img/stone.PNG",
  "img/sinrimutyuu.png",
  "img/sosiji.png"
];

function drawCard() {
  const imgElement = document.getElementById("card-image");
  
  // ランダムに画像を選択
  const randomIndex = Math.floor(Math.random() * cards.length);
  const selectedImage = cards[randomIndex];

  // アニメーションを一度リセット
  imgElement.classList.remove("shake");
  void imgElement.offsetWidth; // リフロー（アニメーション再起動用）
  imgElement.classList.add("shake");

  // 画像のソースを切り替え
  imgElement.src = selectedImage;
}