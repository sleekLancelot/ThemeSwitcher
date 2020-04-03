let lightBTN = document.getElementById('light'),
    darkBTN = document.getElementById('dark'),
    solarBTN = document.getElementById('solar'),
    body = document.body;

try {
    let theme = sessionStorage.getItem('theme'),
        solar = sessionStorage.getItem('solar');
    if (theme) {
        body.classList = theme;
        solar && body.classList.add('solar');
    }
} catch (error) {
    console.log(`sorry: ${error}`);
}


lightBTN.onclick = () => {

    if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
    }

    sessionStorage.setItem('theme', 'light')
}

darkBTN.onclick = () => {
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
    }
    sessionStorage.setItem('theme', 'dark');
}

solarBTN.onclick = () => {
    if (body.classList.contains('solar')) {
        body.classList.remove('solar');
        // solarBTN.style.cssText = `
        //     --bg-solar = var(--yellow);
        // `
        solarBTN.innerText = 'solarize';

        sessionStorage.removeItem('solar');
    } else {
        body.classList.add('solar');
        solarBTN.innerText = 'normalize';
        //     solarBTN.style.cssText = `
        //     --bg-solar = white;
        // `

        sessionStorage.setItem('solar', true);
    }

}