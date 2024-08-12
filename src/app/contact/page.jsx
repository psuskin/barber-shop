import Image from 'next/image';
import { generatePageMetadata } from '../seo';

export const metadata = generatePageMetadata({
    title: "Kontakt",
    description:
        "Kontaktieren Sie Hannis Friseursalon in Hamburg für Terminvereinbarungen und weitere Informationen zu unseren Dienstleistungen. Unser freundliches Team steht Ihnen gerne zur Verfügung.",
});
const ContactPage = () => {
    return (
        <>
            <div className="min-h-screen bg-white mb-40">
                <div className="relative h-96 w-full">
                    <Image
                        fill
                        src="/Images/titlepicture.jpg"
                        alt="Contact Banner"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white">
                            <h2 className="text-4xl font-Dancing font-bold">Kontakt</h2>
                            <div className="mt-4 border-t border-yellow-200"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-8 lg:p-8 p-4 container lg:w-4/5 mx-auto mt-36">
                    <div className="bg-yellow-50 p-8 lg:w-1/3">
                        <h3 className="text-2xl font-semibold text-[#D4A745]">Kontakt Informationen</h3>
                        <ul className="mt-4 space-y-4">
                            <li className="flex items-center text-gray-700">
                                <svg className="w-6 h-6 text-[#D4A745] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a4 4 0 004.22 0L21 8M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m16 0l-7.89 5.26a4 4 0 01-4.22 0L3 12"></path>
                                </svg>
                                Telefon: +49408808073
                            </li>
                            <li className="flex items-center text-gray-700">
                                <svg className="w-6 h-6 text-[#D4A745] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2M21 8a4 4 0 10-8 0 4 4 0 008 0zM3 8a4 4 0 118 0 4 4 0 01-8 0z"></path>
                                </svg>
                                Adresse: Friedensallee 102b, 22763 Hamburg, Germany
                            </li>
                            <li className="flex items-center text-gray-700">
                                <svg className="w-6 h-6 text-[#D4A745] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m4-4v8m6-4H4"></path>
                                </svg>
                                E-Mail: Info@hannishamburg.de
                            </li>
                            <li className="flex items-center text-gray-700">
                                <svg className="w-6 h-6 text-[#D4A745] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12v2a2 2 0 002 2h4a2 2 0 002-2v-2M8 12V8a4 4 0 018 0v4m-8 0H7m1 0H5m1 0h8"></path>
                                </svg>
                                Di-Fr: 09:00 - 19:00
                                <br />
                                Samstag: 09:00 - 18:00
                                <br />
                                Sonntag: Geschlossen
                                <br />
                                Montag: Geschlossen
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white lg:p-8 lg:w-2/3 w-full">
                        <h3 className="text-2xl font-semibold text-[#D4A745]">Kontaktformular</h3>
                        <form className="mt-6 space-y-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="full-name" className="sr-only">
                                        Vollständiger Name
                                    </label>
                                    <input
                                        id="full-name"
                                        name="full-name"
                                        type="text"
                                        required
                                        className="appearance-none h-16 relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 text-lg focus:outline-none focus:ring-[#D4A745] focus:border-[#D4A745] sm:text-sm"
                                        placeholder="Vollständiger Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        E-Mail
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="appearance-none h-16 relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 text-lg focus:outline-none focus:ring-[#D4A745] focus:border-[#D4A745] sm:text-sm"
                                        placeholder="E-Mail"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Nachricht
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="appearance-none h-full lg:h-40 relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 text-lg focus:outline-none focus:ring-[#D4A745] focus:border-[#D4A745] sm:text-sm"
                                    placeholder="Nachricht"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative lg:w-[150px]  flex justify-center py-4 px-4 border border-transparent text-sm font-medium text-white bg-[#D4A745] hover:bg-[#b89334] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4A745]"
                                >
                                    Nachricht Senden
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container lg:w-4/5 mx-auto mt-8 p-4">
                    <h3 className="text-2xl font-semibold text-[#D4A745]">Impressum</h3>
                    <div className="mt-4 text-gray-700 space-y-2">
                        <p><strong>Hannis Beautysalon</strong></p>
                        <p>Inhaberin: Cetincan Darcan</p>
                        <p>Friedensallee 102b</p>
                        <p>22763 Hamburg</p>
                        <p>Deutschland</p>

                        <p>Telefon: 040 8808073</p>
                        <p>E-Mail: info@hannishamburg.de</p>
                        <p>Website: hannishamburg.de</p>

                        <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>

                        <p>Berufsbezeichnung: Friseur/in (verliehen in Deutschland)</p>

                        <p>Zuständige Aufsichtsbehörde: Hamburg</p>

                        <h4 className="font-semibold">Haftungsausschluss:</h4>

                        <h5 className="font-semibold">Haftung für Inhalte</h5>
                        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                        <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

                        <h5 className="font-semibold">Haftung für Links</h5>
                        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                        <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

                        <h5 className="font-semibold">Urheberrecht</h5>
                        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                        <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

                        <h5 className="font-semibold">Datenschutz</h5>
                        <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
                        <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                        <p>Weitere Informationen finden Sie in unserer <a href="Link zur Datenschutzerklärung" className="text-[#D4A745] underline">Datenschutzerklärung</a>.</p>

                        <h5 className="font-semibold">Streitschlichtung</h5>
                        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="Link zur OS-Plattform" className="text-[#D4A745] underline">Link zur OS-Plattform</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
