"""Genera los CVs en español e inglés (src/assets/pdf/CV_ESP.pdf y CV_ENG.pdf).

Los textos viven en el diccionario CV de abajo: para actualizar el CV se editan ahí
y se vuelve a correr el script. Arma un HTML por idioma y lo imprime a PDF con
Chrome headless (tamaño carta).

Uso, desde la raíz del repo:
    npm run cv
    python3 cv/build_cv.py

Chrome se busca en la ruta por defecto de macOS; para usar otro navegador
basado en Chromium, definir la variable CHROME con la ruta del ejecutable.
"""
import os
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "assets" / "pdf"
CHROME = os.environ.get("CHROME", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")

PORTFOLIO = "https://alejosuarez2001.github.io/alejosuarez/"
LINKEDIN = "https://www.linkedin.com/in/alejo-ezequiel-suarez/"
CREDLY_ACE = "https://www.credly.com/badges/8b0bfc20-09ac-4eb7-b058-a96a1ad55737"
VAL = "https://validator.centrodeelearning.com/validator/"

CV = {
    "es": {
        "lang": "es",
        "role": "Desarrollador Full Stack &amp; Cloud | Estudiante de Ingeniería en Sistemas",
        "location": "CABA, Argentina",
        "sections": {
            "summary": "Resumen profesional",
            "experience": "Experiencia laboral",
            "education": "Educación",
            "certifications": "Certificaciones",
            "stack": "Stack tecnológico",
            "projects": "Proyectos",
        },
        "summary": (
            "Desarrollador Full Stack &amp; Cloud con experiencia en aplicaciones web y móviles, Google Cloud e IA "
            "aplicada, certificado como Google Cloud Associate Cloud Engineer y estudiante de Ingeniería en Sistemas de "
            "Información. Construyo productos con IA generativa, sistemas RAG y agentes, y sistemas académicos, "
            "administrativos y comerciales usados por miles de personas."
        ),
        "jobs": [
            ("Cloud Developer", "Hike · ABN Group", "May 2026 – Presente", [
                "Desarrollo de productos de IA generativa multi-tenant que integran modelos de Gemini a través de Vertex AI.",
                "Construcción de motores de generación de contenido con validación automática de resultados mediante chequeos deterministas y un modelo juez.",
                "Desarrollo de servicios serverless en Cloud Run integrados con APIs de terceros, como facturación electrónica con AFIP y Meta Marketing API.",
                "Despliegues en Compute Engine detrás de balanceadores de carga, infraestructura como código con Terraform y pruebas de concepto de migración a Google Cloud.",
            ]),
            ("Co-Founder &amp; Full Stack Developer", "ADINI", "Mar 2024 – Presente", [
                "Cofundador de una agencia de desarrollo de software: diseño y desarrollo de aplicaciones web y móviles a medida, desde el relevamiento con el cliente hasta el despliegue.",
                "Desarrollo para la UTN FRBA de un agente de IA con RAG (búsqueda híbrida en Qdrant, reranking y streaming) y un supervisor con tool-calling sobre el campus virtual.",
                "Desarrollo de sistemas de gestión y aplicaciones móviles para clientes de Argentina y México, con pasarelas de pago y suscripciones.",
                "Despliegues en Kubernetes con Helm, relevamiento de requerimientos y refinamiento de backlog con Scrum.",
            ]),
            ("Desarrollador de Software", "Universidad Tecnológica Nacional", "May 2024 – May 2026", [
                "Desarrollé el frontend del portal institucional SIA y sus módulos de alias, áreas, traducciones y difusiones masivas con colas, reintentos y seguimiento de cada envío.",
                "Desarrollé de punta a punta el sistema de investigación SICYT: modelo de dominio, motor de reglas versionado por año y notificaciones en cola.",
                "Colaboré en los servicios compartidos de la plataforma: autenticación con Keycloak, LDAP y el proxy Traefik.",
            ]),
            ("Analista Funcional", "Universidad Tecnológica Nacional", "Nov 2023 – May 2024", [
                "Relevé, documenté y testé requerimientos y funcionalidades para asegurar el correcto funcionamiento de los sistemas.",
                "Diseñé diagramas de clases, casos de uso, entidad-relación y despliegue, y detecté mejoras en sistemas existentes.",
            ]),
            ("Analista Soporte a Aplicaciones", "Universidad Tecnológica Nacional", "Ago 2022 – Nov 2023", [
                "Analicé y resolví problemáticas reportadas por los usuarios, desde la interfaz de administración o la base de datos.",
                "Elaboré consultas SQL para reportes administrativos y documenté procedimientos técnicos.",
            ]),
        ],
        "education": [
            ("Ingeniería en Sistemas de Información", "UTN FRBA", "CABA, Buenos Aires,", "2021 – Presente"),
            ("Licenciatura en Economía", "Universidad de Buenos Aires", "CABA, Buenos Aires,", "2019 – 2021"),
        ],
        "certifications": [
            ("Google Cloud Certified – Associate Cloud Engineer", "Google Cloud", "Ago 2026", CREDLY_ACE),
            ("Google Cloud Certified – Professional Cloud Developer", "Google Cloud", "En curso", None),
            ("Diplomatura en Inteligencia Artificial", "Universidad Tecnológica Nacional", "Jul 2025 – Dic 2025", VAL + "8b52819b-39e6-40a4-b715-0f94d2f83e9e"),
            ("Diplomatura en Backend Developer", "Universidad Tecnológica Nacional", "Mar 2025 – Sep 2025", VAL + "0lPvJVNjBu"),
            ("Docker y Kubernetes", "Universidad Tecnológica Nacional", "May 2025 – Jul 2025", VAL + "ehZ3aEUuLx"),
            ("Diplomatura en Python", "Universidad Tecnológica Nacional", "Jul 2023 – Feb 2024", VAL + "WozRYXyULu"),
            ("Diplomatura en Bases de Datos", "Universidad Tecnológica Nacional", "Oct 2023 – Feb 2024", VAL + "c4tLVirD2X"),
            ("Experto Universitario en Seguridad de la Información", "Universidad Tecnológica Nacional", "Mar 2023 – Sep 2023", VAL + "Y65638FNpj"),
            ("Diplomatura en Programación Web Full Stack", "Universidad Tecnológica Nacional", "Nov 2022 – May 2023", VAL + "c8rIytTLtM"),
            ("Certificación en Inglés B2", "Instituto de Cambridge", "Ene 2009 – Dic 2017", None),
        ],
        "stack": [
            ("Frontend", "HTML, CSS, JavaScript, TypeScript, React, Next.js, Astro, React Native, Expo, Tailwind CSS, shadcn/ui, Material UI, TanStack Query."),
            ("Backend e Integraciones", "Node.js, Express, Python, FastAPI, REST APIs, OpenAPI, Prisma, Sequelize, Zod, OAuth 2.0, Keycloak, BullMQ, Apps Script, pagos (Stripe, Mercado Pago, PayPal, RevenueCat)."),
            ("IA y Agentes", "Vertex AI, Gemini, Ollama, vLLM, LlamaIndex, Qdrant, Docling, RAG, tool-calling, MCP, Claude Code, Codex."),
            ("Google Cloud", "Cloud Run, Compute Engine, Cloud Build, Cloud Storage, BigQuery, Secret Manager, Cloud KMS, IAM, Firebase."),
            ("DevOps e IaC", "Docker, Kubernetes, Helm, Terraform, GitHub Actions, GitLab CI/CD, Jenkins, Traefik, Cloudflare, Grafana."),
            ("Bases de Datos", "PostgreSQL, MySQL, MongoDB, Redis, Supabase."),
        ],
        "projects": [
            ("Agente de IA “UtenIA”", "UTN FRBA · ADINI", "Ago 2025 – Presente",
             "Agente que responde con la documentación de la facultad y el campus virtual de cada estudiante, con inferencia on-premise. Desarrollé el pipeline RAG (Docling, búsqueda híbrida en Qdrant y reranking), el supervisor con tool-calling, las herramientas para Moodle y el chat con streaming."),
            ("Portal “Sistema Integrado de Aplicaciones”", "Universidad Tecnológica Nacional", "Ene 2024 – Dic 2025",
             "Portal único de la facultad con login institucional, credencial digital y recibos. Desarrollé el frontend y los módulos de alias, áreas, traducciones y difusiones masivas, con más de 3.000 difusiones enviadas."),
            ("Sistema de Investigación “SICYT”", "Universidad Tecnológica Nacional", "Ago 2025 – May 2026",
             "Proyectos de investigación y categorización de más de 500 investigadores. Desarrollé el modelo de dominio, un motor de reglas versionado por año, el trámite de categorización y las notificaciones en cola."),
            ("Sistema de Gestión “Moviltrack”", "ADINI", "Abr 2024 – Oct 2025",
             "Cotizaciones, pedidos, remisiones y cobros en un solo circuito para una empresa de México, con documentos en PDF, cargos recurrentes automáticos y tablero de rentabilidad."),
            ("Aplicación Móvil “RIP Alive”", "ADINI", "Jun 2024 – Dic 2024",
             "App para iOS y Android con datos vitales en un QR para emergencias y un legado para beneficiarios. Desarrollé la app, el backend y el panel, con suscripciones, pagos y tienda."),
        ],
    },
    "en": {
        "lang": "en",
        "role": "Full Stack &amp; Cloud Developer | Information Systems Engineering Student",
        "location": "Buenos Aires, Argentina",
        "sections": {
            "summary": "Professional summary",
            "experience": "Work experience",
            "education": "Education",
            "certifications": "Certifications",
            "stack": "Technology stack",
            "projects": "Projects",
        },
        "summary": (
            "Full Stack &amp; Cloud Developer with experience in web and mobile applications, Google Cloud and applied "
            "AI, certified as a Google Cloud Associate Cloud Engineer and studying Information Systems Engineering. "
            "I build generative AI products, RAG systems and agents, as well as academic, administrative and business "
            "systems used by thousands of people."
        ),
        "jobs": [
            ("Cloud Developer", "Hike · ABN Group", "May 2026 – Present", [
                "Development of multi-tenant generative AI products that integrate Gemini models through Vertex AI.",
                "Construction of content generation engines with automated output validation through deterministic checks and a judge model.",
                "Development of serverless services on Cloud Run integrated with third-party APIs, such as AFIP e-invoicing and the Meta Marketing API.",
                "Deployments on Compute Engine behind load balancers, infrastructure as code with Terraform and Google Cloud migration proofs of concept.",
            ]),
            ("Co-Founder &amp; Full Stack Developer", "ADINI", "Mar 2024 – Present", [
                "Co-founder of a software development agency: design and development of custom web and mobile applications, from requirements gathering to deployment.",
                "Built an AI agent for UTN FRBA with RAG (hybrid search on Qdrant, reranking and streaming) and a tool-calling supervisor over the virtual campus.",
                "Development of management systems and mobile apps for clients in Argentina and Mexico, with payment gateways and subscriptions.",
                "Kubernetes deployments with Helm, requirements gathering and backlog refinement with Scrum.",
            ]),
            ("Software Developer", "National Technological University", "May 2024 – May 2026", [
                "Developed the frontend of the SIA institutional portal and its aliases, areas, translations and mass mailing modules, with queues, retries and per-delivery tracking.",
                "Built the SICYT research system end to end: domain model, year-versioned rules engine and queued notifications.",
                "Contributed to the platform's shared services: Keycloak authentication, LDAP and the Traefik proxy.",
            ]),
            ("Functional Analyst", "National Technological University", "Nov 2023 – May 2024", [
                "Gathered, documented and tested requirements and features to ensure proper system operation.",
                "Designed class, use case, entity-relationship and deployment diagrams, and identified improvements in existing systems.",
            ]),
            ("Application Support Analyst", "National Technological University", "Aug 2022 – Nov 2023", [
                "Analyzed and resolved issues reported by users, from the admin interface or the database.",
                "Wrote SQL queries for administrative reporting and documented technical procedures.",
            ]),
        ],
        "education": [
            ("Information Systems Engineering", "UTN FRBA", "Buenos Aires,", "2021 – Present"),
            ("Bachelor’s Degree in Economics", "University of Buenos Aires", "Buenos Aires,", "2019 – 2021"),
        ],
        "certifications": [
            ("Google Cloud Certified – Associate Cloud Engineer", "Google Cloud", "Aug 2026", CREDLY_ACE),
            ("Google Cloud Certified – Professional Cloud Developer", "Google Cloud", "In progress", None),
            ("Artificial Intelligence Diploma", "National Technological University", "Jul 2025 – Dec 2025", VAL + "8b52819b-39e6-40a4-b715-0f94d2f83e9e"),
            ("Backend Developer Diploma", "National Technological University", "Mar 2025 – Sep 2025", VAL + "0lPvJVNjBu"),
            ("Docker and Kubernetes", "National Technological University", "May 2025 – Jul 2025", VAL + "ehZ3aEUuLx"),
            ("Python Diploma", "National Technological University", "Jul 2023 – Feb 2024", VAL + "WozRYXyULu"),
            ("Database Diploma", "National Technological University", "Oct 2023 – Feb 2024", VAL + "c4tLVirD2X"),
            ("University Expert in Information Security", "National Technological University", "Mar 2023 – Sep 2023", VAL + "Y65638FNpj"),
            ("Full Stack Web Development Diploma", "National Technological University", "Nov 2022 – May 2023", VAL + "c8rIytTLtM"),
            ("B2 English Certificate", "Cambridge Institute", "Jan 2009 – Dec 2017", None),
        ],
        "stack": [
            ("Frontend", "HTML, CSS, JavaScript, TypeScript, React, Next.js, Astro, React Native, Expo, Tailwind CSS, shadcn/ui, Material UI, TanStack Query."),
            ("Backend and Integrations", "Node.js, Express, Python, FastAPI, REST APIs, OpenAPI, Prisma, Sequelize, Zod, OAuth 2.0, Keycloak, BullMQ, Apps Script, payments (Stripe, Mercado Pago, PayPal, RevenueCat)."),
            ("AI and Agents", "Vertex AI, Gemini, Ollama, vLLM, LlamaIndex, Qdrant, Docling, RAG, tool calling, MCP, Claude Code, Codex."),
            ("Google Cloud", "Cloud Run, Compute Engine, Cloud Build, Cloud Storage, BigQuery, Secret Manager, Cloud KMS, IAM, Firebase."),
            ("DevOps and IaC", "Docker, Kubernetes, Helm, Terraform, GitHub Actions, GitLab CI/CD, Jenkins, Traefik, Cloudflare, Grafana."),
            ("Databases", "PostgreSQL, MySQL, MongoDB, Redis, Supabase."),
        ],
        "projects": [
            ("AI Agent “UtenIA”", "UTN FRBA · ADINI", "Aug 2025 – Present",
             "Agent that answers with the university's documentation and each student's virtual campus data, with on-premise inference. I built the RAG pipeline (Docling, hybrid search on Qdrant and reranking), the tool-calling supervisor, the Moodle tools and the streaming chat."),
            ("“Integrated Application System” Portal", "National Technological University", "Jan 2024 – Dec 2025",
             "The university's single portal with institutional login, digital ID and payslips. I developed the frontend and the aliases, areas, translations and mass mailing modules, with over 3,000 mailings sent."),
            ("“SICYT” Research System", "National Technological University", "Aug 2025 – May 2026",
             "Research projects and categorization of over 500 researchers. I built the domain model, a year-versioned rules engine, the categorization workflow and queued notifications."),
            ("“Moviltrack” Management System", "ADINI", "Apr 2024 – Oct 2025",
             "Quotes, orders, delivery notes and payments in a single flow for a Mexican company, with PDF documents, automatic recurring charges and a profitability dashboard."),
            ("“RIP Alive” Mobile App", "ADINI", "Jun 2024 – Dec 2024",
             "iOS and Android app with vital data in a QR code for emergencies and a legacy for beneficiaries. I built the app, the backend and the admin panel, with subscriptions, payments and a store."),
        ],
    },
}

CSS = """
@page { size: Letter; margin: 0.45in 0.6in; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 10pt; color: #333; line-height: 1.32; }
a { color: inherit; }
h1 { text-align: center; font-weight: 400; font-size: 24pt; margin: 0 0 6pt; color: #222; }
.role { text-align: center; text-transform: uppercase; font-size: 10.5pt; margin: 0 0 10pt; }
.contact { text-align: center; background: #f3f3f3; padding: 6pt 0; margin: 0 -0.15in 4pt; font-size: 10pt; }
.contact a { color: #1155cc; }
h2 { text-align: center; text-transform: uppercase; font-weight: 400; font-size: 11pt; color: #222;
     border-bottom: 1.3pt solid #222; padding-bottom: 3pt; margin: 10pt 0 7pt; break-after: avoid; }
.summary { margin: 0; }
.entry { break-inside: avoid; margin-bottom: 7pt; }
.head { display: flex; justify-content: space-between; align-items: baseline; gap: 12pt; }
.head .date { font-weight: 700; font-size: 9pt; white-space: nowrap; }
ul { margin: 3pt 0 0; padding-left: 26pt; }
li { margin-bottom: 2pt; padding-left: 2pt; }
li::marker { content: "●  "; font-size: 9.5pt; }
.row { display: flex; justify-content: space-between; gap: 12pt; margin-bottom: 4pt; break-inside: avoid; }
.row .date { font-weight: 700; font-size: 9pt; white-space: nowrap; }
.row .place { font-size: 9pt; white-space: nowrap; }
.stack p { margin: 0 0 4pt; }
.project p { margin: 3pt 0 0; }
"""


def render(c):
    s = c["sections"]
    parts = [f'<!doctype html><html lang="{c["lang"]}"><head><meta charset="utf-8"><title>Alejo Ezequiel Suarez</title><style>{CSS}</style></head><body>']
    parts.append('<h1>Alejo Ezequiel Suarez</h1>')
    parts.append(f'<p class="role">{c["role"]}</p>')
    parts.append(
        f'<p class="contact">(011) 2303-3147 | alejo.2001.suarez@gmail.com | {c["location"]} | '
        f'<a href="{PORTFOLIO}">Portfolio</a> | <a href="{LINKEDIN}">LinkedIn</a></p>'
    )
    parts.append(f'<h2>{s["summary"]}</h2><p class="summary">{c["summary"]}</p>')

    parts.append(f'<h2>{s["experience"]}</h2>')
    for title, org, date, bullets in c["jobs"]:
        items = "".join(f"<li>{b}</li>" for b in bullets)
        parts.append(
            f'<div class="entry"><div class="head"><span><b>{title.upper()}</b> | {org}</span>'
            f'<span class="date">{date}</span></div><ul>{items}</ul></div>'
        )

    parts.append(f'<h2>{s["education"]}</h2>')
    for degree, school, place, years in c["education"]:
        parts.append(
            f'<div class="row"><span><b>{degree},</b> {school}</span>'
            f'<span class="place">{place} <b>{years}</b></span></div>'
        )

    parts.append(f'<h2>{s["certifications"]}</h2>')
    for name, issuer, date, url in c["certifications"]:
        label = f'<a href="{url}"><b>{name},</b></a>' if url else f"<b>{name},</b>"
        parts.append(f'<div class="row"><span>{label} {issuer}</span><span class="date">{date}</span></div>')

    parts.append(f'<h2>{s["stack"]}</h2><div class="stack">')
    for group, items in c["stack"]:
        parts.append(f"<p><b>{group}:</b> {items}</p>")
    parts.append("</div>")

    parts.append(f'<h2>{s["projects"]}</h2>')
    for title, org, date, text in c["projects"]:
        parts.append(
            f'<div class="entry project"><div class="head"><span><b>{title}</b> | {org}</span>'
            f'<span class="date">{date}</span></div><p>{text}</p></div>'
        )

    parts.append("</body></html>")
    return "".join(parts)


def print_pdf(html_path, pdf_path, profile):
    subprocess.run(
        [
            CHROME,
            "--headless=new",
            "--disable-gpu",
            f"--user-data-dir={profile}",
            "--no-pdf-header-footer",
            f"--print-to-pdf={pdf_path}",
            html_path.as_uri(),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


if __name__ == "__main__":
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        for key, name in [("es", "CV_ESP"), ("en", "CV_ENG")]:
            html_path = tmp / f"{name}.html"
            html_path.write_text(render(CV[key]), encoding="utf-8")
            print_pdf(html_path, OUT / f"{name}.pdf", tmp / "chrome-profile")
            print(OUT / f"{name}.pdf")
