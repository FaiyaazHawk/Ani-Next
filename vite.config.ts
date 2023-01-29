import { defineConfig } from 'vite'
import {VitePWA} from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({ registerType: 'autoUpdate', 
    manifest: {
      name: 'My Awesome App',
      short_name: 'MyApp',
      description: 'My Awesome App description',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/public/AppImages/android/android-launchericon-192-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/public/AppImages/android/android-launchericon-512-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        }
      ]
    }}
    )],
})


