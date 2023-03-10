import { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom"
import { useTripContext } from "../context/tripContext";
import "../assets/AsideMenu.css"
import { CgArrowsExchangeAltV, CgMenu, CgTime, CgCreditCard  } from "react-icons/cg";
import { GiKickScooter} from "react-icons/gi";
import { HiQuestionMarkCircle, HiOutlineShieldCheck } from "react-icons/hi2";
import {useClientContext} from "../context/clientDataContext"
import { SlSettings } from "react-icons/sl";
import Logout from "./Logout";


const AsideMenu= ()=>  {
    const {bookState:{isBooked}} = useTripContext()
    const [toggle, setToggle]= useState(false)
    const { getUserData, userData, getClientData, clientData } = useClientContext();

    useLayoutEffect ( () => {
        const getContext = async () => {
        await getUserData();
        await getClientData();
    }; 
    getContext();
    }, [toggle])

    
    const handleToggle=()=>{
        setToggle(!toggle)
    }

        return(
            <div className={`AsideMenu-div ${toggle && "isActive"}`}>
                <CgMenu className={`AsideMenu-icon--Menu ${toggle && "isActive"}`} onClick={handleToggle} />
                {isBooked && <h2 className="AsideMenu-h2 AsideMenu-h2--booked">Scooter Reservada</h2> }
                <div className={`AsideMenu-div--Background ${toggle && "isActive" }`} onClick={handleToggle}>
                    </div>
                 <div className={`AsideMenu ${toggle && "isActive" }`}>
                    <h2 className="AsideMenu-h2">Hey {userData?.user_name}</h2>
                    <div className="AsideMenu-div--header">
                        {/* <Link to="/kilometros" className="AsideMenu-Link--headericon"> */}
                            <div className="AsideMenu-div-headericon">
                            <CgArrowsExchangeAltV/>
                            <h4 className="AsideMenu-h4 AsideMenu-h4--header">Kilometros</h4>
                            </div>
                        {/* </Link> */}
                        {/* <Link to="/trayectos" className="AsideMenu-Link--headericon"> */}
                        <div className="AsideMenu-div-headericon">
                            <GiKickScooter />
                            <h4 className="AsideMenu-h4 AsideMenu-h4--header">{clientData?.no_trips} Trayectos</h4>
                        </div>
                        {/* </Link> */}

                    </div>
                    <Link to="/home/all-trips" className="AsideMenu-link">
                    <div className="AsideMenu-div--link"> <CgTime className="AsideMenu-icon" />
                        <h4 className="AsideMenu-h4">Historial</h4> </div>
                     </Link> 
                    <Link to="/home/forma_pago" className="AsideMenu-link">

                    <div className="AsideMenu-div--link"><CgCreditCard className="AsideMenu-icon" />
                            <p className="AsideMenu-h4">Forma de Pago</p></div>
                         </Link>
                    {/* <Link to="/ayuda" className="AsideMenu-link"> */}
                    <div className="AsideMenu-div--link"><HiQuestionMarkCircle className="AsideMenu-icon" />
                            <h4 className="AsideMenu-h4">Ayuda</h4></div>
                    {/* </Link> */}
                    {/* <Link to="/seguridad" className="AsideMenu-link"> */}
                    <div className="AsideMenu-div--link"><HiOutlineShieldCheck className="AsideMenu-icon"/>
                        <h4 className="AsideMenu-h4">Centro de Seguridad</h4></div>
                    {/* </Link> */}
                    {/* <Link to="/ajustes" className="AsideMenu-link"> */}
                    <div className="AsideMenu-div--link"><SlSettings className="AsideMenu-icon" />
                        <h4 className="AsideMenu-h4">Ajustes</h4></div>
                    {/* </Link> */}

                    <Logout/>
            
                </div>
          
            </div>
        )


}

export default AsideMenu