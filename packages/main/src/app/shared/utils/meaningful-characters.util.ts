/**
 * Counts "meaningful" characters in free-text fields (Message, Project Details,
 * Comments, Description, Notes, Requirements, ...): leading/trailing whitespace
 * is trimmed and runs of internal whitespace are collapsed to a single space
 * before counting, so padding a short message with spaces cannot satisfy a
 * minimum-length check.
 */
export function countMeaningfulCharacters(value: string | null | undefined): number {
  if (!value) {
    return 0;
  }
  return value.trim().replace(/\s+/g, ' ').length;
}
