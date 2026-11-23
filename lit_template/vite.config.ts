import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(env.PORT) || 5000;

  return {
    server: {
      port,
      strictPort: false,
    },
    preview: {
      port,
      strictPort: false,
    },
  };
});
