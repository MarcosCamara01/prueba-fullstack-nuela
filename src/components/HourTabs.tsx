import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function HourTabs() {
    return (
        <Tabs defaultValue="weekly" className="flex flex-col items-center gap-8 w-full">
            <TabsList className="w-[239px] h-12 gap-2 p-1 bg-[#F5F5F5] rounded-[10px]">
                <TabsTrigger value="weekly" className="py-2 px-4 h-10 w-28 rounded-lg">Semanal</TabsTrigger>
                <TabsTrigger value="annual" className="py-2 px-4 h-10 w-28 rounded-lg">Anual</TabsTrigger>
            </TabsList>
            <TabsContent value="weekly" className="w-full">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-[20px] p-4 h-[105px] flex flex-col justify-between">
                        <h3 className="text-sm font-medium text-[#454C52]">Horas totales</h3>
                        <span className="text-3xl font-bold	text-[#111111]">18 horas</span>
                    </div>
                    <div className="bg-white rounded-[20px] p-4 h-[105px] flex flex-col justify-between">
                        <h3 className="text-sm font-medium text-[#454C52]">Horas lectivas</h3>
                        <span className="text-3xl font-bold	text-[#111111]">18 horas</span>
                    </div>
                    <div className="bg-white rounded-[20px] p-4 h-[105px] flex flex-col justify-between">
                        <h3 className="text-sm font-medium text-[#454C52]">Horas complementarias</h3>
                        <span className="text-3xl font-bold	text-[#111111]">0 horas</span>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="annual" className="w-full">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-[20px] p-4 h-[105px] flex flex-col justify-between">
                        <h3 className="text-sm font-medium text-[#454C52]">Horas totales</h3>
                        <span className="text-3xl font-bold	text-[#111111]">440 horas</span>
                    </div>
                    <div className="bg-white rounded-[20px] p-4 h-[105px] flex flex-col justify-between">
                        <h3 className="text-sm font-medium text-[#454C52]">Horas lectivas</h3>
                        <span className="text-3xl font-bold	text-[#111111]">420 horas</span>
                    </div>
                    <div className="bg-white rounded-[20px] p-4 h-[105px] flex flex-col justify-between">
                        <h3 className="text-sm font-medium text-[#454C52]">Horas complementarias</h3>
                        <span className="text-3xl font-bold	text-[#111111]">20 horas</span>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    )
}
