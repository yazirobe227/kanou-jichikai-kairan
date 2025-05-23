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
