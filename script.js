$(document.body).ready(function() {

    // 1. スマホ用ハンバーガーメニューの開閉制御
    const $hamburger = $('#js-hamburger');
    const $nav = $('.navigation');
  
    $hamburger.on('click', function() {
      $(this).toggleClass('active');
      $nav.toggleClass('active');
    });
  
    // ナビゲーションリンククリック時にメニューを閉じる
    $('.nav-list a').on('click', function() {
      $hamburger.removeClass('active');
      $nav.removeClass('active');
    });
  
  
    // 2. スムーススクロール（ページ内リンク用）
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      const speed = 500;
      const href = $(this).attr('href');
      const target = $(href === "#" || href === "" ? 'html' : href);
      if (target.length) {
        const headerHeight = $('.site-header').outerHeight();
        const position = target.offset().top - headerHeight;
        $('html, body').animate({ scrollTop: position }, speed, 'swing');
      }
    });
  
  
    // 3. Lightbox2 のカスタマイズ設定
    if (typeof lightbox !== 'undefined') {
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': "作品 %1 / %2",
        'fadeDuration': 300
      });
    }
  
  });
  
  /*
    ======================================================================
    【JavaScript (script.js) コードの解説・設計補足】※ブラウザ非表示
    ======================================================================
    1. ハンバーガーメニュー:
       - スマホ閲覧時のナビゲーション表示/非表示をクラス付与（.active）でスムーズに制御。
    2. スムーススクロール:
       - ヘッダーが固定表示（fixed）されているため、スクロール位置からヘッダー高さを引いた正確な位置へ
         アニメーション移動させる計算を行っています。
    3. Lightbox2 連携:
       - 画像クリックによるモーダル拡大表示時、ループ閲覧機能（wrapAround）や日本語ラベル表示を設定しています。
  */