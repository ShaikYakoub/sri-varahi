export type Branch = {
  id: string;
  state: "Andhra Pradesh" | "Telangana";
  city: string;
  name: string;
  address: string;
  mapUrl: string;
  embedUrl: string;
};

export const branches: Branch[] = [
  {
    id: "ap-badvel",
    state: "Andhra Pradesh",
    city: "Badvel",
    name: "Headquarters",
    address: "1st floor, SRI VARAHI GOLD RECOVERY AND BUYERS, 8-3-33, Mydukur - Badvel Rd, beside HDFC BANK, Badvel, Andhra Pradesh 516233",
    mapUrl: "https://maps.app.goo.gl/your-badvel-map-link",
    embedUrl: "",
  },
  {
    id: "ap-markapur",
    state: "Andhra Pradesh",
    city: "Markapur",
    name: "Markapur",
    address: "2nd floor, SRI VARAHI GOLD RECOVERY AND BUYERS, markapur- clock center back side, murthy book shop upstairs, beside reading room, markapur, Andhra pradesh, pin code- 523316.",
    mapUrl: "https://maps.app.goo.gl/your-markapur-map-link",
    embedUrl: "",
  },
  {
    id: "ap-narasaraopet",
    state: "Andhra Pradesh",
    city: "Narasaraopet",
    name: "Narasaraopet",
    address: "1 st floor , SRI VARAHI GOLD RECOVERY AND BUYERS, 7-2-60, Old police station Road , market center , opposite samba siva  furniture,varavakatta, Narasaraopet, Andhra Pradesh 522601",
    mapUrl: "https://maps.app.goo.gl/your-narasaraopet-map-link",
    embedUrl: "",
  },];
