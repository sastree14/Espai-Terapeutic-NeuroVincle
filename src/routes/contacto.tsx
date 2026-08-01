import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — NeuroVincle" },
      { name: "description", content: "Reserva una primera visita o escríbenos por email. Atención presencial y online." },
      { property: "og:title", content: "Contacto — NeuroVincle" },
      { property: "og:description", content: "Reserva una primera visita o contacta por email." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contacto</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">
          Empezar es la parte más difícil. Estamos al otro lado.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Elige el canal que te resulte más cómodo. Te respondemos en menos de 48 horas laborables.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-sm border border-border bg-border px-0 md:grid-cols-2 md:mx-6">
        <div className="bg-background p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Agendar online</p>
          <h2 className="mt-3 font-serif text-2xl">Reserva tu primera visita</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Elige día y hora directamente en nuestro calendario. La primera visita está pensada para
            conocernos, escucharte y orientarte sin compromiso.
          </p>
          <a
            href="https://calendly.com/neuroespai/primera-visita"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Abrir calendario
          </a>
        </div>

        <div className="bg-background p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Email</p>
          <h2 className="mt-3 font-serif text-2xl">Cuéntanos qué necesitas</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Si prefieres escribirnos antes, mándanos un correo con tu situación. Te respondemos con
            propuestas y resolvemos tus dudas previas.
          </p>
          <a
            href="mailto:hola@neuroespai.com"
            className="mt-6 inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
          >
            hola@neuroespai.com
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl">Modalidad</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Atención presencial en consulta y online por videollamada. Tú eliges la opción que
              mejor se adapte a tu día a día.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl">Confidencialidad</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Toda la información compartida se trata bajo secreto profesional y según la normativa
              vigente de protección de datos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
