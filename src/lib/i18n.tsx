import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";

export type Language = "es" | "ca";

const translations: Record<string, string> = {
  "Inicio": "Inici",
  "Sobre nosotras": "Sobre nosaltres",
  "Neuropsicología": "Neuropsicologia",
  "Terapia psicológica": "Teràpia psicològica",
  "Contacto": "Contacte",
  "Pedir cita": "Demanar cita",
  "Reservar primera visita": "Reservar la primera visita",
  "Pedir primera visita": "Demanar una primera visita",
  "Navegación": "Navegació",
  "Consulta presencial y online": "Consulta presencial i en línia",
  "Atención de neuropsicología y psicología. Acompañamos a personas y familias con honestidad, rigor y vocación.": "Atenció de neuropsicologia i psicologia. Acompanyem persones i famílies amb honestedat, rigor i vocació.",
  "Neuropsicología y psicología · Atención centrada en las personas.": "Neuropsicologia i psicologia · Atenció centrada en les persones.",
  "Todos los derechos reservados.": "Tots els drets reservats.",
  "NEUROPSICOLOGÍA · PSICOLOGÍA": "NEUROPSICOLOGIA · PSICOLOGIA",
  "Cuidar la mente": "Cuidar la ment",
  "hoy": "avui",
  ", para sostenerla mañana.": ", per sostenir-la demà.",
  "Creemos en una forma de entender la atención psicológica que combina el rigor científico con una mirada cercana, humana e individualizada. Entendemos que cada persona es única y que su bienestar depende de la interacción de múltiples factores. Por ello, adaptamos cada proceso de evaluación e intervención a sus necesidades, objetivos y momento vital, acompañándola con respeto, compromiso y sensibilidad a lo largo de todo el proceso.": "Creiem en una manera d'entendre l'atenció psicològica que combina el rigor científic amb una mirada propera, humana i individualitzada. Entenem que cada persona és única i que el seu benestar depèn de la interacció de múltiples factors. Per això, adaptem cada procés d'avaluació i intervenció a les seves necessitats, objectius i moment vital, i l'acompanyem amb respecte, compromís i sensibilitat al llarg de tot el procés.",
  "Consulta de neuropsicología con luz natural": "Consulta de neuropsicologia amb llum natural",
  "Un espacio sereno para escuchar y pensar contigo.": "Un espai serè per escoltar-te i pensar amb tu.",
  "Nuestros valores": "Els nostres valors",
  "Los principios que guían nuestra forma de acompañarte.": "Els principis que guien la nostra manera d'acompanyar-te.",
  "Escucha": "Escolta",
  "Cada persona tiene una historia única. Antes de intervenir, dedicamos el tiempo necesario a comprender tu situación, tus necesidades y aquello que es importante para ti. Creemos que una buena terapia empieza escuchando.": "Cada persona té una història única. Abans d'intervenir, dediquem el temps necessari a comprendre la teva situació, les teves necessitats i allò que és important per a tu. Creiem que una bona teràpia comença escoltant.",
  "Rigor científico": "Rigor científic",
  "Nuestro trabajo se basa en la evidencia científica y en una evaluación rigurosa. Seleccionamos las herramientas y tratamientos más adecuados para cada caso, siempre desde un enfoque profesional y actualizado.": "La nostra feina es basa en l'evidència científica i en una avaluació rigorosa. Seleccionem les eines i els tractaments més adequats per a cada cas, sempre des d'un enfocament professional i actualitzat.",
  "Cercanía": "Proximitat",
  "Queremos ofrecer un espacio donde puedas sentirte cómodo, escuchado y libre de juicios. La confianza y la relación terapéutica son la base para construir un proceso de cambio.": "Volem oferir un espai on et puguis sentir còmode, escoltat i lliure de judicis. La confiança i la relació terapèutica són la base per construir un procés de canvi.",
  "Atención personalizada": "Atenció personalitzada",
  "No entendemos la psicología como un conjunto de soluciones estándar. Cada intervención se adapta a la persona, a su contexto y a sus objetivos, respetando siempre su ritmo y necesidades.": "No entenem la psicologia com un conjunt de solucions estàndard. Cada intervenció s'adapta a la persona, al seu context i als seus objectius, respectant sempre el seu ritme i les seves necessitats.",
  "¿Quieres hablar con nosotras?": "Vols parlar amb nosaltres?",
  "La primera visita es un espacio para escucharte, entender tu situación y plantearte un camino claro. Sin compromiso.": "La primera visita és un espai per escoltar-te, entendre la teva situació i proposar-te un camí clar. Sense compromís.",
  "Escribir por email": "Escriure per correu electrònic",
  "Cada historia importa.": "Cada història importa.",
  "Detrás de cada consulta hay una experiencia única. Por eso trabajamos desde la cercanía, la escucha y la evidencia científica, acompañando a cada persona según sus necesidades y su propio ritmo.": "Darrere de cada consulta hi ha una experiència única. Per això treballem des de la proximitat, l'escolta i l'evidència científica, acompanyant cada persona segons les seves necessitats i el seu propi ritme.",
  "Neuropsicóloga": "Neuropsicòloga",
  "Psicóloga General Sanitaria": "Psicòloga General Sanitària",
  "Soy neuropsicóloga y mi trabajo se centra en la evaluación neuropsicológica, la estimulación cognitiva y la rehabilitación, siempre desde un enfoque cercano, individualizado y basado en la evidencia científica. Acompaño a personas que presentan alteraciones cognitivas derivadas de ictus, traumatismos craneoencefálicos, enfermedades neurodegenerativas u otras condiciones neurológicas, diseñando programas de intervención adaptados a las necesidades de cada persona. Asimismo, considero fundamental el acompañamiento y la orientación a las familias, proporcionando herramientas que favorezcan la comprensión del proceso y la participación activa en la intervención.": "Soc neuropsicòloga i la meva feina se centra en l'avaluació neuropsicològica, l'estimulació cognitiva i la rehabilitació, sempre des d'un enfocament proper, individualitzat i basat en l'evidència científica.\n\nAcompanyo persones que presenten alteracions cognitives derivades d'ictus, traumatismes cranioencefàlics, malalties neurodegeneratives o altres afeccions neurològiques, dissenyant programes d'intervenció adaptats a les necessitats de cada persona. Així mateix, considero fonamental l'acompanyament i l'orientació a les famílies, proporcionant eines que afavoreixin la comprensió del procés i la participació activa en la intervenció.",
  "Soy Psicóloga General Sanitaria, especializada en psicoterapia infantojuvenil y de adultos. Trabajo desde un enfoque integrador, cercano y basado en la evidencia científica, y cuento con formación específica en el abordaje de los trastornos del estado de ánimo. Entiendo la terapia como un espacio de confianza, escucha y acompañamiento, donde cada persona pueda expresarse con libertad, comprender lo que le ocurre y encontrar herramientas para afrontar sus dificultades. Mi objetivo es ofrecer una atención personalizada, adaptando cada proceso a las necesidades y circunstancias de cada persona.": "Soc psicòloga general sanitària, especialitzada en psicoteràpia infantojuvenil i d'adults. Treballo des d'un enfocament integrador, proper i basat en l'evidència científica, i tinc formació específica en l'abordatge dels trastorns de l'estat d'ànim.\n\nEntenc la teràpia com un espai de confiança, escolta i acompanyament, on cada persona es pugui expressar amb llibertat, comprendre què li passa i trobar eines per afrontar les seves dificultats. El meu objectiu és oferir una atenció personalitzada, adaptant cada procés a les necessitats i circumstàncies de cada persona.",
  "Cómo trabajamos": "Com treballem",
  "Primera visita": "Primera visita",
  "Escuchamos tu motivo de consulta, recogemos antecedentes y acordamos un plan.": "Escoltem el teu motiu de consulta, recollim antecedents i acordem un pla.",
  "Evaluación o intervención": "Avaluació o intervenció",
  "Aplicamos las pruebas o el enfoque terapéutico más adecuados a tu situación.": "Apliquem les proves o l'enfocament terapèutic més adequats a la teva situació.",
  "Devolución y seguimiento": "Devolució i seguiment",
  "Te explicamos los resultados con claridad y acompañamos cada paso del proceso.": "T'expliquem els resultats amb claredat i acompanyem cada pas del procés.",
  "Foto de": "Fotografia de",
  "Empezar es la parte más difícil. Estamos al otro lado.": "Començar és la part més difícil. Som a l'altra banda.",
  "Elige el canal que te resulte más cómodo para consultar disponibilidad y modalidades de atención.": "Tria el canal que et resulti més còmode per consultar la disponibilitat i les modalitats d'atenció.",
  "Agendar online": "Demanar cita en línia",
  "Reserva tu primera visita": "Reserva la teva primera visita",
  "Elige día y hora directamente en nuestro calendario. La primera visita está pensada para conocernos, escucharte y orientarte sin compromiso.": "Tria el dia i l'hora directament al nostre calendari. La primera visita està pensada per conèixer-nos, escoltar-te i orientar-te sense compromís.",
  "Abrir calendario": "Obrir el calendari",
  "Email": "Correu electrònic",
  "Cuéntanos qué necesitas": "Explica'ns què necessites",
  "Si prefieres escribirnos antes, consúltanos por correo la disponibilidad y las modalidades. Por privacidad, evita enviar informes, diagnósticos u otros datos de salud por correo ordinario.": "Si prefereixes escriure'ns abans, consulta'ns per correu la disponibilitat i les modalitats d'atenció. Per privacitat, evita enviar informes, diagnòstics o altres dades de salut per correu ordinari.",
  "Teléfono": "Telèfon",
  "Hablemos por teléfono": "Parlem per telèfon",
  "Si te resulta más cómodo llamarnos, utiliza este número para consultar disponibilidad y resolver dudas generales sobre la atención.": "Si et resulta més còmode trucar-nos, utilitza aquest número per consultar la disponibilitat i resoldre dubtes generals sobre l'atenció.",
  "Llamar al": "Trucar al",
  "Modalidad": "Modalitat",
  "Atención presencial en consulta y online por videollamada. Tú eliges la opción que mejor se adapte a tu día a día.": "Atenció presencial a consulta i en línia per videotrucada. Tu tries l'opció que s'adapti millor al teu dia a dia.",
  "Confidencialidad": "Confidencialitat",
  "Toda la información compartida se trata bajo secreto profesional y según la normativa vigente de protección de datos.": "Tota la informació compartida es tracta sota secret professional i d'acord amb la normativa vigent de protecció de dades.",
  "Cuidar el cerebro es un trabajo de años, no de semanas.": "Tenir cura del cervell és una feina d'anys, no de setmanes.",
  "Los cambios cognitivos pueden tener causas muy diferentes. La valoración profesional permite comprender las necesidades de cada persona, orientar el seguimiento y proponer apoyos adaptados a su situación.": "Els canvis cognitius poden tenir causes molt diferents. La valoració professional permet comprendre les necessitats de cada persona, orientar el seguiment i proposar suports adaptats a la seva situació.",
  "Reserva cognitiva": "Reserva cognitiva",
  "Es la capacidad del cerebro de seguir funcionando bien pese al paso del tiempo o al daño. Se construye con educación, vínculos, actividad mental y estilo de vida.": "És la capacitat del cervell de continuar funcionant bé malgrat el pas del temps o el dany. Es construeix amb educació, vincles, activitat mental i estil de vida.",
  "Prevención": "Prevenció",
  "La evaluación temprana de cambios cognitivos puede ayudar a orientar el seguimiento, adaptar hábitos y valorar apoyos adecuados para cada persona.": "L'avaluació precoç dels canvis cognitius pot ajudar a orientar el seguiment, adaptar hàbits i valorar suports adequats per a cada persona.",
  "Intervención": "Intervenció",
  "Cuando ya hay un diagnóstico, ofrecemos estimulación cognitiva, orientación familiar y un acompañamiento honesto sobre qué esperar.": "Quan ja hi ha un diagnòstic, oferim estimulació cognitiva, orientació familiar i un acompanyament honest sobre què es pot esperar.",
  "Nuestro enfoque": "El nostre enfocament",
  "Trabajamos desde una mirada integradora. Combinamos la evaluación neuropsicológica con la perspectiva clínica psicológica: las personas no son solo un perfil cognitivo, son también historia, vínculos y emociones.": "Treballem des d'una mirada integradora. Combinem l'avaluació neuropsicològica amb la perspectiva clínica psicològica: les persones no són només un perfil cognitiu, també són història, vincles i emocions.",
  "En cada caso valoramos qué áreas cognitivas conviene entrenar (memoria, atención, lenguaje, funciones ejecutivas), qué hábitos pueden ajustarse (sueño, ejercicio, actividad social) y qué apoyos necesita la familia para sostener el proceso.": "En cada cas valorem quines àrees cognitives convé entrenar (memòria, atenció, llenguatge, funcions executives), quins hàbits es poden ajustar (son, exercici, activitat social) i quins suports necessita la família per sostenir el procés.",
  "Y, sobre todo, te lo contamos como es. No prometemos resultados imposibles; buscamos ayudarte a comprender qué sucede y encontrar estrategias realistas para favorecer tu bienestar.": "I, sobretot, t'ho expliquem tal com és. No prometem resultats impossibles; volem ajudar-te a comprendre què passa i a trobar estratègies realistes per afavorir el teu benestar.",
  "Hablemos de tu caso": "Parlem del teu cas",
  "Un espacio de confianza para crecer y sentirse mejor.": "Un espai de confiança per créixer i sentir-se millor.",
  "La terapia es un proceso de escucha, comprensión y acompañamiento. Ofrecemos un lugar donde cada persona pueda expresarse con libertad, comprender lo que le ocurre y encontrar herramientas para afrontar sus dificultades.": "La teràpia és un procés d'escolta, comprensió i acompanyament. Oferim un lloc on cada persona es pugui expressar amb llibertat, comprendre què li passa i trobar eines per afrontar les seves dificultats.",
  "Infantojuvenil": "Infantojuvenil",
  "Acompañamos a niños y adolescentes en momentos de dificultad emocional, cambios de comportamiento, ansiedad o baja autoestima, trabajando también con la familia cuando es necesario.": "Acompanyem infants i adolescents en moments de dificultat emocional, canvis de comportament, ansietat o baixa autoestima, treballant també amb la família quan cal.",
  "Adultos": "Adults",
  "Atendemos problemas de ansiedad, estado de ánimo, estrés, duelo, crisis vitales o falta de bienestar emocional, desde un enfoque integrador y adaptado a cada persona.": "Atenem problemes d'ansietat, estat d'ànim, estrès, dol, crisis vitals o manca de benestar emocional, des d'un enfocament integrador i adaptat a cada persona.",
  "Familia": "Família",
  "Cuando la dificultad afecta a varios miembros, ofrecemos orientación y pautas para mejorar la comunicación, el vínculo y el manejo conjunto de la situación.": "Quan la dificultat afecta diversos membres, oferim orientació i pautes per millorar la comunicació, el vincle i la gestió conjunta de la situació.",
  "Trabajamos desde una perspectiva integradora, cercana y basada en la evidencia científica. Cada proceso se adapta a la persona, a sus necesidades, a su contexto y a su momento vital.": "Treballem des d'una perspectiva integradora, propera i basada en l'evidència científica. Cada procés s'adapta a la persona, a les seves necessitats, al seu context i al seu moment vital.",
  "Entendemos la terapia como un espacio de confianza, escucha y acompañamiento. Buscamos que cada persona se sienta comprendida, que pueda nombrar lo que le pasa y que construya, junto a la terapeuta, un camino hacia el bienestar.": "Entenem la teràpia com un espai de confiança, escolta i acompanyament. Volem que cada persona se senti compresa, que pugui posar nom al que li passa i que construeixi, juntament amb la terapeuta, un camí cap al benestar.",
  "Contamos con formación específica en el abordaje de los trastornos del estado de ánimo y en psicoterapia infantojuvenil y de adultos. Nuestro objetivo es ofrecer una atención personalizada, rigurosa y sensible, acompañando con respeto a lo largo de todo el proceso.": "Tenim formació específica en l'abordatge dels trastorns de l'estat d'ànim i en psicoteràpia infantojuvenil i d'adults. El nostre objectiu és oferir una atenció personalitzada, rigorosa i sensible, acompanyant amb respecte al llarg de tot el procés.",
  "Page not found": "Pàgina no trobada",
  "La página que buscas no existe o ha cambiado de dirección.": "La pàgina que cerques no existeix o ha canviat d'adreça.",
  "Volver al inicio": "Tornar a l'inici",
  "No se ha podido cargar esta página": "No s'ha pogut carregar aquesta pàgina",
  "Se ha producido un error. Puedes volver a intentarlo o regresar al inicio.": "S'ha produït un error. Pots tornar-ho a provar o anar a l'inici.",
  "Reintentar": "Tornar-ho a provar",
  "Saltar al contenido principal": "Saltar al contingut principal",
  "Abrir menú": "Obrir el menú",
  "Cerrar menú": "Tancar el menú",
  "Navegación principal": "Navegació principal"
};

