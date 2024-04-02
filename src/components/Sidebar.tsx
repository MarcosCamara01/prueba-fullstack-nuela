import React from 'react';
import Image from "next/image";

const Sidebar = () => {
    const menuItems = [
        { text: 'Inicio', icon: '/logo.webp' },
        { text: 'Horarios', icon: '/clock.svg' },
        { text: 'Profesores', icon: '/teacher.svg' },
        { text: 'Familias', icon: '/family.svg' },
        { text: 'Espacios', icon: '/cube.svg' },
        { text: 'Asignaturas', icon: '/book.svg' },
        { text: 'Notificaciones', icon: '/bell.svg' },
        { text: 'Settings', icon: '/settings.svg' }
    ];

    return (
        <div className="min-h-screen min-w-[256px] bg-white">
            <nav className="py-8 px-4 flex flex-col gap-10 sticky top-0">
                <div className="flex items-center justify-between h-[36px] rounded-lg py-1 px-2">
                    <div className='p-1 rounded-lg flex gap-2 items-center'>
                        <Image
                            alt="Logo"
                            width={24}
                            height={24}
                            src="/tajamar.webp"
                            className="w-6 h-6 rounded-md border-[0.2px] border-gray-400"
                        />
                        <span className='text-sm font-medium'>
                            Tajamar
                        </span>
                    </div>
                    <div className='w-6 h-6 bg-gradient-to-b from-[#F5F5F5] to-[#ECECEC] rounded-full flex items-center justify-center relative text-[#5E5E5E] text-sm font-medium'>
                        J
                        <div className='w-2.5 h-2.5 absolute top-[16px] left-[16px] bg-[#7CC731] rounded-full border-2 border-white' />
                    </div>
                </div>
                <ul className='flex flex-col gap-1'>
                    {menuItems.map((item, index) => (
                        <li key={index} className={`cursor-pointer py-1.5 px-3 rounded-lg transition-all hover:bg-[#F6F6F6] ${index === 0 && "bg-[#F6F6F6]"}`}>
                            <div className="flex gap-3 items-center">
                                <Image
                                    alt={item.text}
                                    width={16}
                                    height={16}
                                    src={item.icon}
                                    className="w-4 h-4"
                                />
                                <span className='text-sm'>{item.text}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;
