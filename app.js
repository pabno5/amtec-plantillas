/* =============================================
   AMTEC – Plantillas de Gestión  |  app.js
   ============================================= */

// ─── DATOS DE FORMULARIOS ────────────────────────────────────────────────────
const FORMS = {
  // ── MESA DE AYUDA ──────────────────────────────────────────────────────────
  mesa: {
    label: "MESA DE AYUDA",
    tag: "MESA",
    forms: {
      "falla_arroba": {
        title: "FALLA @",
        fields: [
          { id: "motivo", label: "MOTIVO", type: "text", required: true },
          { id: "ticket", label: "TICKET", type: "number", required: true },
          { id: "anexos", label: "ANEXOS (FOTO)", type: "file", required: true, accept: "image/*" }
        ]
      },
      "falla_tv": {
        title: "FALLA DE TV",
        fields: [
          { id: "motivo", label: "MOTIVO", type: "text", required: true },
          { id: "ticket", label: "TICKET", type: "number", required: true },
          { id: "anexos", label: "ANEXOS (FOTO)", type: "file", required: true, accept: "image/*" }
        ]
      },
      "falla_arroba_tv": {
        title: "FALLA @ + TV",
        fields: [
          { id: "motivo", label: "MOTIVO", type: "text", required: true },
          { id: "ticket", label: "TICKET", type: "number", required: true },
          { id: "anexos", label: "ANEXOS (FOTO)", type: "file", required: true, accept: "image/*" }
        ]
      },
      "cambio_contrasena": {
        title: "CAMBIO DE CONTRASENA",
        fields: [
          { id: "ticket", label: "TICKET", type: "number", required: true },
          { id: "nueva_contrasena", label: "NUEVA CONTRASENA", type: "password", required: true, full: true },
          { id: "anexos", label: "ANEXOS (FOTO)", type: "file", required: true, accept: "image/*" }
        ]
      }
    }
  },

  // ── TECNICO AMTEC ──────────────────────────────────────────────────────────
  tecnico: {
    label: "TECNICO AMTEC",
    tag: "TEC",
    forms: {
      "unificacion": {
        title: "UNIFICACION",
        fields: [
          {
            id: "tipo", label: "TIPO", type: "select", required: true,
            options: ["UNIFICACION", "CUENTA Y ASIGNACION", "TRASLADO + UNIFICACION", "TRASLADO"]
          },
          {
            id: "instalacion", label: "INSTALACION", type: "select", required: true,
            options: ["SOLO @", "SOLO TV", "@ Y TV"]
          },
          {
            id: "ciudad", label: "CIUDAD", type: "select", required: true,
            options: ["NOBSA", "SOGAMOSO", "PAIPA"]
          },
          { id: "zona", label: "ZONA", type: "text", required: true },
          {
            id: "pon", label: "PON", type: "select", required: true,
            options: ["INESTABLE", "ESTABLE"]
          },
          { id: "ticket", label: "TICKET", type: "number", required: true },
          { id: "precinto", label: "PRECINTO", type: "number", required: true },
          { id: "cliente", label: "CLIENTE", type: "text", required: true },
          { id: "serial_instalado", label: "SERIAL EQUIPO INSTALADO", type: "text", required: true },
          { id: "serial_retirado", label: "SERIAL EQUIPO RETIRADO", type: "text", required: true },
          { id: "nombre_red", label: "NOMBRE RED", type: "text", required: true },
          { id: "contrasena", label: "CONTRASENA", type: "password", required: true }
        ]
      },
      "cuenta_asignacion": {
        title: "CUENTA Y ASIGNACION",
        fields: [
          {
            id: "tipo", label: "TIPO", type: "select", required: true,
            options: ["UNIFICACION", "CUENTA Y ASIGNACION", "TRASLADO + UNIFICACION", "TRASLADO"]
          },
          {
            id: "instalacion", label: "INSTALACION", type: "select", required: true,
            options: ["SOLO @", "SOLO TV", "@ Y TV"]
          },
          {
            id: "ciudad", label: "CIUDAD", type: "select", required: true,
            options: ["NOBSA", "SOGAMOSO", "PAIPA"]
          },
          { id: "zona", label: "ZONA", type: "text", required: true },
          {
            id: "pon", label: "PON", type: "select", required: true,
            options: ["INESTABLE", "ESTABLE"]
          },
          { id: "ticket", label: "TICKET", type: "number", required: true },
          { id: "precinto", label: "PRECINTO", type: "number", required: true },
          { id: "cliente", label: "CLIENTE", type: "text", required: true },
          { id: "serial_instalado", label: "SERIAL EQUIPO INSTALADO", type: "text", required: true },
          { id: "nombre_red", label: "NOMBRE RED", type: "text", required: true },
          { id: "contrasena", label: "CONTRASENA", type: "password", required: true }
        ]
      },
      "traslado_unificacion": {
        title: "TRASLADO + UNIFICACION",
        fields: [
          {
            id: "tipo", label: "TIPO", type: "select", required: true,
            options: ["UNIFICACION", "CUENTA Y ASIGNACION", "TRASLADO + UNIFICACION", "TRASLADO"]
          },
          {
            id: "instalacion", label: "INSTALACION", type: "select", required: true,
            options: ["SOLO @", "SOLO TV", "@ Y TV"]
          },
          {
            id: "ciudad", label: "CIUDAD", type: "select", required: true,
            options: ["NOBSA", "SOGAMOSO", "PAIPA"]
          },
          { id: "zona", label: "ZONA", type: "text", required: true },
          {
            id: "pon", label: "PON", type: "select", required: true,
            options: ["INESTABLE", "ESTABLE"]
          },
          { id: "ticket", label: "TICKET", type: "number", required: true },
          { id: "precinto", label: "PRECINTO", type: "number", required: true },
          { id: "cliente", label: "CLIENTE", type: "text", required: true },
          { id: "serial_instalado", label: "SERIAL EQUIPO INSTALADO", type: "text", required: true },
          { id: "nombre_red", label: "NOMBRE RED", type: "text", required: true },
          { id: "contrasena", label: "CONTRASENA", type: "password", required: true }
        ]
      },
      "traslado": {
        title: "TRASLADO",
        fields: [
          {
            id: "tipo", label: "TIPO", type: "select", required: true,
            options: ["UNIFICACION", "CUENTA Y ASIGNACION", "TRASLADO + UNIFICACION", "TRASLADO"]
          },
          {
            id: "instalacion", label: "INSTALACION", type: "select", required: true,
            options: ["SOLO @", "SOLO TV", "@ Y TV"]
          },
          {
            id: "ciudad", label: "CIUDAD", type: "select", required: true,
            options: ["NOBSA", "SOGAMOSO", "PAIPA"]
          },
          { id: "zona", label: "ZONA", type: "text", required: true },
          {
            id: "pon", label: "PON", type: "select", required: true,
            options: ["INESTABLE", "ESTABLE"]
          },
          { id: "ticket", label: "TICKET", type: "number", required: true },
          { id: "precinto", label: "PRECINTO", type: "number", required: true },
          { id: "cliente", label: "CLIENTE", type: "text", required: true },
          { id: "serial_instalado", label: "SERIAL EQUIPO INSTALADO", type: "text", required: true },
          { id: "nombre_red", label: "NOMBRE RED", type: "text", required: true },
          { id: "contrasena", label: "CONTRASENA", type: "password", required: true }
        ]
      }
    }
  },

  // ── SERVICIOS TECNICO AMTEC ────────────────────────────────────────────────
  servicios: {
    label: "SERVICIOS TECNICO AMTEC",
    tag: "SERV",
    forms: {
      "asignacion_equipo": {
        title: "ASIGNACION DE EQUIPO",
        fields: [
          {
            id: "motivo", label: "MOTIVO", type: "select", required: true,
            options: ["MEJORAMIENTO DE PLAN", "VELOCIDAD CONTRATADA", "BLOQUEO", "REPETIDOR", "OTRO"]
          },
          { id: "ticket", label: "TICKET", type: "number", required: true },
          { id: "cliente", label: "CLIENTE", type: "text", required: true },
          {
            id: "ciudad", label: "CIUDAD", type: "select", required: true,
            options: ["NOBSA", "SOGAMOSO", "PAIPA"]
          },
          { id: "zona", label: "ZONA", type: "text", required: true },
          { id: "serial_instalado", label: "SERIAL EQUIPO INSTALADO", type: "text", required: true },
          { id: "serial_retirado", label: "SERIAL EQUIPO RETIRADO", type: "text", required: true },
          {
            id: "pon", label: "PON", type: "select", required: true,
            options: ["INESTABLE", "ESTABLE"]
          },
          { id: "nombre_red", label: "NOMBRE RED", type: "text", required: true },
          { id: "contrasena", label: "CONTRASENA", type: "password", required: true },
          { id: "tecnico", label: "TECNICO", type: "text", required: true },
          { id: "anexos", label: "ANEXOS (FOTO)", type: "file", required: true, accept: "image/*" }
        ]
      },
      "falla_tv": {
        title: "FALLA DE TV",
        fields: [
          { id: "motivo", label: "MOTIVO", type: "text", required: true },
          { id: "ticket", label: "TICKET", type: "number", required: true },
          { id: "cliente", label: "CLIENTE", type: "text", required: true },
          {
            id: "ciudad", label: "CIUDAD", type: "select", required: true,
            options: ["NOBSA", "SOGAMOSO", "PAIPA"]
          },
          { id: "zona", label: "ZONA", type: "text", required: true },
          { id: "serial_instalado", label: "SERIAL EQUIPO INSTALADO", type: "text", required: true },
          { id: "tecnico", label: "TECNICO", type: "text", required: true },
          { id: "anexos", label: "ANEXOS (FOTO)", type: "file", required: false, accept: "image/*" }
        ]
      },
      "falla_arroba": {
        title: "FALLA @",
        fields: [
          { id: "motivo", label: "MOTIVO", type: "text", required: true },
          { id: "ticket", label: "TICKET", type: "number", required: true },
          { id: "cliente", label: "CLIENTE", type: "text", required: true },
          {
            id: "ciudad", label: "CIUDAD", type: "select", required: true,
            options: ["NOBSA", "SOGAMOSO", "PAIPA"]
          },
          { id: "zona", label: "ZONA", type: "text", required: true },
          { id: "serial_instalado", label: "SERIAL EQUIPO INSTALADO", type: "text", required: true },
          { id: "nombre_red", label: "NOMBRE RED", type: "text", required: true },
          { id: "contrasena", label: "CONTRASENA", type: "password", required: true },
          { id: "tecnico", label: "TECNICO", type: "text", required: true },
          { id: "anexos", label: "ANEXOS (FOTO)", type: "file", required: false, accept: "image/*" }
        ]
      },
      "falla_paginas_vpn": {
        title: "FALLA PAGINAS O VPN",
        fields: [
          { id: "motivo", label: "MOTIVO", type: "text", required: true },
          { id: "ticket", label: "TICKET", type: "number", required: true },
          { id: "cliente", label: "CLIENTE", type: "text", required: true },
          {
            id: "ciudad", label: "CIUDAD", type: "select", required: true,
            options: ["NOBSA", "SOGAMOSO", "PAIPA"]
          },
          { id: "zona", label: "ZONA", type: "text", required: true },
          { id: "serial_instalado", label: "SERIAL EQUIPO INSTALADO", type: "text", required: true },
          { id: "link_pagina", label: "LINK PAGINA", type: "text", required: false },
          { id: "nombre_red", label: "NOMBRE RED", type: "text", required: true },
          { id: "contrasena", label: "CONTRASENA", type: "password", required: true },
          { id: "tecnico", label: "TECNICO", type: "text", required: true },
          { id: "anexos", label: "ANEXOS (FOTO)", type: "file", required: false, accept: "image/*" }
        ]
      }
    }
  }
};

