function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

function hideModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Adding event listener for clicking outside the modal to close it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        hideModal();
    }
};
