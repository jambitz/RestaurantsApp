declare module 'react-native-config' {
  interface Env {
    API_URL: string;
    API_KEY: string;
    GOOGLE_MAPS_URL: string;
    GOOGLE_MAPS_API_KEY: string;
  }

  const BuildConfig: Env;

  export default BuildConfig;
}
