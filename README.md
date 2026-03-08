# mi-portfolio

Web personal en proceso de refactorización progresiva desde arquitectura legacy hacia arquitectura modular.

## QA

Antes de mergear cualquier PR, ejecutar:

```bash
npm run qa
```

Si aún no existe tooling completo en el repositorio, ejecutar temporalmente:

```bash
# 1) Validación de enlaces/recursos internos críticos
rg -n 'src="|href="|srcset="' index.html css/main.css scripts

# 2) Validación rápida de estado git
git status --short
```

Checklist manual obligatorio:

- Desktop smoke test.
- Mobile smoke test.
- Navegación por teclado y foco visible.
- Scroll y menú.
- Hero y About.
- Consola sin errores críticos.

Regla de trabajo:

- `1 PR = 1 objetivo = 1 área`.
