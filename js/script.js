    function showModal(mediumSrc, largeSrc) {
      document.getElementById('modalImage').src = mediumSrc;
      document.getElementById('enlargeLink').href = largeSrc;
      document.getElementById('modal').style.display = 'block';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }
