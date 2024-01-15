import React from "react";

const Imprint = () => {
  return (
    <div className="pt-16">
      <div className="p-0 md:p-6 text-center z-0 text-color_font">
        <div className="grid text-center gap-0 mx-auto px-0 md:px-6 lg:px-8 max-w-screen-xl my-0">
          <div className="md:bg-fm_weiss p-4 rounded-xl my-16 w-fit mx-auto p-8 md:shadow-2xl">
            <h1 className="text-2xl font-bold text-fm_blau mb-4 heading-koulen">
              Impressum
            </h1>
            <div className="text-left w-fit mx-auto">
              <h2 className="text-xl font-bold mt-4 w-fit">
                Angaben gemäß §5 TMG:
              </h2>
              <p className="mt-2 w-fit">
                Projekt Vernetzung ist eine private Initiative, vertreten durch
                Hannah Adam.
              </p>
              <h2 className="text-xl font-bold mt-4 w-fit">Kontakt:</h2>
              <p className="mt-2">
                <a
                  href="mailto:projekt-vernetzung@email.com"
                  className="mt-2 w-fit text-black hover:text-black font-normal"
                >
                  E-Mail: info@projekt-vernetzung.org
                </a>
              </p>
              <p>
                <a
                  className="mt-2 w-fit text-black hover:text-black font-normal"
                  href="https://projekt-vernetzung.org"
                  target="_blank"
                >
                  Website: www.projekt-vernetzung.org
                </a>
              </p>
              <p className="w-fit">Adresse: Berlin</p>
              <p className="mt-2 w-fit">
                ‍Verantwortliche i.S.d. § 18 Abs. 2 MStV ist Hannah Adam.
              </p>

              <h2 className="text-xl font-bold mt-4 w-fit">
                Haftung für Inhalte
              </h2>
              <p className="mt-2 w-fit">
                Als Diensteanbieter ist Projekt Vernetzung gemäß § 7 Abs. 1 TMG
                für eigene Inhalte auf diesen Seiten nach den allgemeinen
                Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch
                nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-2 w-fit">
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen wird
                Projekt Vernetzung entsprechende Inhalte umgehend entfernen.
              </p>
              <h2 className="text-xl font-bold mt-4 w-fit">
                Haftung für Links
              </h2>
              <p className="mt-2 w-fit">
                Das Angebot von Projekt Vernetzung enthält Links zu externen
                Websites Dritter, auf deren Inhalte wir keinen Einfluss haben
                und auch keine Gewähr dafür übernehmen können. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <h2 className="text-xl font-bold mt-4 w-fit">Urheberrecht</h2>
              <p className="mt-2 w-fit">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
