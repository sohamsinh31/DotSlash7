"use client"
import Test from '@/Components/Test/Test';
import Demo from '@/Containers/Demo';
import { Home } from '@/Containers/Home/Home';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const paths = [
    {
        path: "/",
        page: <Home />
    },
    {
        path: "/test",
        page: <Test />
    },
    {
        path: "/demo",
        page: <Demo />
}
]

export default function Slug() {
    const pathname = usePathname()
    const [currentPage, setCurrentPage] = useState<React.ReactNode | null>(null);

    useEffect(() => {
        const page = paths.find(val => val.path === pathname)?.page || null;
        setCurrentPage(page);
    }, [pathname])

    return <div style={{ minHeight: '100vh' }}>{currentPage ? currentPage : <div>Page Loading indexOR <br />404 NOT FOUD</div>}</div>;
}
