// === ページ固有の説明文（index.html側で設定する） ===
const pageDescription = window.pageDescription || "";

// === ヘッダー読み込み + 説明文差し込み ===
fetch('/kanou-jichikai-kairan/parts/header.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);
    const descElem = document.getElementById('page-desc');
    if (descElem && pageDescription) {
      descElem.textContent = pageDescription;
    }
  });

// === フッター読み込み ===
fetch('/kanou-jichikai-kairan/parts/footer.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  });

// === モーダル画像表示処理 ===
function showModal(mediumSrc, largeSrc) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const enlargeLink = document.getElementById('enlargeLink');

  modalImage.src = mediumSrc;
  enlargeLink.href = largeSrc;
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const enlargeLink = document.getElementById('enlargeLink');

  modal.style.display = 'none';
  modalImage.src = ""; // 表示画像を初期化
  enlargeLink.href = "#"; // リンクも初期化
}