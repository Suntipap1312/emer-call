import React, { ReactNode } from 'react';

interface Slot {
    children: ReactNode;
}
export default function MainLayout(props: Slot) {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center p-6">
                {props.children}
            </main>
        </>
    )
}