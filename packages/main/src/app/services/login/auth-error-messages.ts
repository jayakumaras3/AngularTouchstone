const GENERIC_LOGIN_ERROR = 'Invalid username or password.';

/**
 * Backend messages that must never reach the UI verbatim, mapped to the
 * generic message shown for any failed login. Keeps failure reasons
 * (e.g. account deactivated) from being disclosed to unauthenticated users.
 * Add new entries here as backend auth messages are identified — no backend
 * or component changes needed.
 */
const AUTH_ERROR_MESSAGE_MAP: Record<string, string> = {
  'Your account has been deactivated, contact admin.': GENERIC_LOGIN_ERROR,
};

/**
 * Maps a raw backend authentication error message to a user-facing message.
 * Messages not present in the map are returned unchanged.
 */
export function mapAuthErrorMessage(message: string): string {
  return AUTH_ERROR_MESSAGE_MAP[message] ?? message;
}
