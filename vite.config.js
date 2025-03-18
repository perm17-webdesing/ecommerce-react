import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: "/ecommerce-react/",
=======
  base: "/ecommerce-react/", // 👈 Este debe coincidir con el nombre de tu repo en GitHub
>>>>>>> 94c1c3a (Correcion de json vite)
})
