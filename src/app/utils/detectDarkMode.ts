const detectDarkMode = (): 'dark' | 'light' => {
    if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // Якщо window не доступний, повертаємо 'light' за замовчуванням
};

export default detectDarkMode;
