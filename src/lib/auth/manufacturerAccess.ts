import type { PersonaId } from "@/types/personas";

export const MANUFACTURER_ROLE: PersonaId = "manufacturer";

export function hasManufacturerRole(roles: PersonaId[]): boolean {
  return roles.includes(MANUFACTURER_ROLE);
}

export function hasAnyRole(roles: PersonaId[]): boolean {
  return roles.length > 0;
}
