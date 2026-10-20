import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/*
 * Preview overrides are only active when the platform flag is exactly "1".
 * With the flag unset the config keeps Vite's stock behaviour (localhost only).
 */
const previewMode = process.env.BASE44_PREVIEW_MODE === '1'
const sandboxHostDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    /* The preview proxy reaches the dev server through the sandbox hostname. */
    allowedHosts:
      previewMode && sandboxHostDomain ? [`.${sandboxHostDomain}`] : [],
    watch: previewMode ? { usePolling: true, interval: 400 } : undefined,
  },
})
