// === ページ固有の説明文の表示 ===
// _layouts/default.htmlで設定されたwindow.pageDescriptionを使用
document.addEventListener('DOMContentLoaded', function() {
    const pageDescElement = document.getElementById('page-desc');
    // window.pageDescriptionが設定されている、かつ空でない場合にテキストを挿入
    if (pageDescElement && typeof window.pageDescription !== 'undefined' && window.pageDescription !== '') {
        pageDescElement.textContent = window.pageDescription;
        pageDescElement.style.display = 'block'; // 必要に応じて表示
    } else if (pageDescElement) {
        pageDescElement.style.display = 'none'; // 説明が不要なページでは要素を非表示にする
    }

    // === カード内タブ用　開閉スクリプト ===
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            // アクティブなボタンとコンテンツから'active'クラスを削除
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

            // クリックされたボタンに'active'クラスを追加
            button.classList.add('active');
            // 対応するタブコンテンツを表示
            document.getElementById(button.getAttribute('data-tab')).classList.add('active');
        });
    });

    // === モーダル画像表示処理のイベントリスナー (HTMLのonclick属性からdata属性に変更) ===
    // .grid-section img もしくは .content img など、画像が含まれる要素の画像を対象とする
    // これにより、HTMLのonclick属性でJavaScript構文エラーが発生するのを防ぐ
    document.querySelectorAll('.grid-section img, main img').forEach(img => { // .main img を追加して柔軟に対応
        img.addEventListener('click', function() {
            const modal = document.getElementById('modal');
            const modalImage = document.getElementById('modalImage');
            const enlargeLink = document.getElementById('enlargeLink');

            // data-medium-src属性から中サイズ画像パスを取得、なければsrcを使用
            const mediumImageSrc = this.dataset.mediumSrc || this.src;
            // data-large-src属性から高解像度画像パスを取得、なければmediumImageSrcを使用
            const largeImageSrc = this.dataset.largeSrc || mediumImageSrc;

            modalImage.src = mediumImageSrc; // モーダルには中サイズの画像を表示
            enlargeLink.href = largeImageSrc; // 「さらに拡大表示」リンクには大サイズの画像URLを設定
            modal.style.display = 'block'; // モーダルを表示
        });
    });

    // モーダルを閉じるためのクリックイベントリスナー
    const modal = document.getElementById('modal');
    // モーダル背景をクリックで閉じる
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    };
});

// === モーダルを閉じる関数（外部から呼び出し可能にするためDOMContentLoadedの外に定義） ===
function closeModal() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const enlargeLink = document.getElementById('enlargeLink');

    modal.style.display = 'none';
    modalImage.src = ''; // 画像をリセット
    enlargeLink.href = '#'; // リンクをリセット
}

// showModal 関数はHTMLから直接呼び出されなくなるため、削除またはコメントアウトします。
// function showModal(mediumImageSrc, largeImageSrc) {
//     const modal = document.getElementById('modal');
//     const modalImage = document.getElementById('modalImage');
//     const enlargeLink = document.getElementById('enlargeLink');

//     modalImage.src = mediumImageSrc;
//     enlargeLink.href = largeImageSrc;
//     modal.style.display = 'block';
// }