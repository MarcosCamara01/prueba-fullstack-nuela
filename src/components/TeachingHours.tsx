import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenu
} from "@/components/ui/dropdown-menu";

const subjects = [
    {
        id: crypto.randomUUID(),
        name: "Matemáticas",
        type: "Obligatoria",
        course: "1º Bachillerato",
        group: "B",
        weekHours: "5 h",
        regularSpace: "1º Bach - Grupo B"
    },
    {
        id: crypto.randomUUID(),
        name: "Matemáticas",
        type: "Obligatoria",
        course: "2º Bachillerato",
        group: "C",
        weekHours: "5 h",
        regularSpace: "2º Bach - Grupo C"
    },
    {
        id: crypto.randomUUID(),
        name: "Física y Química",
        type: "Obligatoria",
        course: "1º Bachillerato",
        group: "B",
        weekHours: "4 h",
        regularSpace: "1º Bach - Grupo B"
    },
    {
        id: crypto.randomUUID(),
        name: "Francés",
        type: "Optativa",
        course: "4º ESO",
        group: "C",
        weekHours: "2 h",
        regularSpace: "2º Bach - Grupo C"
    },
]

export function TeachingHours() {
    return (
        <div className="border border-[#ECECEC] rounded-2xl">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[180px] text-[#A5A5A5] font-normal">Nombre</TableHead>
                        <TableHead className="text-[#A5A5A5] font-normal">Tipo</TableHead>
                        <TableHead className="text-[#A5A5A5] font-normal">Curso</TableHead>
                        <TableHead className="text-[#A5A5A5] font-normal">Grupo</TableHead>
                        <TableHead className="text-[#A5A5A5] font-normal">Horas semana</TableHead>
                        <TableHead className="text-[#A5A5A5] font-normal">Espacio regular</TableHead>
                        <TableHead className="text-right text-[#A5A5A5] font-normal">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {subjects.map((subject) => (
                        <TableRow key={subject.id} className="bg-white text-[#5E5E5E]">
                            <TableCell>{subject.name}</TableCell>
                            <TableCell>{subject.type}</TableCell>
                            <TableCell>{subject.course}</TableCell>
                            <TableCell>{subject.group}</TableCell>
                            <TableCell>{subject.weekHours}</TableCell>
                            <TableCell>{subject.regularSpace}</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild className="pr-4">
                                        <button>
                                            <svg
                                                data-testid="geist-icon"
                                                height="16"
                                                strokeLinejoin="round"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                style={{ color: 'currentColor' }}
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4 8C4 8.82843 3.32843 9.5 2.5 9.5C1.67157 9.5 1 8.82843 1 8C1 7.17157 1.67157 6.5 2.5 6.5C3.32843 6.5 4 7.17157 4 8ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM13.5 9.5C14.3284 9.5 15 8.82843 15 8C15 7.17157 14.3284 6.5 13.5 6.5C12.6716 6.5 12 7.17157 12 8C12 8.82843 12.6716 9.5 13.5 9.5Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            <span className="sr-only">Actions</span>
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                            <button
                                                className='w-full text-left text-[#635BFF] font-medium'
                                            >
                                                Ver
                                            </button>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <button
                                                className='w-full text-left text-[#635BFF] font-medium'
                                            >
                                                Editar
                                            </button>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <button
                                                className='w-full text-left text-[#FB3640] font-medium'
                                            >
                                                Eliminar
                                            </button>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
