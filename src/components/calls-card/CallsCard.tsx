export default function CallsCard(props: { tag: string, emerCalls: any }) {
    const { tag, emerCalls } = props
    console.log('tag', tag)
    let filteredCalls;
    if (tag === 'all') {
        filteredCalls = emerCalls
    } else {
        filteredCalls = emerCalls.filter((emer: any) => emer.tag === tag)
    }

    return (
        <>
            {
                filteredCalls.map((call: any, index: number) => (
                    <div className="flex flex-col items-center justify-start" key={index}>
                        <a href={`tel:${call.phoneNumber}`}>
                            <dt className="flex gap-2 justify-center items-center mb-2 text-3xl font-extrabold">
                                <svg className="w-[22px] h-[22px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z" />
                                </svg>
                                <span className='text-3xl'>{call.phoneNumber}</span>
                            </dt>
                        </a>
                        <dd className="text-center text-gray-500 dark:text-gray-400">{call.title}</dd>
                    </div>
                ))
            }

        </>
    )
}