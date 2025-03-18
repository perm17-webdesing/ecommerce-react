import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/ecommerce-react/", // 👈 Asegúrate de que sea el nombre exacto de tu repositorio
})
