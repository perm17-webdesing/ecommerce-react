import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/ecommerce-react/", // 👈 Este debe coincidir con el nombre de tu repo en GitHub
})
