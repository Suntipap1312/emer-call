import Link from 'next/link';

export default function FooterNav() {
    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
                    {/* Home */}
                    <Link href='/' className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor">
                            <path d="m19.848 15.968-4.4-7a1 1 0 0 0-1.6-.131l-2.164 2.448L7.872 4.51A1.028 1.028 0 0 0 6.985 4a1 1 0 0 0-.871.537l-6 11.5A1 1 0 0 0 1 17.5h18a1 1 0 0 0 .847-1.532ZM12.5 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>

                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Attractions</span>
                    </Link>



                    {/* Emaergency Calls */}
                    <Link href='/emergency-calls' className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor">
                            <path stroke="currentColor" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Emergency</span>
                    </Link>


                    {/* Attractions */}
                    <Link href='/expenses' className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor">
                            <path d="m19.848 15.968-4.4-7a1 1 0 0 0-1.6-.131l-2.164 2.448L7.872 4.51A1.028 1.028 0 0 0 6.985 4a1 1 0 0 0-.871.537l-6 11.5A1 1 0 0 0 1 17.5h18a1 1 0 0 0 .847-1.532ZM12.5 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>

                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">My Expenses</span>
                    </Link>
                </div>
            </div>

        </>
    )
}