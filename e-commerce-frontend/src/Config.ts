type Config = {
    VITE_API_BASE_URL: string;
    VITE_KEYCLOAK_CLIENT_ID: string;
    VITE_KEYCLOAK_AUTHORITY: string;
    VITE_APP_WEBSOCKET_URL: string;
};

export function getConfig(): Config {
    const runtimeConfig = (window as any).RUNTIME_CONFIG || {};

    return {
        VITE_API_BASE_URL: runtimeConfig.VITE_API_BASE_URL || import.meta.env.VITE_API_BASE_URL,
        VITE_KEYCLOAK_CLIENT_ID: runtimeConfig.VITE_KEYCLOAK_CLIENT_ID || import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
        VITE_KEYCLOAK_AUTHORITY: runtimeConfig.VITE_KEYCLOAK_AUTHORITY || import.meta.env.VITE_KEYCLOAK_AUTHORITY,
        VITE_APP_WEBSOCKET_URL: runtimeConfig.VITE_APP_WEBSOCKET_URL || import.meta.env.VITE_APP_WEBSOCKET_URL,
    };
}