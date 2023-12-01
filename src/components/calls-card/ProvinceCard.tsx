export default function ProvinceCard(props: any) {
    const { tag, hospitals } = props
    console.log('provice-tag', tag)
    let filteredCalls
    if (tag === 'all') {
        filteredCalls = hospitals
    } else {
        filteredCalls = hospitals.filter((h: { type: string }) => h.type === tag)
    }
    console.log(filteredCalls.length)
    return (
        <>
            <div className="container px-5 py-6">

                {/* Card */}
                {filteredCalls.map((hospital: { name: string, phoneNumber: string, imageUrl: string }, index: number) => (
                    <div key={index} className="card grid gap-x-2 mb-6 last:mb-0" style={{ gridTemplateColumns: '4.5rem 1fr' }}>
                        <div className="image-container" style={{ height: '4.5rem' }}>
                            <img className="object-cover w-full h-full rounded" src={hospital.imageUrl} alt="" />
                        </div>
                        <div className="text-group flex justify-between w-full">
                            <div className="title">
                                <p>{hospital.name}</p>
                                <p>{hospital.phoneNumber}</p>
                            </div>

                            <div className="buttons group flex flex-start gap-2 h-12">
                                <a href={`tel:${hospital.phoneNumber}`} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}


            </div>



        </>
    )
}