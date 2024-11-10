
import {ABeeZee, Abhaya_Libre, Instrument_Sans, Inter, Italiana,IBM_Plex_Serif} from 'next/font/google';

export const italiana=Italiana({
    weight:'400',
    subsets:['latin'],
    display:'swap',
});
export const instrumentSans = Instrument_Sans({
    weight: ['400', '700'], // Customize weights as needed
    subsets: ['latin'],
    display: 'swap', // Helps with font loading for better UX
  });

  export const abhayaLibre = Abhaya_Libre({
    weight:['400','500','600','700','800'],
    subsets:['latin'],
    display:'swap',
  });
  export const aBeeZee=ABeeZee({
    weight:'400',
    subsets:['latin'],
    display:'swap',
});
export const inter=Inter({
  weight:'400',
  subsets:['latin'],
  display:'swap',
});
export const ibmPlexSerif=IBM_Plex_Serif({
  weight:'400',
  subsets:['latin'],
  display:'swap',
});