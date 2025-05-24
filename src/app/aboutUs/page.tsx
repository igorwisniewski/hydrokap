'use client'
import Image from "next/image";
import NavDefault from "@/app/comps/nav";
import Footer from "@/app/comps/footer";
import {useEffect, useState, useRef} from "react";
import {
    ShieldCheckIcon,
    CheckBadgeIcon,
    DevicePhoneMobileIcon,
    HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import styles from "../comps/Main.module.css"
import Link from "next/link";


const features = [
    {
        title: "Jakość",
        desc: "Dbałość o każdy etap realizacji zlecenia.",
        icon: CheckBadgeIcon,
    },
    {
        title: "Bezpieczeństwo",
        desc: "Zespół przeszkolony w zakresie przepisów BHP.",
        icon: ShieldCheckIcon,
    },
    {
        title: "Nowoczesność",
        desc: "Regularna modernizacja parku maszynowego.",
        icon: DevicePhoneMobileIcon,
    },
    {
        title: "Zaufanie",
        desc: "Zadowolenie klienta jest dla nas priorytetem.",
        icon: HandThumbUpIcon,
    },
];



export default function Home() {
    // @ts-expect-error zwykle
    const FadeInSection = ({ children }) => {
        const [isVisible, setVisible] = useState(false);
// @ts-expect-error zwykle

        const domRef = useRef();

        useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setVisible(entry.isIntersecting));
            });
            // @ts-expect-error zwykle

            observer.observe(domRef.current);
            return () => observer.disconnect();
        }, []);



        return (
            <div
                className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ''}`}
                // @ts-expect-error zwykle


                ref={domRef}
            >
                {children}
            </div>
        );
    };

    return (

        <>
            <NavDefault />

            <section className="relative w-full h-screen flex items-center justify-center text-white">
                {/* BG image */}
                <Image
                    src="/images/aboutBG.webp"
                    alt="Budowa"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay (ciemniejszy dla lepszej czytelności) */}
                <div className="absolute inset-0 bg-black/40 z-10"/>

                {/* Text + CTA */}
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Specjaliści od przyłączy, wykopów i robót ziemnych
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Profesjonalizm, doświadczenie i skuteczność
                    </p>
                    <Link href="/contact">
                        <button
                            className="bg-hydro-400 hover:text-hydro-400 hover:bg-gray-100  text-gray-100 font-bold py-3 px-6 rounded-full transition mr-2">
                            Skontaktuj się
                        </button>
                    </Link>
                    <Link href="/aboutUs">
                        <button
                            className="border-hydro-400 border-2 hover:text-hydro-400 hover:bg-gray-100  text-gray-100 font-bold py-3 px-6 rounded-full transition">
                            O nas
                        </button>
                    </Link>
                </div>
            </section>
                    {/* Sekcja 1 */}
                    <section className="py-20 px-6 md:px-16 bg-hydro-50 min-h-screen items-center content-center">
                        <FadeInSection>
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h1 className="text-4xl font-bold text-hydro-700 mb-4">Kim jesteśmy?</h1>
                                    <p className="text-lg leading-relaxed">
                                        Hydrokap to firma z ponad <strong>18-letnim doświadczeniem</strong> w branży robót
                                        ziemnych i przyłączy.
                                        Od początku działalności stawiamy na jakość, terminowość i bezpieczeństwo.
                                    </p>
                                    <p className="mt-4">
                                        Specjalizujemy się w <strong>przyłączach wodociągowych,
                                        kanalizacyjnych</strong> oraz usługach
                                        koparkami, walcami i wozidłami.
                                    </p>
                                </div>
                                <div className="relative w-full h-[300px] md:h-[400px]">
                                    <Image
                                        src="/images/bluesSom.webp"
                                        alt="Nasza historia"
                                        fill
                                        className="object-cover rounded-xl shadow-md"
                                    />
                                </div>
                            </div>
                        </FadeInSection>
                    </section>

                    {/* Sekcja 2 */}
                    <section className="py-20 px-6 md:px-16 bg-white min-h-screen items-center content-center">
                        <FadeInSection>
                            <div className="max-w-5xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-hydro-700 mb-6">Nasze wartości</h2>
                                <p className="text-lg mb-10 text-gray-700">
                                    Działamy w oparciu o zasady, które gwarantują jakość i zaufanie. To one wyróżniają
                                    nas w branży.
                                </p>
                                <div className="grid md:grid-cols-4 gap-6 text-left">
                                    {features.map(({title, desc, icon: Icon}) => (
                                        <div key={title} className="p-4 bg-hydro-50 rounded-lg shadow-sm">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Icon className="h-6 w-6 text-hydro-600"/>
                                                <h3 className="text-xl font-semibold text-hydro-600">{title}</h3>
                                            </div>
                                            <p className="text-gray-700">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    </section>

            {/* Sekcja 3 */}
            <section className="py-20 px-6 md:px-16 bg-hydro-100 min-h-screen items-center content-center">
                <FadeInSection>
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative w-full h-[300px] md:h-[400px]">
                            <Image
                                src="/images/koparkaAbout.webp"
                                        alt="Zespół Hydrokap"
                                        fill
                                        className="object-cover rounded-xl shadow-md"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-hydro-700 mb-4">Zespół i
                                        doświadczenie</h2>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Nasz zespół tworzą operatorzy i specjaliści z wieloletnim doświadczeniem w
                                        robotach ziemnych.
                                        Dzięki nim oraz nowoczesnemu sprzętowi realizujemy projekty na czas i z
                                        zachowaniem najwyższych standardów.
                                    </p>
                                    <p className="mt-4">
                                        Obsługujemy klientów z sektora prywatnego, deweloperskiego i publicznego – na
                                        terenie całej Małopolski.
                                    </p>
                                </div>
                            </div>
                        </FadeInSection>
                    </section>


                <Footer/>
        </>
    );
}
