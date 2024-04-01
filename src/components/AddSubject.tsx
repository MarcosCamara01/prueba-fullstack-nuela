import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export function AddSubject() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-[#635BFF] flex gap-2 py-[10px] px-4 text-white items-center rounded-lg text-sm">
                    <Image
                        alt="Plus"
                        width={20}
                        height={20}
                        src="/plus.svg"
                        className="w-5 h-5"
                    />
                    Añadir Asignatura
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[576px] border border-[#ECECEC] gap-8 rounded-2xl p-8">
                <DialogHeader>
                    <DialogTitle>Añadir asignatura</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="asignatura" className="text-sm font-normal text-[#121212]">
                            Seleccione la asignatura
                        </label>
                        <Select>
                            <SelectTrigger className="w-full text-sm font-normal text-[#A5A5A5]">
                                <SelectValue placeholder="Matemáticas" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Matemáticas">Matemáticas</SelectItem>
                                    <SelectItem value="Francés">Francés</SelectItem>
                                    <SelectItem value="Física y Química">Física y Química</SelectItem>
                                    <SelectItem value="Lengua Castellana y Literatura">Lengua Castellana y Literatura</SelectItem>
                                    <SelectItem value="Cultura Clásica">Cultura Clásica</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="tipo" className="text-sm font-normal text-[#121212]">
                            Tipo de asignatura
                        </label>
                        <Select>
                            <SelectTrigger className="w-full text-sm font-normal text-[#A5A5A5]">
                                <SelectValue placeholder="Obligatoria" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Obligatoria">Obligatoria</SelectItem>
                                    <SelectItem value="Optativa">Optativa</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="Curso" className="text-sm font-normal text-[#121212]">
                            Curso
                        </label>
                        <Select>
                            <SelectTrigger className="w-full text-sm font-normal text-[#A5A5A5]">
                                <SelectValue placeholder="1º de Bachillerato" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="2º de Bachillerato">2º de Bachillerato</SelectItem>
                                    <SelectItem value="1º de Bachillerato">1º de Bachillerato</SelectItem>
                                    <SelectItem value="4º ESO">4º ESO</SelectItem>
                                    <SelectItem value="3º ESO">3º ESO</SelectItem>
                                    <SelectItem value="2º ESO">2º ESO</SelectItem>
                                    <SelectItem value="1º ESO">1º ESO</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="Grupo" className="text-sm font-normal text-[#121212]">
                            Grupo
                        </label>
                        <Select>
                            <SelectTrigger className="w-full text-sm font-normal text-[#A5A5A5]">
                                <SelectValue placeholder="A" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="A">A</SelectItem>
                                    <SelectItem value="B">B</SelectItem>
                                    <SelectItem value="C">C</SelectItem>
                                    <SelectItem value="D">D</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="Horas" className="text-sm font-normal text-[#121212]">
                            Horas
                        </label>
                        <Select>
                            <SelectTrigger className="w-full text-sm font-normal text-[#A5A5A5]">
                                <SelectValue placeholder="3.5" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="3.5">3.5</SelectItem>
                                    <SelectItem value="4">4</SelectItem>
                                    <SelectItem value="4.5">4.5</SelectItem>
                                    <SelectItem value="5">5</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="Espacio" className="text-sm font-normal text-[#121212]">
                            Espacio
                        </label>
                        <Select>
                            <SelectTrigger className="w-full text-sm font-normal text-[#A5A5A5]">
                                <SelectValue placeholder="1º Bach - Grupo A" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="1º Bach - Grupo A">1º Bach - Grupo A</SelectItem>
                                    <SelectItem value="1º Bach - Grupo B">1º Bach - Grupo B</SelectItem>
                                    <SelectItem value="2º Bach - Grupo A">2º Bach - Grupo A</SelectItem>
                                    <SelectItem value="2º Bach - Grupo B">2º Bach - Grupo B</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose className="bg-[#635BFF] rounded-lg py-3.5 px-5 text-sm text-white font-medium">
                        Añadir asignatura
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
