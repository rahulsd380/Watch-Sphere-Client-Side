import { useEffect, useState } from "react";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { MdAddShoppingCart } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { FaArrowsTurnRight } from "react-icons/fa6";


const MyTickets = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    //Getting ticket data from local storage
    const [ticketData, setTicketData] = useState([null]);
    useEffect(() => {
        // Load data from local storage when the component mounts
        const storedData = localStorage.getItem("bookingData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setTicketData(parsedData);
        }
      }, []);


    return (
        <div>
            <button onClick={toggleDrawer}>
            <div>
            <IoTicket className="text-gray-300"></IoTicket>
          </div>
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className=''
            >
                <div className="p-3 bg-gray-800 h-full">
                    <h1 className="text-xl text-blue-400 font-semibold border-b-2 pb-2 mb-5">Your Tickets ({ticketData.length})</h1>

                            {
                                ticketData.map(ticket => 
                                    <div key={ticket?.name} className="flex justify-between items-center pb-3 border-blue-400 border-b mb-6">
                    <div className="flex gap-3 items-center">
                    <div className="w-14 rounded-md">
                        <img className="rounded-md" src={ticket?.image} alt="" />
                    </div>
                    <div>
                    <h1 className="text-sm font-semibold text-gray-200">{ticket?.movieName}</h1>
                    <p className="text-xs text-gray-300">{ticket?.day}</p>
                    </div>
                    </div>
                    <button data-tip="View Ticket" className="text-blue-400 text-2xl rounded-md font-semibold p-2 text-center flex items-center gap-3 tooltip"> <FaArrowsTurnRight></FaArrowsTurnRight></button>
                    </div>
                    )
                            }
                </div>
            </Drawer>
        </div>
    );
};

export default MyTickets;