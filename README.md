# NeuroVincle — web pública

Web de NeuroVincle, construida con **TanStack Start + React + Vite** y publicada mediante Vercel.

## Desarrollo

El gestor de dependencias es **Bun**. El archivo `bun.lock` se mantiene versionado para instalaciones reproducibles.

```bash
bun install --frozen-lockfile
bun run dev
bun run build
```

El repositorio está integrado con Lovable. No reescribir el historial publicado, de acuerdo con `AGENTS.md`.

## Infraestructura

- Código fuente: este repositorio (rama `main`).
- Proyecto Vercel: `espai-terapeutic-neuro-vincle`.
- Dominio principal: `https://neurovincle.es`.
- `www.neurovincle.es` redirige al dominio principal.
- `public/robots.txt` y `public/sitemap.xml` incluyen las cinco páginas públicas actuales.
- Datos de contacto centralizados en `src/lib/site-config.ts`.

## Pendientes antes de promocionar la web

1. **Confirmar con las responsables los datos de contacto y la reserva:** actualmente el correo y Calendly usan `neuroespai`. No sustituirlos por direcciones inventadas; verificar su titularidad y correcto funcionamiento.
2. Confirmar identidad legal del prestador, domicilio profesional, NIF, datos de colegiación, denominación y habilitaciones de cada servicio. No publicar textos legales con datos hipotéticos.
3. Elaborar y validar aviso legal, privacidad y política de cookies (si procede); revisar proveedores, formularios y tratamientos de datos de salud con las responsables.
4. Revisar las biografías, especialidades, afirmaciones clínicas y el número de integrantes del equipo antes de hacer campañas.
5. Verificar funcionamiento real del dominio, certificados HTTPS y flujos de reserva/correo.
6. Comprobar plan de hosting y condiciones de uso comercial. Revisar Search Console solo tras el lanzamiento aprobado.

## Seguridad

No publicar credenciales, variables `.env`, expedientes clínicos ni datos personales de pacientes en GitHub. Las páginas informativas no deben recopilar historiales ni diagnósticos; cualquier gestión clínica debe evaluarse aparte desde el punto de vista de seguridad y RGPD.
