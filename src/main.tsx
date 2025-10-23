import { createRoot } from "react-dom/client";
import "./index.css";
import { Providers } from "@/app/Providers.tsx";
import "./lib/i18n";

createRoot(document.getElementById("root")!).render(<Providers />);
