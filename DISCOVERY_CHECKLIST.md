# Checklist de descubrimiento SEO e IA

## Antes de desplegar

1. Ejecutar `npm run build`.
2. Confirmar que termina con `Discovery validation passed`.
3. Revisar cambios de precios, fechas, datos de contacto y rutas en `site.config.mjs`.
4. No editar manualmente `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt` ni `public/ai/*`: se generan durante el build.

## Después de desplegar

Ejecutar contra el dominio publicado:

```bash
npm run validate:live -- https://www.theboxcontainerdesign.com
```

El comando comprueba las 14 rutas, canonical, robots, metadatos duplicados, JSON-LD, los siete recursos de descubrimiento y un 404 real.

Comprobar que estas URLs responden con estado HTTP 200 y contenido de texto legible:

- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`
- `/llms-full.txt`
- `/ai/company.md`
- `/ai/services.md`
- `/ai/guides.md`

Solicitar una URL inexistente y confirmar que responde con estado HTTP 404, no con una portada y estado 200.

## Validación externa

1. Probar la portada, una página comercial y un artículo en [Schema.org Validator](https://validator.schema.org/).
2. Probar el gimnasio y los artículos en [Google Rich Results Test](https://search.google.com/test/rich-results).
3. En Google Search Console:
   - enviar `https://www.theboxcontainerdesign.com/sitemap.xml`;
   - inspeccionar la portada, la landing de venta, el gimnasio y un artículo;
   - confirmar que Google ve canonical, contenido renderizado y datos estructurados;
   - solicitar indexación después del primer despliegue de estos cambios.
4. Revisar durante las semanas posteriores los informes de indexación y resultados enriquecidos.

## Seguimiento para motores de IA

- Comprobar en registros del hosting si `/llms.txt`, `/llms-full.txt` y `/ai/*.md` reciben solicitudes.
- No interpretar la mera descarga de `llms.txt` como mejora de posicionamiento o citación.
- Mantener las afirmaciones importantes visibles también en HTML; los archivos para IA son complementarios.
- Revisar trimestralmente enlaces, fuentes, servicios y precios orientativos.

## Al actualizar contenido

- Modificar primero `site.config.mjs`.
- Actualizar a la vez el texto visible si cambia un precio, servicio, fecha o fuente.
- Cambiar `dateModified` solo cuando exista una revisión material del artículo.
- Volver a ejecutar `npm run build` antes de desplegar.