// ─── ESTADO ───────────────────────────────────────────────────────────────────

let currentCategory = null;
let currentFormKey  = null;
let cameraStreams   = {};
let cameraCaptures  = {};

// ─── LÓGICA DE SELECCIÓN ──────────────────────────────────────────────────────

function onCategoriaChange() {
  const catKey = document.getElementById("categoria").value;
  const formSelectorBlock = document.getElementById("form-selector-block");
  const formContainer     = document.getElementById("form-container");
  const outputBlock       = document.getElementById("output-block");

  // Ocultar partes inferiores
  formContainer.classList.add("hidden");
  outputBlock.classList.add("hidden");

  if (!catKey) {
    formSelectorBlock.classList.add("hidden");
    return;
  }

  currentCategory = catKey;
  const cat = FORMS[catKey];

  // Poblar el select de formularios
  const sel = document.getElementById("formulario");
  sel.innerHTML = '<option value="">— Elige un formulario —</option>';
  Object.entries(cat.forms).forEach(([key, form]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = form.title;
    sel.appendChild(opt);
  });

  formSelectorBlock.classList.remove("hidden");
}

function onFormularioChange() {
  const formKey = document.getElementById("formulario").value;
  const formContainer = document.getElementById("form-container");
  const outputBlock   = document.getElementById("output-block");

  outputBlock.classList.add("hidden");

  if (!formKey) {
    formContainer.classList.add("hidden");
    return;
  }

  currentFormKey = formKey;
  const cat  = FORMS[currentCategory];
  const form = cat.forms[formKey];

  // Cabecera del formulario
  document.getElementById("form-tag").textContent   = cat.tag;
  document.getElementById("form-title").textContent = form.title;

  // Construir campos
  const grid = document.getElementById("fields-grid");
  grid.innerHTML = "";

  form.fields.forEach(field => {
    if (field.type === "file") {
      // Los inputs de archivo se omiten en la generación de texto pero se renderizan
      grid.appendChild(buildFileField(field));
    } else {
      grid.appendChild(buildField(field));
    }
  });

  formContainer.classList.remove("hidden");
  formContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── CONSTRUCTORES DE CAMPOS ──────────────────────────────────────────────────

function buildField(field) {
  const group = document.createElement("div");
  group.className = "field-group" + (field.full ? " full-width" : "");

  const label = document.createElement("label");
  label.className = "field-label";
  label.htmlFor   = "field_" + field.id;

  const labelText = document.createTextNode(field.label);
  label.appendChild(labelText);

  if (field.required) {
    const dot = document.createElement("span");
    dot.className = "required-dot";
    label.appendChild(dot);
  } else {
    const tag = document.createElement("span");
    tag.className   = "optional-tag";
    tag.textContent = "opcional";
    label.appendChild(tag);
  }

  group.appendChild(label);

  let input;

  if (field.type === "select") {
    input = document.createElement("select");
    const emptyOpt = document.createElement("option");
    emptyOpt.value = "";
    emptyOpt.textContent = "Seleccionar...";
    input.appendChild(emptyOpt);

    field.options.forEach(opt => {
      const o = document.createElement("option");
      o.value = opt;
      o.textContent = opt;
      input.appendChild(o);
    });
  } else {
    input = document.createElement("input");
    input.type = field.type || "text";
    input.placeholder = field.placeholder || "";
  }

  input.id   = "field_" + field.id;
  input.name = field.id;
  if (field.required) input.required = true;

  group.appendChild(input);
  return group;
}

function buildFileField(field) {
  const group = document.createElement("div");
  group.className = "field-group" + (field.full ? " full-width" : "");

  const label = document.createElement("label");
  label.className   = "field-label";
  label.htmlFor     = "field_" + field.id;
  label.textContent = field.label;

  if (!field.required) {
    const tag = document.createElement("span");
    tag.className   = "optional-tag";
    tag.textContent = "opcional";
    label.appendChild(tag);
  }

  group.appendChild(label);

  const input = document.createElement("input");
  input.type   = "file";
  input.id     = "field_" + field.id;
  input.name   = field.id;
  input.accept = field.accept || "*/*";
  input.multiple = false;

  const preview = document.createElement("div");
  preview.className = "file-preview-container";
  preview.dataset.for = input.id;

  input.addEventListener("change", () => {
    preview.innerHTML = "";

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    if (!file.type.startsWith("image/")) {
      const msg = document.createElement("span");
      msg.className = "file-preview-message";
      msg.textContent = "El archivo no es una imagen.";
      preview.appendChild(msg);
      return;
    }

    const img = document.createElement("img");
    img.className = "file-preview";
    img.alt = "Vista previa";
    img.src = URL.createObjectURL(file);

    img.onload = () => URL.revokeObjectURL(img.src);

    preview.appendChild(img);
  });

  group.appendChild(input);
  group.appendChild(preview);

  return group;
}

// ─── SUBMIT ───────────────────────────────────────────────────────────────────

function handleSubmit(e) {
  e.preventDefault();

  const cat  = FORMS[currentCategory];
  const form = cat.forms[currentFormKey];

  // Generar texto de plantilla
  const lines = [
    ` *${cat.label.toUpperCase()} — ${form.title.toUpperCase()}*`,
    "─".repeat(34),
  ];

  form.fields.forEach(field => {
    if (field.type === "file") return; // omitir archivos
    const el = document.getElementById("field_" + field.id);
    if (!el) return;
    const val = el.value.trim() || (field.required ? "(pendiente)" : "—");
    lines.push(`*${field.label}:* ${val}`);
  });

  lines.push("─".repeat(34));

  const output = lines.join("\n");
  const outputText  = document.getElementById("output-text");
  const outputBlock = document.getElementById("output-block");

  outputText.textContent = output;
  outputBlock.classList.remove("hidden");
  outputBlock.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── RESET ─────────────────────────────────────────────────────────────────

function resetForm() {
  document.getElementById("dynamic-form").reset();
  document.getElementById("output-block").classList.add("hidden");
}

// ─── COPIAR ────────────────────────────────────────────────────────────────

function copyOutput() {
  const text = document.getElementById("output-text").textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector(".btn-copy");
    btn.textContent = "✓ Copiado";
    btn.style.color = "#4ecdc4";
    setTimeout(() => {
      btn.textContent = "Copiar";
      btn.style.color = "";
    }, 2000);
  });
}