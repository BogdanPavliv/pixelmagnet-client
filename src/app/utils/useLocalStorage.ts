import { useState, useEffect } from 'react';

// Функція для отримання значення з localStorage
function getStorageValue<T>(key: string, defaultValue: T): T {
    if (typeof window !== "undefined") { // Перевіряємо доступність window
        const saved = localStorage.getItem(key);
        if (saved) {
            try {
                return JSON.parse(saved) as T; // Пробуємо парсити, обробляємо помилки
            } catch (e) {
                console.error("Parsing error:", e);
                return defaultValue; // Повертаємо значення за замовчуванням, якщо парсинг не вдався
            }
        }
    }
    return defaultValue;
}

// Хук для роботи з localStorage
export const useLocalStorage = <T,>(key: string, defaultValue: T) => {
    const [value, setValue] = useState<T>(() => getStorageValue(key, defaultValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const;
};
