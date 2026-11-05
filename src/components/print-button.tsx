"use client";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <Button size="sm" variant="outline" className="cursor-pointer gap-1.5" onClick={() => window.print()}>
      <Printer className="size-4" aria-hidden />
      Print or save as PDF
    </Button>
  );
}
