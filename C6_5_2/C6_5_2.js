const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
    const width = window.innerWidth
    const height = window.innerHeight
    const message = `Ширина вашего экрана ${width}. Высота вашего экрана ${height}`
    window.alert(message)
});
