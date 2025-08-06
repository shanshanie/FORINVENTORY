import { PrinterIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const DeployedEquipments = (): JSX.Element => {
  // Navigation buttons data
  const navigationButtons = [
    {
      text: "ADD EXISTING EQUIPMENT",
      alt: "Add EXISTING",
    },
    {
      text: "EDIT EQUIPMENT",
      alt: "Edit EQUIPMENT",
    },
    {
      text: "RETURN EQUIPMENT",
      alt: "Return EQUIPMENT",
    },
    {
      text: "VIEW EQUIPMENT",
      alt: "View EQUIPMENT",
    },
  ];

  return (
    <div className="bg-transparent grid justify-items-center w-full min-h-screen">
      <div className="flex w-full h-full">
        {/* Sidebar */}
        <aside className="bg-[#160365] w-[230px] flex flex-col gap-6 p-6">
          {navigationButtons.map((button, index) => (
            <Button
              key={index}
              variant="outline"
              className="bg-[#49ff43] hover:bg-[#3ae034] text-[#160365] font-bold h-16 rounded-md border-none"
            >
              {button.text}
            </Button>
          ))}
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center p-6 gap-6">
            <div className="w-24 h-24">
              <img
                className="w-full h-full object-cover"
                alt="Logo"
                src="/image-12.png"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-[#160365] text-4xl tracking-tight">
                INVENTORY MANAGEMENT SYSTEM
              </h1>
              <div className="h-1 bg-[#170366] w-full mt-1"></div>

              <h2 className="font-black text-[#160365] text-3xl tracking-tight mt-2">
                DEPLOYED EQUIPMENTS
              </h2>
              <div className="h-1 bg-[#49ff43] w-full mt-1"></div>
            </div>

            <div className="ml-auto">
              <Input
                placeholder="Search Keyword"
                className="w-64 border-[#160365] border-2"
              />
            </div>
          </header>

          {/* Main content area */}
          <Card className="flex-1 m-6 bg-[#d9d9d9] border-none">
            <CardContent className="p-0 h-full relative">
              {/* Content will go here */}

              {/* Bottom controls */}
              <div className="absolute bottom-4 left-4">
                <Button variant="ghost" className="bg-[#d9d9d9] p-2">
                  <PrinterIcon className="w-10 h-10 text-black" />
                </Button>
              </div>

              <div className="absolute bottom-4 right-4">
                <Button className="bg-[#49ff43] hover:bg-[#3ae034] text-black font-bold px-8 py-2">
                  CLOSE
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};
