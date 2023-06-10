import { useState, useEffect, useMemo } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const BusinessHours = () => {
  const language = useSelector((state: RootState) => state.language);
  const [ businessHours, setBusinessHours ] = useState('');
  const [ isOpen, setIsOpen ] = useState(true);
  const date = useMemo(() => new Date(), []);

  
  useEffect(() => {
    const currentTime = {
      day: date.getDay(),
      hour: date.getHours(),
    };

    if(currentTime.day === 0 || currentTime.day === 6) {
      setBusinessHours(`${language.non_business_day}`);
      setIsOpen(false);
    } else if(currentTime.day === 5) {
      setBusinessHours('11AM - 5PM');
      if(currentTime.hour >=17) {
        setIsOpen(false);
      }
    } else if(currentTime.hour >= 18) {
      setIsOpen(false);
      setBusinessHours('11AM - 6PM');
    }
  }, [date, language.non_business_day]);


  return (
    <div>
      <p>{language.business_hours} : {businessHours}</p>
      <>
        { isOpen ? <p>{language.opening}</p> : <p>{language.closing}</p> }
      </>
    </div>
  )
}

export default BusinessHours