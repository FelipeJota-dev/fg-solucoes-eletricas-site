import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_URL = "https://wa.me/5587988128318?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20FG%20Solu%C3%A7%C3%B5es%20El%C3%A9tricas%20e%20Refrigera%C3%A7%C3%A3o%20e%20gostaria%20de%20solicitar%20um%20atendimento.";
