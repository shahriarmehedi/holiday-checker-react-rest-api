import React, { useEffect } from 'react';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format';
import Header from '../../Header/Header';

const EnglandHolydays = () => {


    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: 'selection'
        }
    ]);

    console.log(dateRange[0]);

    const [holidayInfo, setHolidayInfo] = useState([]);

    useEffect(() => {
        fetch('https://www.gov.uk/bank-holidays.json')
            .then(res => res.json())
            .then(data => setHolidayInfo(data))

    }, [])



    const engHolidays = holidayInfo["england-and-wales"]?.events;


    const filteredDate = engHolidays?.filter(data => data.date >= format(dateRange[0].startDate, 'yyyy-MM-dd') && data.date <= format(dateRange[0].endDate, 'yyyy-MM-dd'));


    // console.log(filteredDate);





    return (
        <>
            <Header></Header>
            <div className="container mx-auto py-20 overflow-x-auto">
                <h2 className="text-3xl font-bold pt-10 pb-14">Get Bank Holidays info for: England & Wales</h2>
                <div className="">
                    <div className=" hidden lg:block text-xl">
                        <DateRangePicker
                            onChange={item => setDateRange([item.selection])}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={dateRange}
                            direction="horizontal" />
                    </div>
                    <div className="block lg:hidden w-5/6">
                        <DateRangePicker
                            onChange={item => setDateRange([item.selection])}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={dateRange}
                            direction="vertical" />
                    </div>
                </div>
                <div className="w-5/6 mx-auto">
                    {filteredDate?.length === 0 && <div>
                        <h2 className="p-10 mt-14 bg-green-400 rounded-lg text-2xl font-semibold mx-auto text-white">No holidays found for this date selection <br /> <span className=" text-base text-green-100 font-normal italic">Try selcting different timestamp mentioned or select custom date range to find holidays</span> </h2>
                    </div>}
                </div>
                <div>
                    {filteredDate?.length > 0 && <h2 className="text-2xl font-bold pt-14 pb-10">Holidays Found: {filteredDate?.length} </h2>}

                    <div class="overflow-x-auto">
                        <table class="table w-full">
                            {
                                filteredDate?.length > 0 && <thead>
                                    <tr className="bg-green-400 text-xl text-white h-14">
                                        <th>Name of the holiday</th>
                                        <th>Notes</th>
                                        <th>Date</th>
                                        <th>Bunting</th>
                                    </tr>
                                </thead>
                            }
                            {filteredDate?.map(data => <tbody key={data?.date}>
                                <tr>
                                    <td className="font-bold pt-3">{data?.title}</td>
                                    <td className="font-bold">{data?.notes}</td>
                                    <td className="font-bold">  {data?.date}</td>
                                    <td className="font-bold">
                                        {
                                            data?.bunting === true ? <h2>Available</h2> : <h2>Not Available</h2>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                            )}
                        </table>
                    </div>



                </div>
            </div>
        </>
    );
};

export default EnglandHolydays;