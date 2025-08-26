const USAGE_KEY = 'nexusrank_usage';
const PRO_KEY = 'nexusrank_pro';
const MAX_FREE_USES = 1;

export interface UsageCounts {
  [toolId: string]: number;
}

export function getUsageCounts(): UsageCounts {
  try {
    return JSON.parse(localStorage.getItem(USAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

export function setUsageCounts(counts: UsageCounts): void {
  localStorage.setItem(USAGE_KEY, JSON.stringify(counts));
}

export function incrementUsage(toolId: string): void {
  const counts = getUsageCounts();
  counts[toolId] = (counts[toolId] || 0) + 1;
  setUsageCounts(counts);
}

export function getRemainingUses(toolId: string): number {
  const usage = getUsageCounts()[toolId] || 0;
  return Math.max(0, MAX_FREE_USES - usage);
}

export function hasUsesLeft(toolId: string): boolean {
  return getRemainingUses(toolId) > 0;
}

export function isProUser(): boolean {
  return localStorage.getItem(PRO_KEY) === 'true';
}

export function setProUser(isPro: boolean): void {
  if (isPro) {
    localStorage.setItem(PRO_KEY, 'true');
  } else {
    localStorage.removeItem(PRO_KEY);
  }
}

export function canUseTool(toolId: string): boolean {
  return isProUser() || hasUsesLeft(toolId);
}

// Pro credentials - provided after Patreon payment
export const PRO_CREDENTIALS = {
  username: 'prouser606',
  password: 'tUChSUZ7drfMkYm'
};

export const MAX_FREE_USES_LIMIT = MAX_FREE_USES;
