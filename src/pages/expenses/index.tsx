
import { useEffect } from 'react';
import { Chart } from 'chart.js/auto'
export default function Expenses() {
    type Categories = 'food' | 'snack' | 'hotel' | 'gas';

    useEffect(() => {
        const ctx = document.getElementById('myChart') as HTMLCanvasElement | null;
        if (ctx) {

            const myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {

                    datasets: [{
                        data: [300, 50, 100],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4
                    }],
                },

            });

            // Cleanup the chart when the component unmounts
            return () => {
                myChart.destroy();
            };
        }
    }, []);
    return (
        <>
            <div className="absolute right-0 z-20">
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Green</span>
            </div>
            <div className="container p-4 mb-8 relative flex justify-center items-center" style={{ height: '20rem' }}>
                <canvas id="myChart" width="400" height="200" />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">Total 999$</h1>
            </div>

            <section className='container mb-20'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>

                                <td className="px-6 py-4">
                                    $2999
                                </td>

                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>

                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>

                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Google Pixel Phone
                                </th>
                                <td className="px-6 py-4">
                                    Gray
                                </td>

                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple Watch 5
                                </th>
                                <td className="px-6 py-4">
                                    Red
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>

        </>
    )
}