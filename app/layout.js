import "./globals.css";
import CartProvider from "./CartContext";

export const metadata = {
  title: "Sticker Mania",
  description: "Tienda de stickers con Next.js 14 App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
