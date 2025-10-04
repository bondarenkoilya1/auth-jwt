import { createRoot } from "react-dom/client";
import "./index.css";
import { Providers } from "@/app/Providers.tsx";

createRoot(document.getElementById("root")!).render(<Providers />);
