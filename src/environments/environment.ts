export const environment = {
  production: false,
  linkLocalPage: process.env['NG_APP_LINK_LOCAL_PAGE'] || '',
  apiUrl: process.env['NG_APP_API_URL'] || '',
  apiUrlParams: process.env['NG_APP_API_URL_PARAMS'] || '',
  sessionSeconds: Number(process.env['NG_APP_SESSION_SECONDS']) || 3600,
  sessionAlertSeconds: Number(process.env['NG_APP_SESSION_ALERT_SECONDS']) || 3600,
  urlCatalogs: 'assets/data/',
  timeToRervalidateADO: Number(process.env['NG_APP_TIME_RERVALIDATE_ADO']) || 10000,
  keySite: process.env['NG_APP_KEY_SITE'] || '',
  key: process.env['NG_APP_KEY'] || '',
};
