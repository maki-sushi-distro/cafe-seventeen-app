import React from "react";
import Header from "@/Components/Header";

export default function AuthenticatedLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            {}
            <Header />
            <main className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
