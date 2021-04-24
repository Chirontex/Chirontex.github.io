const appear = (percent) => {
    const container = document.getElementById('content');

    container.setAttribute('style', 'opacity: '+percent+'%;');

    if (percent < 100) setTimeout(appear, 10, percent + 1);
}

appear(0);
