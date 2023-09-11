export const getStorageColor = () => {
    let color = 'hsl(271, 76%, 53%)';

    const storedColor = localStorage.getItem('color');
    if (storedColor !== null) {
        color = storedColor;
    }

    return color;
};

export const getStorageTheme = () => {
    let theme = 'light-theme';

    const storedColor = localStorage.getItem('theme');
    if (storedColor !== null) {
        theme = storedColor;
    }

    return theme;
};