const metadata: Record<string, [string, string, string]> = {
  "/": [
    "NeuroVincle — Neuropsicología y Psicología",
    "NeuroVincle — Neuropsicologia i Psicologia",
    "Atenció de neuropsicologia i psicologia per a persones i famílies. Avaluació, intervenció i acompanyament personalitzat."
  ],
  "/sobre-nosotras": [
    "Sobre nosotras — NeuroVincle",
    "Sobre nosaltres — NeuroVincle",
    "Coneix l'equip de NeuroVincle: neuropsicologia i psicologia general sanitària amb una atenció propera i rigorosa."
  ],
  "/neuropsicologia": [
    "Neuropsicología y prevención — NeuroVincle",
    "Neuropsicologia i prevenció — NeuroVincle",
    "Avaluació neuropsicològica, estimulació cognitiva, rehabilitació i orientació a famílies."
  ],
  "/terapia-psicologica": [
    "Terapia psicológica — NeuroVincle",
    "Teràpia psicològica — NeuroVincle",
    "Psicoteràpia infantojuvenil i d'adults amb un enfocament integrador, proper i basat en l'evidència científica."
  ],
  "/contacto": [
    "Contacto — NeuroVincle",
    "Contacte — NeuroVincle",
    "Reserva una primera visita o posa't en contacte per correu electrònic o telèfon. Atenció presencial i en línia."
  ]
};

