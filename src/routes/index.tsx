import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-consulta.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neuroespai — Neuropsicología y Psicología Clínica" },
      { name: "description", content: "Consulta de neuropsicología y psicología clínica. Evaluación, prevención y terapia con honestidad, transparencia y vocación." },
      { property: "og:title", content: "Neuroespai — Neuropsicología y Psicología Clínica" },
      { property: "og:description", content: "Evaluación cognitiva, prevención del deterioro y acompañamiento terapéutico. Presencial y online." },
    ],
  }),
  component: Home,
});

const valores = [
  {
    titulo: "Escucha",
    texto:
      "Cada persona tiene una historia única. Antes de intervenir, dedicamos el tiempo necesario a comprender tu situación, tus necesidades y aquello que es importante para ti. Creemos que una buena terapia empieza escuchando.",
  },
  {
    titulo: "Rigor científico",
    texto:
      "Nuestro trabajo se basa en la evidencia científica y en una evaluación rigurosa. Seleccionamos las herramientas y tratamientos más adecuados para cada caso, siempre desde un enfoque profesional y actualizado.",
  },
  {
    titulo: "Cercanía",
    texto:
      "Queremos ofrecer un espacio donde puedas sentirte cómodo, escuchado y libre de juicios. La confianza y la relación terapéutica son la base para construir un proceso de cambio.",
  },
  {
    titulo: "Atención personalizada",
    texto:
      "No entendemos la psicología como un conjunto de soluciones estándar. Cada intervención se adapta a la persona, a su contexto y a sus objetivos, respetando siempre su ritmo y necesidades.",
  },
];

const servicios = [
  "Evaluación neuropsicológica",
  "Estimulación cognitiva",
  "Psicología clínica",
  "Acompañamiento familiar",
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:py-28">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Neuropsicología · Psicología clínica
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-6xl">
              Cuidar la mente <em className="text-primary not-italic">hoy</em>, para sostenerla mañana.
            </h1>
            <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-muted-foreground md:text-lg whitespace-pre-line">
              Un espacio de atención psicológica para niños, adolescentes y adultos, donde trabajamos desde una perspectiva cercana, individualizada y basada en la evidencia científica.{"\n\n"}
              También ofrecemos servicios de evaluación y rehabilitación neuropsicológica para ayudar a recuperar y potenciar las funciones cognitivas y mejorar la autonomía en la vida cotidiana.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/neuroespai/primera-visita"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Reservar primera visita
              </a>
              <Link
                to="/servicios"
                className="inline-flex items-center text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Ver servicios →
              </Link>
            </div>
          </div>

          <figure className="relative">
            <img
              src={heroImg}
              alt="Consulta de neuropsicología con luz natural"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-[0_30px_60px_-30px_rgba(40,30,20,0.35)]"
            />
            <figcaption className="mt-3 text-xs italic text-muted-foreground">
              Un espacio sereno para escuchar y pensar contigo.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Valores */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Nuestros valores</p>
            <h2 className="mt-4 font-serif text-3xl italic font-light leading-tight tracking-tight text-foreground md:text-4xl">
              Los principios que guían nuestra forma de acompañarte.
            </h2>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v) => (
              <div key={v.titulo} className="border-t border-foreground/20 pt-6">
                <h3 className="font-serif text-xl">{v.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Servicios</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Acompañamos cada etapa, desde la prevención hasta el tratamiento.
            </h2>
          </div>
          <Link
            to="/servicios"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Ver todos los servicios →
          </Link>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {servicios.map((s) => (
            <article key={s.titulo} className="bg-background p-8">
              <h3 className="font-serif text-xl">{s.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">
          ¿Quieres hablar con nosotras?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          La primera visita es un espacio para escucharte, entender tu situación y plantearte un
          camino claro. Sin compromiso.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://calendly.com/neuroespai/primera-visita"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Reservar primera visita
          </a>
          <a
            href="mailto:hola@neuroespai.com"
            className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
          >
            Escribir por email
          </a>
        </div>
      </section>
    </div>
  );
}
