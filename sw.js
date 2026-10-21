// Deixa o site instalável no celular. Não guarda dado nenhum: só mostra um aviso quando a página abre sem internet.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response("<meta charset=utf-8><meta name=viewport content='width=device-width'><body style='font-family:system-ui;padding:24px;background:#1c1c1c;color:#dadada'><h1>Sem internet</h1><p>O Mapa do Psychology precisa de internet. Tente de novo quando a conexão voltar.</p>", { headers: { "Content-Type": "text/html; charset=utf-8" } })));
});