type LanguageContextValue = { language: Language; setLanguage: (next: Language) => void };
const LanguageContext = createContext<LanguageContextValue>({
  language: "es",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setCurrentLanguage] = useState<Language>("es");
  const [hydrated, setHydrated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("lang");
    let saved: string | null = null;
    try { saved = window.localStorage.getItem("neurovincle-language"); } catch {}
    setCurrentLanguage(query === "ca" || query === "es" ? query : saved === "ca" ? "ca" : "es");
    setHydrated(true);
  }, []);

  const setLanguage = (next: Language) => {
    setCurrentLanguage(next);
    try { window.localStorage.setItem("neurovincle-language", next); } catch {}
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
  };

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = language;
    const url = new URL(window.location.href);
    if (url.searchParams.get("lang") !== language) {
      url.searchParams.set("lang", language);
      window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
    }
    const details = metadata[location.pathname] ?? metadata["/"];
    document.title = language === "ca" ? details[1] : details[0];
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      const spanishDescription: Record<string, string> = {
        "/": "Atención de neuropsicología y psicología para personas y familias. Evaluación, intervención y acompañamiento personalizado.",
        "/sobre-nosotras": "Conoce al equipo de NeuroVincle: una neuropsicóloga y una psicóloga general sanitaria, con formación rigurosa y trato cercano.",
        "/neuropsicologia": "Evaluación neuropsicológica, estimulación cognitiva, rehabilitación y orientación a familias.",
        "/terapia-psicologica": "Psicoterapia infantojuvenil y de adultos con un enfoque integrador, cercano y basado en la evidencia científica.",
        "/contacto": "Reserva una primera visita o escríbenos por email. Atención presencial y online.",
      };
      description.setAttribute("content", language === "ca" ? details[2] : (spanishDescription[location.pathname] ?? spanishDescription["/"]));
    }
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", language === "ca" ? "ca_ES" : "es_ES");
  }, [language, location.pathname, hydrated]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() { return useContext(LanguageContext); }

export function useT() {
  const { language } = useLanguage();
  return (spanish: string): string => {
    if (language === "es") return spanish;
    const lookup = spanish.replace(/\s+/g, " ").trim();
    return translations[lookup] ?? spanish;
  };
}

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-border bg-background p-1" role="group" aria-label="Idioma / Llengua">
      {(["es", "ca"] as const).map((value) => (
        <button
          type="button"
          key={value}
          lang={value}
          aria-pressed={language === value}
          aria-label={value === "ca" ? "Català" : "Español"}
          onClick={() => setLanguage(value)}
          className={"min-w-9 rounded-full px-2 py-1.5 text-[11px] font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary " +
            (language === value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground")}
        >
          {value === "es" ? "ES" : "CAT"}
        </button>
      ))}
    </div>
  );
}
