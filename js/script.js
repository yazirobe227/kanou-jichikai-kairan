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

    // === モーダル画像表示処理のイベントリスナー ===
    // .modal-trigger-img クラスを持つ画像を対象とする (例: <img class="modal-trigger-img" src="..." data-large-src="...">)
    document.querySelectorAll('.grid-section img').forEach(img => {
        // 画像をクリックした際にモーダルを表示
        img.addEventListener('click', function() {
            const modal = document.getElementById('modal');
            const modalImage = document.getElementById('modalImage');
            const enlargeLink = document.getElementById('enlargeLink');

            // クリックされた画像のsrcをモーダルに設定
            modalImage.src = this.src;
            // 必要に応じて、data-large-src属性から高解像度画像パスを取得して設定
            enlargeLink.href = this.dataset.largeSrc || this.src;
            modal.style.display = 'block';
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
    modalImage.src = ""; // 表示画像を初期化
    enlargeLink.href = "#"; // リンクも初期化
}