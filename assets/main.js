const links = document.querySelectorAll('li');

const acess = links.forEach(link => {
    const git = 'https://github.com/YagoCoutto';
    const frontMentor = 'https://www.frontendmentor.io/profile/YagoCoutto';
    const LinkedIn = 'https://www.linkedin.com/in/yagocouto';
    const twitter = '#';
    const Instagram = '#';

    link.addEventListener('click', () => {
        link = link.textContent;

        if (link === 'GitHub') window.open(git,'_blank');
        if (link === 'Frontend Mentor') window.open(frontMentor,'_blank');
        if (link === 'LinkedIn') window.open(LinkedIn,'_blank');
        if (link === 'Twitter') window.open(twitter,'_blank');
        if (link === 'Instagram') window.open(Instagram,'_blank');
    })
});

