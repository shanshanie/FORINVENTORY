import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DeployedEquipments } from "./screens/DeployedEquipments";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DeployedEquipments />
  </StrictMode>,
);
