'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Sprawdź czy użytkownik zaakceptował lub odrzucił cookies
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-300 shadow-md">
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-700 text-center md:text-left">
                    Używamy plików cookies w celach analitycznych i funkcjonalnych.{" "}
                    <Link href="/privacy-policy" className="text-blue-600 underline">
                        Polityka prywatności
                    </Link>
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={declineCookies}
                        className="px-4 py-2 text-sm border border-gray-400 rounded-md hover:bg-gray-100"
                    >
                        Odrzuć
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-500"
                    >
                        Akceptuj
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
