export function getAppName() {
  return process.env.Name || process.env.NAME || '';
}

export function getAppVersion() {
  return process.env.Version || process.env.VERSION || '0.0.0';
}
