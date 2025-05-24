'use client'
import { useState, useEffect, useRef } from "react";
import NavDefault from "@/app/comps/nav";
import Footer from "@/app/comps/footer";
import styles from "../comps/Main.module.css"; // upewnij się, że ścieżka się zgadza

// FadeInSection (twoja wersja)
const FadeInSection = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        // @ts-expect-error sasas
        observer.observe(domRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

const faqs = [
    { question: "Jakie usługi świadczycie?", answer: "Przyłącza kanalizacji i wodociągu, roboty ziemne, wynajem sprzętu." },
    { question: "Czy pomagacie w formalnościach?", answer: "Tak, pomagamy w dokumentacji i uzyskaniu zezwoleń." },
    { question: "Czy wypożyczacie koparki z operatorem?", answer: "Tak, dostępny jest wynajem z operatorem." },
    { question: "Czy można wynająć sprzęt bez operatora?", answer: "Tak, jeśli posiadasz odpowiednie uprawnienia." },
    { question: "Jak długo trwa realizacja przyłączy?", answer: "Zwykle 1–2 tygodnie od podpisania umowy." },
    { question: "Czy działacie poza miastem?", answer: "Tak, również w okolicznych miejscowościach." },
    { question: "Czy oferujecie gwarancję?", answer: "Tak, wszystkie usługi są objęte gwarancją." },
    { question: "Jakie koparki są w ofercie?", answer: "Minikoparki, koparki gąsienicowe i kołowe." },
    { question: "Czy wykonujecie wykopy pod fundamenty?", answer: "Tak, wykonujemy kompleksowe przygotowanie terenu." },
    { question: "Jak mogę uzyskać wycenę?", answer: "Wypełnij formularz – odpowiemy w 24h." },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4 transition-all">
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left font-semibold text-hydro-700 hover:text-hydro-500 flex justify-between items-center"
            >
                {question}
                <span className="ml-2">{open ? "-" : "+"}</span>
            </button>
            {open && (
                <div className="mt-2 text-gray-600 transition-all duration-300">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}

export default function FAQPage() {
    return (
        <>
            <NavDefault />

            <FadeInSection>
                <section className="py-20 px-6 md:px-20 bg-white min-h-screen mt-10">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-hydro-700 mb-10 text-center">Najczęściej zadawane pytania</h1>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <FaqItem key={idx} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </section>
            </FadeInSection>

            <Footer />
        </>
    );
}
