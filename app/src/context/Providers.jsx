import ThemeModeProvider from './ThemeModeProvider';

export default function Providers({ children }) {
  return (
    <>
      <ThemeModeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeModeProvider> 
    </>
  );
}
