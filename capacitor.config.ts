import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-practice',
  webDir: 'www',
  bundledWebRuntime: false,
  server:{
    url:"http://192.168.0.11:8100"
  }
};

export default config;
