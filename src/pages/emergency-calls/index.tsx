import CallsCard from '../../components/calls-card/CallsCard';
import ProvinceCard from '../../components/calls-card/ProvinceCard';
import SearchBar from '../../components/search-bar/SearchBar';
import { useState } from 'react';

export default function EmergencyCallsPage() {
    const [mode, setMode] = useState('hotline')
    const [tag, setTag] = useState('all')
    const emerCalls = [
        // กรณีเหตุด่วนเหตุร้าย
        { title: 'เหตุด่วนเหตุร้าย', phoneNumber: '191', mode: 'hotline', tag: 'p' },
        { title: 'เหตุเพลิงไหม้', phoneNumber: '199', mode: 'hotline', tag: 'p' },
        { title: 'อุบัติเหตุทางน้ำ', phoneNumber: '1996', mode: 'hotline', tag: 'p' },
        { title: 'ตำรวจท่องเที่ยว', phoneNumber: '1155', mode: 'hotline', tag: 'p' },
        { title: 'แจ้งรถหาย', phoneNumber: '1192', mode: 'hotline', tag: 'p' },
        // กรณีเจ็บป่วยฉุกเฉิน
        { title: 'สถานบันการแพทย์ฉุกเฉิน', phoneNumber: '1669', mode: 'hotline', tag: 'h' },
        { title: 'หน่วยแพทย์กู้ชีวิตวชิรพยาบาล', phoneNumber: '1554', mode: 'hotline', tag: 'h' },
        { title: 'ศูนย์เอราวัณสำนักการแพทย์', phoneNumber: '1554', mode: 'hotline', tag: 'h' },
        // กรณีเกิดอุบัติเหตุ ปัญหาจราจร
        { title: 'อุบัติเหตุบนทางด่วน', phoneNumber: '1543', mode: 'hotline', tag: 'p' },
        { title: 'ตำรวจทางหลวง', phoneNumber: '1193', mode: 'hotline', tag: 'p' },
        { title: 'บก.02 ศูนย์ควบคุมและสั่งการจราจร', phoneNumber: '1543', mode: 'hotline', tag: 'p' },
    ]

    const hospitals = [
        { name: 'โรงพยาบาลเพชรบูรณ์', phoneNumber: '056-717600', mode: 'local', type: 'h', imageUrl: '/hospitals/petchaboon.jpg' },

        { name: 'โรงพยาบาลเขาค้อ', phoneNumber: '0-5672-8059', mode: 'local', type: 'h', imageUrl: '/hospitals/khaokho.jpg' },
        { name: 'โรงพยาบาลชนแดน', phoneNumber: '056-761302', mode: 'local', type: 'h', imageUrl: '/hospitals/chondan.jpg' },
        { name: 'โรงพยาบาลน้ำหนาว', phoneNumber: '056-705793', mode: 'local', type: 'h', imageUrl: '/hospitals/namnao.jpg' },

        { name: 'โรงพยาบาลบึงสามพัน', phoneNumber: '056-731284', mode: 'local', type: 'h', imageUrl: '/hospitals/bungsampan.jpg' },
        { name: 'โรงพยาบาลวังโป่ง', phoneNumber: '056-786452', mode: 'local', type: 'h', imageUrl: '/hospitals/wangpong.jpg' },
        { name: 'โรงพยาบาลวิเชียรบุรี', phoneNumber: '056-928169', mode: 'local', type: 'h', imageUrl: '/hospitals/wichienburi.jpg' },
        { name: 'โรงพยาบาลศรีเทพ', phoneNumber: '056-799467', mode: 'local', type: 'h', imageUrl: '/hospitals/srithep.jpg' },
        { name: 'โรงพยาบาลหนองไผ่', phoneNumber: '056-781114', mode: 'local', type: 'h', imageUrl: '/hospitals/nongphai.jpg' },
        { name: 'โรงพยาบาลหล่มสัก', phoneNumber: '056-704120', mode: 'local', type: 'h', imageUrl: '/hospitals/lomsak.jpg' },
    ]

    function tagHandler(tag: string) {

        setTag(tag)
    }

    return (
        <>
            <div className="flex flex-col gap-7 mb-20 w-full">
                <button type="button" className="text-red-700 w-full hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                    ค้นหาโรงพยาบาลใกล้ฉัน
                </button>
                <div className="badges">
                    <span className={`${tag === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800 '} text-xs font-medium me-2 px-2.5 py-2 rounded cursor-pointer`} onClick={() => tagHandler('all')}>ทั้งหมด</span>
                    <span className={`${tag === 'p' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800 '} text-xs font-medium me-2 px-2.5 py-2 rounded cursor-pointer`} onClick={() => tagHandler('p')}>เหตุด่วนเหตุร้าย</span>
                    <span className={`${tag === 'h' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800 '} text-xs font-medium me-2 px-2.5 py-2 rounded cursor-pointer`} onClick={() => tagHandler('h')}>เจ็บป่วยฉุกเฉิน</span>
                </div>
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <ul className="cursor-pointer flex text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse " id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                        <li className={`text-center inline-block w-full p-4 rounded-ss-lg  hover:bg-gray-200 focus:outline-none ${mode === 'hotline' ? 'bg-gray-200' : 'bg-gray-50'}`} onClick={() => setMode('hotline')} >
                            สายด่วน
                        </li>
                        <li className={`"text-center inline-block w-full p-4 rounded-tr-lg  hover:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600" ${mode === 'local' ? 'bg-gray-200' : 'bg-gray-50'}`} onClick={() => setMode('local')}>
                            เฉพาะจังหวัดเพชรบูรณ์
                        </li>
                    </ul>

                    {
                        (mode === 'hotline') ? (
                            <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                                <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                                    <div className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                                        <CallsCard tag={tag} emerCalls={emerCalls} ></CallsCard>
                                    </div>
                                </div >
                            </div >
                        ) : (mode === 'local') ? (
                            <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                                <ProvinceCard tag={tag} hospitals={hospitals} />
                            </div >
                        ) : ''

                    }
                </div >
            </div >
        </>
    )
}