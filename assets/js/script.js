const routes = {
    '#home': 'pages/home.html',
    '#about': 'pages/about.html',
    '#settings': 'pages/settings.html',
    '#contact': 'pages/contact.html',
    '#feature1': 'pages/feature1.html',
    '#feature2': 'pages/feature2.html'
};

function loadPage() {
    let hash = window.location.hash || '#home';
    let file = routes[hash] || 'pages/404.html';

    q('#main-content').load(file, function(response, status, xhr) {
        if (status === "error" && file !== '/404.html') {
            q('#main-content').load('/404.html');
        }
    });
    q('.nav-link').removeClass('active');
    q(`.nav-link[href="${hash}"]`).addClass('active');
}

q(document).ready(function() {
    q('[data-include]').each(function() {
        const file = q(this).data('include');
        q(this).load(file);
    });
    loadPage();
    q(window).on('hashchange', loadPage); 
});