import { AddSubject } from "@/components/AddSubject";
import { HourTabs } from "@/components/HourTabs";
import { TeachingHours } from "@/components/TeachingHours";

export default function Home() {
  return (
    <div className="w-full h-full py-8 px-12 ">
      <div className="h-full w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl	font-medium">Profesores</h1>
          <p className="text-sm">Crea y gestiona los profesores</p>
        </div>

        <div className="w-full h-[1px] bg-[#ECECEC]" />

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <div className="w-24 h-24	flex items-center justify-center bg-gradient-to-b from-[#EAE9FE] to-[#D6D5FF] rounded-2xl">
              <span className="text-[40px] font-medium text-[#5C37EB]">MM</span>
            </div>
            <div className="flex flex-col h-24 justify-between">
              <h1 className="text-2xl	font-medium">Marta Martínez</h1>
              <p className="text-sm text-[#5E5E5E] cursor-pointer underline">profesora123@colegio.com</p>
              <p className="text-sm text-[#666666]">+34 666 555 444</p>
            </div>
          </div>
          <div className="rounded-lg">
            <button className="py-3.5 px-5 text-[#635BFF] text-sm font-medium">
              Editar
            </button>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#ECECEC]" />

        <div className="flex flex-col items-center gap-8">
          <HourTabs />

          <div className="w-full h-[1px] bg-[#ECECEC]" />

          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-6">
              <div className="flex flex-col h-10 justify-between cursor-pointer">
                <span className="font-semibold text-sm px-4 text-[#635BFF] text-center">
                  Horas lectivas
                </span>
                <div className="bg-[#635BFF] w-full h-[1px] " />
              </div>
              <div className="flex flex-col h-10 justify-between cursor-pointer">
                <span className="font-semibold text-sm px-4 text-[#666666] text-center">
                  Horas complementarias
                </span>
              </div>
            </div>

            <div className="w-full flex justify-end">
              <AddSubject />
            </div>
            
            <TeachingHours />
          </div>
        </div>
      </div>
    </div>
  );
}
