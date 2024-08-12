import { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 'medium');
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
    const [notifications, setNotifications] = useState(JSON.parse(localStorage.getItem('notifications')) || true);
    const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || null);

    useEffect(() => {
        document.documentElement.style.fontSize = fontSize;
        localStorage.setItem('fontSize', fontSize);
    }, [fontSize]);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    useEffect(() => {
        localStorage.setItem('notifications', JSON.stringify(notifications));
    }, [notifications]);

    useEffect(() => {
        if (profileImage) {
            localStorage.setItem('profileImage', profileImage);
        }
    }, [profileImage]);

    return (
        <SettingsContext.Provider value={{ fontSize, setFontSize, language, setLanguage, notifications, setNotifications, profileImage, setProfileImage }}>
            {children}
        </SettingsContext.Provider>
    );
};
