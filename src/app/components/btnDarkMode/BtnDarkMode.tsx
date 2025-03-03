// src/app/components/BtnDarkMode.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useLocalStorage } from './../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';
import "./BtnDarkMode.scss";

import Image from 'next/image';

const BtnDarkMode: React.FC = () => {
    const [darkMode, setDarkMode] = useLocalStorage<'dark' | 'light'>('darkMode', detectDarkMode());
    const [mounted, setMounted] = useState(false); // Стан для відстеження, чи компонент змонтований

    useEffect(() => {
        setMounted(true); // Позначаємо, що компонент змонтований
    }, []);

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const handleSchemeChange = (event: MediaQueryListEvent) => {
            const newColorScheme = event.matches ? 'dark' : 'light';
            setDarkMode(newColorScheme);
        };

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', handleSchemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleSchemeChange);
        };
    }, [setDarkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => (currentValue === 'light' ? 'dark' : 'light'));
    };

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';
    
    // Показуємо компонент тільки після повного монтування
    return (
        <button className={mounted && darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <Image width={16} height={16} src="/img/footer/sun.svg" alt="Light mode" className="dark-mode-btn__icon" />
            <Image width={16} height={16} src="/img/footer/moon.svg" alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
};

export default BtnDarkMode;
